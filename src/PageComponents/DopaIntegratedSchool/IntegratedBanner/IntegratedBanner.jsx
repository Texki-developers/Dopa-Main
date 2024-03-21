import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";
import BannerForm from "../../banner/Form";
import Image from "next/image";
import VStack from "@/Components/BasicComponents/VStack/VStack";

export default function IntegratedBanner() {
  return (
    <Center
      style={{
        background: 'url("/Assets/integratedSchool/inner_bg_banner.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center`,
        backgroundSize: "cover",
      }}
    >
      <HStack className="w-[100%] common-space-x pt-[2.5rem] md:pt-0">
        <div className="grid grid-cols-1 justify-end md:grid-cols-[1.3fr,1fr] lg:grid-cols-[1.5fr,1fr] xl:grid-cols-[2fr,1.3fr] w-[100%] md:gap-[2rem] lg:gap-[10rem]  xl:gap-[13rem]">
          <div className="h-[100%] flex items-center md:items-start flex-col justify-end">
            <VStack className='gap-[1rem]'>
              <div>
              <h1 className="banner-title ">TARGET</h1>
              <h1 className="banner-title text-primary-600 leading-[1.5rem] md:leading-[3rem]">
                AIIMS /IIT
              </h1>
              </div>
            
              <p className="section-heading-Xsmall font-[800]">
                Run under the Guidance of Doctors from Dopa!{" "}
              </p>
            </VStack>
            <div className="relative  aspect-[3/2]  w-[100%]  xl:w-[100%] flex items-end justify-end">
              <Image
                src="/Assets/integratedSchool/integratted_banner.png"
                alt="thrissur_landing"
                fill
              />
            </div>
          </div>

          <div className="w-[100%] pb-[1rem] md:py-[1rem] lg:py-[6rem] xl:py-[4rem]">
            <BannerForm type="integrated" />
          </div>
        </div>
      </HStack>
    </Center>
  );
}
