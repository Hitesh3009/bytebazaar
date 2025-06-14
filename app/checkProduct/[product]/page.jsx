'use client';
import React, { useEffect, useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

const getProductDetails = async (prod) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${prod}`);
  const jsonData = await res.json();
  return jsonData;
};

const CheckProduct = ({ params }) => {
  const [imageArr, setImageArr] = useState([]);
  const [reviewsArr, setReviewsArr] = useState([]);
  const [imgClick, setImageClick] = useState(null);
  const [displayProdDetails, setDisplayProdDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const prodName = await params;
      const prodDetails = await getProductDetails(prodName.product);
      const imagesArr = prodDetails.products[0].images;
      setDisplayProdDetails(prodDetails.products[0]);
      setImageArr(imagesArr);
      setReviewsArr(prodDetails.products[0].reviews);
      setImageClick(imagesArr[0]);
    };
    fetchData();
  }, [params]);

  const handleClickedImg = (img) => setImageClick(img);

  const capitalizeFirstLetter = (word) =>
    word[0].toUpperCase() + word.substring(1).toLowerCase();

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < Math.floor(count); i++) {
      stars.push(<RiStarSFill key={i} className="text-yellow-400 text-[1.2rem]" />);
    }
    return stars;
  };

  return (
    <>
      <div className='flex justify-center mt-5 px-2'>
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr_1.5fr] gap-4 p-4 bg-gray-100 w-full max-w-7xl rounded-lg shadow-lg">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide max-h-[26rem] p-2">
            {imageArr.length > 0 ? (
              imageArr.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleClickedImg(image)}
                  className="bg-blue-200 p-1.5 rounded aspect-square w-20 h-20 flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Product Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))
            ) : (
              <div>No Image to Display</div>
            )}
          </div>

          {/* Main Image */}
          <div className="bg-rose-300 p-2 flex justify-center items-center rounded">
            {imgClick && (
              <img
                src={imgClick}
                alt="Selected Product"
                className="max-w-full max-h-[25rem] object-contain rounded"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="bg-gray-200 px-4 py-2 rounded overflow-auto max-h-[26rem] space-y-5">
            {displayProdDetails && (
              <>
                <div className='flex justify-between items-center flex-wrap'>
                  <h1 className='font-bold text-xl'>{displayProdDetails.title}</h1>
                  {displayProdDetails.brand && (
                    <span className='bg-pink-800 text-white rounded-full px-3 py-1 text-sm mt-2 lg:mt-0'>
                      {displayProdDetails.brand}
                    </span>
                  )}
                </div>

                <div className='flex justify-between items-center text-lg flex-wrap'>
                  <p className='flex items-center'>
                  {renderStars(displayProdDetails.rating)}
                  </p>
                  <p className='font-semibold'>${displayProdDetails.price}</p>
                </div>

                <div>
                  <span className='font-semibold text-lg'>Tags:</span>
                  <div className='flex flex-wrap gap-2 mt-1'>
                    {displayProdDetails.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='bg-teal-600 text-white text-sm px-3 py-1 rounded-lg'
                      >
                        {capitalizeFirstLetter(tag)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex justify-between text-sm flex-wrap'>
                  <div className='space-y-1'>
                    <p><strong>Width:</strong> {displayProdDetails.dimensions.width}</p>
                    <p><strong>Height:</strong> {displayProdDetails.dimensions.height}</p>
                    <p><strong>Depth:</strong> {displayProdDetails.dimensions.depth}</p>
                  </div>
                  <div className='mt-2 lg:mt-0'>
                    <span className='bg-amber-600 text-white px-3 py-1 rounded-lg'>
                      {capitalizeFirstLetter(displayProdDetails.category)}
                    </span>
                  </div>
                </div>

                <hr />
                <p className='text-justify text-sm'>
                  {displayProdDetails.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div id='reviewsSec' className='flex justify-center mt-10 mx-3'>
        <div className='p-4 w-full max-w-7xl'>
          <p className='text-2xl sm:text-3xl font-semibold mb-5'>Reviews</p>
          {reviewsArr.length > 0 ? (
            reviewsArr.map((reviews, index) => (
              <div key={index} className='border-2 p-4 border-gray-300 rounded-md mb-4'>
                <div className='flex justify-between flex-wrap gap-2'>
                  <span className='font-medium'>{reviews.reviewerName}</span>
                  <span className='text-sm text-gray-500'>
                    {reviews.date?.substring(0, 10)?.split('-').reverse().join('-')}
                  </span>
                </div>
                <div className='flex justify-between items-center text-sm mt-1 flex-wrap gap-2'>
                  <span className='text-gray-600'>( {reviews.reviewerEmail} )</span>
                  <span className='flex gap-1'>{renderStars(reviews.rating)}</span>
                </div>
                <div className='mt-2'>
                  <p className='font-bold'>{reviews.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <span>No reviews available for this product</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckProduct;
