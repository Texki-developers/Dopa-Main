import VStack from "@/Components/BasicComponents/VStack/VStack";
import TSRGallery from "@/Components/CarousalComponents/TSRGallery";
import Courses from "@/Components/Courses/Courses";
import FeaturesPillContainer from "@/Components/FeaturesPillsContainer/FeaturesPillContainer";
import MainLayout from "@/Layouts/MainLayout";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import { starpiInstance } from "@/config/strapiInstance";
import { formatTCKPagesData } from "@/utils/formatTCKPagesData";
import { publicRuntimeConfig } from "next.config";
import Image from "next/image";
import React from "react";

export default function index({ pageData }) {
  return (
    <MainLayout>
      <VStack className="gap-[1rem]">
        <VStack>
          <CustomizableBanner
            title={pageData?.banner?.heading}
            description={pageData?.banner?.description}
          >
            <div className="lg:pt-[2rem]">
              <div className="w-[100%] md:h-[100%] hidden sm:block relative overflow-hidden">
                <Image
                  src={`${publicRuntimeConfig.strapiUrl}${pageData?.banner?.image}`}
                  fill
                  className="object-cover"
                  alt='⁠Best neet coaching center in calicut'
                />
              </div>
            </div>
          </CustomizableBanner>
          <Courses courseData={pageData?.courses} />
        </VStack>
        <div>
          <FeaturesPillContainer features={pageData?.features} />
          <TSRGallery images={pageData?.gallery} type="ktkl" />
        </div>
      </VStack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const { data } = await starpiInstance(
    "/api/dopa-kottakkal-campus?populate[banner][populate]=*&populate[course_card][populate][course_card][populate]=*&populate[feature_card_row][populate][feature_card][populate]=*&populate[gallery][populate][images][populate]=*"
  );

  const formattedData = formatTCKPagesData(data?.data);

  return {
    props: {
      pageData: formattedData || {},
    },
  };
}
