import React from 'react'
import logo from '../public/assets/logo.jpg'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-white fixed z-[40] p-3 flex items-center justify-between'>
      <div className='w-full'>
        <Image src={logo} alt="/" className='w-16 rounded-full object-fit'/>
      </div>
      <div className='w-full flex items-center justify-between gap-3 text-xl'>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>Home</Link>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>About</Link>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>Skills</Link>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>Projects</Link>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>Resume</Link>
        <Link href="#" className='hover:bg-black hover:text-white p-2 rounded-xl'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
