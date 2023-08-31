import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import BannerSection from "./Sections/BannerSection/BannerSection";
import { VStack } from "@chakra-ui/react";
import BenefitsSection from "./Sections/BenefitsSection/BenefitsSection";
import DownoloadBrochure from "./Sections/DownloadBrochure/DownoloadBrochure";
import VideosSection from "./Sections/videosSection/VideosSection";

export default function trending() {
  return (
    <MainLayout>
      <VStack pt={24} gap={{ base: 6, sm: 8, lg: 16 }} pb={4}>
        <BannerSection />
        {/* <BenefitsSection /> */}
        <DownoloadBrochure />
        <VideosSection />
      </VStack>
    </MainLayout>
  );
}
