'use client'
import React, { useEffect, useState } from 'react'
import Pricestar from './pricestar'
import Halfstar from './halfstar'
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

const NewArrival = () => {

  //   //The : Product[] annotation ensures TypeScript validates the array's structure
  //   const product: Product[] = [
  //     {
  //         id: 1,
  //         image: '/shirtoff.png',
  //         title: 't-shirt with tape details',
  //         description: 'This t-shirt with tape details is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  //         rating: 4.5,
  //         price: 120,
  //         discount: 0,
  //         category: 't-shirts',
  //         slug: 't-shirt-with-tape-details'
  //     },
  //     {
  //         id: 2,
  //         image: '/jeans.png',
  //         title: 'skinny fit jeans',
  //       description: 'These skinny fit jeans are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.',
  //         rating: 3.5,
  //         price: 260,
  //         discount: 20,
  //         category: 'jeans',
  //         slug: 'skinny-fit-jeans'
  //     },
  //     {
  //         id: 3,
  //         image: '/shirtoffice.png',
  //         title: 'checkered shirt',
  //       description: 'This checkered shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  //         rating: 4.5,
  //         price: 180,
  //         discount: 0,
  //         category: 'shirts',
  //         slug: 'checkered-shirt'
  //     },
  //     {
  //         id: 4,
  //         image: '/tshirt.png',
  //         title: 'sleeve striped t-shirt',
  //       description: 'This sleeve striped t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  //         rating: 4.5,
  //         price: 160,
  //         discount: 30,
  //         category: 't-shirts',
  //         slug: 'sleeve-striped-t-shirt'
  //     },
  // ];

  async function getdata() {
    const query = await client.fetch(`* [_type == 'products' && 
   title in ['Black Striped T-Shirt',
             'Skinny Fit Jeans', 'Checkered Shirt',
            'Sleeve Stripe T-Shirt']]
{
  _id,
    title,
    "imageUrl": image.asset->url,
    description,
    price,
    discountprice,
    discountpercent,
    rating,
    'slug':slug.current,
    category,
}`)
return query;
  }
  
  
  const[arrival, setArrival] = useState<any[]>([]);
  console.log(arrival);

useEffect(() => {
    // Fetch the data when the component mounts (mount means render)
    const fetchData = async () => {
      const data = await getdata(); //function ke through Sanity se data fetch hota hai.
      setArrival(data);
    };
    
    fetchData(); // Call the function to fetch data
  }, []); 
   
  return (
    <div className='mt-[90px] mb-[80px]'>
      <div className='w-[1240px] h-[660px] relative
         mx-auto'>
         <div className='w-[403px] h-[58px] flex justify-center items-center mx-auto'>
           <p className='font-Integral font-[700] text-[48px] text-black'>
            NEW ARRIVALS</p>
         </div>

        <div className='w-[1240px] h-[413px] mx-auto mt-[70px] mb-[700px] flex flex-row justify-between'>
         {arrival.map((item:any, i:number) => {
            return (
              <div key={i}>
                <Link href={`/${item.category}/${item.slug}`}>
                  <div className="w-[295px] h-[298px] z-10 rounded-[20px] bg-[#F0EEED] flex justify-center overflow-hidden">
                   <Image
                    src={item.imageUrl}
                    alt="shirt"
                    width={296}
                    height={444}
                    className='hover:scale-125 duration-500'
                   />
                  </div>
                </Link>               
                <div className="w-[295px] h-[98px] flex flex-col justify-between">
                  <p className="font-Satoshi font-[700] text-[20px] text-black capitalize">
                    {item.title}
                  </p>

                  <div className="max-w-[160px] h-[19px] flex flex-row gap-[13px] items-center">
                    <div className="max-w-[104px] h-[18.49px] flex flex-row gap-[5.31px]">
                        {/**logic lagai hai jo rating kee base pay stars generate kray gee ratibg mtlb 2 3 4 5 */}
                      {Array.from({ length: Math.floor(item.rating) }).map(
                        (_, i) => (
                          <Pricestar key={i}/>
                        )
                      )}

                      {item.rating % 1 !== 0 && <Halfstar />} {/** */}
                    </div>

                    <p className="font-Satoshi font-[400] text-[16px] text-black">
                      {item.rating}
                      <span className="font-Satoshi font-[400] text-[16px] text-[#666666]">
                        /5
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    {/**discounted price */}
                    {item.discountpercent > 0 && (
                      <p
                        className="font-Satoshi font-[700] text-[24px]
                          text-black"
                      >
                        ${item.price - (item.price * item.discountpercent) / 100}
                      </p>
                    )}
                    {/**original price*/}
                    <p
                      className={`font-Satoshi font-[700] text-[24px] 
                         ${
                           item.discountpercent > 0
                             ? "line-through decoration-2 decoration-[#666666] text-[#666666]"
                             : "text-black"
                         }`}
                    >
                      ${item.price}
                    </p>

                    {/**discount show in percentage */}
                    {
                     item.discountpercent > 0 && <div
                     className="w-[58px] h-[28px] rounded-[62px]
                     flex justify-center items-center py-[6px] px-[14px] bg-red-500 bg-opacity-10">
                      <p className="text-[#FF3333] font-Satoshi text-[12px] font-[500]">
                           -{item.discountpercent}%
                      </p>
                      </div>
                    }
                  </div>
                </div>

              </div>
            );
         })}

         <Link href={""}>
         {/**left-1/2 transform -translate-x-1/2 left-1/2 mtlb 50% yani kay element ka left edge center main ajaiga
          lekin humnay left edge hee nhi element ka center beech main lana uskayliye transform -translate-x-1/2
          ab hum element ko left-1/2 pe set karte hain, toh uska left edge container ke center pe aa jata hai.
           Lekin hum chahte hain ke element ka center container ke center pe ho. Toh translate-x-[-50%] se hum
            element ko apne width ka aadha hissa left move kar dete hain, taake element ka center exactly center ho*/}
          <div
            className="w-[218px] h-[52px] border-[1px] rounded-[62px]
            py-[16px] px-[54px] flex justify-center items-center absolute bottom-0 
            left-1/2 transform translate-x-[-50%] mb-2" 
          >
            <p className="font-Satoshi font-[500] text-[16px]">View All</p>
          </div>
        </Link>

       </div>

    </div>
    </div>
  )
}

export default NewArrival