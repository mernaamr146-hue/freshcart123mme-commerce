'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider({
  spaceBetween,
  slidesPerView,
  pageList,
}: {
  spaceBetween: number
  slidesPerView: number
  pageList: string[]
}) {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay:3000,
        disableOnInteraction:false,
      }}
      modules={[Autoplay,Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {pageList.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            width={400}
            height={300}
            priority={index === 0}
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}