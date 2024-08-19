import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CourseCard from "@/PageComponents/Courses/CourseCard/CourseCard";
import { coursesData } from "@/PageComponents/Courses/CourseCard/CourseCard.data";
import PrimaryCourseCard from "@/PageComponents/Courses/CourseCard/PrimaryCourseCard";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import SwiperCore, { Navigation, FreeMode, Autoplay } from "swiper/core";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import { MdOutlineArrowForward } from "react-icons/md";
import faculties from "../../PageComponents/DopaFaculites/facultiesv2.json";
import FacultyCardV2 from "@/Components/Cards/FacultyCardV2/FacultyCardV2";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
SwiperCore.use([Navigation, FreeMode,Autoplay ]);

export default function Tution() {
  const swiperParams = {
    slidesPerView: "3",
    spaceBetween: 8,
    navigation: {
      nextEl: ".gallery-custom-next",
      prevEl: ".gallery-custom-prev",
    },
    freeMode: true,
    autoplay: {
      delay: 3000, // Delay between transitions in ms
      disableOnInteraction: false, // Enable/disable autoplay on user interaction
    },
    breakpoints: {
      // When the window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      // When the window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      // When the window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
  };

  const Course = [
    {
      name: "TEST AND DISCUSSION",
      headClass: "font-bold text-white text-4xl 2xl:w-[15rem]",
      subheadClass: "text-[1.8rem] text-white",
      subtitle: "BATCH",
      link: "/",
    },
    {
      name: "TAMIL",
      subtitle: "REPEATERS",
      link: "/",
      headClass: "font-bold text-white text-4xl",
      subheadClass: "text-[1.8rem] text-white",
    },
    {
      name: "INTEGRATED",
      subtitle: "SCHOOL",
      link: "/",
      headClass: "font-bold text-white text-4xl",
      subheadClass: "text-[1.8rem] text-white",
    },
    {
      name: "TEST AND DISCUSSION",
      headClass: "font-bold text-white text-4xl 2xl:w-[15rem]",
      subheadClass: "text-[1.8rem] text-white",
      subtitle: "BATCH",
      link: "/",
    },
    {
      name: "TAMIL",
      subtitle: "REPEATERS",
      link: "/",
      headClass: "font-bold text-white text-4xl",
      subheadClass: "text-[1.8rem] text-white",
    },
    {
      name: "INTEGRATED",
      subtitle: "SCHOOL",
      link: "/",
      headClass: "font-bold text-white text-4xl",
      subheadClass: "text-[1.8rem] text-white",
    },
  ];
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <CustomizableBanner
          title={["DOPA Tution & Foundation", "8th,9th & 10th"]}
          description="The Foundation program provides conceptual clarity and makes the base of all subjects strong for the students.They are taught to link different topics and how to use them efficiently in appropriate scenarios. It prepares bright minds to face any competitive exam and excel in them by following systematic study method."
        >
          <div className="lg:pt-[2rem]">
            <div className="w-[100%] md:h-[100%] hidden sm:block relative overflow-hidden">
              <Image
                src="/Assets/homeV2/dopa_tution_with_foundation_course.png"
                fill
                className="object-contain rounded-[14px]"
              />
            </div>
          </div>
        </CustomizableBanner>
        {coursesData &&
          coursesData.map((items) => (
            <div
              key={items?.heading}
              className="flex flex-col gap-4 px-4 md:px-[9rem]"
            >
              <CourseCard data={items} />
            </div>
          ))}

        <div className="w-full h-full px-4 md:px-[5rem] pb-12 pt-12">
          <HStack className="w-[100%] justify-between items-center">
            <h1 className="text-4xl font-semibold text-[#27506A] pb-6">
              Other Courses
            </h1>
            <HStack className="gap-2">
              <div className="aspect-square gallery-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
              <div className="aspect-square gallery-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
            </HStack>
          </HStack>
          <Swiper {...swiperParams}>
            {Course &&
              Course.map((items) => (
                <SwiperSlide key={items.name}   style={{ height: "auto !important" }}>
                  <PrimaryCourseCard data={items} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="w-full h-full px-4 md:px-[5rem]">
          <HStack className="w-[100%] justify-between items-center">
            <h1 className="text-4xl font-semibold text-[#27506A] pb-6">
              Faculties
            </h1>
            <HStack className="gap-2">
              <div className="aspect-square gallery-custom-prev transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
              <div className="aspect-square gallery-custom-next transition-[all_0.3s_ease] hover:bg-black hover:text-white cursor-pointer p-[0.3rem] border-[2px] border-black text-[1rem] sm:text-[1.5rem] rounded-full">
                <MdOutlineArrowForward />
              </div>
            </HStack>
          </HStack>
          <Swiper {...swiperParams}>
            {faculties &&
              faculties.map((items) => (
                <SwiperSlide
                  key={items.name}
                  className="flex items-center justify-center"
                  style={{ height: "auto !important" }}
                >
                  <FacultyCardV2 {...items} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </VStack>
    </MainLayout>
  );
}
