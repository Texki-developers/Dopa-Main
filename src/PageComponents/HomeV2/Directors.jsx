import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Directors({ description, directors, image, alt }) {
  return (
    <Center>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-20 md:pt-[3rem] items-start common-space-x w-full">
        <motion.div 
          className="relative flex flex-col gap-4 pt-3 order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="md:max-w-[32rem] 2xl:max-w-[38rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute inset-0 z-0 h-[6rem] top-[-0.5rem]"
            style={{
              background: `url('/Assets/homeV2/qoute.png') no-repeat`,
              backgroundSize: "contain",
            }}
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="font-bold relative z-10 md:max-w-[27rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {directors}
          </motion.p>
        </motion.div>
        <motion.div 
          className="relative h-[16rem] md:h-[26rem] md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              className="object-contain"
              fill
              src={`${process.env.NEXT_PUBLIC_STRAPIE_IMAGE}${image}`}
              alt={alt}
            />
          </motion.div>
        </motion.div>
      </div>
    </Center>
  );
}
