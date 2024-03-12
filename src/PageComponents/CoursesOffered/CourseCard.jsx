import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import { CarbonEducation, GameIconsDuration } from "@/Components/Icons/Icons";
import React from "react";

export default function CourseCard({ data }) {
  return (
    <VStack className='rounded-2xl bg-white'>
      <VStack className='p-[2rem] gap-[1rem]'>
      <HStack className='gap-[1rem] font-bold'>
        <div className='rounded-full bg-[#17829E] font-bold p-[1rem] px-[1.2rem] text-white' >
          <h1>{data?.sn}</h1>
        </div>
        <h1 className=''>{data?.head}</h1>
      </HStack>
      <VStack className='gap-[1rem] ml-[1rem]'>
        <HStack className='gap-[1rem]'>
          <CarbonEducation />
          <h2>{data.features.name}</h2>
        </HStack>

        <HStack className='gap-[1rem]'>
          <GameIconsDuration/>
          <h2>{data.features.duration}</h2>
        </HStack>
      </VStack>
      </VStack>
    
    </VStack>
  );
}
