'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

const Slugimage = ({ image } : any) => { //: string | string[] | StaticImageData | any
    const [path, setpath] = useState("");
    console.log(image);

    return (
        <div className='w-[605px] h-[530px] flex flex-row justify-between'>
            {/**left side 3 images */}
            <div className="h-[530px] flex flex-col justify-between">

                {image.map((item: string, i: number) => {
                        return (
                                <div key={i} className="w-[152px] h-[167px]">
                                    <Image
                                        src={item}
                                        alt="img1"
                                        width={152}
                                        height={168}
                                        className="cursor-pointer"
                                        onClick={() => {setpath(item)}}
                  />
                                </div>
                        )
                    })
                }

                {/* <Link href="" className='focus:border-[1px] focus:border-black  focus:rounded-[20px]'>
        <div className="w-[152px] h-[168px]">
          <Image
            src={"/back.png"}
            alt="img2"
            width={152}
            height={168}
            className="cursor-pointer"
          />
        </div>
      </Link>
      <Link href="" className='focus:border-[1px] focus:border-black  focus:rounded-[20px]'>
        <div className="w-[152px] h-[167px]">
          <Image
            src={"/personfull.png"}
            alt="img3"
            width={152}
            height={168}
            className="cursor-pointer"
          />
        </div>
      </Link> */}
            </div>


            {/**Right side full image */}
            <div className='w-[444px] h-[551px]'>
                <Image src={path ? path : image[0]} alt='fullimg' width={444} height={551} />
            </div>
        </div>
    )
}

export default Slugimage
