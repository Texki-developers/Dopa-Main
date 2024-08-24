import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import React from "react";
import data from "./plustwo.json";
import FacilitiesCard from "@/Components/Cards/FacilitiesCard/FacilitiesCard";

export default function index() {
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <CustomizableBanner
          title={["+1 +2 TUTION WITH", "ENTRANCE"]}
          description="Dopa's +1 and +2 tuition program offers structured and scheduled classes,
          with sessions held every Saturday tailored for both state and CBSE students.
          Additionally, specialized coaching is provided for students preparing for entrance exams such as NEET and JEE."
        >
          <div className="lg:py-[2rem]">
            <div className="w-[100%] md:h-[100%] rounded-[14px] border-[#000] overflow-hidden hidden sm:block relative">
              <Image
                src="/Assets/landingpages/plustwo.jpeg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CustomizableBanner>
        <div className="common-space-x w-[100%] flex flex-wrap gap-[1rem]">
          {data?.map((item, index) => (
            <FacilitiesCard icon={item?.icon} text={item?.item} key={index} />
          ))}
        </div>
      </VStack>
    </MainLayout>
  );
}
