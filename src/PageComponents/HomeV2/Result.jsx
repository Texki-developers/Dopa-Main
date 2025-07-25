import React from "react";
import ComponentHeader from "../ComponentHeader";
import Image from "next/image";
import Center from "@/Components/BasicComponents/Center/Center";
import { motion } from "framer-motion";

export default function Result({
  firstImage,
  secondImage,
  firstAlt,
  secondAlt,
}) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <Center>
      <motion.div 
        className="flex flex-col p-4 md:px-16 common-space-x w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <ComponentHeader heading="Results" url="/Assets/icons/result.png" />
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1.5fr]">
          <motion.div 
            className="relative lg:order-2 aspect-[3/2] lg:aspect-auto pb-3 lg:pb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
            >
              <Image
                className="object-cover"
                src={secondImage}
                fill
                alt={secondAlt}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
            >
              <Image
                className="object-cover"
                src={firstImage}
                fill
                alt={firstAlt}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Center>
  );
}
