
import Cards from '@/components/Cards';
import Navbar from '@/components/Navbar';
import React from 'react'

const getProductInfo=async (category)=>{
    let res=await fetch(`http://localhost:3000/api/product?prodCategory=${category}`);
    let jsonData=await res.json();
    // console.log(jsonData.products);
    return jsonData.products;
}
const ProductName = async({params}) => {
    const product=await params;
    // console.log(product.productData);
    const productDetails=await getProductInfo(product.productData);
    // console.log(productDetails);
  return (
    <>
    <Navbar/>
    <div className='flex justify-evenly flex-wrap'>
        {productDetails?productDetails.map((prod,index)=>{
            return <div key={prod.id} className='w-[25rem] m-3 '>
                <Cards imageHref={prod.images[0]} prodTitle={prod.title} prodDesc={prod.description} prodRating={prod.rating} prodPrice={prod.price}/>
            </div>
        }):<div><span>No Data available for the {product} products</span></div>}
    </div>
    </>
  )
}

export default ProductName