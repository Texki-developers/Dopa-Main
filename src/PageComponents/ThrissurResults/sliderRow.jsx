import React from "react";

import HStack from "@/Components/BasicComponents/HStack/HStack";
import Image from "next/image";
export default function SliderRow({SwiperSlide}) {
  return (
    <HStack className="w-[100%]">
      <SwiperSlide>
        <HStack>
          <div className="relative w-[50rem] aspect-[5/1] ">
            <Image
              src="/Assets/thrissurLanding/results/thrissur_result_row1.png"
              alt="dopa_thrissur_results"
              fill
            />
          </div>

          <div className="relative w-[50rem] aspect-[5/1] ">
            <Image
              src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
              alt="dopa_thrissur_results"
              fill
            />
          </div>
        </HStack>
      </SwiperSlide>
      <SwiperSlide>
        <HStack>
          <div className="relative w-[50rem] aspect-[5/1] ">
            <Image
              src="/Assets/thrissurLanding/results/thrissur_result_row1.png"
              alt="dopa_thrissur_results"
              fill
            />
          </div>

          <div className="relative w-[50rem] aspect-[5/1] ">
            <Image
              src="/Assets/thrissurLanding/results/thrissur_result_row1_2.png"
              alt="dopa_thrissur_results"
              fill
            />
          </div>
        </HStack>
      </SwiperSlide>
    </HStack>
  );
}
