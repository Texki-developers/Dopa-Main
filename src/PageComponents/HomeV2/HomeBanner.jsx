import Button from "@/Components/BasicComponents/Button/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function HomeBanner({ data }) {
  const { push } = useRouter();
  const image_base = process.env.NEXT_PUBLIC_STRAPIE_IMAGE;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  pt-[4rem] md:pt-[5rem] lg:pt-28  px-4 sm:px-[4rem] lg:px-[5rem] 2xl:px-[8rem]">
      <div className="pb-6 xl:pb-[6rem] order-1 pt-4">
        <div className="flex flex-col gap-1 lg:gap-3 pb-6">
          <h1 className=" lg:max-w-[36rem] text-xl md:text-2xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-teal-800 to-black">
            {data?.MainHead}
          </h1>
          <p className="font-600 text-[0.8rem] lg:text-base">
            {data?.description}
          </p>
        </div>

        <Button
          style={{ boxShadow: "0px 3.42px 3.42px 0px #00000040" }}
          className="btn-common bg-[#06AEC6] py-2 font-bold rounded-full text-white active:bg-white  active:text-black w-full md:w-[16rem]"
          onClick={() => push(data?.buttonLink)}
        >
          {data?.buttonName}
        </Button>
      </div>

      <div className="relative md:order-2 h-[12rem] md:h-full">
        <Image
          fill
          className="object-contain object-bottom"
          src={`${image_base}${data?.image?.data?.attributes?.url}`}
          alt={data?.image?.data?.attributes?.alternativeText}
        />
      </div>
    </div>
  );
}
