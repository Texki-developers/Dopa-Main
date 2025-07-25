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
  return (
    <Center>
      <div className="flex flex-col p-4 md:px-16 common-space-x w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ComponentHeader heading="Results" url="/Assets/icons/result.png" />
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1.5fr]">
          <motion.div 
            className="relative lg:order-2 aspect-[3/2] lg:aspect-auto pb-3 lg:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
      </div>
    </Center>
  );
}
