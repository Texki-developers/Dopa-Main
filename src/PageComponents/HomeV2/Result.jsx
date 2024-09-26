import React from "react";
import ComponentHeader from "../ComponentHeader";
import Image from "next/image";
import Center from "@/Components/BasicComponents/Center/Center";

export default function Result({
  firstImage,
  secondImage,
  firstAlt,
  secondAlt,
}) {
  return (
    <Center>
      <div className="flex flex-col p-4 md:px-16 common-space-x w-full">
        <ComponentHeader heading="Results" url="/Assets/icons/result.png" />
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1.5fr] ">
          <div className="relative  lg:order-2 aspect-[3/2] lg:aspect-auto pb-3 lg:pb-0">
            <Image
              className="object-cover"
              src={secondImage}
              fill
              alt={secondAlt}
            />
          </div>
          <div className="relative aspect-square  ">
            <Image
              className="object-cover"
              src={firstImage}
              fill
              alt={firstAlt}
             
            />
          </div>
        </div>
      </div>
    </Center>
  );
}
