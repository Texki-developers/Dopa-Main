import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

export default function AboutDopa() {
  return (
    <div className="w-[100%]">
      <Center>
        <div
          className="grid grid-cols-2 common-space-x w-[100%] h-[50rem] rounded-xl"
          style={{
            background: `url('/Assets/integratedSchool/about-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[100%] aspect-[157/119] relative">
            <Image
              src="/Assets/integratedSchool/founders.png"
              fill
              alt="Dopa Founders"
            />
          </div>
        </div>
      </Center>
    </div>
  );
}
