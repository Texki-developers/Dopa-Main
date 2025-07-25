import Button from "@/Components/BasicComponents/Button/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

export default function HomeBanner({ data }) {
  const { push } = useRouter();
  const image_base = process.env.NEXT_PUBLIC_STRAPIE_IMAGE;

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="grid grid-cols-1 md:grid-cols-2 pt-[4rem] md:pt-[5rem] lg:pt-28 px-4 sm:px-[4rem] lg:px-[5rem] 2xl:px-[8rem]"
    >
      <motion.div 
        variants={fadeInUp}
        className="pb-6 xl:pb-[6rem] order-1 pt-4"
      >
        <div className="flex flex-col gap-1 lg:gap-3 pb-6">
          <motion.h1 
            variants={fadeInUp}
            className="lg:max-w-[36rem] text-xl md:text-2xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-teal-800 to-black"
          >
            {data?.MainHead}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="font-600 text-[0.8rem] lg:text-base"
          >
            {data?.description}
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            style={{ boxShadow: "0px 3.42px 3.42px 0px #00000040" }}
            className="btn-common bg-[#06AEC6] py-2 font-bold rounded-full text-white active:bg-white active:text-black w-full md:w-[16rem]"
            onClick={() => push(data?.buttonLink)}
          >
            {data?.buttonName}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={{
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        className="relative md:order-2 h-[12rem] md:h-full"
      >
        <Image
          fill
          className="object-contain object-bottom"
          src={`${image_base}${data?.image?.data?.attributes?.url}`}
          alt={data?.image?.data?.attributes?.alternativeText}
        />
      </motion.div>
    </motion.div>
  );
}
