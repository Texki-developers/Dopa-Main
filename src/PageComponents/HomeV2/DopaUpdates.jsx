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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  const navButtonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
    whileHover: { scale: 1.1 }
  };

  return (
    <Center>
      <motion.div 
        className="p-4 md:px-16 relative common-space-x w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex flex-col gap-2 pb-8"
          variants={fadeInUp}
        >
          <motion.h1 
            className="font-bold text-4xl"
            variants={fadeInUp}
          >
            DOPA Updates
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Explore what's been happening?
          </motion.p>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
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
            {...navButtonVariants}
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
            {...navButtonVariants}
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
      </motion.div>
    </Center>
  );
}
