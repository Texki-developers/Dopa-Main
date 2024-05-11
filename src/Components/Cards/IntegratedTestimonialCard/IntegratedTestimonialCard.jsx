import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

export default function IntegratedTestimonialCard({ data }) {
  console.log({ data });
  return (
    <VStack className="p-6 rounded-lg bg-white gap-4 select-none h-[100%]">
      <HStack className="text-[#F8A401] text-[1.1rem]">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </HStack>
      <p className="text-basic">"{data?.review}"</p>
      <HStack className="justify-between items-center mt-auto">
        <VStack>
          <h6 className="card-heading font-medium">{data?.name}</h6>
          <p className="text-basic">Dopa Student</p>
        </VStack>
        <div className="aspect-square relative w-[3rem] rounded-full bg-[#1786a1]">
          <Image
            src={`/Assets/integratedSchool/testimonials/${data?.profile}`}
            fill
            alt="dopa student anees"
            className="rounded-full object-cover object-top"
          />
        </div>
      </HStack>
    </VStack>
  );
}
