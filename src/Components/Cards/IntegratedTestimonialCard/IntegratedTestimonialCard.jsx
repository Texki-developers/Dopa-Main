import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

export default function IntegratedTestimonialCard() {
  return (
    <VStack className="p-6 rounded-lg bg-white gap-4 select-none">
      <HStack className="text-[#F8A401] text-[1.1rem]">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </HStack>
      <p className="text-basic">
        "DOPA is a game-changer! 200+ error-free questions, dedicated mentors,
        stress-free learning. ‘Mission NCERT’ and ‘Public Defence’ make it an
        enriching experience. Grateful!"
      </p>
      <HStack className="justify-between items-center">
        <VStack>
          <h6 className="card-heading font-medium">Mohammed Sinan</h6>
          <p className="text-basic">Dopa Student</p>
        </VStack>
        <div className="aspect-square rounded-full relative w-[3rem]">
          <Image src="/Assets/tutors/anees.png" fill alt="dopa student anees" />
        </div>
      </HStack>
    </VStack>
  );
}
