'use client'
import { addCart, subtractCart } from '@/app/store/feature/cart'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DeleteCartToast from './deleteCartToast'
import Link from 'next/link'



const CartCart = () => {

  const cartarray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="w-[98%] ml-3 md:ml-0 md:max-w-[715px] col-span-2 px-[10px] md:px-[24px]
     py-[10px] md:py-[20px] border-[1px] border-black/10 rounded-[20px]">

      {cartarray.length >= 1 &&
        cartarray.map((item, i) => {
          return (
            <div key={i}>
              <div className="w-[667px] h-[124px] flex flex-row gap-[4px] md:gap-[16px] ">
                {/**Image */}
                <div className="w-[125px] h-[130px] ">
                  <Image
                    src={item.image}
                    alt="graphic"
                    width={125}
                    height={187}
                    className="rounded-[8.66px] w-[125px] h-[130px] object-cover"
                  />
                </div>

                {/**detail */}
                <div className="w-[95%] md:max-w-[527px] h-[124px] flex flex-row md:justify-between">
                  <div className="w-[227px] h-[118px] flex flex-col justify-between">
                    <div className="w-[230px] h-[71px]">
                      <p className="font-Satoshi font-[700] text-[16px] md:text-[20px] whitespace-nowrap text-black capitalize">
                        {item.title}
                      </p>
                      <p className="font-Satoshi font-[400] text-[14px] text-black">
                        Size:{" "}
                        <span className="font-Satoshi font-[400] text-[14px] text-black/60">
                          {item.size}
                        </span>
                      </p>
                      <p className="font-Satoshi font-[400] text-[14px] text-black">
                        Color:{" "}
                        <span className="font-Satoshi font-[400] text-[14px] text-black/60">
                          {item.color}
                        </span>
                      </p>
                    </div>
                    <p className="font-Satoshi font-[700] text-[20px] md:text-[24px] text-black">
                      ${item.discount > 0 ? ((item.price - (item.price * item.discount) / 100) * item.quantity)
                        : item.price * item.quantity}
                    </p>
                  </div>
                  {/**Delete and plus minus button */}
                  <div className="max-w-[225px] h-[124px] flex justify-start md:justify-end">
                    <div className="flex flex-col items-start md:items-end justify-between">
                      <div className="w-[24px] h-[24px] ">
                        {/* <button onClick={() => dispatch(delItem(item.uuid))}>
                          <Trash2 color="#FF3333" size={18} />
                        </button> */}
                        <DeleteCartToast item={item} />
                      </div>

                      <div
                        className="w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-[#F0F0F0]
           flex flex-row justify-between items-center"
                      >
                        <button
                          onClick={() => dispatch(subtractCart(item))}>
                          <Minus color="black" size={15} />
                        </button>
                        <p className="font-Satoshi font-[500] text-[14px] text-black">
                          {item.quantity}
                        </p>
                        <button onClick={() => dispatch(addCart(item))}
                          className="">
                          <Plus color="black" size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider"></div>
            </div>
          );
        })}
    </div>
  );
}

export default CartCart
