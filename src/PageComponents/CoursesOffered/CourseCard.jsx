import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import { CarbonEducation, GameIconsDuration } from "@/Components/Icons/Icons";
import React from "react";

export default function CourseCard({ data }) {
  return (
    <VStack className='rounded-2xl'>
      <VStack className='p-[2rem] gap-[2rem]'>
      <HStack className='gap-[2rem]'>
        <div>
          <h1>{data?.sn}</h1>
        </div>
        <h1>{data?.head}</h1>
      </HStack>
      <VStack className='gap-[2rem]'>
        <HStack>
          <CarbonEducation />
          <h2>{data.features.name}</h2>
        </HStack>

        <HStack>
          <GameIconsDuration/>
          <h2>{data.features.duration}</h2>
        </HStack>
      </VStack>
      </VStack>
    
    </VStack>
  );
}
