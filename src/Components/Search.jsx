import React, { useState } from 'react'
import ContactCard from './ContactCard'
import Modal from './Modal'

const Search = () => {

  let [open, setOpen]= useState(false);

let onOpen=()=>{
  setOpen(true);
  console.log('clicked');
  
}
  return (
    <>
    <div className='flex justify-center'>
      <div className='w-[360px] h-12 mt-2 flex'>

        <div className='flex justify-center'>
          <div className='absolute pr-[275px] pt-[5.5px] text-white'><i class="ri-search-line"></i></div>

          <div className='w-[300px] h-10 relative'>

            <input type="text" placeholder='Search Contact' className='w-[300px] h-10 border-[1px] border-white outline-none pl-7 text-white rounded-md'/>
          </div>

        </div>

        <div className='w-[60px] justify-end flex items-center text-[48px] text-white'>
        <i class="ri-add-circle-fill  cursor-pointer" onClick={onOpen}></i>
        </div>

      </div>
    </div>
    
    <ContactCard />
    <Modal open={open} setOpen={setOpen}/>
    </>
  )
}

export default Search