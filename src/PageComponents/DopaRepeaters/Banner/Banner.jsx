import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import BannerForm from "@/PageComponents/banner/Form";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <Center className="w-[100%]">
      <div className="grid common-space-x gap-[1rem] md:gap-[6rem] grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-[1.5fr_1fr] w-[100%]">
        <VStack className="gap-[1rem]">
          <HStack className="gap-[1rem] w-[100%] justify-center ">
            <div className="aspect-video w-[12rem] sm:w-[17rem]   relative">
              <Image src="/Assets/repeaters/repeaters_logo.png" fill />
            </div>
          </HStack>
          <div className="aspect-[322/261] w-[80%] mx-auto md:w-[100%] relative">
            <Image src="/Assets/repeaters/banner-img.png" fill />
          </div>
          {/* <div className="w-[100%] grid grid-cols-3 p-[7px] text-[0.9rem] sm:text-[1rem] mx-auto rounded-md text-center uppercase card-heading text-primary-600 bg-[#F8F5A9] max-w-[40rem]">
            <p className="w-[100%] after:content-[''] after:h-[100%] after:w-[1px] after:bg-primary-600 after:block relative after:right-0 after:top-0 after:absolute">
              Residential
            </p>
            <p className="w-[100%] after:content-[''] after:h-[100%] after:w-[1px] after:bg-primary-600 after:block relative after:right-0 after:top-0 after:absolute">
              Online
            </p>
            <p className="w-[100%]">Offline</p>
          </div> */}
        </VStack>

        <Center className="sm:w-[70%] sm:mx-auto md:w-[100%]">
          <BannerForm type="repeaters" />
        </Center>
      </div>
    </Center>
  );
}
