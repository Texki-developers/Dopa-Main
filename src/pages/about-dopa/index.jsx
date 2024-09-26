import BenefitsSection from "@/Components/HomeComponents/BenefitsSection/BenefitsSection";
import MainLayout from "@/Layouts/MainLayout";
import Counters from "@/PageComponents/HomeV2/Counters";
import Directors from "@/PageComponents/HomeV2/Directors";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import { starpiInstance } from "@/config/strapiInstance";
import Image from "next/image";
import React from "react";

export default function index({ pageData }) {
  console.log({ pageData });
  return (
    <MainLayout>
      <CustomizableBanner
        title={[pageData?.attributes?.about_banner?.heading]}
        description={pageData?.attributes?.about_banner?.description}
        rtl
      >
        {pageData?.attributes?.about_banner?.image?.data?.attributes?.url && (
          <div className="w-[100%] aspect-[741/400] relative mt-[2rem]">
            <Image
              src={`process.env.NEXT_PUBLIC_STRAPIE_IMAGE${pageData?.attributes?.about_banner?.image?.data?.attributes?.url}`}
              fill
            />
          </div>
        )}
      </CustomizableBanner>
      <Counters />
      <Directors
        image={
          pageData?.attributes?.directors_section?.image?.data?.attributes?.url
        }
        description={pageData?.attributes?.directors_section?.description}
        directors={pageData?.attributes?.directors_section?.directors}
      />
      <Testimonials />
      <BenefitsSection />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await starpiInstance(
    "/api/about-us-page?populate[about_banner][populate]=*&populate[directors_section][populate]=*"
  );
  return {
    props: {
      pageData: res.data.data,
    },
  };
}
