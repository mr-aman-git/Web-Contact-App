import React, { useState } from 'react'
import { createPortal } from 'react-dom';

const Modal = ({open, setOpen}) => {
    let onClose =()=>{
        setOpen(false);
    }
  return createPortal (
    <>
    {
        open && (
            <>
                <div className='flex justify-center'>
                    <div className='w-[300px] h-[200px] bg-white rounded-md relative z-995'>

                        <div className='flex justify-end text-[20px] pr-1'>
                            <i class="ri-close-large-fill cursor-pointer" onClick={onClose}></i>
                        </div>

                    </div>
                </div>
                <div className=' absolute h-screen w-screen top-0 z-994 backdrop-blur'/>
            </>
        )
    }
    </>
 , document.getElementById('modal-root') );
}

export default Modal