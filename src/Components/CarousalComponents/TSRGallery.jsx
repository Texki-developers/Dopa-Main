import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React, { useEffect, useState } from "react";
import { CGallery, firstImageCard, kGallery, tGallery } from "./gallery.data";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import SwiperCore, { Navigation, FreeMode, Autoplay } from "swiper/core";
import { MdOutlineArrowForward } from "react-icons/md";

SwiperCore.use([Navigation, FreeMode, Autoplay]);

export default function TSRGallery({ type, images }) {
  const [swiperParams, setSwiperParams] = useState(null);

  const getSliderCount = (type) => {
    if (type === "tsr" || type === "clt") {
      if (window.innerWidth < 600) {
        return 1;
      } else {
        return 2.5;
      }
    } else if (type === "ktkl") {
      if (window.innerWidth < 600) {
        return 1.5;
      } else {
        return 3.5;
      }
    }
  };

  useEffect(() => {
    setSwiperParams({
      slidesPerView: getSliderCount(type),
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
    });
  }, [type]);
  return (
    <Center className="thrissur-gallery bg-primary-100">
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
        {swiperParams && (
          <div className="overflow-hidden">
            <Swiper {...swiperParams}>
              {images.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <div
                    className={`${
                      type === "tsr" || type === "clt"
                        ? "aspect-[1.3/1]"
                        : type === "ktkl"
                        ? "aspect-[1/1.5]"
                        : ""
                    }`}
                  >
                    <img
                      src={item}
                      alt={"Dopa"}
                      className="w-[100%] select-none h-[100%] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </VStack>
    </Center>
  );
}
