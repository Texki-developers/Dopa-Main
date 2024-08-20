import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

export default function CustomizableBanner({
  title,
  description,
  children,
  rtl,
}) {
  return (
    <Center className="w-[100%] bg-[#17829E] pt-[4rem] lg:pt-[5rem] relative">
      <div className="common-space-x grid lg:grid-cols-[1.5fr_1fr] gap-[1rem] lg:gap-[3rem] relative w-[100%] z-[2] min-h-0 md:min-h-[20rem]">
        <div
          className={`flex flex-col gap-[0.5rem] py-[2rem] pb-0 justify-center ${
            rtl ? "sm:order-2" : ""
          }`}
        >
          <h1 className="banner-title text-white">
            {title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-basic max-w-[35rem] text-white">{description}</p>
        </div>
        {children}
      </div>
    </Center>
  );
}
