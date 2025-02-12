'use client'
import { BreadcrumbWithCustomSeparator } from '@/components/breadcrumb'
import Filter from '@/components/filter'
import Filterarrow from '@/components/filterarrow'
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Downarrow from '@/components/downarrow'
import Pricestar from '@/components/pricestar'
import Image from 'next/image'
import Halfstar from '@/components/halfstar'
import Pagination from '@/components/pagination'
import { client } from '@/sanity/lib/client';


const Category = ({ params }: { params: { category: string } }) => {

  //   const product: Product[] = [
  //     {
  //         id: 1,
  //         image: '/gradient.png',
  //         title: 'gradient graphic t-shirt',
  //         rating: 3.5,
  //         price: 145,
  //         discount: 0,
  //         category: 't-shirts',
  //         slug: 'gradient-graphic-t-shirt',
  //         description: 'This gradient graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'

  //     },
  //     {
  //         id: 2,
  //         image: '/polo.png',
  //         title: 'polo with tipping details',
  //         rating: 4.5,
  //         price: 180,
  //         discount: 0,
  //         category: 'shirts',
  //         slug: 'polo-with-tipping-details',
  //         description: 'This polo with tipping details is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'


  //     },
  //     {
  //         id: 3,
  //         image: '/blackstriped.png',
  //         title: 'black striped shirt',
  //         rating: 5.0,
  //         price: 150,
  //         discount: 30,
  //         category: 't-shirts',
  //         slug: 'black-striped-shirt',
  //         description: 'This black striped shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'

  //     },
  //     {
  //         id: 4,
  //         image: '/jeans.png',
  //         title: 'skinny fit jeans',
  //         rating: 3.5,
  //         price: 260,
  //         discount: 20,
  //         category: 'jeans',
  //         slug: 'skinny-fit-jeans',
  //         description: 'These skinny fit jeans are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.'

  //     },
  //     {
  //         id: 5,
  //         image: '/shirtoffice.png',
  //         title: 'checkered shirt',
  //         rating: 4.5,
  //         price: 180,
  //         discount: 0,
  //         category: 'shirts',
  //         slug: 'checkered-shirt',
  //         description: 'This checkered shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'


  //     },
  //     {
  //         id: 6,
  //         image: '/tshirt.png',
  //         title: 'sleeve striped t-shirt',
  //         rating: 4.5,
  //         price: 160,
  //         discount: 30,
  //         category: 't-shirts',
  //         slug: 'sleeve-striped-t-shirt',
  //         description: 'This sleeve striped t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'

  //     },
  //     {
  //         id: 7,
  //         image: '/vertical.png',
  //         title: 'vertical striped shirt',
  //         rating: 5.0,
  //         price: 232,
  //         discount: 20,
  //         category: 'shirts',
  //         slug: 'vertical-striped-shirt',
  //         description: 'This vertical striped shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'

  //     },
  //     {
  //         id: 8,
  //         image: '/graphic.png',
  //         title: 'courage graphic t-shirt',
  //         rating: 4.0,
  //         price: 145,
  //         discount: 0,
  //         category: 't-shirts',
  //         slug: 'courage-graphic-t-shirt',
  //         description: 'This courage graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'

  //     },
  //     {
  //         id: 9,
  //         image: '/bermuda.png',
  //         title: 'loose fit bermuda shorts',
  //         rating: 3.0,
  //         price: 80,
  //         discount: 0,
  //         category: 'shorts',
  //         slug: 'loose-fit-bermuda-shorts',
  //         description: 'These loose fit bermuda shorts are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.'

  //     },

  // ];

  async function getcategory() {
    try {
      const query = await client.fetch(`
        * [_type == 'products'][0..8]
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
    } catch (error) {
      console.log('error fetching data from sanity', error);
      return [];
    }

  }

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the data when the component mounts (mount means render)
    const fetchData = async () => {
      try {
        const data = await getcategory(); //function ke through Sanity se data fetch hota hai.
        setProducts(data);
      } catch (error) {
        console.log('error in fetchdata useeffect updating products state', error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);



  // variable component ko rerender nhi karatay hum uskay liye state use krtay hain
  // let isOpen = false;

  const [isOpen, setIsOpen] = useState(false)
  const [isColorOpen, setIsColor] = useState(false);
  const [isSizeOpen, setIsSize] = useState(false);
  const [isStyleOpen, setIsStyle] = useState(false);
  
  

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleIsColor = () => {
    setIsColor(!isColorOpen)
  }

  const handleIsSize = () => {
    setIsSize(!isSizeOpen)
  }

  const handleIsStyle = () => {
    setIsStyle(!isStyleOpen)
  }


  return (
    <div className="max-w-[1240px] mx-auto my-[50px]">
      {/* <div className="divider w-[90%] mx-auto md:w-[1240px]"></div> */}
      <BreadcrumbWithCustomSeparator />
      <div className="mt-[20px] flex">
        {/**Main div*/}
        <div
          className="max-w-[295px] h-[1220px] rounded-[20px] py-[20px] px-[24px] 
        border-[1px] border-black/10 md:block hidden"
        >
          {/**div jismain filter heading or filter icon hai */}
          <div className="w-[247px] h-[27px] flex flex-row justify-between items-center">
            <p className="font-Satoshi font-[700] text-black text-[20px]">
              Filters
            </p>
            <button><Filter /></button>

          </div>
          <div className="divider"></div> {/**divider after filter */}
          <div className="w-[247px] h-[160px] flex flex-col justify-between">
            <Link href={"/t-shirts"}>
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                  t-shirts
                </p>
                <Filterarrow />
              </div>
            </Link>
            <Link href={"/shorts"}>
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                  shorts
                </p>
                <Filterarrow />
              </div>
            </Link>

            <Link href={"/shirts"}>
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                  shirts
                </p>
                <Filterarrow />
              </div>
            </Link>

            <Link href={"/hoodie"}>
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                  hoodie
                </p>
                <Filterarrow />
              </div>
            </Link>
            <Link href={"/jeans"}>
              <div className="flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                  jeans
                </p>
                <Filterarrow />
              </div>
            </Link>
          </div>
          <div className="divider"></div>
          <div className="w-[247px] h-auto flex flex-col gap-[15px]">
            <button onClick={handleIsOpen}>
              <div className="w-[247px] h-[27px] flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[20px] font-[700] text-black">
                  Price
                </p>
                <IoIosArrowUp className={`text-[16px] ${isOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
            </button>


            <div className={`w-[247px]  overflow-hidden duration-300 ${isOpen ? 'max-h-[48px]' : 'max-h-0'}`}>
              {/* <div className="w-[247px] h-[6px] rounded-[20px] bg-[#f0f0f0]">
                <div className="w-[150px] h-[6px] bg-black rounded-[20px]"></div>
              </div> */}

              <div className='w-[247px]'>
                <input

                  type="range"          // Slider banane ke liye HTML ka built-in range input hai
                  min="0"               // Minimum value 0
                  max="100"             // Maximum value 100            
                  className='w-full bg'
                />
                <p className='font-Satoshi text-black font-[500]'>$50</p>
              </div>
            </div>

          </div>

          <div className="divider"></div>

          <div className="w-[247px] h-auto flex flex-col justify-between">

            <button onClick={handleIsColor}>
              {/**Colors Heading */}
              <div className="w-[247px] h-[27px] flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[20px] font-[700] text-black">
                  Colors
                </p>
                <IoIosArrowUp className={`text-[16px] ${isColorOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
            </button>


            {/**Colors */}
            {/**overflow-hidden ensure karta hai ke jab container collapse ho (max-height 0 ho),
             *  to uska andar ka content bahar na nikle. */}
            <div className={`w-[247px] mt-2 h-[90px] flex flex-col justify-between overflow-hidden  duration-300 ${isColorOpen ? 'max-h-[90px]' : 'max-h-0'} `}>
              <div className="w-[247px] h-[37px] flex flex-row justify-between">
                <button className="border-[2px] bg-[#00C12B] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#F50606] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#F5DD06] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#F57906] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#06CAF5] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
              </div>
              <div className="w-[247px] h-[37px] flex flex-row justify-between">
                <button className="border-[2px] bg-[#063AF5] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#7D06F5] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#F506A4] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#FFFFFF] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
                <button className="border-[1px] bg-[#000000] border-black/20 rounded-full w-[37px] h-[37px] focus:outline-none"></button>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-[247px] h-auto  flex flex-col justify-between">
            {/**Size heading*/}
            <button onClick={handleIsSize}>
              <div className="w-[247px] h-[27px] flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[20px] font-[700] text-black">
                  Size
                </p>
                <IoIosArrowUp className={`text-[16px] ${isSizeOpen ? 'rotate-180' : 'rotate-0'}`} />
              </div>
            </button>
            {/**Sizes*/}
            <div className={`w-[247px]  
              mt-2 flex flex-wrap gap-x-[8px] gap-y-[8px] overflow-hidden duration-300  ${isSizeOpen ? 'max-h-[227px]' : 'max-h-0'}`}>
              <button className="w-[96px] h-[39px] rounded-[62px] py-[10px] px-[20px] font-[400] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi text-[14px]">XX-Small</p>
              </button>
              <button className="max-w-[88px] h-[39px] rounded-[62px] py-[10px] px-[20px] font-[400] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi  text-[14px] ">X-Small</p>
              </button>
              <button className="max-w-[74px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">Small</p>
              </button>
              <button className="max-w-[90px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">Medium</p>
              </button>
              <button className="max-w-[76px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400]  text-[14px]">Large</p>
              </button>
              <button className="max-w-[89px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">X-Large</p>
              </button>
              <button className="max-w-[98px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">XX-Large</p>
              </button>
              <button className="max-w-[97px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap  bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">3X-Large</p>
              </button>
              <button className="max-w-[98px] h-[39px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap  bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200">
                <p className="font-Satoshi font-[400] text-[14px]">4X-Large</p>
              </button>
            </div>
          </div>
          <div className="divider"></div>
          {/**Last div */}
          <div className="w-[247px] h-auto flex flex-col justify-between">

            <button onClick={handleIsStyle}>
              <div className="w-[247px] h-[27px] flex flex-row justify-between items-center">
                <p className="capitalize font-Satoshi text-[20px] font-[700] text-black">
                  Dress Style
                </p>
                <IoIosArrowUp className={`text-[16px] ${isStyleOpen ? 'rotate-180' : 'rotate-0'}`} />
              </div>
            </button>

            <div className={`w-[247px] mt-2 overflow-hidden duration-300 ${isStyleOpen ? 'max-h-[124px]' : 'max-h-0'}`}>
              <Link href={"/casual"}>
                <div className="flex flex-row justify-between items-center">
                  <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                    Casual
                  </p>
                  <Filterarrow />
                </div>
              </Link>
              <Link href={"/formal"}>
                <div className="flex flex-row justify-between items-center">
                  <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                    Formal
                  </p>
                  <Filterarrow />
                </div>
              </Link>
              <Link href={"/party"}>
                <div className="flex flex-row justify-between items-center">
                  <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                    Party
                  </p>
                  <Filterarrow />
                </div>
              </Link>
              <Link href={"/gym"}>
                <div className="flex flex-row justify-between items-center">
                  <p className="capitalize font-Satoshi text-[16px] font-[400] text-black/60">
                    Gym
                  </p>
                  <Filterarrow />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/**Products div*/}
        <div className="md:flex-grow ml-4">
          <div className="flex flex-row md:justify-between items-center">
            <p className="font-Satoshi font-[700] text-[32px] capitalize text-black">
              {params.category}
            </p>
            <div className="w-[396px] h-[16px] ml-[12px] md:flex md:flex-row md:gap-[6px] md:justify-center md:items-center">
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Showing 1-10 of 100 Products
              </p>
              <p className="font-Satoshi md:block hidden font-[400] text-[16px] text-black/60">
                Sort by:{" "}
                <span className="font-Satoshi font-[500] text-[16px] text-black">
                  Most Popular
                </span>
              </p>
              <Link href={""} className="md:block hidden">
                <Downarrow />
              </Link>
            </div>
          </div>

          {/**Products Card*/}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[15px] md:gap-x-[20px] gap-y-[39px] mt-3">
            {products.map((item: any, i: number) => {
              return (
                <div key={i}>
                  <Link href={`/${item.category}/${item.slug}`}>
                    <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt="shirt"
                        width={296}
                        height={444}
                      />
                    </div>
                  </Link>
                  <div className="max-w-[295px] h-[98px] flex flex-col justify-between mt-[21px]">
                    <p className="font-Satoshi font-[700] text-[20px] text-black capitalize">
                      {item.title}
                    </p>

                    <div className="max-w-[160px] h-[19px] flex flex-row gap-[13px] items-center">
                      <div className="max-w-[104px] h-[18.49px] flex flex-row gap-[5.31px]">
                        {/**logic lagai hai jo rating kee base pay stars generate kray gee ratibg mtlb 2 3 4 5 */}
                        {Array.from({ length: Math.floor(item.rating) }).map(
                          (_, i) => (
                            <Pricestar />
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
                          $
                          {item.price -
                            (item.price * item.discountpercent) / 100}
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
                      {item.discountpercent > 0 && (
                        <div
                          className="w-[58px] h-[28px] rounded-[62px]
                     flex justify-center items-center py-[6px] px-[14px] bg-red-500 bg-opacity-10"
                        >
                          <p className="text-[#FF3333] font-Satoshi text-[12px] font-[500]">
                            -{item.discountpercent}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="divider"></div>

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Category

