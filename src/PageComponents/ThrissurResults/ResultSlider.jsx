import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import VStack from "@/Components/BasicComponents/VStack/VStack";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);
import "swiper/css";
import SliderRow from "./sliderRow";

export default function ResultSlider() {
  return (
    <VStack>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <VStack >
        <SliderRow SwiperSlide={SwiperSlide}/>
        <SliderRow SwiperSlide={SwiperSlide}/>
        <SliderRow SwiperSlide={SwiperSlide}/>
        </VStack>
      </Swiper>
    </VStack>
  );
}
