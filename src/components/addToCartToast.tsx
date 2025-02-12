'use client'
import { addToCart } from '@/app/store/feature/cart';
import { useAppDispatch } from '@/app/store/hooks';
import React from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddToCartToast = ({ cartItem }: any) => {
    const notify = () => toast.success('Product Added Successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    });

    const dispatch = useAppDispatch();

    return (
        <>
            <div onClick={() => dispatch(addToCart(cartItem))}>
                {/**Add to car button */}
                <button //button onClick sirf notification (React-Toastify ka toast) show karne ke liye hai
                    onClick={notify}
                    className='w-[400px] h-[52px] rounded-[62px] px-[54px] py-[16px]
                         bg-black flex flex-row justify-center items-center gap-[12px]'>
                    <p className='font-Satoshi font-[500] text-[16px] text-white'>Add to Cart</p>
                </button>

            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </>
    )
}

export default AddToCartToast
