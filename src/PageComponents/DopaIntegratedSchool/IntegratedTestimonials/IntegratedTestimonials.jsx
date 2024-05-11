import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import IntegratedTestimonialCard from "@/Components/Cards/IntegratedTestimonialCard/IntegratedTestimonialCard";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { MdOutlineArrowForward } from "react-icons/md";
import { testimonialsIntegrated } from "./integratedTestimonials.data";
SwiperCore.use([Navigation, Autoplay]);

export default function IntegratedTestimonials() {
  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 3.5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".integrated-custom-next",
      prevEl: ".integrated-custom-prev",
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

  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 1440) {
      setSwiperParams((prev) => ({ ...prev, slidesPerView: 3.5 }));
    } else if (width >= 560) {
      setSwiperParams((prev) => ({ ...prev, slidesPerView: 2.5 }));
    } else {
      setSwiperParams((prev) => ({ ...prev, slidesPerView: 1 }));
    }
  }, []);

  return (
    <Center className="bg-soft-blue w-[100%] py-[2rem]">
      <VStack className="common-space-x w-[100%] gap-2 sm:gap-[2rem]">
        <HStack className="flex-col sm:flex-row gap-4 items-center justify-between">
          <VStack>
            <h2 className="section-heading">
              Hear from <span className="text-primary-500">our students</span>
            </h2>
            <p className="text-basic">
              Don’t take our word for it. Trust our students.
            </p>
          </VStack>

          <HStack className="gap-2 ml-auto">
            <div className="aspect-square integrated-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
              <MdOutlineArrowForward />
            </div>
            <div className="aspect-square integrated-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
              <MdOutlineArrowForward />
            </div>
          </HStack>
        </HStack>
        <div className="w-[100%] overflow-hidden integrated-testimonial-card">
          <Swiper {...swiperParams}>
            {testimonialsIntegrated.map((data, index) => (
              <SwiperSlide key={index}>
                <IntegratedTestimonialCard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </VStack>
    </Center>
  );
}
