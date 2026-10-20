'use client'
import { addToWishlist } from '@/apis/action/cartActions/addToWishlist'
import { deleteWishlist } from '@/apis/action/cartActions/deleteWishlist'

import { toast } from '@/components/ui/toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function AddBtnWishlist({prodId}:{prodId:string}) {

   const query= useQueryClient()
  
const { data: wishlistData } = useQuery({
    queryKey: ['getWishlist'],
    queryFn: async () => {
      const response = await fetch('/api/wishlist')
      if (!response.ok) throw new Error('failed to fetch')
      return response.json()
    },
  })

  const isInWishlist = wishlistData?.data?.some(
    (product: any) => product._id === prodId
  )

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      isInWishlist ? deleteWishlist(prodId) : addToWishlist(prodId),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['getWishlist'] })
      toast.add({
        type: 'success',
        description: isInWishlist
          ? 'Product removed from Wishlist'
          : 'Product added to Wishlist',
      })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Please login first' })
    },
  })

  return (
    <button onClick={() => mutate()} disabled={isPending}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${isInWishlist ? 'text-red-600' : 'text-gray-600'}`}
        fill={isInWishlist ? 'red' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
      </svg>
    </button>
  )
}
