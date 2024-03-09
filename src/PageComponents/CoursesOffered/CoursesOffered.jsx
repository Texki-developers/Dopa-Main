import Center from "@/Components/BasicComponents/Center/Center";
import React from "react";
import CourseCard from "./CourseCard";
import { courseOfferedData } from "./CourseData";
import VStack from "@/Components/BasicComponents/VStack/VStack";

export default function CoursesOffered() {
  return (
    <Center >
      <VStack className='px-[2rem] common-space-x gap-[2rem]'>
          <h1>Courses Offered</h1>
      <div className="grid grid-cols-1   gap-[1.5rem] md:grid-cols-3 lg:grid-cols-4">
        {courseOfferedData &&
          courseOfferedData?.map((items) => (
            <CourseCard key={items.sn} data={items} />
          ))}
      </div>
      </VStack>
    
    </Center>
  );
}
