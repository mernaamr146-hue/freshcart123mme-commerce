import getAllBrands from '@/apis/services/Brand'
import React from 'react'
import { Brand } from '@/apis/Types/ProductTypes';
import Image from 'next/image';
import { Product } from '../../apis/Types/cartType';
import Link from 'next/link';

export default async function Brands({product}:{product:Brand}) {

  const data= await getAllBrands()
  console.log(data);
 return (
  <div className="max-w-7xl mx-auto px-4 py-12">

    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
      Our Brands
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {data.map((brand) => (
        <div
          key={brand._id}
          className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-30 hover:-translate-y-1" >

          {/* Brand Image */}
          <div className="h-52 flex items-center justify-center bg-gray-50 p-6">
            <Link href={`/BrandDetails/${brand._id}`}>  <Image width={300} height={200} src={brand.image} alt={brand.name}className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" /></Link>
          </div>

          {/* Brand Info */}
          <div className="p-5 text-center">

            <h2
              className="text-lg font-semibold text-gray-900
                         group-hover:text-cyan-600
                         transition-colors duration-300"
            >
              {brand.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Discover our {brand.name} brands
            </p>

            <button
              className="mt-4 px-5 py-2 rounded-full
                         border border-gray-300
                         text-sm font-medium text-gray-700
                         hover:bg-gray-900 hover:text-white
                         transition-all duration-300 cursor-pointer"
            >
         <Link  href={`/BrandDetails/${brand._id}`}>    View Products</Link>   
            </button>

          </div>

        </div>
      ))}

    </div>
  </div>
)
}
