import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../config/Firebase';


const Modal = ({open, setOpen, isUpdate}) => {
    let[name, setName]= useState('');
    let[email, setEmail]= useState('');

    let onClose =()=>{
        setOpen(false);
    };

    let formSubmit=(event)=>{
        event.preventDefault();
        addContact({Name: name, Email: email});
    }
    let nameHandle=(event)=>{setName(event.target.value);}
    let emailHandle=(event)=>{setEmail(event.target.value);}

    let addContact= async(contact)=>{
        try {
            let firebaseContactData= collection(db, "contact");
            await addDoc(firebaseContactData, contact)
            
        } catch (error) {
            console.log(error);
            
        }
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
                                <form action="./php" onSubmit={formSubmit}>
                                    
                                        <div className='flex flex-col pl-3'>
                                            <label htmlFor="name" className='font-medium'>Name</label>
                                            <input type="name" placeholder='Enter Name' onChange={nameHandle} className='border outline-none w-[250px] h-8 rounded-md pl-1.5' />
                                        </div>
                                        <div className='flex flex-col pl-3 mt-1.5'>
                                            <label htmlFor="email" className='font-medium'>Email</label>
                                            <input type="email" placeholder='Enter Email' onChange={emailHandle} className='border outline-none w-[250px] h-8 rounded-md pl-1.5' />
                                        </div>

                                        <div className='flex ml-4 mt-3'>
                                            <button className='bg-blue-500 w-30 h-9 rounded-md font-medium text-white cursor-pointer'>
                                                {isUpdate ? "Add" : "Update" } Contact</button>
                                        </div>
                        
                                </form>

                        </div>

                    </div>
                </div>
                <div className=' absolute h-screen w-screen top-0 z-994 backdrop-blur'onClick={onClose}/>
            </>
        )
    }
    </>
 , document.getElementById('modal-root') );
}

export default Modal