import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const locations = ["Calicut", "Malappuram", "Thrissur", "Palakkad"];

export default function AboutDopa() {
  const locationsRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    setScrollWidth(locationsRef.current.offsetWidth - window.innerWidth + 20);
  }, []);
  return (
    <div className="w-[100%]">
      <Center>
        <div className="common-space-x w-[100%]">
          <div
            className="grid sm:grid-cols-[1.1fr_1fr] xl:grid-cols-[1.3fr_1fr] xl:aspect-[2/1] rounded-xl items-end overflow-hidden"
            style={{
              background: `url('/Assets/integratedSchool/about-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="sm:hidden text-[3rem] font-extrabold text-white text-center">
              About Us
            </h2>
            <div className="w-[100%] aspect-[157/119] relative">
              <Image
                src="/Assets/integratedSchool/founders.png"
                fill
                alt="Dopa Founders"
              />
            </div>

            <VStack className="mt-auto gap-8">
              <h2 className="hidden sm:block text-[4rem] lg:text-[6rem] font-extrabold text-white ml-[-5rem]">
                About Us
              </h2>
              <p className="bg-primary-500 sm:rounded-tl-xl text-basic p-[1rem] sm:p-[2rem] text-white xl:aspect-[1/1] xl:max-h-[20rem]">
                An initiative started by a group of young doctors who have
                completed MBBS from Calicut Medical College, Kerala. We support
                passionate students to crack their entrance exam.
                <br />
                <br />
                All students are eligible for admission to Dopa Integrated
                School after successfully completing the 10th standard.
                Integrated School is here to turn your entrance dream into
                reality.
              </p>
            </VStack>
          </div>
        </div>
      </Center>
      <div className="w-max mx-auto px-[1rem]">
        <motion.div
          className="flex items-center justify-center flex-wrap gap-[1rem]"
          ref={locationsRef}
          animate={{
            translateX: ["0px", `-${scrollWidth}px`, "0px"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {locations.map((location, index) => (
            <>
              <h2
                className="flex text-[3rem] md:text-[4rem] font-black uppercase tracking-wide text-white gap-[2rem] items-center"
                style={{
                  textShadow:
                    "-0.5px -0.5px 1px #1987a4, 0.5px 0.5px 1px #1987a4",
                }}
              >
                {location}
              </h2>
              {index !== locations.length - 1 && (
                <span className="w-[1rem] h-[1rem] rounded-full bg-primary-500 opacity-50"></span>
              )}
            </>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
