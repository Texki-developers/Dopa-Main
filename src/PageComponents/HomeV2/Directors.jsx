import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

export default function Directors({ description, directors, image }) {
  return (
    <Center>
      <div className="grid grid-cols-1 lg:grid-cols-2  px-4 md:px-20 md: md:pt-[3rem] items-start common-space-x w-full">
        <div className="relative flex flex-col gap-4 pt-3 order-2 md:order-1">
          <div className="relative z-10">
            <p className="md:max-w-[32rem] 2xl:max-w-[38rem]">{description}</p>
          </div>
          <div
            className="absolute inset-0 z-0 h-[6rem] top-[-0.5rem]"
            style={{
              background: `url('/Assets/homeV2/qoute.png') no-repeat`,
              backgroundSize: "contain",
              opacity: 0.2,
            }}
          ></div>
          <p className="font-bold relative z-10 md:max-w-[27rem]">
            {directors}
          </p>
        </div>
        <div className="relative h-[16rem] md:h-[26rem] md:order-2">
          <Image
            className="object-contain"
            fill
            src={`http://localhost:1337${image}`}
            alt="dopa neet coaching calicut"
          />
        </div>
      </div>
    </Center>
  );
}
