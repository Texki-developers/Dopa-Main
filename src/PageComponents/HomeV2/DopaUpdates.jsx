import Image from "next/image";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { MdOutlineArrowForward } from "react-icons/md";
import Center from "@/Components/BasicComponents/Center/Center";
import config from "@/utils/config";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export default function DopaUpdates({ updates }) {
  const swiperParams = {
    slidesPerView: "1",
    spaceBetween: 8,
    navigation: {
      nextEl: ".gallery-custom-next",
      prevEl: ".gallery-custom-prev",
    },
    pagination: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <Center>
      <div className="p-4 md:px-16 relative common-space-x w-full">
        <div className="flex flex-col gap-2 pb-8">
          <motion.h1 
            className="font-bold text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            DOPA Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore what's been happening?
          </motion.p>
        </div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper {...swiperParams}>
            {updates &&
              updates?.map((update) => (
                <SwiperSlide
                  key={update._id}
                  style={{ height: "auto !important" }}
                >
                  <motion.div 
                    className="w-full aspect-[4/1] relative rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      fill
                      key={update.id}
                      alt={update?.attributes?.alternativeText}
                      src={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${update?.attributes?.url}`}
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>
          <motion.div 
            className="absolute inset-y-0 left-2 md:left-4 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.div 
              className="gallery-custom-prev transition-[all_0.3s_ease] text-white hover:text-black bg-black hover:bg-white cursor-pointer p-[0.3rem] rotate-[180deg] border-[2px] border-white text-[1rem] sm:text-[1.5rem] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlineArrowForward />
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute inset-y-0 right-2 md:right-4 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.div 
              className="gallery-custom-next transition-[all_0.3s_ease] text-white bg-black hover:bg-white hover:text-black cursor-pointer p-[0.3rem] border-[2px] border-white text-[1rem] sm:text-[1.5rem] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlineArrowForward />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Center>
  );
}
