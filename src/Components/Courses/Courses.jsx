import React, { useEffect, useState } from "react";
import Center from "../BasicComponents/Center/Center";
import PrimaryCourseCard from "@/PageComponents/Courses/CourseCard/PrimaryCourseCard";

export default function Courses({ courseData }) {
  return (
    <Center className="bg-primary-50 py-[2rem]">
      <div className="common-space-x w-[100%] py-[1rem] flex flex-col gap-[1rem] md:gap-[1.5rem]">
        <h3 className="section-heading text-left w-max text-black">Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courseData &&
            courseData?.map((items) => (
              <PrimaryCourseCard key={items} data={items} />
            ))}
        </div>
      </div>
    </Center>
  );
}
