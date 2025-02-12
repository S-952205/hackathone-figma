import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1275px] h-[661px] mx-auto mt-[44px]
    hero-img bg-cover bg-center bg-no-repeat px-4">
      {/**main container */}

      {/**div containing heading para button and image*/}
      <div>
        <div>
          <div className="max-w-[577px]">
            <p className="font-Integral font-[700] text-[36px] md:text-[64px] text-black">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
          </div>

          {/**Paragraph */}
          <div className="max-w-[545px] h-[33px] mt-1">
            <p
              className="font-Satoshi font-[400] text-[16px]
            text-[#00000099]"
            >
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
          </div>

          {/**Button */}
          <Link href={"/category"}>
            <div
              className="max-w-[210px] h-[52px] rounded-[62px] px-[54px] py-[16px]
        bg-black text-white flex justify-center
         items-center mt-8"
            >

              <p className="font-Satoshi font-[500] text-[16px] ">Shop Now</p>

            </div>
          </Link>
        </div>
        {/**Image*/}
        {/* <Image
        src={"/hero.png"}
        alt="hero"
        width={1440}
        height={663}
        className=""
      /> */}
      </div>

    </div>
  );
}

export default Hero

