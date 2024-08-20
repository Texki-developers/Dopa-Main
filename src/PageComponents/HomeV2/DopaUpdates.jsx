import Image from "next/image";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { MdOutlineArrowForward } from "react-icons/md";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import Center from "@/Components/BasicComponents/Center/Center";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export default function DopaUpdates() {
  const updates = ["/Assets/homeV2/updates.png", "/Assets/homeV2/updates.png"];
  const swiperParams = {
    slidesPerView: "1",
    spaceBetween: 8,
    navigation: {
      nextEl: ".gallery-custom-next",
      prevEl: ".gallery-custom-prev",
    },
    pagination: true,
    autoplay: {
      delay: 3000, // Delay between transitions in ms
      disableOnInteraction: false, // Enable/disable autoplay on user interaction
    },
  };

  return (
    <Center>
    <div className="p-4 md:px-16 relative common-space-x w-full">
      <div className="flex flex-col gap-2 pb-8">
        <h1 className="font-bold text-4xl">Dopa Updates</h1>
        <p>Explore what's been happening?</p>
      </div>

      <div className="relative">
        <Swiper {...swiperParams}>
          {updates.map((item, index) => (
            <SwiperSlide key={index} style={{ height: "auto !important" }}>
              <div className="w-full h-[7rem] md:h-[13rem] lg:h-[16rem] xl:h-[25rem] relative rounded-lg">
                <Image
                  fill
                  src={item}
                  alt="Update image"
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <div className="absolute inset-y-0 left-4 flex items-center justify-center z-10">
          <div className="gallery-custom-prev transition-[all_0.3s_ease] text-white hover:text-black bg-black hover:bg-white  cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-white text-[1rem] sm:text-[1.5rem] rounded-full">
            <MdOutlineArrowForward />
          </div>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center justify-center z-10">
          <div className="gallery-custom-next transition-[all_0.3s_ease] text-white bg-black hover:bg-white hover:text-black cursor-pointer p-[0.3rem] border-[2px] border-white text-[1rem] sm:text-[1.5rem] rounded-full">
            <MdOutlineArrowForward />
          </div>
        </div>
      </div>
    </div>
    </Center>
  );
}
