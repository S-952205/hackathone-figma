import React from 'react'
import Downarrow from './downarrow'
import Link from 'next/link'
import Searchicon from './searchicon';
// import Carticon from './carticon';
import Profileicon from './profileicon';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div>
      <div
        className="max-w-[1240px] h-[41px]
          mx-auto mt-[42px] flex flex-row md:justify-between items-center"
      >

        <div className='text-[24px] lg:hidden block pl-5 pr-2'>
          <Link href={'/'}>
            <GiHamburgerMenu style={{ font: '18px' }} />
          </Link>
        </div>

        {/**Div for logo shop.co */}
        <div className="w-[160px] h-[40px] flex justify-center items-center">
          <p className='font-Integral font-[700] text-[25px] md:text-[30px] text-black'>SHOP.CO</p>
        </div>

        {/**Navbar Links*/}
        <div className="hidden w-[321px] h-[22px] lg:flex flex-row justify-between items-center">
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
           rounded-[62px] hidden  px-[16px] py-[12px] lg:flex items-center">
          <div className="w-[24px] h-[24px] flex items-center justify-center mr-[12px]">
            <Link href={''}>
              <Searchicon />
            </Link>
          </div>

          <input
            type="text"
            placeholder="Search for products..."
            className=" bg-[#F0F0F0] hidden lg:block  outline-none text-[#909090] h-[24px] text-[16px] font-Satoshi font-[400px]"
          />
        </div>

        {/**Profile and cart icon */}
        <div className='w-[94px] md:w-[62px] h-[24px] grow md:grow-0 flex justify-end gap-[12px] md:justify-between md:items-center'>
          <Link href={''} className='text-black block md:hidden'>
            <FiSearch size={22} />
          </Link>
          {/* <div className='w[24px] h-[24px]'>
             <Link href={'/cart'}>
              <Carticon/>   
            </Link>            
            </div> */}
           <Link href={'/cart'}>
          <div className="indicator w-[24px] h-[24px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" text-black"
              fill="none"
              viewBox="0 0 22 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            <span className="badge badge-sm indicator-item">8</span>
          </div>
          </Link> 
          <div className='w[24px] h-[24px] flex flex-row items-center'>
            <Link href={''}>
              <Profileicon />
            </Link>
          </div>
        </div>

      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Navbar
