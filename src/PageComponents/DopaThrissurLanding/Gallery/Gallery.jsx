import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import {
  firstImageCard,
  fourthImageCard,
  secondImageCard,
  thirdImageCard,
} from "./gallery.data";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import SwiperCore, { Navigation, FreeMode, Autoplay } from "swiper/core";
import { MdOutlineArrowForward } from "react-icons/md";

SwiperCore.use([Navigation, FreeMode, Autoplay]);

export default function Gallery() {
  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".gallery-custom-next",
      prevEl: ".gallery-custom-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    freeMode: true,
    autoplay: {
      delay: 3000, // Delay between transitions in ms
      disableOnInteraction: false, // Enable/disable autoplay on user interaction (default: true)
    },
  };
  return (
    <Center className="thrissur-gallery bg-primary-50">
      <VStack className="common-space-x w-[100%] py-[1rem] sm:py-[3rem] gap-[1rem] sm:gap-[3rem]">
        <HStack className="w-[100%] justify-between items-center">
          <h1 className="section-heading text-black">Gallery</h1>
          <HStack className="gap-2">
            <div className="aspect-square gallery-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
              <MdOutlineArrowForward />
            </div>
            <div className="aspect-square gallery-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
              <MdOutlineArrowForward />
            </div>
          </HStack>
        </HStack>
        <div className="overflow-hidden">
          <Swiper {...swiperParams}>
            <SwiperSlide style={{ width: "auto" }}>
              <div className="grid sm:grid-cols-[repeat(5,4rem)] grid-cols-[repeat(5,2rem)] gap-4 sm:grid-rows-[repeat(6,4rem)] grid-rows-[repeat(6,2rem)] w-max">
                {firstImageCard.map((image) => (
                  <div
                    style={{
                      gridColumn: image.colSpan,
                      gridRow: image.rowSpan,
                    }}
                  >
                    <img
                      src={image.image}
                      alt="dopa gallery"
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "auto" }}>
              <div className="grid sm:grid-cols-[repeat(9,4rem)] grid-cols-[repeat(9,2rem)] gap-4 sm:grid-rows-[repeat(6,4rem)] grid-rows-[repeat(6,2rem)] w-max">
                {secondImageCard.map((image) => (
                  <div
                    style={{
                      gridColumn: image.colSpan,
                      gridRow: image.rowSpan,
                    }}
                  >
                    <img
                      src={image.image}
                      alt="dopa gallery"
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ width: "auto" }}>
              <div className="grid sm:grid-cols-[repeat(4,4rem)] grid-cols-[repeat(4,2rem)] gap-4 sm:grid-rows-[repeat(6,4rem)] grid-rows-[repeat(6,2rem)] w-max">
                {thirdImageCard.map((image) => (
                  <div
                    style={{
                      gridColumn: image.colSpan,
                      gridRow: image.rowSpan,
                    }}
                  >
                    <img
                      src={image.image}
                      alt="dopa gallery"
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ width: "auto" }}>
              <div className="grid sm:grid-cols-[repeat(6,4rem)] grid-cols-[repeat(6,2rem)] gap-4 sm:grid-rows-[repeat(6,4rem)] grid-rows-[repeat(6,2rem)] w-max">
                {fourthImageCard.map((image) => (
                  <div
                    style={{
                      gridColumn: image.colSpan,
                      gridRow: image.rowSpan,
                    }}
                  >
                    <img
                      src={image.image}
                      alt="dopa gallery"
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </VStack>
    </Center>
  );
}
