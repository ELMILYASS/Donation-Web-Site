'use client'

import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Autoplay,Navigation,Pagination,Scrollbar,A11y } from 'swiper';

import Title from './Title';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div>
            <Title title='Testimonial' color='bg-green2'/>
            <h3 className='text-center text-xl text-green5 font-medium'>Take a look on what people say about us</h3>
        </div>
        <div className='bgtesti'>
            <Testimonial/>
        </div>
        {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={900}
            autoplay={{
                delay:3000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => ''}
            onSlideChange={() => ''}
        >
            <SwiperSlide><Testimonial/></SwiperSlide>
            <SwiperSlide><Testimonial/></SwiperSlide>
            <SwiperSlide><Testimonial/></SwiperSlide>
            <SwiperSlide><Testimonial/></SwiperSlide>
            <SwiperSlide><Testimonial/></SwiperSlide>
        </Swiper> */}
    </div>
  )
}
export default Testimonials