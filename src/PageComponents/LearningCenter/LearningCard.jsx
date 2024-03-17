import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import {
  IonCallOutline,
  MaterialSymbolsLocationOnOutline,
} from "@/Components/Icons/Icons";
import React from "react";

export default function LearningCard({ data }) {
  return (
    <div className='h-[15rem] md:h-[25rem] w-[100%]'
      style={{
        background: `url("${data.image}")`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}
    >
      <VStack className='  justify-end h-[100%] w-[100%]'>
        <VStack className='bg-[#000E1280] p-[1rem] text-white h-max'>
          <h1 className='font-bold'>{data?.head}</h1>
          <HStack className='gap-[1rem]'>
            <IonCallOutline />
            <p>{data?.phone}</p>
          </HStack>
          <HStack className='gap-[1rem]'>
            <MaterialSymbolsLocationOnOutline />
            <p className="hover:cursor-pointer" onClick={() => window.location.href =data.map}>Open map location</p>
          </HStack>
        </VStack>
      </VStack>
    </div>
  );
}
