import { getSigleProduct } from '@/apis/services/ProductApi'
import AddBtn from '@/app/_component/AddBtn/AddBtn'
import AddBtnWishlist from '@/app/_component/AddBtnWishlist/AddBtnWishlist'
import Slider from '@/app/_component/Slider/Slider'
import Image from 'next/image'
import React from 'react'

export default async function ProductDetails(props:{params:{id:string}}) {
  const params= await props.params
  const {id}=params
    const data=await getSigleProduct(id) 
    
        console.log(data)
  return (
    <>
    <div className="bg-gray-100 mt-4">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
      {/* Product Images */}
      <div className="w-full md:w-1/2 px-4 mb-8">
        <Image width={400} height={300} src={data.imageCover} alt={data.title} className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
        <div className="flex gap-4 py-4 justify-center overflow-x-auto">

          <Slider spaceBetween={1} slidesPerView={3} pageList={data.images}/>

        </div>
      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600 mb-4">{data.category.name}</p>
        <div className="mb-4">
           {data.priceAfterDiscount?<><span className="text-blue-600 text-xl font-semibold">{data.priceAfterDiscount}EGP</span>
          <span className="text-gray-400 text-sm line-through">{data.price}EGP</span></>:<span className="text-gray-400 text-sm">{data.price}EGP</span>}
          
        </div>
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-gray-600">{data.ratingsAverage}</span>
        </div>
        <p className="text-gray-700 mb-6">{data.description}</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color:</h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" />
            <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min={1} defaultValue={data.quantity} className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="flex space-x-4 mb-6">
                <AddBtn  prodId={data._id}/>

          <AddBtnWishlist prodId={data._id}/>
        </div> 
        
       
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Industry-leading noise cancellation</li>
            <li>30-hour battery life</li>
            <li>Touch sensor controls</li>
            <li>Speak-to-chat technology</li>
          </ul>
        </div>
      </div>
    </div>
  </div>



    </>
  )
}
