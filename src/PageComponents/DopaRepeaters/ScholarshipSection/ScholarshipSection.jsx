import Button from "@/Components/BasicComponents/Button/Button";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import React from "react";

export default function ScholarshipSection() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr]"
      style={{
        background: "rgb(12,77,108)",
        background:
          "linear-gradient(90deg, rgba(12,77,108,1) 0%, rgba(19,138,173,1) 54%)",
      }}
    >
      <VStack className="gap-[2rem] p-[2rem] pl-[10%]">
        <h2 className="text-[2rem] sm:text-[4rem] leading-[1.2] text-white">
          ATTRACTIVE <br /> <span className="font-[700]">SCHOLARSHIPS</span>{" "}
          <br /> AWAITS YOU!!!
        </h2>
        <Button className="btn-outlined rounded-full text-white border-white hover:bg-white hover:text-black w-max px-[2rem]">
          Join Now
        </Button>
      </VStack>
      <div className="relative w-[100%]">
        <Image
          src="/Assets/repeaters/scholarship.png"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
