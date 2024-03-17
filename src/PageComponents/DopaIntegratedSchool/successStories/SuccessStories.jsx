import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <Center className="py-[1rem] md:py-[3rem]">
      <HStack className="common-space-x w-[100%]">
        <div className="grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,2fr] place-items-center grid-cols-1 w-[100%] items-center">
          <div>
            <h1 className="thin-optimised-banner-title  text-primary-700  text-center md:text-start">OUR</h1>
            <h1 className="optimised-banner-title text-primary-400 !leading-[2rem] sm:!leading-[4rem]">
              SUCCESS STORIES
            </h1>
          </div>

          <div className="relative w-[100%] aspect-[3/2] ">
            <Image
              src="/Assets/integratedSchool/our_result.png"
              alt="our_dopa_integratted_school"
              fill
            />
          </div>
        </div>
      </HStack>
    </Center>
  );
}
