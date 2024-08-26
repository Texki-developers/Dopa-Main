import Image from "next/image";
import React from "react";

export default function AppCard({ image, heading, description, points }) {
  return (
    <div
      className="grid sm:grid-cols-[1.3fr_1.5fr] w-[100%] rounded-[14px] px-[0.8rem] md:px-[1rem] gap-[1rem] md:min-h-[15rem] md:pl-[2rem]"
      style={{
        background:
          "linear-gradient(114.84deg, #ADFAFF 7.53%, #DFFCFF 56.79%, #85F0FF 101.39%)",
        border: "1px solid",
        borderImageSource:
          "linear-gradient(110.44deg, #FFFFFF 0%, #41E4FF 104.05%)",
      }}
    >
      <div className="relative h-[100%] w-[100%]">
        <img
          src={image}
          className="relative sm:absolute object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-col gap-[0.5rem] justify-center py-[1rem]">
        <h5 className="card-heading font-[600]">{heading}:</h5>

        {points && points?.length > 0 ? (
          <div className="flex flex-col gap-[1rem]">
            {points?.map((point, index) => (
              <div
                key={index}
                className={`flex gap-[0.5rem] pb-[0.5rem] ${
                  index !== points?.length - 1
                    ? "border-[#000] border-b-[1px]"
                    : ""
                }`}
              >
                <div className="w-[1rem] h-[1rem] mt-[5px] md:w-[1.5rem] md:h-[1.5rem] relative">
                  <Image src="/Assets/dopaApp/point.png" fill />
                </div>
                <p className="text-basic flex-shrink-[10]">{point}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-basic">{description}</p>
        )}
      </div>
    </div>
  );
}
