import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper/core";
import { MdOutlineArrowForward } from "react-icons/md";

SwiperCore.use([Navigation]);

export default function StudentTestimonials() {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".testimonial-custom-next",
      prevEl: ".testimonial-custom-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <VStack className="w-100%">
      <HStack className="relative justify-center h-[7rem] md:h-[10rem]">
        <h1 className="text-[5rem] md:text-[10rem] font-[500] space-x-4 opacity-5 left-[1rem] top-[50%] leading-[1] translate-y-[-60%] absolute">
          Students
        </h1>
        <h1 className="section-heading text-center">Testimonials</h1>
      </HStack>
      <Center className="w-[100%]">
        <div className="common-space-x w-[100%]">
          <Swiper {...swiperParams}>
            {[...Array(4)].map((_, index) => (
              <SwiperSlide>
                <div className="grid sm:grid-cols-[1fr_1.3fr] sm:gap-[1rem] gap-[0.5rem] md:gap-[3rem] w-[100%]">
                  <div className="w-[100%] aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/xXqgcm8dWyE?si=a-JgGuCV4C9qbK1a"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="w-100% min-h-[100%] relative overflow-hidden">
                    <VStack className="p-[2rem] border-[2px] min-h-[100%] border-black rounded-lg gap-4 justify-between">
                      <p className="text-basic">
                        Dopa's guidance not only instilled the belief that I can
                        become a doctor but also emphasized the importance of
                        studying smartly, highlighting that working
                        intelligently is key to success—a crucial lesson in
                        pursuing my dream. Thank you DOPA {index}
                      </p>
                      <VStack className="gap-4">
                        <hr className="border-black" />
                        <HStack className="w-[100%] justify-between">
                          <VStack>
                            <p className="text-basic font-[600]">Diya</p>
                            <p className="text-small">Alumni</p>
                          </VStack>
                          <HStack className="gap-2">
                            <div className="aspect-square testimonial-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1.5rem] rounded-full">
                              <MdOutlineArrowForward />
                            </div>
                            <div className="aspect-square testimonial-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1.5rem] rounded-full">
                              <MdOutlineArrowForward />
                            </div>
                          </HStack>
                        </HStack>
                      </VStack>
                    </VStack>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Center>
    </VStack>
  );
}
