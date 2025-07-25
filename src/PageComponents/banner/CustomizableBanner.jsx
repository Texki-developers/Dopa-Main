import Center from "@/Components/BasicComponents/Center/Center";
import React from "react";
import { motion } from "framer-motion";

export default function CustomizableBanner({ title, description, children, rtl }) {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  const slideIn = {
    initial: { opacity: 0, x: rtl ? -50 : 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  // Convert description to array if it's a string
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <Center className="w-[100%] bg-[#17829E] pt-[4rem] lg:pt-[5rem] relative">
      <div className={`common-space-x grid lg:grid-cols-[1fr_1.5fr] gap-[1rem] lg:gap-[3rem] relative w-[100%] z-[2] py-[2rem] min-h-[20rem] ${rtl ? 'lg:grid-cols-[1.5fr_1fr]' : ''}`}>
        <motion.div 
          {...fadeIn}
          className="h-[100%] flex flex-col justify-center"
        >
          <motion.h1 
            {...fadeIn}
            className="banner-title text-white"
          >
            {title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>
          <motion.div 
            {...fadeIn}
            className="flex flex-col gap-[1rem] justify-center mt-4"
          >
            {descriptionArray.map((item, index) => (
              <motion.p 
                key={index}
                {...fadeIn} 
                className="text-basic text-white"
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          {...slideIn}
          className={`flex flex-col gap-[1rem] justify-center ${rtl ? 'order-first lg:order-last' : ''}`}
        >
          {children}
        </motion.div>
      </div>
    </Center>
  );
}
