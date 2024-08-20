import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Pagination, Navigation } from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from './DopaSwiper.module.css'

// Custom navigation buttons
const CustomPrevButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} className="swiper-button-prev custom-prev text-[3rem]">
    <FaArrowLeft className='text-[3rem]'/>
  </button>
));

const CustomNextButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} className="swiper-button-next custom-next">
    <FaArrowRight />
  </button>
));

export default function DopaUpdates() {
  const updates = ["/Assets/homeV2/updates.png", "/Assets/homeV2/updates.png"];
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = '.custom-prev';
      swiperRef.current.params.navigation.nextEl = '.custom-next';
      swiperRef.current.navigation.destroy(); // Destroy default navigation
      swiperRef.current.navigation.init(); // Reinitialize with custom buttons
      swiperRef.current.navigation.update(); // Update navigation
    }
  }, []);

  return (
    <div className="p-4 md:px-16 relative">
      <div className="flex flex-col gap-2 pb-8">
        <h1 className="font-bold text-4xl">Dopa Updates</h1>
        <p>Explore what's been happening?</p>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {updates.map((item, index) => (
          <SwiperSlide key={index}>
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
        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </div>
  );
}
