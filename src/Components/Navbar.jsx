import React from 'react'
import Logo from '../assets/logos.svg'
import Search from './Search'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center'>

        <div className='flex gap-2 h-12 w-[350px] bg-white justify-center text-center rounded-md mt-2 pt-2'>
          <div><img src= {Logo} alt="" /></div>
          <div className='font-medium text-[18px]'>Firebase contact App</div>
        </div>
    </div>

    <Search />
    </>
  )
}

export default Navbar