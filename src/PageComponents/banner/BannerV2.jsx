import Center from "@/Components/BasicComponents/Center/Center";
import React from "react";

export default function BannerV2({ title, description }) {
  return (
    <Center className="w-[100%] bg-[#17829E] pt-[4rem] lg:pt-[5rem] relative">
      <div className="common-space-x grid lg:grid-cols-[1fr_1.5fr] gap-[1rem] lg:gap-[3rem] relative w-[100%] z-[2] py-[2rem] min-h-[20rem]">
        <div className="h-[100%] flex flex-col justify-center">
          <h1 className="banner-title text-white">
            {title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
        <div className="flex flex-col gap-[1rem] justify-center">
          {description.map((item, index) => (
            <p key={index} className="text-basic text-white">
              {item}
            </p>
          ))}
        </div>
      </div>
    </Center>
  );
}
