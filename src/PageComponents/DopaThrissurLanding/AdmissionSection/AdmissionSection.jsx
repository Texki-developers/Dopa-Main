import Button from "@/Components/BasicComponents/Button/Button";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import React from "react";

const pills = ["Online", "Offline", "Residential Batch"];

export default function AdmissionSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[3rem] bg-primary-500">
      <div className="hidden lg:block relative w-[100%]">
        <div className="md:absolute bottom-[5rem] z-[2] aspect-[89/53] w-[100%]">
          <Image src="/Assets/thrissurLanding/dopa-students.png" fill />
        </div>
        <span className="hidden md:block h-[100%] absolute w-[65%] left-[50%] translate-x-[-50%] bg-primary-400 z-[1]"></span>
        <span className="absolute z-[3] skew-x-[30deg] bottom-0 left-0 w-[calc(100%+4rem)] translate-x-[-2rem] h-[5rem] block bg-white"></span>
      </div>

      <VStack className="gap-[2rem] px-[1rem] sm:pl-[4rem] py-[2rem] sm:py-[6rem]">
        <VStack className="uppercase text-white">
          <h3 className="text-[1.3rem] sm:text-[1.98rem] font-[600] leading-[1]">
            Admission Continues
          </h3>
          <h1 className="text-[3rem] sm:text-[4rem] leading-[1] font-[800]">
            NEET/KEAM
          </h1>
          <h2 className="text-[2rem] sm:text-[2.95rem] font-[600] leading-[1]">
            Crash Course <br />{" "}
            <span className="text-primary-400">& Repeaters</span>
          </h2>
        </VStack>
        <VStack className="gap-[0.5rem]">
          <p className="uppercase text-[1rem] sm:text-[1.5rem] font-[700] text-white">
            Classes Start -{" "}
            <span className="text-primary-400 ">March 28, 2024</span>
          </p>
          <HStack className="gap-[0.5rem] flex-wrap">
            {pills.map((item) => (
              <div
                key={item}
                className="py-[0.1rem] font-[600] px-[0.7rem]  pr-[1rem] text-left text-white uppercase relative border-primary-400 border-[2px]"
              >
                <span className="w-[0.5rem] h-[0.5rem] absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] rotate-[45deg] bg-primary-500 border-l-[2px] border-l-primary-400"></span>
                <p className="text-[1rem] sm:text-[1.3rem]">{item}</p>
                <span className="w-[0.5rem] h-[0.5rem] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] rotate-[-45deg] bg-primary-500 border-l-[2px] border-l-primary-400"></span>
              </div>
            ))}
          </HStack>
        </VStack>
        <HStack className="gap-[1rem] pl-[0rem] sm:pl-[3rem]">
          <span className="w-[0.5rem] h-[100%] bg-primary-400"></span>
          <p className="section-heading-small uppercase font-[700] text-white leading-[1]">
            NOW @ Thrissur <br />& Kodungallur
          </p>
        </HStack>
        <Button className="btn-solid w-max mx-auto sm:ml-[5rem]">
          Book a Free Trial
        </Button>
      </VStack>

      <div className="lg:hidden block relative w-[100%]">
        <div className="lg:absolute bottom-[5rem] z-[2] aspect-[89/53] w-[100%]">
          <Image src="/Assets/thrissurLanding/dopa-students.png" fill />
        </div>
        <span className="absolute z-[3] skew-x-[30deg] bottom-0 left-0 w-[calc(100%+2rem)] translate-x-[-4rem] h-[3rem] block bg-white"></span>
      </div>
    </div>
  );
}
