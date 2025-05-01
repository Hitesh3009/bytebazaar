'use client'
import React, { useEffect, useState } from 'react'
import { IoShirtSharp } from "react-icons/io5";
import { GiHoodie, GiCoffeeMug } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let res = await fetch('http://localhost:3000/api/products');
    let jsonData = await res.json();

    setCategories(jsonData);
    console.log(jsonData)
  }
  const handleHamburger = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className='bg-gray-900 p-4 '>
      {/* <div className='flex justify-center'>
        <Image src="/bytebazaarLogo.png" width={100} height={100} alt="Byte Bazaar Logo" className='w-22h-2/12 h-2/12 sm:w-20 sm:h-20 my-3 sm:-ml-24 md:-ml-32 lg:-ml-72' />
      </div> */}
      <button onClick={handleHamburger} className='cursor-pointer '>
        <hr className='text-white py-1.5 w-10' />
        <hr className='text-white py-1.5 w-10' />
        <hr className='text-white py-1.5 w-10' />
      </button>

      <div>
        {isDropdownOpen ? (
          <div className='bg-gray-500 p-4 h-1/2'>
            <ul className='grid grid-cols-4 gap-4'>
              {categories.map((category, index) => {
                return <li key={index} className='my-3 sm:my-0'><Link href={`/${category.slug}`} className={`mr-5 ${pathname === `/${category.slug}` ? 'py-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-500/75 px-3 md:px- flex items-center text-pink-600 md:text-base lg:text-lg' : 'flex flex-col hover:bg-blue-300 hover:rounded-lg px-2 py-1 hover:shadow-lg hover:shadow-blue-500/75 text-white hover:text-black'}`}>{category.name}</Link></li>
              })}
            </ul>
        </div>) : (<div></div>)}
      </div>
      
    </div>
  )
}

export default Navbar