
'use client'
import { deleteWishlist } from '@/apis/action/cartActions/deleteWishlist'
import { getCart } from '@/apis/action/cartActions/getCart'
import { WishResponseType } from '@/apis/Types/wishlistType'
import { toast } from '@/components/ui/toast'
import { useMutation, useQuery, useQueryClient, } from '@tanstack/react-query'
import React from 'react'
export default function WishlistComp() {


  const query= useQueryClient()
  const{data:wishlistData , isLoading}= useQuery<WishResponseType>({
  queryKey:['getWishlist'],
  queryFn:async()=>{
    const response =await fetch('/api/wishlist')
    if(!response.ok) throw new Error('faild to fetch')
      return response.json()
  }
  
  })
     console.log('wishlist data',wishlistData);
  
     //delete item
     const {data:delData,mutate:delWishItem}=useMutation({
      mutationFn:deleteWishlist,
      onSuccess:()=>{
   toast.add({
                type: "success",
                description: 'Product Deleted Successfully',
              })
              query.invalidateQueries({queryKey:['getWishlist']})
      },
      onError:()=>{
   toast.add({
                type: "error",
                description: 'Failed',
              })
      }
     })
  
 
  
 
  
     if(isLoading){
      return<h2>is loading...</h2>
     }
  return (
   <>

  {wishlistData && wishlistData.data?.length > 0 ? (
  <div className="max-w-7xl mx-auto mt-5">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
      My WishList
    </h1>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {wishlistData.data.map((product) => (
        <div key={product._id} className="perspective-1000 min-h-[480px]">
          <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden h-70">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">
                      {product.price} EGP
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>⭐</span>
                    {product.ratingsAverage}
                  </div>

                  <button
                    onClick={() => delWishItem(product._id)}
                    className="w-1/2 bg-red-600 rounded-2xl hover:bg-red-400 text-amber-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-gray-300 mb-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={9} cy={21} r={1} />
      <circle cx={20} cy={21} r={1} />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>

    <p className="text-gray-500">Your WishList is empty.</p>
  </div>
)}
   </>
  )
}
