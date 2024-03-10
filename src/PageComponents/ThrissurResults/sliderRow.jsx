// SliderRow.jsx
import React from "react";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import Image from "next/image";

export default function SliderRow({ direction }) {
 
console.log(direction,"direction")

  return (
    <HStack
      style={{
        animation: `${direction === 1 ? 'slide-left' : 'slide-right'} 3s infinite`, // Adjust the duration as needed
      }}
      className="min-w-[100vw] overflow-hidden"
    >
      <div className="relative w-[40rem] aspect-[6/1] md:aspect-[5/3] overflow-hidden">
        <Image
          src="/Assets/thrissurLanding/results/thrissur_result_row1.png"
          alt="dopa_thrissur_results"
          fill
        />
      </div>

      <div className="relative w-[40rem] aspect-[6/1] md:aspect-[5/3] overflow-hidden">
        <Image
          src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
          alt="dopa_thrissur_results"
          fill
        />
      </div>

      <div className="relative w-[40rem] aspect-[6/1] md:aspect-[5/3] overflow-hidden">
        <Image
          src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
          alt="dopa_thrissur_results"
          fill
        />
      </div>

      <div className="relative w-[40rem] aspect-[6/1] md:aspect-[5/3] overflow-hidden">
        <Image
          src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
          alt="dopa_thrissur_results"
          fill
        />
      </div>

      <div className="relative w-[40rem] aspect-[6/1] md:aspect-[5/3] overflow-hidden">
        <Image
          src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
          alt="dopa_thrissur_results"
          fill
        />
      </div>
    </HStack>
  );
}
