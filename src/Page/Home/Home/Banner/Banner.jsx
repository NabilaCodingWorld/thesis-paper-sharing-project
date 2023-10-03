import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../../assets/keyboard-message-text-sms-concept_53876-120449.jpg'
import img2 from '../../../../assets/communication-connection-online-technology-community-word_53876-13866.jpg'

import img3 from '../../../../assets/copy-space-agenda-pills_23-2148550998.jpg'

import img4 from '../../../../assets/english-book-resting-table-working-space_23-2149429572.jpg'

import img5 from '../../../../assets/acounting-auditing-balance-bookkeeping-capital-concept_53876-121922.avif'

import img6 from '../../../../assets/old-fashioned-flat-lay-with-letters-writing-accessories-dark-wooden-table_155003-3591.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='md:w-[100%] h-[550px]' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100%] h-[550px]' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100%] h-[550px]' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100%] h-[550px]' src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[550px]' src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[550px]' src={img6} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;