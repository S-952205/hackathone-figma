import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dresstyle = () => {
  return (

    <div className='w-[1239px] h-[866px] bg bg-[#F0F0F0]
     mx-auto  mt-[100px] relative rounded-[40px]'>

      {/**Main Heading in center of div */}
      <div className='w-[687px] h-[58px] absolute left-[276px] top-[30px]'>
        <p className='font-Integral font-[700] text-[48px] text-black'>BROWSE BY DRESS STYLE</p>
      </div>

      {/**Image  1*/}
      <div className='w-[407px] h-[289px] 
        absolute left-[64px] top-[192px] group'>
        <Link href={'/casual'}>
          <Image src={'/image1.png'} alt='boy' width={407} height={289}
            className=' rounded-[20px] group-hover:border-[4px] group-hover:border-black' />
          <p className='font-Satoshi font-[700]  absolute top-[25px] left-[36px] text-[36px] text-black'>Casual</p>
        </Link>
      </div>

      {/**Image  2*/}
      <div className='w-[684px] h-[289px] group
              absolute left-[491px] top-[192px]'>
        <Link href={'/formal'}>
          <Image src={'/image2.png'} alt='boy' width={684} height={289}
            className='rounded-[20px] group-hover:border-[4px] group-hover:border-black' />
          <p className='font-Satoshi   font-[700] absolute top-[25px] left-[36px] text-[36px] text-black'>Formal</p>
        </Link>
      </div>

      {/**Image  3*/}
      <div className='w-[684px] h-[289px] group 
               absolute left-[64px] top-[501px]'>
        <Link href={'/party'}>
          <Image src={'/image3.png'} alt='boy' width={684} height={289}
            className='rounded-[20px]   group-hover:border-[4px] group-hover:border-black' />
          <p className='font-Satoshi font-[700] absolute top-[25px] left-[36px] text-[36px]'></p>
        </Link>
      </div>

      {/**Image  4*/}
      <div className='w-[407px] h-[289px] group
              absolute left-[768px] top-[501px]'>
        <Link href={'/gym'}>
          <Image src={'/image4.png'} alt='boy' width={407} height={289}
            className='rounded-[20px] group-hover:border-[4px] group-hover:border-black' />
          <p className='font-Satoshi   font-[700] absolute top-[25px] left-[36px] text-[36px] text-black'>Gym</p>
        </Link>
      </div>



    </div>
  )
}

export default Dresstyle
