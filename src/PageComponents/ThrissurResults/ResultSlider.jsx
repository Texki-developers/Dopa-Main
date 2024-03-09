import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import SwiperCore, {Autoplay } from "swiper/core";
import 'swiper/css/autoplay'
SwiperCore.use([Autoplay]);
import "swiper/css";
import SliderRow from "./sliderRow";
import HStack from "@/Components/BasicComponents/HStack/HStack";

export default function ResultSlider() {
  return (
    <VStack>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(e) => console.log("slide change",e.activeIndex)}
        onSwiper={(swiper) => console.log(swiper) }
      >
        <VStack>
          <HStack>
            <SwiperSlide>
              <SliderRow />
            </SwiperSlide>
      
            <SwiperSlide>
              <SliderRow />
            </SwiperSlide>


            <SwiperSlide>
              <SliderRow />
            </SwiperSlide>

            <SwiperSlide>
              <SliderRow />
            </SwiperSlide>
          </HStack>

        </VStack>
      </Swiper>
    </VStack>
  );
}
