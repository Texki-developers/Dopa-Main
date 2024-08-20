import MainLayout from "@/Layouts/MainLayout";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import Counters from "@/PageComponents/HomeV2/Counters";
import Directors from "@/PageComponents/HomeV2/Directors";
import DopaUpdates from "@/PageComponents/HomeV2/DopaUpdates";
import HomeBanner from "@/PageComponents/HomeV2/HomeBanner";
import HomeCourseSection from "@/PageComponents/HomeV2/HomeCourseSection";
import Result from "@/PageComponents/HomeV2/Result";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import React from "react";

export default function Home() {
  return (
    <MainLayout>
      <HomeBanner />
      <BannerV2/>
      <HomeCourseSection />
      <DopaUpdates />
      <Result />
      <Testimonials/>
      <Directors />
      <Counters />
    </MainLayout>
  );
}
