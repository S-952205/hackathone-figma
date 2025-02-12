'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../store/hooks'
import Image from 'next/image'
import { Cart } from '../utils/types'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'


const Checkout = () => {

  const router = useRouter();

  const cart: Cart[] = useAppSelector((state) => state.cart)
  const cartarray = useAppSelector((state) => state.cart)


  // Subtotal (Bina discount ke total) hr item ka price quantity say multiply sirf or result subtotal
  const subtotal = cartarray.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  //Total Discount nikalo (Har item ka discount × quantity)
  const totalDiscount = cartarray.reduce((acc, item) => {
    return acc + ((item.price * item.discount) / 100) * item.quantity;
  }, 0);

  // Final Total (Subtotal - Discount)
  const total = subtotal - totalDiscount;


  /**Jab aap kisi field ko optional bana dete hain (using ?), iska matlab yeh hota hai ke woh 
   * field kabhi bhi ho sakti hai ya nahi bhi ho sakti. Iska use hum tab karte hain jab hum 
   * directly guarantee nahi karte ke har field hamesha error message store karega. */
  interface Errors {
    firstname?: string;
    lastname?: string;
    email?: string;
    address?: string;
    city?: string,
    phone?: string;
    zipCode?: string;
  }

  // Yeh ek object hai jo user ke form ki values ko store karega.
  // Jab form pehli baar render hota hai, toh formData state ko empty rakhte hain,
  // taake koi bhi data na ho. Matlab, koi bhi user data enter karne se pehle form blank ho,
  // aur koi unwanted ya incorrect values na ho.
  // Har key ka initial value "" rakha hai, taake jab koi input de to wo update ho sake.
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    zipCode: "",
  });

  // Jab user form submit karega, agar koi field empty hui, to errors mein message store hoga
  const [errors, setErrors] = useState<Errors>({});

  // **Juser input ayga ismain or state formdata main store hoga**
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Error hatao agar user input day mtlb agar ghlt input diya tha tw error show hua ab user input dena shuru kray tw error hatado.
    setErrors({ ...errors, [e.target.name]: "" });
  };

  /* ab bhi formData change hoga (user kuch likhega), useEffect chalega.
     useEffect sirf tabhi chalega jab formData update hoga (har render par nahi) */
  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]); // Dependency array ([formData]) batata hai ke useEffect kab chalega.


  // **Submit Button Click hone par yeh chalega**
  const handleSubmit = async (e: any) => {
    // Agar ye na likha hota, toh jaise hi tum Submit button dabaate, pura page refresh ho
    //  jata aur tumhare saare form ke values gayab ho jate
    e.preventDefault();

    //ismain agar user field khali chorta hai tw error ismain store hoga or phir seterrors errors state main errors store krayga
    let newErrors: Errors = {};

    //Har field check karta hai, jo khaali ho uska error store karta hai.
    if (!formData.firstname) newErrors.firstname = "First Name is required";
    if (!formData.lastname) newErrors.lastname = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.zipCode) newErrors.city = "City is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";

    // Agar koi error ho toh form submit hone se rokta hai.
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; //return ka matlab hai ke function execution ko wahan roka jaata hai, aur next code ko run nahi hone diya jaata.
    }

    // **Order place hotay hee yeh alert box dikhai ga sweetAlert ka**
    Swal.fire({
      title: 'Processing your order...',
      text: 'Please wait a moment ',
      icon: 'info',
      showConfirmButton: true,
      confirmButtonText: 'Proceed',
      confirmButtonColor: '#0066ff',
      showCancelButton: true,
      cancelButtonText: 'cancel',
      cancelButtonColor: '#ef4434',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success',
          text: 'Your order has been successfully processed!',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#0066ff',
        })
      }
    })

    try {
      // Step 1: Customer Create Karen
      const newCustomer = await client.create({
        _type: "customer",
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
      });
      console.log('Customer created:', newCustomer);

      // Step 2: Order Create Karen (Customer ke baad)
      const newOrder = await client.create({
        _type: "order",
        customer: {
          _type: 'reference',
          _ref: newCustomer._id, // Ab newCustomer exist karega
        },
        products: cartarray.map((item) => ({
          _key: Math.random().toString(36).substring(2, 9), // Unique key
          productName: item.title,
          price: item.discount > 0
            ? (item.price - (item.price * item.discount) / 100) * item.quantity
            : item.price * item.quantity,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        })),
        total: total,
        discount: totalDiscount,
        orderDate: new Date().toISOString(),
      });
      console.log('Order created:', newOrder);
    }
    catch (error) {
      console.log('Kuch error aaya:', error);
    }
  };

  return (
    <div
      className="max-w-[1240px] px-4 py-4 mx-auto
     mt-2 mb-4 flex"
    >

      <div className="">
      <div className='w-[450px] mx-auto ml-1 mb-[15px] mt-[40px]'>
        <div className="breadcrumbs text-sm">
          <ul>
            <li className='font-Satoshi font-[400] text-[16px] text-black/60 decoration-none'>
              <Link href={'/'}>Home</Link></li>

            <li className='font-Satoshi font-[400] text-[16px] text-black/60 capitalize'>
              <Link href={'/cart'}>Cart</Link></li>

            <li className='font-Satoshi font-[400] text-[16px] text-black/60 capitalize'>
              <Link href={'/Checkout'}>Checkout</Link></li>
          </ul>
        </div>
      </div>
        <h1 className="text-3xl text-black font-Satoshi font-[400] mb-6">
          Order Summery
        </h1>
        {cart.length >= 1 &&
          cart.map((item, i) => {
            return (
              <div key={i} className="max-w-[450px] flex flex-col">
                {/**Image */}
                <div className="w-[450px] flex flex-row gap-3 items-start">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className=""
                  />

                  {/**Title and Price */}
                  <div className="flex flex-col gap-[2px]">
                    <div className=" w-[350px] justify-between flex flex-row items-center">
                      <h1 className="text-[20px] text-black font-Satoshi font-[500]">
                        {item.title}
                      </h1>
                      <h1 className="text-[20px] text-black font-Satoshi font-[500]">
                        $
                        {item.discount > 0
                          ? (item.price - (item.price * item.discount) / 100) * item.quantity
                          : item.price * item.quantity
                        }
                      </h1>
                    </div>
                    <div className='flex items-center gap-2'>
                      <p className="text-black/60 font-Satoshi">
                        Color: {item.color}
                      </p>
                      <p className="text-black/60 font-Satoshi">
                        Size: {item.size}
                      </p>
                    </div>

                    <p className="text-black/60 font-Satoshi">
                      QTY:
                      <span
                        className="ml-1
                    text-black/60 font-Satoshi"
                      >
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" w-[450px]">
                  <div className="divider mt-2 mb-2"></div>
                </div>
              </div>
            );
          })}
        <div className="w-[450px] flex flex-row justify-between">
          <p className="text-[20px] font-Satoshi font-[500] text-black">
            Total:
          </p>
          <span className="text-[20px] font-Satoshi font-[500] text-black">
            ${total}
          </span>
        </div>
      </div>

      {/**Billing Section */}
      <div className="grow ml-10 bg-slate-100 shadow-md p-4">
        <h1 className="text-3xl font-Satoshi font-[500] text-black text-left mb-6">
          Billing Information
        </h1>

        <div>
          {/**Checkout Form**/}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/**Name Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder='Enter your first name'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {/**Errors ko input field ke neeche show kardiya*/}
              {errors.firstname && (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-Satoshi font-medium">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder='Enter your last name'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>

            {/**Email Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            {/**City Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder='Enter your city'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>

            {/**Address Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder='Enter your address'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/**Phone Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                className="w-[50%] font-Satoshi p-2 border focus:border-sky-500 focus:outline-none rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/**Zip Code Input** */}
            <div>
              <label className="block text-base font-Satoshi font-medium">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder='Enter your zip code'
                className="w-[50%] font-Satoshi p-2 border rounded focus:border-sky-500 focus:outline-none"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode}</p>
              )}
            </div>

            {/**Submit Button**/}
            <button
              type="submit"
              className="w-[100%] bg-sky-500 hover:bg-sky-700 text-base font-Satoshi text-white p-3"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout
