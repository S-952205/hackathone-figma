'use client'
import { ArrowRight, Minus, Plus, Tag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { LuTag } from 'react-icons/lu'
import { useAppSelector } from '../store/hooks'

const Cart = () => {

  const cart = useAppSelector((state) => state.cart)
  console.log('cart data', cart);
  
  return (
    <div className='mt-[60px] mb-[60px]'>
      <div className='max-w-[1240px] mx-auto '>
       <p className='font-Integral font-[900] text-[40px] uppercase ml-3 md:ml-0'>Your cart</p>

      <div className='flex flex-col gap-4 md:flex-row mt-[25px]'>  
       <div className='w-[98%] ml-3 md:ml-0 md:max-w-[715px] h-[508px] col-span-2 px-[10px] md:px-[24px] py-[10px] md:py-[20px] border-[1px] border-black/10 rounded-[20px]'>
        {/**cart detail*/}
        <div className='w-[667px] h-[124px] flex flex-row gap-[4px] md:gap-[16px] '>
          {/**Image */}
          <div className='w-[125px] h-[125px] '>
            <Image src={'/gradient.png'} alt='graphic' width={125} height={187} className='rounded-[8.66px]'/>
          </div>
           
          {/**detail */}
          <div className='w-[95%] md:max-w-[527px] h-[124px] flex flex-row md:justify-between'>
          <div className='w-[227px] h-[118px] flex flex-col justify-between'>
                <div className='w-[230px] h-[71px]'>
                  <p className='font-Satoshi font-[700] text-[16px] md:text-[20px] text-black capitalize'>Gradient Graphic T-shirt</p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Size: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>Large</span></p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Color: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>White</span></p>
                </div>
                <p className='font-Satoshi font-[700] text-[20px] md:text-[24px] text-black'>$145</p>
            </div>
            {/**Delete and plus minus button */}
            <div className='max-w-[225px] h-[124px] flex justify-start md:justify-end'>
             <div className='flex flex-col items-start md:items-end justify-between'>

               <div className='w-[24px] h-[24px] '>
                <button><Trash2 color="#FF3333" size={18}/></button>       
              </div>
              
              
              <div className='w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-[#F0F0F0]
              flex flex-row justify-between items-center'>
                <button>
                  <Minus color="black" size={15}/>
                </button>
                <p className='font-Satoshi font-[500] text-[14px] text-black'>1</p>
                <button className=''>
                 <Plus color="black" size={15}/>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/**cart detail*/}
        <div className='w-[667px] h-[124px] flex flex-row gap-[16px] '>
          {/**Image */}
          <div className='w-[125px] h-[125px] '>
            <Image src={'/shirtoffice.png'} alt='graphic' width={125} height={187} className='rounded-[8.66px]'/>
          </div>
           
          {/**detail */}
          <div className='w-[527px] h-[124px] flex flex-row justify-between'>
            <div className='w-[227px] h-[118px] flex flex-col justify-between'>
                <div className='w-[227px] h-[71px]'>
                  <p className='font-Satoshi font-[700] text-[20px] text-black capitalize'>Checkered Shirt</p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Size: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>Medium</span></p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Color: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>Red</span></p>
                </div>
                <p className='font-Satoshi font-[700] text-[24px] text-black'>$180</p>
            </div>
            <div className='w-[225px] h-[124px] flex justify-end'>
             <div className='flex flex-col items-end justify-between'>
             <div className='w-[24px] h-[24px] '>
                <button><Trash2 color="#FF3333" size={18}/></button>       
              </div>
              
              <div className='w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-[#F0F0F0]
              flex flex-row justify-between items-center'>
                <button>
                  <Minus color="black" size={15}/>
                </button>
                <p className='font-Satoshi font-[500] text-[14px] text-black'>1</p>
                <button className=''>
                 <Plus color="black" size={15}/>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/**cart detail*/}
        <div className='w-[667px] h-[124px] flex flex-row gap-[16px] '>
          {/**Image */}
          <div className='w-[125px] h-[125px] '>
            <Image src={'/jeans.png'} alt='graphic' width={102} height={153} className='rounded-[8.66px]'/>
          </div>
           
          {/**detail */}
          <div className='w-[527px] h-[124px] flex flex-row justify-between'>
            <div className='w-[227px] h-[118px] flex flex-col justify-between'>
                <div className='w-[227px] h-[71px]'>
                  <p className='font-Satoshi font-[700] text-[20px] text-black capitalize'>skinny fit jeans</p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Size: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>Large</span></p>
                  <p className='font-Satoshi font-[400] text-[14px] text-black'>
                    Color: <span className='font-Satoshi font-[400] text-[14px] text-black/60'>Blue</span></p>
                </div>
                <p className='font-Satoshi font-[700] text-[24px] text-black'>$240</p>
            </div>
            <div className='w-[225px] h-[124px] flex justify-end'>
             <div className='flex flex-col items-end justify-between'>
             <div className='w-[24px] h-[24px] '>
                <button><Trash2 color="#FF3333" size={18}/></button>       
              </div>
              
            <div className='w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-[#F0F0F0]
              flex flex-row justify-between items-center'>
                <button>
                  <Minus color="black" size={15}/>
                </button>
                <p className='font-Satoshi font-[500] text-[14px] text-black'>1</p>
                <button className=''>
                 <Plus color="black" size={15}/>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
       </div>

       {/**column 2 */}
       <div className='w-[95%] mx-auto md:max-w-[505px] h-[458px] md:ml-[20px] rounded-[20px]
        border-[1px] border-black/10 px-[12px] md:px-[24px] py-[20px] flex flex-col justify-between'>
            <p className='font-Satoshi font-[700] text-[24px] text-black'>Order Summary</p>

            <div className='w-[95%] md:max-w-[457px] h-[193px] flex flex-col justify-between'>
              <div className='flex flex-row justify-between items-center'>
                <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Subtotal</p>
                <p className='font-Satoshi font-[400] text-[20px] text-black'>$565</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Discount (-20%)</p>
                <p className='font-Satoshi font-[400] text-[20px] text-[#FF3333]'>-$113</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p className='font-Satoshi font-[400] text-[20px] text-black/60'>Delivery Fee</p>
                <p className='font-Satoshi font-[400] text-[20px] text-black'>$15</p>
              </div>
              <div className="divider"></div>
              <div className='flex flex-row justify-between items-center'>
                <p className='font-Satoshi font-[400] text-[20px] text-black'>Total</p>
                <p className='font-Satoshi font-[700] text-[24px] text-black'>$467</p>
              </div>
            </div>

             {/**input div */}
            <div className='w-[318px] md:w-[457px] h-[48px] flex flex-row gap-[6px] md:justify-between'>
              <div className='w-[326px] h-[48px] rounded-[62px] px-[10px] md:px-[16px] py-[12px] bg-[#F0F0F0]
             flex flex-row gap-[6px] md:gap-[12px] items-center'>
              <LuTag style={{color: '#00000066', fontSize:'21px'}}/>
              <input type='text' placeholder='Add promo code' className='font-Satoshi 
              font-[400] text-[16px] focus:outline-none bg-[#F0F0F0]'/>
              </div>
              
              <button className='w-[119px] h-[48px] rounded-[62px] px-[10px] md:px-[16px] py-[12px] bg-black'>
                <p className='text-white font-Satoshi font-[500] text-[16px]'>Apply</p>
              </button>
            </div>

            <button className='w-full h-[60px] rounded-[62px] px-[40px] md:px-[54px] py-[16px]
             bg-black flex flex-row justify-center items-center gap-[12px]'>
               <p className='font-Satoshi font-[500] text-[16px] text-white'>Go to Checkout</p>
               <ArrowRight color="white" strokeWidth={1.5} size={18}/>
            </button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Cart
