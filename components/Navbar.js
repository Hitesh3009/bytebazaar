import React from 'react'
import { IoShirtSharp } from "react-icons/io5";
import { GiHoodie, GiCoffeeMug } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='bg-indigo-200 p-5'>
      <ul className='flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-center'>
      <Image src="/bytebazaarLogo.png" width={100} height={100} alt="Byte Bazaar Logo" className='w-32 h-20 sm:w-20 sm:h-20 my-3 sm:-ml-24 md:-ml-32 lg:-ml-72'/>
      <li className='my-3 sm:my-0'><Link href={'/tshirts'}><IoShirtSharp className='text-5xl cursor-pointer' />T-Shirts</Link></li>
      <li className='my-3 sm:my-0'><Link href={'/hoodies'}><GiHoodie className='text-5xl cursor-pointer' />Hoodies</Link></li>
      <li className='my-3 sm:my-0'><Link href={'/mugs'}><GiCoffeeMug className='text-5xl cursor-pointer' />Mugs</Link></li>
      </ul>
      
    </div>
  )
}

export default Navbar