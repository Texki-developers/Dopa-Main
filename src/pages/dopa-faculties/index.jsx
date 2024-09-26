import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import DopaFacultiesSection from "@/PageComponents/DopaFaculites/DopaFacultiesSection";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import { starpiInstance } from "@/config/strapiInstance";
import { publicRuntimeConfig } from "next.config";
import React from "react";

export default function index({ pageData }) {
  return (
    <MainLayout>
      <VStack className="gap-[1rem] pb-[1rem]">
        <BannerV2 {...pageData?.banner} />
        <DopaFacultiesSection faculties={pageData?.faculties} />
      </VStack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const { data } = await starpiInstance(
    "/api/faculties-page?populate[banner][populate]=*&populate[faculty_card_row][populate][faculty_card][populate]=*"
  );

  const formattedData = {};
  formattedData.banner = data?.data?.attributes?.banner;
  formattedData.faculties =
    data?.data?.attributes?.faculty_card_row?.faculty_card;

  formattedData.banner = {
    ...formattedData.banner,
    title: formattedData?.banner?.split_header
      ? formattedData?.banner?.heading?.split(",")
      : formattedData?.banner?.heading || "",
    description: formattedData?.banner?.description?.split("\n\n"),
  };
  formattedData.faculties = formattedData.faculties?.map((item) => ({
    ...item,
    image: `${publicRuntimeConfig.strapiUrl}${item?.photo?.data?.attributes?.url}`,
  }));

  return {
    props: {
      pageData: formattedData || {},
    },
  };
}
