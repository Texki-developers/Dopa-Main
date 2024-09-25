import VStack from "@/Components/BasicComponents/VStack/VStack";
import BenefitsSection from "@/Components/HomeComponents/BenefitsSection/BenefitsSection";
import MainLayout from "@/Layouts/MainLayout";
import AppCards from "@/PageComponents/DopaApp/AppCards/AppCards";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import { starpiInstance } from "@/config/strapiInstance";
import { publicRuntimeConfig } from "next.config";
import Image from "next/image";
import React from "react";

export default function index({ pageData }) {
  console.log({ pageData });
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <CustomizableBanner
          title={[pageData?.attributes?.app_banner?.heading]}
          description={pageData?.attributes?.app_banner?.description}
        >
          <div className="w-[100%] md:h-[100%] hidden sm:block relative">
            <Image
              src={`${publicRuntimeConfig.strapiUrl}${pageData?.attributes?.app_banner?.image?.data?.attributes?.url}`}
              fill
              className="object-cover"
            />
          </div>
        </CustomizableBanner>
        <AppCards data={pageData?.attributes?.dopa_app_cards?.app_cards} />
        <BenefitsSection />
      </VStack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await starpiInstance(
    `/api/dopa-app-page?populate[app_banner][populate]=*&populate[dopa_app_cards][populate][app_cards][populate]=image`
  );
  return {
    props: {
      pageData: res.data.data,
    },
  };
}
