import { getAllProducts } from '@/apis/services/ProductApi'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default async function ProductFeature() {

    const data=await getAllProducts() 
    console.log(data)
  return (
    <>
        <h2  className='text-2xl font-bold border-l-4 border-l-black my-2 p-3 text-cyan-400'>Featured Products</h2>

    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {data.map((product)=>{return <ProductCard product={product} key={product._id}></ProductCard>})}

    </div>
    </>
  )
}
