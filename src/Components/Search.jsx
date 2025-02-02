import React from 'react'
import ContactCard from './ContactCard'

const Search = () => {
  return (
    <>
    <div className='flex justify-center'>
        <div className='flex w-[360px] justify-center mt-2'>
        <div className='text-white absolute pt-1.5'><i class="ri-search-line pr-83"></i></div>
        <div>
            <input type="text" placeholder='Search Contact' className='w-[300px] h-10 border-[1px] border-white outline-none rounded-md text-white relative pl-7' />
        </div>
        <div className='text-white w-12 h-12 text-[48px] mt-[-19px] ml-3'><i class="ri-add-circle-fill cursor-pointer "></i></div>
        </div>
    </div>
    <ContactCard />
    </>
  )
}

export default Search