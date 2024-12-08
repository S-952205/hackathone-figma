import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className="w-[1440px] relative mx-auto mt-[44px]"> {/**Heading */}
      <div className="w-[577px] h-[173px] absolute left-[110px] top-[0]">
        <p className="font-Integral font-[700] text-[64px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
      </div>

      {/**Paragraph */}
      <div className="w-[545px] h-[33px] absolute">
        <p
          className="font-Satoshi font-[400] text-[16px] absolute
         left-[110px] top-[310px] text-[#00000099]"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>

      {/**Button */}
      <div
        className="w-[210px] h-[52px] rounded-[62px] px-[54px] py-[16px]
        bg-black text-white flex justify-center
         items-center absolute left-[110px] top-[407px]"
      >
        <Link href={''}>
           <p className="font-Satoshi font-[500] text-[16px]">Shop Now</p>
        </Link> 
      </div>

      <Image src={"/hero.png"} alt="hero" width={1440} height={663} />
    </div>
  );
}

export default Hero
