import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

const title = ["OUR", "FACULTIES"];
const description = [
  "An initiative started by a group of young doctors who have completed MBBS from Calicut Medical College, Kerala. We support passionate students to crack their entrance exam.",
  "All students are eligible for admission to Dopa Integrated School after successfully completing the 10th standard. Integrated School is here to turn your entrance dream into reality.",
];

export default function BannerV2() {
  return (
    <Center className="w-[100%] banner-gradient pt-[4rem] lg:pt-[5rem] relative">
      <div className="w-[50vw] h-[calc(100%-5rem)] absolute left-0 top-[5rem] z-[1] select-none">
        <Image src="/Assets/banner-bg-clip.png" fill />
      </div>
      <div className="common-space-x grid lg:grid-cols-[1fr_1.5fr] gap-[1rem] lg:gap-[3rem] relative w-[100%] z-[2] py-[2rem] min-h-[20rem]">
        <div className="h-[100%] flex flex-col justify-center">
          <h1 className="banner-title text-gradient">
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
            <p key={index} className="text-basic">
              {item}
            </p>
          ))}
        </div>
      </div>
    </Center>
  );
}
