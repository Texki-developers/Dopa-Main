import React from "react";
import ComponentHeader from "../../ComponentHeader";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import { MdOutlineArrowForward } from "react-icons/md";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, FreeMode, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import TestimonialCardV2 from "./TestimonialCardV2";
import { testimonialsData } from "./Testimonial.data";
import Center from "@/Components/BasicComponents/Center/Center";

SwiperCore.use([Navigation]);

export default function Testimonials() {
  console.log(testimonialsData, "data");

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 12,
    navigation: {
      nextEl: ".gallery-custom-next",
      prevEl: ".gallery-custom-prev",
    },
    // autoplay: {
    //   delay: 3000, // Delay between transitions in ms
    //   disableOnInteraction: false, // Enable/disable autoplay on user interaction
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 12,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  };

  return (
    <Center className='bg-[#F6FDFE] '>
      <div className="common-space-x w-full">
        <div className="md:ml-auto md:w-[70%]">
          <HStack className="w-[100%] justify-between items-center">
            <ComponentHeader
              className="md:!justify-center"
              heading="Testimonials"
              url="/Assets/icons/HandHeart.png"
            />
            <HStack className="gap-2 pt-[4rem] pb-[1.5rem] lg:pt-[5rem]">
              <div className="aspect-square gallery-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
              <div className="aspect-square gallery-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
            </HStack>
          </HStack>
        </div>
        <Swiper {...swiperParams}>    
          {testimonialsData &&
            testimonialsData?.map((items) => (
              <SwiperSlide
                key={items.student}
                style={{ height: "auto !important" }}
              >
                <div className='pt-12'>
                <TestimonialCardV2 data={items} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Center>
  );
}
