'use client'
import React, { useEffect, useState } from 'react'
import Pricestar from './pricestar'
import Halfstar from './halfstar'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export interface Product {
  id: number;
  image?: string[] | StaticImageData | undefined | any;
  title: string;
  rating: number;
  description: string
  price: number;
  discount: number;
  category: string;
  slug: string;
}

//data ko fetch kiya sanity database say grog query say query krkay
async function gettopsells() {
  const query = await client.fetch(`* [_type == 'products' && 
   title in ['Vertical Striped Shirt',
             'COURAGE GRAPHIC T-SHIRT', 'LOOSE FIT BERMUDA SHORTS',
            'Classic Black Straight-Leg Jeans']]
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

const Topselling = () => {

   // State to store fetched data <any[]> means kisi bhee type ka data store hoskta 
  const [topsells, setTopsells] = useState<any[]>([]); //empty array shuru main ([])

  //ab ye component pehli baar render hota hai, useEffect chalega aur data
  //fetch karne ka kaam shuru karega
  useEffect(() => {
    // Fetch the data when the component mounts (mount means render)
    const fetchData = async () => {
      const data = await gettopsells(); //function ke through Sanity se data fetch hota hai.
      setTopsells(data);
    };
    
    fetchData(); // Call the function to fetch data
  }, []); 

  return (
    <div className='mt-[50px] mb-[100px]'>
      <div className='w-[1240px] h-[660px] relative
         mx-auto'>
        <div className='w-[403px] h-[58px] flex justify-center items-center mx-auto'>
          <p className='font-Integral font-[700] text-[48px] text-black'>TOP SELLING</p>
        </div>

        <div className='w-[1240px] h-[413px] mx-auto mt-[70px] mb-[700px] flex flex-row justify-between'>
          {topsells.map((item:any, i:number) => {
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
                         ${item.discountpercent > 0
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

export default Topselling
