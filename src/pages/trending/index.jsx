import MainLayout from "@/Layouts/MainLayout";
import React, { useEffect, useState } from "react";
import BannerSection from "./Sections/BannerSection/BannerSection";
import { VStack } from "@chakra-ui/react";
import BenefitsSection from "./Sections/BenefitsSection/BenefitsSection";
import DownoloadBrochure from "./Sections/DownloadBrochure/DownoloadBrochure";
import VideosSection from "./Sections/videosSection/VideosSection";
import { getLanding } from "@/utils/Services/trending.service";

export default function Trending() {
  const [data, setData] = useState();
  useEffect(() => {
    getLanding().then((res) => {
      setData(res?.data?.data);
    });
  }, []);

  console.log(data);
  return (
    <MainLayout>
      <VStack pt={24} gap={{ base: 6, sm: 8, lg: 16 }} pb={4}>
        <BannerSection data={data} />
        {/* <BenefitsSection /> */}
        <DownoloadBrochure data={data} />
        <VideosSection data={data} />
      </VStack>
    </MainLayout>
  );
}
