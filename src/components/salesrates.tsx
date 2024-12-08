import React from 'react'
import Pricestar from './pricestar'
import Halfstar from './halfstar'
import Link from 'next/link'

const Salesrates = () => {
  return (
    <div>
      <div className="w-[1238px] h-[98px] mx-auto my-[32px] relative flex flex-row justify-between">
        <div className="w-[295px] h-[98px] flex flex-col justify-between">
          <p className="font-Satoshi font-[700] text-[20px] text-black">
            T-SHIRT WITH TAPE DETAILS
          </p>

          <div className="w-[150px] h-[19px] flex flex-row justify-between items-center">
            <div className="w-[104px] h-[18.49px] flex flex-row justify-between">
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Halfstar />
            </div>
            <p className="font-Satoshi font-[400] text-[16px] text-black">
              4.5
              <span className="font-Satoshi font-[400] text-[16px] text-[#666666]">
                /5
              </span>
            </p>
          </div>
          <p className="font-Satoshi font-[700] text-[24px]">$120</p>
        </div>

        <div className="w-[295px] h-[98px] flex flex-col justify-between">
          <p className="font-Satoshi font-[700] text-[20px] text-black">
            SKINNY FIT JEANS
          </p>

          <div className="w-[150px] h-[19px] flex flex-row gap-[14px]">
            <div className="w-[126.2px] h-[19px] flex flex-row justify-between">
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Halfstar />
            </div>
            <p className="font-Satoshi font-[400] text-[16px] text-black">
              3.5
              <span className="font-Satoshi font-[400]  text-[16px] text-[#666666]">
                /5
              </span>
            </p>
          </div>

          <div className="w-[200px] h-[32px] flex flex-row justify-between">
            <p className="font-Satoshi font-[700] flex justify-center items-center text-[24px]">
              $240
            </p>
            <p className="font-Satoshi flex justify-center items-center font-[700] text-[24px] line-through text-[#666666]">
              $260
            </p>
            <div
              className="w-[58px] h-[28px] rounded-[62px]
              flex justify-center items-center py-[6px] px-[14px] bg-red-500 bg-opacity-10"
            >
              <p className="text-[#FF3333] font-Satoshi text-[12px] font-[500]">
                -20%
              </p>
            </div>
          </div>
        </div>

        <div className="w-[295px] h-[98px] flex flex-col justify-between">
          <p className="font-Satoshi font-[700] text-[20px] text-black">
            Chekered Shirt
          </p>

          <div className="w-[150px] h-[19px] flex flex-row justify-between items-center">
            <div className="w-[104px] h-[18.49px] flex flex-row justify-between">
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Halfstar />
            </div>
            <p className="font-Satoshi font-[400] text-[16px] text-black">
              4.5
              <span className="font-Satoshi font-[400] text-[16px] text-[#666666]">
                /5
              </span>
            </p>
          </div>
          <p className="font-Satoshi font-[700] text-[24px]">$180</p>
        </div>

        <div className="w-[295px] h-[98px] flex flex-col justify-between">
          <p className="font-Satoshi font-[700] text-[20px] text-black">
            SLEEVE STRIPED T-SHIRT
          </p>

          <div className="w-[150px] h-[19px] flex flex-row gap-[14px]">
            <div className="w-[104px] h-[18.49px] flex flex-row justify-between">
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Pricestar />
              <Halfstar />
            </div>
            <p className="font-Satoshi font-[400] text-[16px] text-black">
              4.5
              <span className="font-Satoshi font-[400]  text-[16px] text-[#666666]">
                /5
              </span>
            </p>
          </div>

          <div className="w-[189px] h-[32px] flex flex-row justify-between">
            <p className="font-Satoshi font-[700] flex justify-center items-center text-[24px]">
              $130
            </p>
            <p className="font-Satoshi flex justify-center items-center font-[700] text-[24px] line-through text-[#666666]">
              $160
            </p>
            <div
              className="w-[58px] h-[28px] rounded-[62px]
              flex justify-center items-center py-[6px] px-[14px] bg-red-500 bg-opacity-10"
            >
              <p className="text-[#FF3333] font-Satoshi text-[12px] font-[500]">
                -30%
              </p>
            </div>
          </div>
        </div>

        <Link href={""}>
          <div
            className="w-[218px] h-[52px] border-[1px] rounded-[62px]
        py-[16px] px-[54px] absolute top-[144px] left-[502px] mt-[40px] flex justify-center items-center"
          >
            <p className="font-Satoshi font-[500] text-[16px]">View All</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Salesrates
