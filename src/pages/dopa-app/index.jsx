import VStack from "@/Components/BasicComponents/VStack/VStack";
import BenefitsSection from "@/Components/HomeComponents/BenefitsSection/BenefitsSection";
import MainLayout from "@/Layouts/MainLayout";
import AppCards from "@/PageComponents/DopaApp/AppCards/AppCards";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <CustomizableBanner
          title={["DOPA App"]}
          description="The DOPA app help you prepare for the NEET exam with personalized lessons & support."
        >
          <div className="w-[100%] md:h-[100%] hidden sm:block relative">
            <Image
              src="/Assets/dopaApp/dopa-app-banner.png"
              fill
              className="object-cover"
            />
          </div>
        </CustomizableBanner>
        <AppCards />
        <BenefitsSection />
      </VStack>
    </MainLayout>
  );
}
