import React from 'react'
import Emailicon from './emailicon'
import Twitter from './twitter';
import Facebook from './facebook';
import Instagram from './instagram';
import Github from './github';
import Link from 'next/link';
import Visa from './visa';
import Visatwo from './visatwo';
import Paypal from './paypal';
import Apple from './apple';
import Gpay from './gpay';

const Footer = () => {
  return (
    <div>
      <div className="h-auto md:h-[589px] bg-black/10 mx-auto">
        <div className="w-[95%] mx-auto h-[293px] md:max-w-[1240px] md:h-[180px]
         bg-black rounded-[20px] flex flex-col justify-around md:flex-row md:justify-around items-center">
          {/**div contains Heading left, email input and subscribe button*/}
          <div className="w-[297px] h-[105px] md:w-[551px] md:h-[94px] flex justify-center items-center">
            <p className="font-Integral text-white font-[700] text-[32px] md:text-[40px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>

          {/** Input and button on right */}
          <div className="w-[311px] md:w-[349px] h-auto md:h-[108px] flex flex-col justify-between">
            <div className="w-[311px] md:w-[349px] h-[42px] md:h-[48px] relative flex flex-row items-center">
              {/* Icon inside the input */}
              <div className="w-[24px] h-[24px] absolute left-[11px] flex justify-center items-center">
                <Emailicon />
              </div>

              {/* Input field  */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-[46px] font-Satoshi font-[400] text-[16px] outline-none text-black/40 rounded-[62px] py-[12px]"
              />
            </div>

            {/* Button*/}
            <div
              className="w-[311px] md:w-[349px] h-[42px] md:h-[46px]
             bg-white rounded-[62px] px-[16px] py-[12px] mt-[12px] flex justify-center items-center"
            >
              <Link href={""}>
                <p className="font-Satoshi text-[16px] text-black">
                  Subscribe to Newsletter
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/**Div containing social media link and contact support and FAQ */}
        <div className="w-[95%] md:max-w-[1240px] h-screen md:h-[177px] md:my-[50px] mx-auto 
         grid grid-cols-2  md:flex md:flex-row md:justify-between">
          {/**first colunm */}
          <div className="w-full md:w-[248px] h-fit md:h-[177px] grid col-span-2  md:flex md:flex-col gap-4 md:justify-between">
            <div className="w-full md:w-[248px] h-auto md:h-[114px] ">
              <p className="font-Integral font-[700] text-[28px] md:text-[33.45px] text-black">
                SHOP.CO
              </p>
              <p className="font-Satoshi font-[400] text-[14px] text-black/60">
                We have clothes that suits your style and which you&rsquo;re
                proud to wear. From women to men
              </p>
            </div>

            {/**Social Media Links */}
            <div className="w-[148px] h-[28px] flex flex-row justify-between">
              <Link href={""}>
                <div className="w-[28px] h-[28px]">
                  <Twitter />
                </div>
              </Link>

              <Link href={""}>
                <div className="w-[28px] h-[28px]">
                  <Facebook />
                </div>
              </Link>

              <Link href={""}>
                <div className="w-[28px] h-[28px]">
                  <Instagram />
                </div>
              </Link>

              <Link href={""}>
                <div className="w-[28px] h-[28px]">
                  <Github />
                </div>
              </Link>
            </div>
          </div>

          {/**Second Colunm */}
          <div className="w-[136px] h-[177px] flex flex-col justify-between">
            <div className="w-[98px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[14px] md:text-[16px] text-black">Company</p>
            </div>

            <div className="w-[104px] h-[133px] flex flex-col justify-between">
            <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                About
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Features
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Works
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Career
              </p>
              </Link>
            </div>
          </div>

          {/**Third Colunm */}
          <div className="w-[104px] h-[177px] flex flex-col justify-between">
            <div className="w-[49px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[14px] md:text-[16px] text-black">Help</p>
            </div>

            <div className="w-[136px] h-[133px] flex flex-col justify-between">
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Customer Support
              </p>
              </Link>
              
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Delivery Details
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Terms & Conditions
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Privacy Policy
              </p>
              </Link>
            </div>
          </div>

          {/**Fourth Colunm */}
          <div className="w-[149px] h-[177px] flex flex-col justify-between">
            <div className="w-[37px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[14px] md:text-[16px] text-black">FAQ</p>
            </div>

            <div className="w-[149px] h-[133px] flex flex-col justify-between">
            <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                 Account
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Manage Deliveries
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Orders
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Payments
              </p>
              </Link>
            </div>
          </div>

          {/**Fifth Colunm */}
          <div className="w-[104px] h-[177px] flex flex-col justify-between">
            <div className="w-[118px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[14px] md:text-[16px] text-black">RESOURCES</p>
            </div>

            <div className="w-[149px] h-[133px] flex flex-col justify-between">
            <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Free eBooks
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Development Tutorial
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                  How to - Blog
              </p>
              </Link>
              <Link href={''}>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Youtube PlayList
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider w-[90%] md:w-[1240px] mx-auto"></div> {/**divider after filter */}

        {/**Footer Copyright */}
        <div className="max-w-[1240px] flex flex-col justify-center items-center gap-4 bg-black/10 mx-auto relative">
          <div className="w-[269px] h-[19px] md:absolute md:left-[0px] md:top-[40px]">
            <p className="font-Satoshi font-[400] text-[14px]">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>

           {/**Visa Card Paypal and all money card */}
          <div className="w-[281.07px] h-[30.03px]
           flex flex-row justify-between md:absolute md:right-[0px] md:top-[21px]">

            <div className="w-[46.61px] h-[30.3px]">
              <Visa/>
            </div>

            <div className="w-[46.61px] h-[30.3px]">
              <Visatwo/>
            </div>

            <div className="w-[46.61px] h-[30.3px]">
              <Paypal/>
            </div>

            <div className="w-[46.61px] h-[30.3px]">
              <Apple/>
            </div>

            <div className="w-[46.61px] h-[30.3px]">
              <Gpay/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
