import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

const title = ["DOPA App"];
const description =
  "The DOPA app help you prepare for the NEET exam with personalized lessons & support.";

export default function CustomizableBanner({ children }) {
  return (
    <Center className="w-[100%] banner-gradient pt-[4rem] lg:pt-[5rem] relative">
      <div className="w-[50vw] h-[calc(100%-5rem)] absolute left-0 top-[5rem] z-[1] select-none">
        <Image src="/Assets/banner-bg-clip.png" fill />
      </div>
      <div className="common-space-x grid lg:grid-cols-[1.5fr_1fr] gap-[1rem] lg:gap-[3rem] relative w-[100%] z-[2] min-h-[20rem]">
        <div className="flex flex-col gap-[0.5rem] py-[1rem] justify-center">
          <h1 className="banner-title text-gradient">
            {title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-basic max-w-[35rem]">{description}</p>
        </div>
        {children}
      </div>
    </Center>
  );
}
