import React from "react";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import Image from "next/image";

export default function SliderRow({ direction, images }) {
  return (
    <HStack
      style={{
        animation: `${
          direction === 1 ? "slide-left" : "slide-right"
        } 5s infinite `, // Adjust the duration as needed
      }}
      className="min-w-[100vw] overflow-hidden"
    >
      {images &&
        images?.map((items) => (
          <div className="relative w-[40rem] aspect-[3/2] overflow-hidden">
            <Image src={items} alt="dopa_thrissur_results" fill />
          </div>
        ))}
    </HStack>
  );
}
