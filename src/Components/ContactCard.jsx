import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, getDocs, doc, onSnapshot } from 'firebase/firestore'
import {db} from '../config/Firebase';
import Modal from './Modal';


const ContactCard = ({open, setOpen, contact, setContact}) => {
  let editOpen=()=>{
    setOpen(true);
  }
  // let [contact, setContact]= useState([]);

  useEffect (()=>{
    let getContact= async()=>{
      try {
        let contactData= collection(db, "contact");
        onSnapshot(contactData, (snapShot)=>{

          let outputData= snapShot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(outputData);
          return outputData;
          
        });
      } catch (error) {
        console.log(error);
        
      }
    }
    
    getContact();
  },[]);

  let deleteContact= async(id)=>{
    try {
      await deleteDoc(doc(db, "contact", id));
      console.log("delete");
      
    } catch (error) {
      console.log(error);
      
    }
  };



  return (
    <>
    <Modal open={open} setOpen={setOpen} isUpdate/>
    <div className=''>
      <div className='flex justify-center flex-col mt-2 '>
        {
          contact.map((contact)=>(
            <div key={contact.id} className='w-[360px] flex bg-yellow-100 rounded-md mt-2 m-auto'>

              <div className='w-10 text-[30px] flex justify-center text-orange-400'> <i class="ri-user-fill"> </i></div>

              <div className='w-[240px]'>
                <h2 className='font-medium pt-[2px]'>{contact.Name}</h2>
                <p className='text-[14px] leading-1'>{contact.Email}</p>
              </div>

              <div className='w-[80px] flex justify-end gap-4 pt-[2px] '>
                <div className='text-[25px]'><i class="ri-edit-box-line cursor-pointer" onClick={editOpen}></i></div>

                <div className='text-[25px] pr-1 text-purple-700 cursor-pointer'><i class="ri-delete-bin-7-fill" onClick={()=>deleteContact(contact.id)}></i></div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default ContactCard