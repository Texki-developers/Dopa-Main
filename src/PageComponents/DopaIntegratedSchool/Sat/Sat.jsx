import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";
import Image from "next/image";

export default function Sat() {
  return (
    <Center className="bg-[#2569B4]  py-[1rem] md:py-[5rem]" 
    >
      <HStack className=" w-[100%] common-space-x justify-between ">
        <div className="relative w-[20rem] md:w-[25rem] aspect-[3/2] ">
        <Image
          src="/Assets/integratedSchool/scisat_online.png"
          alt="Scisat_mode_online"
          fill
        />
        </div>
       <div className="relative  w-[30rem] md:w-[40rem] aspect-[3/1.2]">
       <Image
          src="/Assets/integratedSchool/qrcode.png"
          alt="dopa_integrated_shool_scholarships"
          fill
        />
       </div>
      
      </HStack>
    </Center>
  );
}
