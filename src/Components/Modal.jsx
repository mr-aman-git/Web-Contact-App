import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import {Formik, Field, Form} from 'formik';

const Modal = ({open, setOpen, children}) => {
    let onClose =()=>{
        setOpen(false);
    }
  return createPortal (
    <>
    {
        open && (
            <>
                <div className='flex justify-center'>
                    <div className='w-[300px] h-[210px] bg-white rounded-md relative z-995'>

                        <div className='flex justify-end text-[20px] pr-1'>
                            <i class="ri-close-large-fill cursor-pointer" onClick={onClose}></i>
                        </div>

                        <div>
                            <Formik>
                                <Form>
                                    <div>
                                        <div className='flex flex-col pl-3'>
                                            <label htmlFor="Nmae" className='font-medium'>Name</label>
                                            <Field Name="Name" placeholder='Enter Name' className='border outline-none w-[250px] h-8 rounded-md pl-1.5' />
                                        </div>
                                        <div className='flex flex-col pl-3 mt-1.5'>
                                            <label htmlFor="Email" className='font-medium'>Email</label>
                                            <Field Name="Email" placeholder='Enter Email' className='border outline-none w-[250px] h-8 rounded-md pl-1.5' />
                                        </div>

                                        <div className='flex ml-4 mt-3'>
                                            <button className='bg-blue-500 w-30 h-9 rounded-md font-medium text-white cursor-pointer'>Add Contact</button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
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