import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import FacilitiesCard from "@/Components/Cards/FacilitiesCard/FacilitiesCard";
import React from "react";
import { facilities, hostelFacilities } from "./Facilities.data";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";

export default function FacilitiesSection() {
  return (
    <Center className="w-[100%]">
      <VStack className="common-space-x gap-[1rem] sm:gap-[3rem]">
        <h1 className="section-heading text-center">Facilities</h1>
        <HStack className="flex-wrap gap-4 items-stretch">
          {facilities.map((item) => (
            <FacilitiesCard {...item} key={item.text} />
          ))}
        </HStack>
        <div className="relative grid md:grid-cols-[1fr_1.2fr] gap-[3rem] w-[100%]">
          <div className="hidden md:block aspect-square w-[100%] rounded-lg relative">
            <Image src="/Assets/thrissurLanding/hostel-facilities.png" fill />
          </div>
          <VStack className="gap-[1rem] sm:gap-[2rem] w-[100%] p-[1rem] sm:p-[2rem] rounded-lg bg-primary-50">
            <h2 className="section-heading-small font-bold">
              Hostel Facilities
            </h2>
            <VStack className="gap-2">
              {hostelFacilities.map((item, index) => (
                <HStack key={index} className="gap-4">
                  <MdOutlineDone className="text-[1.5rem] text-green-500" />
                  <p className="text-[1rem] sm:text-[1.3rem]">{item}</p>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </div>
      </VStack>
    </Center>
  );
}
