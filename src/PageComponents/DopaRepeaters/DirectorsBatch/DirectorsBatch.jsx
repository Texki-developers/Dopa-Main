import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import Image from "next/image";
import HStack from "@/Components/BasicComponents/HStack/HStack";

export default function DirectorsBatch() {
  const directors = [
    {
      name: "Dr Ashiq Sainudheen",
      role: "Academic Director | DOPA",
    },
    {
      name: "Dr Niyas Paloth",
      role: "CEO | DOPA",
    },
    {
      name: "Dr Asif PP",
      role: "Founder | DOPA",
    },
  ];
  return (
    <Center>
      <VStack className="w-[100%] common-space-x items-center text-white gap-[3rem]">
        <VStack className="gap-[1rem] md:gap-[2rem] items-center">
          <h1 className="banner-title">Directors' Batch</h1>
          <p className="text-basic max-w-[80%] text-center">Introducing the Directors' Batch, an innovative addition for NEET Repeaters. Join for exclusive mentorship from experienced doctors leading the DOPA team.</p>
        </VStack>

        <VStack className="w-[100%]">
          <div className="relative w-[100%] aspect-[2/1]">
            <Image
              src="/Assets/repeaters/directors_batch.png"
              alt="dopa_directors"
              fill
            />
          </div>
          <HStack style={{background: 'linear-gradient(90deg, #1596B9 0%, #0C4A69 100%)'
}} className='flex-col md:flex-row justify-center py-3 md:py-1  gap-[0.5rem] md:gap-0 rounded-b-xl'>
            {directors &&
              directors.map((items,index) => (
                <VStack style={{borderRight:index === 2 && '0'}} className="border-white md:border-r-2 md:p-[2rem] items-center  md:py-[1rem]">
                  <h1 className="text-basic font-[700]">{items.name}</h1>
                  <p className="text-basic"> {items.role}</p>
                </VStack>
              ))}
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
}
