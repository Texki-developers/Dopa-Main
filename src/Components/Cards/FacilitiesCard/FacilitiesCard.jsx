import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";

export default function FacilitiesCard({ text, icon }) {
  return (
    <HStack className="px-[2rem] p-[0.5rem] sm:p-[1rem] text-center sm:text-left gap-4 flex-col sm:flex-row rounded-md border-[2px] border-primary-200 w-[calc(50%-0.5rem)] sm:w-max max-w-[19rem]">
      <img src={icon} className="w-[2.5rem]" />
      <p className="text-basic">{text}</p>
    </HStack>
  );
}
