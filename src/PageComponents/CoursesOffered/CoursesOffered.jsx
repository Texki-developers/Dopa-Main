import Center from "@/Components/BasicComponents/Center/Center";
import React from "react";
import CourseCard from "./CourseCard";
import { courseOfferedData } from "./CourseData";
import VStack from "@/Components/BasicComponents/VStack/VStack";

export default function CoursesOffered() {
  return (
    <Center className="bg-[#17829E] py-[2rem]">
      <VStack className="items-center  common-space-x gap-[2rem]">
        <h1 className="section-heading text-white">Courses Offered</h1>
        <div className="grid grid-cols-1   gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courseOfferedData &&
            courseOfferedData?.map((items) => (
              <CourseCard key={items.sn} data={items} />
            ))}
        </div>
      </VStack>
    </Center>
  );
}
