import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Slide() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="Nil"
            src="/pic2.jpg"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Nil"
            src="/pic4.jpg"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Nil"
            src="/pic6.jpg"
            width={400}
            height={400}
          
          />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
