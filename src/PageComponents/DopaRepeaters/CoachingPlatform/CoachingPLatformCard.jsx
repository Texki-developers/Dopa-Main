import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import Image from "next/image"; 
export default function CoachingPlatformCard({ data }) {
  return (
    <VStack  className=" sm:p-[0.5rem] xl:p-[2rem]">
      <VStack className="gap-[1rem]">
        <div className="relative w-[3rem] lg:w-[4rem] aspect-[3/2]">
          <Image src={data.icon} alt="facilities" fill />
        </div>
        <p className="text-basic font-[800] text-primary-500">{data.title}</p>
      </VStack>
    </VStack>
  );
}
