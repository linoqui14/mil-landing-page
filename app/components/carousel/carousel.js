"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import testimonialData from '../carousel/testament.json';


const slideContent = testimonialData.testaments.map((testimonial, index) => (
  <SwiperSlide key={index}>
    <div className='flex flex-col justify-between items-center h-5/6 w-full'>
      <div className='text-carousel mb-8 lg:h-56 overflow-ellipsis'>
        {testimonial.testament}
      </div>
      <div className='default-img'>
        {/* You can replace this with the actual image source if available in your data */}

        <Image alt='default' width={50} height={50} src={testimonial.image==""?'/images/icons/default.jpg':`/images/testaments_images/${testimonial.image}`} style={{ width: '50px', height: '50px', borderRadius: '100px' }} />
      </div>
      <div className='flex flex-col'>
        <div className='client-name'>
          {testimonial.name}
        </div>
        <div className='client-job'>
          {testimonial.job}
        </div>
      </div>
    </div>
  </SwiperSlide>
));

export default function SliderPerview() {
  return (
    <>
     <div className=' h-full mt-10 mx-10 lg:block hidden'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {slideContent}
        </Swiper>

      </div>
      <div className=' h-full mt-10 lg:hidden'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {slideContent}
        </Swiper>

      </div>
    </>
   

  );
}
