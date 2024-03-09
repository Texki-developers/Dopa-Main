import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import { learningData } from "./LearningData";
import LearningCard from "./LearningCard";

export default function LearningCenters() {
  return (
    <Center className='py-[4rem]'>
      <VStack className="common-space-x w-[100%] gap-[2rem] ">
   
        <h1 className='section-heading text-[#17829E]'>Our Learning Centres</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {learningData &&
            learningData?.map((items) => (
              <LearningCard key={items} data={items} />
            ))}
        </div>
      </VStack>
    </Center>
  );
}
