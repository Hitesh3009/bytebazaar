import Image from 'next/image'
import React from 'react'
import { RiStarSFill } from "react-icons/ri";

const Cards = ({imageHref,prodName}) => {
    return (
        <div>
            <div className='rounded-tr-2xl rounded-bl-2xl w-48 h-72 lg:w-56 lg:h-[21rem] flex flex-col bg-linear-to-l from-fuchsia-500 via-purple-600 to-indigo-700'>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-20 h-5 lg:w-28 lg:h-7 text-wrap mt-5 ml-2'>
                        <span id="title" className='font-bold text-sm lg:text-xl'>{prodName}</span>
                        <span id="desc" className='text-wrap text-xs lg:text-sm'>Lorem ipsum dolor sit, amet consectetur </span>
                    </div>
                    <div className='flex w-12 mt-5 lg:mr-2.5'>
                        <span id="price" className='font-bold border-1 text-xs flex items-center justify-center p-1 lg:p-2 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-yellow-600 text-white'>Rs.499</span>
                    </div>
                </div>
                <div className='flex justify-center mt-10 lg:mt-14'>
                    <Image src={imageHref} width={100} height={100} alt='Tshirt Image' className='rounded-full w-28 lg:w-32'/>
                </div>
                <div className='my-5'>
                    <div className='flex justify-between items-center'>
                        <span id="rating" className='flex'><RiStarSFill className='text-2xl text-yellow-400'/>4</span>
                        <button id='cartBtn' className='w-20 h-9 border-1 border-blue-400 bg-blue-400 text-xs rounded-3xl cursor-pointer text-white mr-1.5'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards