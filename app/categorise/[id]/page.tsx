import { getShopCategories, getSubCategories } from '@/apis/services/Categories'
import Link from 'next/link'
import React from 'react'
import { Subcategory } from '../../../apis/Types/cartType';

export default async function GetSubCat(props:{params:{id:string}}) {
  const params= await props.params
      const {id}=params
     const data= await getSubCategories()
               const datacat= await getShopCategories()
     console.log(data,'bbubu')
  return (
   <div className="max-w-7xl mx-auto px-4 py-12">

    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
      Subcategory
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {data.map((sub) => (
        <div
          key={sub._id}
          className="group bg-green-200 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-30 hover:-translate-y-1" >

          {/* Brand Image */}


          {/* Brand Info */}
          <div className="p-5 text-center">

            <h2
              className="text-lg font-semibold text-gray-900
                         group-hover:text-cyan-600
                         transition-colors duration-300"
            >
              {sub.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Discover our {sub.name} brands
            </p>

            <button
              className="mt-4 px-5 py-2 rounded-full bg-green-700
                         border border-gray-300
                         text-sm font-medium text-gray-700
                         hover:bg-gray-900 hover:text-white
                         transition-all duration-300 cursor-pointer"
            >
         <Link  href={`/categorise/${id}/${sub._id}`}>    View Products</Link>   
            </button>

          </div>

        </div>
      ))}

    </div>
  </div>
  )
}
