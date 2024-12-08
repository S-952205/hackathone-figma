import Image from 'next/image'
import React from 'react'

const Sales = () => {
  return (
    <div>
       <div className='w-[1238px] h-[298px] mx-auto flex flex-row justify-between'>

        <div className='w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center overflow-hidden'>
            <Image src={'/shirtoff.png'} alt='shirt' width={296} height={444}/>
        </div>

        <div className='w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center'>
            <Image src={'/jeans.png'} alt='jeans' width={268} height={402}/>
        </div>

        <div className='w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden'>
            <Image src={'/shirtoffice.png'} alt='shirt' width={296} height={444}/>
        </div>

        <div className='w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden'>
            <Image src={'/tshirt.png'} alt='tshirt' width={295} height={298}/>
        </div>

       </div>
    </div>
  )
}

export default Sales
