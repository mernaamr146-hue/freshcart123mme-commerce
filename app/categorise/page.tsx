import { getShopCategories } from '@/apis/services/Categories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Categorise() {
     const data= await getShopCategories()
  
  return (

<div className="max-w-7xl mx-auto px-4 py-12">

    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
      Our Brands
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {data.map((category)=> {return  <div  className='flex flex-col items-center shadow-sm hover:shadow-xl transition-all duration-30 hover:-translate-y-1 rounded-2xl'>
<Link href={`/categorise/${category._id}`}>                                 <Image className='rounded-2xl w-25 h-25' src={category.image} alt={category.name} width={200} height={200}></Image>
</Link>
                                 
                                 <h4>{category.name}</h4>
                             </div>})}

    </div>
  </div>

  )
}
