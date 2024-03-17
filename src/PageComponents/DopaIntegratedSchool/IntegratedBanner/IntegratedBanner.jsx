import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import React, { useState, useEffect } from "react";
import BannerForm from "../../banner/Form";
import Image from "next/image";
import VStack from "@/Components/BasicComponents/VStack/VStack";

export default function IntegratedBanner() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Center
      style={{
        background: 'url("/Assets/thrissurLanding/banner/Rectangle.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center`,
        backgroundSize: "cover",
      }}
    >
      <HStack className="w-[100%] common-space-x">
        <div className="grid grid-cols-1 justify-end md:grid-cols-[1.3fr,1fr] lg:grid-cols-[1.5fr,1fr] xl:grid-cols-[2fr,1.3fr] w-[100%]  lg:gap-[2rem]">
          <div className="h-[100%] flex items-center md:items-start flex-col">
            <VStack>
              <h1 className="banner-title">TARGET</h1>
              <h1 className="banner-title text-primary-600">AIIMS /IIT</h1>
              <p className="text-basic font-[600]">Run under the Guidance
of Doctors from Dopa! </p>
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
            <BannerForm type="integrated"/>
          </div>
        </div>
      </HStack>
    </Center>
  );
}
