import React from 'react'
import Downarrow from './downarrow'
import Link from 'next/link'
import Searchicon from './searchicon';
import Carticon from './carticon';
import Profileicon from './profileicon';

const Navbar = () => {
    return (
      <div>
        <div
          className="w-[1240px] h-[41px]
        mx-auto mt-[42px] flex flex-row justify-between items-center"
        >
          {/**Div for logo shop.co */}
          <div className="w-[160px] h-[40px] flex justify-center items-end">
            <p className='font-Integral font-[700px] text-[30px]'>SHOP.CO</p>
          </div>

          {/**Navbar Links*/}
          <div className="w-[321px] h-[22px] flex flex-row justify-between items-center">
            <div className="w-[57px] h-[22px] flex flex-row justify-between items-center">
              <Link href={""}>
                {" "}
                <p className="font-Satoshi font-[400] text-[16px] text-black">
                  Shop
                </p>
              </Link>

              <div className="w-[16px] h-[16px] flex justify-center items-center">
                <Link href={""}>
                  <Downarrow />
                </Link>
              </div>
            </div>

            <div className="w-[56px] h-[22px]">
              <Link href={""}>
                <p className="font-Satoshi font-[400] text-[16px] text-black">
                  On Sale
                </p>
              </Link>
            </div>

            <div className="w-[87px] h-[22px]">
              <Link href={""}>
                <p className="font-Satoshi font-[400] text-[16px] text-black">
                  New Arrivals
                </p>
              </Link>
            </div>

            <div className="w-[49px] h-[22px]">
              <Link href={""}>
                <p className="font-Satoshi font-[400] text-[16px] text-black">
                  Brands
                </p>
              </Link>
            </div>
          </div>

          {/**Nav search bar */}
          <div className="w-[577px] h-[48px]  text-white/40  bg-[#F0F0F0]
           rounded-[62px] px-[16px] py-[12px] flex items-center">
            <div className="w-[24px] h-[24px] flex items-center justify-center mr-[12px]">
              <Link href={''}>
               <Searchicon />
             </Link>
            </div>

            <input
              type="text"
              placeholder="Search for products..."
              className=" bg-[#F0F0F0] outline-none text-[#909090] h-[24px] text-[16px] font-Satoshi font-[400px]"
            />
          </div>

          {/**Profile and cart icon */}
          <div className='w-[62px] h-[24px] flex justify-between'>
             <div className='w[24px] h-[24px]'>
             <Link href={''}>
              <Carticon/>   
            </Link>            
            </div>
             <div className='w[24px] h-[24px]'>
             <Link href={''}>
              <Profileicon/>  
            </Link>  
              </div>
          </div>

        </div>
      </div>
    );
}

export default Navbar
