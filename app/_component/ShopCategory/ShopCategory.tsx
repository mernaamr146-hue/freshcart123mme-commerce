import { getShopCategories } from '@/apis/services/Categories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ShopCategory() {
   const data= await getShopCategories()
  return (
    <div className='my-5'>
                <h2 className='text-2xl font-bold text-green-600 border-l-4  border-l-black my-5 p-3'>Shop By Category</h2>
                <div className="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

                    
                       {data.map((category)=> {return  <div  className='flex flex-col items-center shadow-sm hover:shadow-xl transition-all duration-30 hover:-translate-y-1 rounded-2xl'>
                       <Link href={`/categorise/${category._id}`}>                                 <Image className='rounded-2xl w-25 h-25' src={category.image} alt={category.name} width={200} height={200}></Image>
                       </Link>
                                                        
                                                        <h4>{category.name}</h4>
                                                    </div>})}
                    
                </div>


    </div>
  )
}
