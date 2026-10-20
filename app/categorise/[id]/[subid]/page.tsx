import { getShopCategories, getSubCategories } from '@/apis/services/Categories'
import Link from 'next/link'
import React from 'react'
import { getAllProducts } from '@/apis/services/ProductApi';
import Image from 'next/image';

export default async function GetSpecficCat(props:{params:{id:string}}) {
    const params= await props.params
      const {id}= await params;

       const dataProd= await getAllProducts()

       
      const filteredProducts = dataProd.filter(
  (product) => product.category._id === id
      )
  return (
<>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

   {filteredProducts?.length>0?  (filteredProducts.map((product)=> ( <div className="my-2"  key={product._id}>
  <div className=" border border-blue-200 rounded-lg shadow-md p-4">
    {/* Discount Badge */}
    <div className="relative">
      <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
        -20%
      </span>
      {/* <span className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><AddBtnWishlist prodId={product._id}/></span> */}
      {/* Wishlist Icon */}
     
      {/* Product Image */}
      <div>
        <Link href={`/ProductDetails/${product._id}`}>
                <Image width={300} height={200} src={product.imageCover} alt={product.title} className="object-contain w-full  fill" />

        </Link>
      </div>
    </div>
    {/* Product Details */}
    <div className="mt-4">
      <h3 className="text-gray-800 font-medium text-base line-clamp-1">
       {product.title}
      </h3>
      <p className="uppercase text-green-600 text-xs font-medium">
        {product.category.name}
      </p>
      {/* Ratings */}
      <div className="flex space-x-1 text-orange-500 text-sm mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        <span>{product.ratingsAverage}</span>
                <span className='text-amber-600'>{product.brand.name}</span>

      </div>
      {/* Pricing */}
      <div className="flex items-end justify-between">
        <div className="flex items-baseline space-x-2 mt-2">
            {product.priceAfterDiscount?<><span className="text-blue-600 text-xl font-semibold">{product.priceAfterDiscount}EGP</span>
          <span className="text-gray-400 text-sm line-through">{product.price}EGP</span></>:<span className="text-gray-400 text-sm">{product.price}EGP</span>}
          
        </div>
       {/* <AddBtn  prodId={product._id}/> */}
      </div>
    </div>
  </div>
</div>))): 

    <div  className="col-start-2 text-center  py-12 min-h-[50vh] text-3xl ">
      <p className="text-gray-500 ">No product is availble <span className='text-cyan-500'>in this </span>brand</p>
   
  </div>
}
</div>
</>
    )
}
