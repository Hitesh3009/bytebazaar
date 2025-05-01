import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiStarSFill } from "react-icons/ri";

const Cards = ({ imageHref, prodTitle, prodDesc, prodRating, prodPrice }) => {
    return (
        <div className="border-2 h-96 flex">
            <div id="prodImage" className="bg-blue-200 h-full w-[42%] flex items-center justify-center">
                <div className="relative w-32 h-32">
                    <Image
                        src={imageHref}
                        alt="Product Image"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <span className="inline-block min-h-[1em] w-0.5 self-stretch dark:bg-black/50"></span>
            <div id='prodDetails' className='p-4 space-y-3 flex flex-col w-full'>
                <p className='text-black text-lg font-semibold'>{prodTitle}</p>
                <p className='text-black text-justify'>{prodDesc}</p>
                <div className='flex justify-between items-center grow'>
                <p className='flex items-center'><RiStarSFill className='text-3xl text-yellow-400'/>{prodRating}</p>
                <p>{prodPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <button id="addToCart" className='bg-green-600 p-2 rounded-lg text-white cursor-pointer'>
                        Add To Cart
                    </button>
                    <button id="addToCart" className='bg-blue-600 p-2 rounded-lg text-white cursor-pointer'>
                        <Link href={`/checkProduct/${prodTitle}`}>Check Product</Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;
