import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";

export default function CoachingTextComponent() {
  return (
    <VStack className="gap-[2rem] items-center md:items-start">
      <VStack className="gap-[2rem]">
        <h1 className="text-primary-500 section-heading font-[700]">INDIA'S & LARGEST DOCTORS' NEET COACHING PLATFORM</h1>
        <div>
          <p className="text-basic">
            A medical entrance coaching institution bg a group of doctors who
            are passed out from Calicut Medical College. We support passionate
            students to crack their entrance exam.
          </p>
          <p className="text-basic">
            DOPA repeaters batch stands out as Kerala's systematic and effective
            NEET repeating course.
          </p>
        </div>
      </VStack>

      <HStack className='!items-start gap-[3rem]'>
        <VStack>
          <h1 className="text-primary-400 banner-subtitle">Residential & Online Class Hours</h1>
          <div>
            <p className="text-basic">- 500+ Recorded Classes</p>
            <p className="text-basic">- 500+ Live Classes</p>
          </div>
        </VStack>
        <VStack>
          <h1 className="text-primary-400 banner-subtitle">Offline Class Hours</h1>
          <div>
            <p className="text-basic">- 800+ Live Classes</p>
          </div>
        </VStack>
      </HStack>
    </VStack>
  );
}
