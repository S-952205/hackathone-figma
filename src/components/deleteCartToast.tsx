'use client'
import { delItem } from '@/app/store/feature/cart';
import { useAppDispatch } from '@/app/store/hooks';
import { Trash2 } from 'lucide-react';
import React from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';

const DeleteCartToast = ({ item }: any) => {
    const dispatch = useAppDispatch();

    const notify = () => toast.error('Product removed successfully', {
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

    return (
        <>
        <div onClick={() => dispatch(delItem(item.uuid))}>
            <button onClick={notify}>
                <Trash2 color="#FF3333" size={18} />
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

export default DeleteCartToast

