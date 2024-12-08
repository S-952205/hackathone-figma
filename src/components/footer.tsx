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
      <div className="h-[589px] bg-black/10 mx-auto">
        <div className="w-[1240px] h-[180px] bg-black rounded-[20px] mx-auto flex flex-row justify-around items-center">
          {/**div contains Heading left, email input and subscribe button*/}
          <div className="w-[551px] h-[94px] flex justify-center items-center">
            <p className="font-Integral text-white font-[700] text-[40px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>

          {/** Input and button on right */}
          <div className="w-[349px] h-[108px] flex flex-col justify-between">
            <div className="w-[349px] h-[48px] relative flex flex-row items-center">
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
              className="w-[349px] h-[46px]
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
        <div className="w-[1240px] h-[177px] my-[50px] mx-auto flex flex-row justify-between">
          {/**first colunm */}
          <div className="w-[248px] h-[177px] flex flex-col justify-between">
            <div className="w-[248px] h-[114px]">
              <p className="font-Integral font-[700] text-[33.45px] text-black">
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
              <p className="font-Satoshi font-[500] text-[16px]">Company</p>
            </div>

            <div className="w-[104px] h-[133px] flex flex-col justify-between">
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                About
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Features
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Works
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Career
              </p>
            </div>
          </div>

          {/**Third Colunm */}
          <div className="w-[104px] h-[177px] flex flex-col justify-between">
            <div className="w-[49px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[16px]">Help</p>
            </div>

            <div className="w-[136px] h-[133px] flex flex-col justify-between">
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Customer Support
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Dellivery Details
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Terms & Conditions
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Privacy Policy
              </p>
            </div>
          </div>

          {/**Fourth Colunm */}
          <div className="w-[149px] h-[177px] flex flex-col justify-between">
            <div className="w-[37px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[16px]">FAQ</p>
            </div>

            <div className="w-[149px] h-[133px] flex flex-col justify-between">
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Account
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Manage Deliveries
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Orders
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Payments
              </p>
            </div>
          </div>

          {/**Fifth Colunm */}
          <div className="w-[104px] h-[177px] flex flex-col justify-between">
            <div className="w-[118px] h-[18px]">
              <p className="font-Satoshi font-[500] text-[16px]">RESOURCES</p>
            </div>

            <div className="w-[149px] h-[133px] flex flex-col justify-between">
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Free eBooks
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Development Tutorial
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                How to - Blog
              </p>
              <p className="font-Satoshi font-[400] text-[16px] text-black/60">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>

        {/**Footer Copyright */}
        <div className="w-[1240px] h-px bg-black/10 mb-4 mx-auto relative">
          <div className="w-[269px] h-[19px] absolute left-[0px] top-[40px]">
            <p className="font-Satoshi font-[400] text-[14px]">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>

           {/**Visa Card Paypal and all money card */}
          <div className="w-[281.07px] h-[30.03px]
           flex flex-row justify-between absolute right-[0px] top-[21px]">

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
