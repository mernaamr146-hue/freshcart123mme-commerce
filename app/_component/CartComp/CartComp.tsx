'use client'
import { clearCart } from '@/apis/action/cartActions/clearCart'
import { deleteCartitem } from '@/apis/action/cartActions/deleteCartitem'
import { getCart } from '@/apis/action/cartActions/getCart'
import { updateCart } from '@/apis/action/updateCartitem'
import { CartResponseType } from '@/apis/Types/cartType'
import { toast } from '@/components/ui/toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

export default  function CartComp() {
 const query= useQueryClient()
const{data:cartData , isLoading}= useQuery<CartResponseType>({
queryKey:['getCart'],
queryFn:async()=>{
  const response =await fetch('/api/cart')
  if(!response.ok) throw new Error('faild to fetch')
    return response.json()
}

})
   console.log('cart data',cartData);

   //delete item
   const {data:delData,mutate:delCartitem}=useMutation({
    mutationFn:deleteCartitem,
    onSuccess:()=>{
 toast.add({
              type: "success",
              description: 'product Deleted Successfully',
            })
            query.invalidateQueries({queryKey:['getCart']})
    },
    onError:()=>{
 toast.add({
              type: "error",
              description: 'failed',
            })
    }
   })

   //update
    const {data:updateData,mutate:updateCartitem}=useMutation({
    mutationFn:updateCart,
    onSuccess:()=>{
 toast.add({
              type: "success",
              description: 'Product Updated Successfully',
            })
            query.invalidateQueries({queryKey:['getCart']})
    },
    onError:()=>{
 toast.add({
              type: "error",
              description: 'Failed',
            })
    }
   })

   //clearCart

    const {data:clearData,mutate:clearcartt}=useMutation({
    mutationFn:clearCart,
    onSuccess:()=>{
 toast.add({
              type: "success",
              description: 'Cart Cleard Successfully',
            })
            query.invalidateQueries({queryKey:['getCart']})
    },
    onError:()=>{
 toast.add({
              type: "error",
              description: 'Failed',
            })
    }
   })

function HandleUpdateCart(prodId:string,count:number){
updateCartitem({prodId,count})

}

   if(isLoading){
    return<h2>is loading...</h2>
   }
 return (
  <>
    {cartData?.numOfCartItems ? (
      <section className="w-full bg-white dark:bg-[#0A2025] px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-9">
        <h1 className="text-center text-[#191919] dark:text-white text-2xl sm:text-[32px] font-semibold leading-tight">
          My Shopping Cart
        </h1>

        <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Cart Table */}
          <div className="min-w-0 w-full lg:flex-1 bg-white rounded-xl p-2 sm:p-4">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[680px] bg-white rounded-xl">
                <thead>
                  <tr className="text-center border-b border-gray-400 text-[#7f7f7f] text-xs sm:text-sm font-medium uppercase tracking-wide">
                    <th className="text-left px-2 py-3">Product</th>
                    <th className="px-2 py-3">Price</th>
                    <th className="px-2 py-3">Quantity</th>
                    <th className="px-2 py-3">Subtotal</th>
                    <th className="w-10 px-2 py-3" />
                  </tr>
                </thead>

                <tbody>
                  {cartData.data.products.map((product) => (
                    <tr key={product._id} className="text-center border-b border-gray-100">
                      <td className="px-2 py-3 text-left align-middle">
                        <div className="flex items-center gap-3 min-w-[210px]">
                          <img
                            src={product.product.imageCover}
                            alt={product.product.title}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
                          />
                          <span className="text-sm text-[#191919] line-clamp-3">
                            {product.product.title}
                          </span>
                        </div>
                      </td>

                      <td className="px-2 py-3 whitespace-nowrap text-sm text-[#191919]">
                        {product.price} EGP
                      </td>

                      <td className="px-2 py-3">
                        <div className="mx-auto flex w-fit items-center justify-around gap-3 rounded-full border border-[#a0a0a0] px-3 py-2">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            disabled={product.count <= 1}
                            onClick={() =>
                              HandleUpdateCart(
                                product.product._id,
                                product.count - 1
                              )
                            }
                            className="cursor-pointer disabled:opacity-40"
                          >
                            <svg width={14} height={15} viewBox="0 0 14 15" fill="none">
                              <path
                                d="M2.33398 7.5H11.6673"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>

                          <span className="min-w-5 text-center text-[#191919] text-sm">
                            {product.count}
                          </span>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              HandleUpdateCart(
                                product.product._id,
                                product.count + 1
                              )
                            }
                            className="cursor-pointer"
                          >
                            <svg width={14} height={15} viewBox="0 0 14 15" fill="none">
                              <path
                                d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>

                      <td className="px-2 py-3 whitespace-nowrap text-sm text-[#191919]">
                        {product.count * product.price} EGP
                      </td>

                      <td className="px-2 py-3">
                        <button
                          type="button"
                          aria-label="Remove product"
                          onClick={() => delCartitem(product.product._id)}
                          className="cursor-pointer"
                        >
                          <svg width={24} height={25} viewBox="0 0 24 25" fill="none">
                            <path
                              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                              stroke="#CCCCCC"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M16 8.5L8 16.5M16 16.5L8 8.5"
                              stroke="#666666"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <td className="px-2 py-4" colSpan={5}>
                      <button
                        type="button"
                        onClick={() => clearcartt()}
                        className="px-5 sm:px-8 py-3 bg-[#f2f2f2] rounded-full text-[#4c4c4c] text-sm font-semibold cursor-pointer"
                      >
                        Clear Cart
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Cart Total */}
          <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 bg-white rounded-lg border border-gray-100 p-4 sm:p-6">
            <h2 className="text-[#191919] mb-2 text-xl font-medium">
              Cart Total
            </h2>

            <div className="w-full py-3 flex justify-between items-center gap-4">
              <span className="text-[#4c4c4c] text-sm sm:text-base">Total:</span>
              <span className="text-[#191919] text-sm sm:text-base font-semibold">
                {cartData.data.totalCartPrice} EGP
              </span>
            </div>

            <div className="w-full py-3 border-b border-gray-100 flex justify-between items-center gap-4">
              <span className="text-[#4c4c4c] text-sm">Shipping:</span>
              <span className="text-[#191919] text-sm font-medium">Free</span>
            </div>

            <div className="w-full py-3 border-b border-gray-100 flex justify-between items-center gap-4">
              <span className="text-[#4c4c4c] text-sm">Number of items:</span>
              <span className="text-[#191919] text-sm font-medium">
                {cartData.numOfCartItems}
              </span>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <Link
                href={`/checkout/${cartData.cartId}`}
                className="w-full text-center text-white px-4 py-3 bg-[#00b206] hover:bg-green-700 rounded-full text-sm font-semibold transition"
              >
                Cash Checkout
              </Link>

              <Link
                href={`/checkout/online/${cartData.cartId}`}
                className="w-full text-center text-white px-4 py-3 bg-[#00b206] hover:bg-green-700 rounded-full text-sm font-semibold transition"
              >
                Online Checkout
              </Link>
            </div>
          </div>
        </div>

        {/* Coupon Code */}
        <div className="mt-6 w-full lg:w-[calc(100%-364px)] xl:w-[calc(100%-404px)] bg-white rounded-lg border border-[#e6e6e6] p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h3 className="text-[#191919] text-lg sm:text-xl font-medium shrink-0">
              Coupon Code
            </h3>

            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-0 border border-[#e6e6e6] rounded-full overflow-hidden">
              <input
                placeholder="Enter code"
                type="text"
                className="w-full min-w-0 px-5 py-3 outline-none bg-white text-[#333333] text-sm sm:text-base"
              />

              <button
                type="button"
                className="shrink-0 px-6 py-3 bg-[#333333] hover:bg-black text-white text-sm sm:text-base font-semibold transition cursor-pointer"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div className="mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 py-12 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 sm:w-24 sm:h-24 text-gray-300 mb-4"
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

        <p className="text-gray-500 text-base sm:text-lg">
          Your Cart is empty.
        </p>
      </div>
    )}
  </>
)
}
