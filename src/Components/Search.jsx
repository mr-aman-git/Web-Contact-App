import React from 'react'
import ContactCard from './ContactCard'

const Search = () => {
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
        <i class="ri-add-circle-fill  cursor-pointer"></i>
        </div>

      </div>
    </div>
    <ContactCard />
    </>
  )
}

export default Search