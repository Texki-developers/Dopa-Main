import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import featuresPills from "../../Components/FeaturesPillsContainer/entraceFeatures.json";
import SwiperCore, { Navigation, FreeMode, Autoplay } from "swiper/core";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import Center from "@/Components/BasicComponents/Center/Center";
import FacilitiesCard from "@/Components/Cards/FacilitiesCard/FacilitiesCard";
SwiperCore.use([Navigation, FreeMode, Autoplay]);

export default function Tution() {
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <CustomizableBanner
          title={["DOPA Tution & Foundation", "ENTRANCE"]}
          description="Dopa's +1 and +2 tuition program offers structured and scheduled classes, with sessions held every Saturday tailored for both state and CBSE students. Additionally, specialized coaching is provided for students preparing for entrance exams such as NEET and JEE."
        >
          <div className="lg:pt-[2rem] lg:pb-[3rem]">
            <div className="w-[100%] md:h-[100%] hidden sm:block relative overflow-hidden">
              <Image
                src="/Assets/homeV2/dopa_neet_coaching_entrance.png"
                fill
                className="object-cover rounded-[14px]"
              />
            </div>
          </div>
        </CustomizableBanner>

        <Center className="py-[2rem]">
      <div className="common-space-x w-[100%] py-[1rem] flex flex-col gap-[1rem] md:gap-[1.5rem]">
        <h3 className="section-heading text-left w-max text-black">Features</h3>
        <div className="flex gap-[1rem] flex-wrap">
          {featuresPills?.map((item, index) => (
            <FacilitiesCard {...item} key={index} />
          ))}
        </div>
      </div>
    </Center>
      </VStack>
    </MainLayout>
  );
}
