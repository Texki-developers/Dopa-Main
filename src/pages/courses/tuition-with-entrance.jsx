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
import FeaturesPillContainer from "@/Components/FeaturesPillsContainer/FeaturesPillContainer";
SwiperCore.use([Navigation, FreeMode, Autoplay]);

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
          title={["DOPA Tution & Foundation", "ENTRANCE"]}
          description="Dopa's +1 and +2 tuition program offers structured and scheduled classes, with sessions held every Saturday tailored for both state and CBSE students. Additionally, specialized coaching is provided for students preparing for entrance exams such as NEET and JEE."
        >
          <div className="lg:pt-[2rem] lg:pb-[3rem]">
            <div className="w-[100%] md:h-[100%] hidden sm:block relative overflow-hidden">
              <Image
                src="/Assets/homeV2/dopa_neet_coaching_entrance.png"
                fill
                className="object-cover rounded-[14px]"
              />
            </div>
          </div>
        </CustomizableBanner>

        <FeaturesPillContainer />
      </VStack>
    </MainLayout>
  );
}
