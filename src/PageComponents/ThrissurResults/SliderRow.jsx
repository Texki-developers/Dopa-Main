import React from "react";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import Image from "next/image";

export default function SliderRow({ direction, images }) {
  return (
    <HStack
      style={{
        animation: `${
          direction === 1 ? "slide-left" : "slide-right"
        } 8s infinite `, // Adjust the duration as needed
      }}
      className="min-w-[100vw] "
    >
      
            <img className="object-cover " src={images} alt="dopa_thrissur_results"  />
       
  
    </HStack>
  );
}
