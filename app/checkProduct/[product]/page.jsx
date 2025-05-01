'use client';
import React, { useEffect, useState } from 'react'
import { RiStarSFill } from 'react-icons/ri';

const getProductDetails = async (prod) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${prod}`);
  const jsonData = await res.json();
  return jsonData;
}


const CheckProduct = ({ params }) => {
  const [imageArr, setImageArr] = useState([]);
  const [imgClick, setImageClick] = useState(null);
  const [displayProdDetails, setDisplayProdDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const prodName = await params;
      const prodDetails = await getProductDetails(prodName.product);
      const imagesArr = prodDetails.products[0].images
      setDisplayProdDetails(prodDetails.products[0]);
      setImageArr(imagesArr);
      setImageClick(imagesArr[0]);
    };
    fetchData();
  }, [params])
  const imagesCount = imageArr.length;
  const handleClickedImg = (img) => {
    setImageClick(img);
  }
  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.substring(1, word.length + 1).toLowerCase()
  }
  return (
    <div className=' flex justify-center mt-5'>
      <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 w-5/6">
        {/* Column 1 with subgrid */}
        <div className={`grid grid-rows-[${imagesCount}] gap-2 p-4 shadow rounded flex justify-between flex-wrap items-center`}>
          {imagesCount > 0 ? imageArr.map((image, index) => {
            return <button className="bg-blue-200 p-4 rounded w-56 h-56 cursor-pointer" key={index} onClick={() => handleClickedImg(image)}><img src={image} alt="Product Image" /></button>
          }) : <div> No Image to Display </div>}
        </div>

        {/* Column 2 */}
        <div className="bg-rose-300 shadow rounded flex items-center">
          <img src={imgClick} alt="Selected Product Image" />
        </div>

        {/* Column 3 */}
        <div className="bg-gray-200 px-2 py-1 shadow rounded">
          {displayProdDetails && <div className='space-y-5'>
            <div id='prodTitleAndBrand' className='flex justify-between overflow-hidden'>
              <span className='font-bold text-xl text-center'>{displayProdDetails.title}</span>
              {displayProdDetails.brand ? <span className='bg-pink-800 rounded-b-full p-4 flex items-center text-[0.85rem] -mt-2 text-gray-200'>{displayProdDetails.brand}</span> : <span></span>}
            </div>
            <div id='ratingAndPrice' className='flex justify-between px-3'>
              <p className='text-lg flex items-center'><RiStarSFill className='text-2xl text-yellow-400 mr-2' />{displayProdDetails.rating}</p>
              <p className='text-lg flex items-center font-semibold'>${displayProdDetails.price}</p>
            </div>
            <div id="tags">
              {
                displayProdDetails.tags.length > 0 && <div className='flex justify-evenly '>
                  {
                    displayProdDetails.tags.map((tagName, index) => {
                      return <p key={index} className='bg-teal-600 p-2 rounded-lg text-center text-white'>{capitalizeFirstLetter(tagName)}</p>
                    })
                  }
                </div>
              }
            </div>
            <div id='dimensionAndCat' className='flex justify-between items-center px-4'>
              <div className='flex flex-col space-y-1'>
                <span className='font-semibold'>Width : {displayProdDetails.dimensions.width}</span>
                <span className='font-semibold'>Height : {displayProdDetails.dimensions.height}</span>
                <span className='font-semibold'>Depth : {displayProdDetails.dimensions.depth}</span>
              </div>
              <div id='categorySec'>
                <p className='bg-amber-600 px-3.5 py-2 text-center text-white rounded-lg'>{capitalizeFirstLetter(displayProdDetails.category)}</p>
              </div>
            </div>
            <hr />
              <div id='prodDesc'>
                <p className='text-justify px-1.5'>{displayProdDetails.description}</p>
              </div>
          </div>}
        </div>
      </div>
    </div>

  )
}

export default CheckProduct