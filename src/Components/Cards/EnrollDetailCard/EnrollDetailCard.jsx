import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import { BsPersonPlus } from "react-icons/bs";

export default function EnrollDetailCard({ number, title, description, icon }) {
  return (
    <div className="grid grid-cols-[2rem_auto] pb-[1rem] gap-[3rem]">
      <VStack className="sm:gap-[1rem] items-center">
        <img
          src={`/Assets/repeaters/enroll/${icon}`}
          style={{ width: "3rem" }}
          alt=""
        />
        {number !== 10 && (
          <span
            className="block h-[2rem] sm:h-[3rem] border-black"
            style={{ borderLeft: "2px dashed" }}
          ></span>
        )}
      </VStack>
      <div className="relative">
        <p className="text-[4rem] md:text-[6rem] ml-[-2rem] leading-[1] opacity-10 font-[900] absolute top-0 left-0 z-10">
          {number}
        </p>
        <VStack className="relative z-20 gap-[1rem] uppercase">
          <p className="text-[1.5rem] md:text-[2rem] leading-[1] text-primary-600 font-[600]">
            {title}
          </p>
          {description && <p className="text-basic">{description}</p>}
        </VStack>
      </div>
    </div>
  );
}
