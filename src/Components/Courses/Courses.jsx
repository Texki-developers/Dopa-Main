import React from "react";
import Center from "../BasicComponents/Center/Center";
import PrimaryCourseCard from "@/PageComponents/Courses/CourseCard/PrimaryCourseCard";

const courses = [
  {
    name: "REPEATERS",
    headClass: "font-bold text-white text-4xl 2xl:w-[15rem]",
    subheadClass: "text-[1.8rem] text-white",
    subtitle: "PROGRAM",
    link: "/",
  },
  {
    name: "+1, +2",
    subtitle: "TUTION AND ENTRANCE",
    link: "/",
    headClass: "font-bold text-white text-4xl",
    subheadClass: "text-[1.8rem] text-white",
  },
  {
    name: "CRASH",
    subtitle: "COURSE",
    link: "/",
    headClass: "font-bold text-white text-4xl",
    subheadClass: "text-[1.8rem] text-white",
  },
  {
    name: "INTEGRATED",
    headClass: "font-bold text-white text-4xl 2xl:w-[15rem]",
    subheadClass: "text-[1.8rem] text-white",
    subtitle: "SCHOOL",
    link: "/",
  },
  {
    name: "DOPA",
    subtitle: "FOUNDATION",
    link: "/",
    headClass: "font-bold text-white text-4xl",
    subheadClass: "text-[1.8rem] text-white",
  },
  {
    name: "TEST AND DISCUSSION",
    subtitle: "BATCH",
    link: "/",
    headClass: "font-bold text-white text-4xl",
    subheadClass: "text-[1.8rem] text-white",
  },
];

export default function Courses() {
  return (
    <Center className="bg-primary-50 py-[2rem]">
      <div className="common-space-x w-[100%] py-[1rem] flex flex-col gap-[1rem] md:gap-[1.5rem]">
        <h3 className="section-heading text-left w-max text-black">Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courses &&
            courses.map((items) => (
              <PrimaryCourseCard key={items} data={items} />
            ))}
        </div>
      </div>
    </Center>
  );
}
