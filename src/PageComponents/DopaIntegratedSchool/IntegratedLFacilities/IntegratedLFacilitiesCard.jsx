import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";
import Image from "next/image"; 
export default function IntegratedLFacilitiesCard({ data }) {
  return (
    <VStack  className=" sm:p-[0.5rem] xl:p-[2rem]">
      <VStack>
        <div className="relative w-[3rem] lg:w-[4rem] aspect-[3/2]">
          <Image src={data.logo} alt="facilities" fill />
        </div>
        <p className="text-basic font-[600]">{data.para}</p>
      </VStack>
    </VStack>
  );
}
