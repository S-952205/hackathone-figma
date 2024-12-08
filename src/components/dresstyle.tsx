import Image from 'next/image'
import React from 'react'

const Dresstyle = () => {
  return (

    <div className='w-[1239px] h-[866px] bg bg-[#F0F0F0]
     mx-auto my-[210px] relative rounded-[40px]'>
      
       {/**Main Heading in center of div */}
       <div className='w-[687px] h-[58px] absolute left-[276px] top-[30px]'>
          <p className='font-Integral font-[700] text-[48px]'>BROWSE BY DRESS STYLE</p>
       </div>

       {/**Image  1*/}
       <div className='w-[407px] h-[289px] 
        absolute left-[64px] top-[192px]'>
          <Image src={'/image1.png'} alt='boy' width={407} height={289}
          className=' rounded-[20px]'/>
          <p className='font-Satoshi font-[700]  absolute top-[25px] left-[36px] text-[36px]'>Casual</p>
       </div>

           {/**Image  2*/}
           <div className='w-[684px] h-[289px] 
              absolute left-[491px] top-[192px]'>
              <Image src={'/image2.png'} alt='boy' width={684} height={289}
               className='rounded-[20px]' />
              <p className='font-Satoshi font-[700] absolute top-[25px] left-[36px] text-[36px]'>Formal</p>
          </div>

            {/**Image  3*/}
            <div className='w-[684px] h-[289px] 
               absolute left-[64px] top-[501px]'>
              <Image src={'/image3.png'} alt='boy' width={684} height={289}
               className='rounded-[20px]' />
              <p className='font-Satoshi font-[700] absolute top-[25px] left-[36px] text-[36px]'></p>
          </div>

                      {/**Image  4*/}
         <div className='w-[407px] h-[289px] 
              absolute left-[768px] top-[501px]'>
              <Image src={'/image4.png'} alt='boy' width={407} height={289}
               className='rounded-[20px]' />
              <p className='font-Satoshi font-[700] absolute top-[25px] left-[36px] text-[36px]'>Gym</p>
          </div>



    </div>
  )
}

export default Dresstyle
