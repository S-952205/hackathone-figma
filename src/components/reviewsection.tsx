import React from 'react'
import Stars from './stars'
import Greentick from './greentick'

const Reviewsection = () => {
  return (
    <div>
      <div
        className="w-[1239px] h-[241px]
        my-[45px] mx-auto flex flex-row justify-between"
      >
        <div
          className="w-[400px] h-[240px] rounded-[20px]
         border-[1px] py-[28px] px-[38px] "
        >
          <div className="w-[336px] h-[161px] flex flex-col gap-[12px]">
            {/**Review Stars */}
            <div className="w-[138.84px] h-[22.58px] flex flex-row justify-between">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>

            {/**Person name and compliment who gave reviewd*/}
            <div className="w-[336px] h-[124px]">
              <div className="w-[110px] h-[24px] flex flex-row justify-between ">
                <p className="font-Satoshi font-[700] text-20px">Sarah M.</p>
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  <Greentick />
                </div>
              </div>
            </div>

            <p className="font-Satoshi font-[400px] text-black/60  text-[16px]">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>

        {/**Second person review */}
        <div
          className="w-[400px] h-[240px]
          rounded-[20px] border-[1px] py-[28px] px-[38px]"
        >
          <div className="w-[336px] h-[183.58px] flex flex-col gap-[12px]">
            {/**Review Stars */}
            <div className="w-[138.84px] h-[22.58px] flex flex-row justify-between">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>

            {/**Person name and compliment who gave reviewd*/}
            <div className="w-[336px] h-[146px]">
              <div className="w-[93px] h-[24px] flex flex-row justify-between ">
                <p className="font-Satoshi font-[700] text-[16px]">Alex K.</p>
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  <Greentick />
                </div>
              </div>
            </div>

            <p className="font-Satoshi font-[400px] text-black/60  text-[16px]">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
        </div>

        {/**third person review */}
        <div
          className="w-[400px] h-[240px]
          rounded-[20px] border-[1px] py-[28px] px-[38px]"
        >
          <div className="w-[336px] h-[183.58px] flex flex-col gap-[12px]">
            {/**Review Stars */}
            <div className="w-[138.84px] h-[22.58px] flex flex-row justify-between">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>

            {/**Person name and compliment who gave reviewd*/}
            <div className="w-[336px] h-[146px]">
              <div className="w-[111px] h-[24px] flex flex-row justify-between ">
                <p className="font-Satoshi font-[700] text-20px">James L.</p>
                <div className="w-[24px] h-[24px] flex justify-center items-center">
                  <Greentick />
                </div>
              </div>
            </div>

            <p className="font-Satoshi font-[400px] text-black/60 text-[16px]">
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewsection
