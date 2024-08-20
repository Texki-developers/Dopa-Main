import MainLayout from "@/Layouts/MainLayout";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Counters from "@/PageComponents/HomeV2/Counters";
import Directors from "@/PageComponents/HomeV2/Directors";
import DopaUpdates from "@/PageComponents/HomeV2/DopaUpdates";
import HomeBanner from "@/PageComponents/HomeV2/HomeBanner";
import HomeCourseSection from "@/PageComponents/HomeV2/HomeCourseSection";
import Result from "@/PageComponents/HomeV2/Result";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <MainLayout>
      <HomeBanner />
      <CustomizableBanner
        title={["About Us"]}
        description="DOPA is an initiative started by a group of young doctors who have completed MBBS from Calicut Medical College, Kerala. we support medical aspirants to ace the NEET along with extensive board exam preparations.
        Studying for entrance exams alongside +1 and +2 is more beneficial than spending years on entrance preparation after completing +2. DOPA's NEET INTEGRATED SCHOOL is here to
        help turn your dream into reality"
        rtl
      >
        <div className="w-[100%] aspect-[741/400] relative mt-[2rem]">
          <Image
            className="object-contain"
            src="/Assets/integratedSchool/integratted_banner.png"
            fill
          />
        </div>
      </CustomizableBanner>
      <HomeCourseSection />
      <DopaUpdates />
      <Result />
      <Testimonials />
      <Directors />
      <Counters />
    </MainLayout>
  );
}
