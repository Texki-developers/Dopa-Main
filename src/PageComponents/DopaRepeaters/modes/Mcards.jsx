import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import Image from "next/image";
export default function Mcards({data}) {
  return (
    <VStack className='rounded-xl bg-white p-[1rem] py-[2rem] md:p-[1.5rem]  xl:p-[4rem] '>
      <VStack className="gap-[2rem]">
        <HStack className="gap-[1rem]">
          <div className="relative w-[4rem] aspect-[3/3]">
            <Image src={data?.image} alt={data.head} fill />
          </div>
          <h1 className="card-heading">{data?.head}</h1>
        </HStack>

        <p>{data.para}</p>
      </VStack>
    </VStack>
  );
}
