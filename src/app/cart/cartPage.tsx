'use client'
import CartCart from '@/components/cartCart'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { LuTag } from 'react-icons/lu'
import { useAppSelector } from '../store/hooks'
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import Link from 'next/link'


const CartPage = () => {

    const cartarray = useAppSelector((state) => state.cart)

    // Subtotal (Bina discount ke total) hr item ka price quantity say multiply sirf or result subtotal
    const subtotal = cartarray.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    //Total Discount nikalo (Har item ka discount × quantity)
    const totalDiscount = cartarray.reduce((acc, item) => {
        return acc + ((item.price * item.discount) / 100) * item.quantity;
    }, 0);

    // Final Total (Subtotal - Discount)
    const total = subtotal - totalDiscount;


    //hum programmatically navigate krnay kayliye  next/navigation kay userouter hook ka use krtay
    //or jb bhee yeh use krtay tw use client krna prta qynke yeh client side kaam krta
    const router = useRouter();

    //checkout pay click hotay hee yeh function chalay ga or sweet alert dikhaiga
    const handleCheckout = () => {
        //Jab cart ka length bilkul 0 ho, tab condition true hogi
        if (cartarray.length === 0) {
            //Agar cart empty hai, toh checkout na ho
            Swal.fire({
                title: 'Cart is Empty!',
                text: 'Please add items to your cart before proceeding.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0066ff',
            });
        } else {
            // Agar cart main item hai, toh checkout page pe jao
            Swal.fire({
                title: 'Proceed to Checkout?',
                text: 'Please complete your payment.',
                icon: 'info',
                confirmButtonText: 'Proceed',
                confirmButtonColor: '#0066ff',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                cancelButtonColor: '#ef4434',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Order Processing...',
                        text: 'Redirecting you to checkout.',
                        icon: 'success',
                        timer: 2000, // 1 second kay baad khud alert disappear hojaiga
                        showConfirmButton: false,
                    })
                    router.push('/checkout'); // Checkout page pe redirect hoga
                }

            });
        }
    }

    return (
        <div className='max-w-[1240px] mx-auto'>
            <p className='font-Integral font-[900] text-[40px] uppercase
     ml-3 md:ml-0 text-black'>Your cart</p>
           <div className='w-[1240px] ml-3 mx-auto mb-[15px] pt-[20px]'>
             <div className="breadcrumbs text-sm">
               <ul>
                 <li className='font-Satoshi font-[400] text-[16px] text-black/60 decoration-none'>
                   <Link href={'/'}>Home</Link></li>
     
                 <li className='font-Satoshi font-[400] text-[16px] text-black/60 capitalize'>
                   <Link href={'/cart'}>Cart</Link></li>
               </ul>
             </div>
           </div>

            <div className='flex flex-col gap-4 md:flex-row mt-[25px]'>
                {/**Cart left side*/}
                <CartCart />
                {/**column 2 */}
                <div className='w-[95%] mx-auto md:max-w-[505px] h-[458px] md:ml-[20px] rounded-[20px]
     border-[1px] border-black/10 px-[12px] md:px-[24px] py-[20px] flex flex-col justify-between'>
                    <p className='font-Satoshi font-[700] text-[24px] text-black'>Order Summary</p>

                    <div className='w-[95%] md:max-w-[457px] h-[193px] flex flex-col justify-between'>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Subtotal</p>
                            <p className='font-Satoshi font-[400] text-[20px] text-black'>${subtotal}</p>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Discount (-20%)</p>
                            <p className='font-Satoshi font-[400] text-[20px] text-[#FF3333]'>-${totalDiscount }</p>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Delivery Fee</p>
                            <p className='font-Satoshi font-[400] text-[20px] text-black'>TBD</p>
                        </div>
                        <div className="divider"></div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-Satoshi font-[400] text-[20px] text-black'>Total</p>
                            <p className='font-Satoshi font-[700] text-[24px] text-black'>${total}</p>
                        </div>
                    </div>

                    {/**input div */}
                    <div className='w-[318px] md:w-[457px] h-[48px] flex flex-row gap-[6px] md:justify-between'>
                        <div className='w-[326px] h-[48px] rounded-[62px] px-[10px] md:px-[16px] py-[12px] bg-[#F0F0F0]
          flex flex-row gap-[6px] md:gap-[12px] items-center'>
                            <LuTag style={{ color: '#00000066', fontSize: '21px' }} />
                            <input type='text' placeholder='Add promo code' className='font-Satoshi 
           font-[400] text-[16px] focus:outline-none bg-[#F0F0F0]'/>
                        </div>

                        <button className='w-[119px] h-[48px] rounded-[62px] px-[10px] md:px-[16px] py-[12px] bg-black'>
                            <p className='text-white font-Satoshi font-[500] text-[16px]'>Apply</p>
                        </button>
                    </div>

                    {/**Checkout Button*/}
                    <button onClick={handleCheckout}
                        className='w-full h-[60px] rounded-[62px] px-[40px] md:px-[54px] py-[16px]
                      bg-black flex flex-row justify-center items-center gap-[12px]'>
                        <p className='font-Satoshi font-[500] text-[16px] text-white'>Go to Checkout</p>
                        <ArrowRight color="white" strokeWidth={1.5} size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage
