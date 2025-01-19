import React from 'react'
import Leftrightarrow from './leftrightarrow'
import Rightarrow from './rightarrow'
import Link from 'next/link'

const Review = () => {
  return (
 <div className="mt-[100px]">
  {/* Parent Container */}
  <div className="w-[1239px] h-[83px]
  flex flex-row justify-between mx-auto">

      <p className="font-Integral font-[700] text-[48px] text-black ">
        OUR HAPPY CUSTOMERS
      </p>


    {/* Arrows */}
    <div className="flex space-x-4 mt-[46px]">
      <div className="w-[24px] h-[24px]">
        <Link href={''}><Leftrightarrow/></Link>
      </div>
      <div className="w-[24px] h-[24px]">
      <Link href={''}><Rightarrow/></Link>
      </div>
    </div>

  </div>
</div>

 
  )
}

export default Review
