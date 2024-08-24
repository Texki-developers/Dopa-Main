import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import DopaFacultiesSection from "@/PageComponents/DopaFaculites/DopaFacultiesSection";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <BannerV2 />
        <DopaFacultiesSection />
      </VStack>
    </MainLayout>
  );
}
