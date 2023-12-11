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

let slideContent = [
  <SwiperSlide key={1}>
    <div className='flex flex-col justify-between items-center h-5/6 w-full'>
      <div className='text-carousel mb-8 lg:h-56 overflow-ellipsis'>
      “Mike helped me save a little over $100,000 on taxes over the years. He now has me funded my health savings account, IRA account, health insurance for my whole family, and now working on a will. My financial life has been totally organized and sorted by Mike.”
      </div>
      <div className='default-img' >
        <Image alt='default' width={50} height={50} src='/images/icons/default.jpg' style={{width:'50px',height:"50px" ,borderRadius:'100px'}}/>
      </div>
      <div className='flex flex-col'>
        <div className='client-name'>
          Jeff Libby
        </div>
        <div className='client-job'>
          US Expat residing in Thailand
        </div>
      </div>
    </div>
  </SwiperSlide>,
  <SwiperSlide key={2}>
    <div className='flex flex-col justify-between items-center h-5/6 w-full'>
    <div className='text-carousel mb-8 lg:h-56 overflow-ellipsis'>
       &quot;I was able to save  $12k on 1040X Amended Tax return  just by having to answer the right questions on why 2017 was not filed as an expat when I left the US to the Philippines on Jan 6, 2017!  &quot;
      </div>
      <div className='default-img' >
        <Image alt='default' width={50} height={50} src='/images/icons/default.jpg' style={{width:'50px',height:'50px' ,borderRadius:'100px'}}/>
      </div>
      <div className='flex flex-col'>
        <div className='client-name'>
        Ashley Love
        </div>
        <div className='client-job'>
        US Expat
        </div>
      </div>
    </div>
  </SwiperSlide>,
  <SwiperSlide key={3}>
    <div className='flex flex-col justify-between items-center h-5/6 w-full'>
    <div className='text-carousel mb-8 lg:h-56 overflow-ellipsis'>
      "I’ve been a client of Mike since 2018 and I am really satisfied with their work, I was able to claim USD 8k in my Federal and USD 1k in my State tax refund."
      </div>
      <div className='default-img' >
        <Image alt='default' width={50} height={50} src='/images/icons/default.jpg' style={{width:'50px',height:"50px" ,borderRadius:'100px'}}/>
      </div>
      <div className='flex flex-col'>
        <div className='client-name'>
        Alan Kahn
        </div>
        <div className='client-job'>
        US Expat
        </div>
      </div>
    </div>
  </SwiperSlide>,
  <SwiperSlide key={4}>
    <div className='flex flex-col  justify-between items-center h-5/6 w-full'>
    <div className='text-carousel mb-8 lg:h-56 overflow-ellipsis'>
      "Michael is very helpful in preparing all of my taxes and dealing with IRS directly to make sure I didn't have to pay undue fees. he also helped advise on the optimal tax structure for me as expat in Asia as well. I would recommend Michael for other expats."
      </div>
      <div className='default-img' >
        <Image alt='default' width={50} height={50} src='/images/icons/default.jpg' style={{width:'50px',height:"50px" ,borderRadius:'100px'}}/>
      </div>
      <div className='flex flex-col'>
        <div className='client-name'>
        Jack Chuang
        </div>
        <div className='client-job'>
        Expat in Asia
        </div>
      </div>
    </div>
  </SwiperSlide>,
]

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
