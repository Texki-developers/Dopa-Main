// SliderRow.jsx
import React, { useEffect, useRef } from "react";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import Image from "next/image";

export default function SliderRow({ direction,images }) {
  const translateRef = useRef(0);

  useEffect(() => {
    const handleAnimationIteration = () => {
      // Switch the direction when the animation completes
      translateRef.current = 0;
    };

    const intervalId = setInterval(() => {
      translateRef.current -= 133 * direction;
    }, 3000); // Adjust the interval as needed

    // Add animation iteration event listener
    document.addEventListener("animationiteration", handleAnimationIteration);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("animationiteration", handleAnimationIteration);
    }; // Clear the interval and remove the event listener on component unmount
  }, [direction]);

  return (
    <HStack
      style={{
        transform: `translate(${translateRef.current}px, 0)`,
        animation: `${direction === 1 ? 'slide-left' : 'slide-right'} 3s infinite`, // Adjust the duration as needed
      }}
      className="min-w-[100vw] overflow-hidden"
    >
      {
        images && images?.map((items)=>(
          <div className="relative w-[40rem] aspect-[5/1] overflow-hidden">
          <Image
            src={items}
            alt="dopa_thrissur_results"
            fill
          />
        </div>
        ))
      }
  

     
    </HStack>
  );
}
