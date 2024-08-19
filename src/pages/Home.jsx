import MainLayout from "@/Layouts/MainLayout";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import Counters from "@/PageComponents/Counters";
import Directors from "@/PageComponents/Directors";
import DopaUpdates from "@/PageComponents/DopaUpdates";
import HomeBanner from "@/PageComponents/HomeBanner";
import HomeCourseSection from "@/PageComponents/HomeCourseSection";
import Result from "@/PageComponents/Result";
import Testimonials from "@/PageComponents/TestimonialsV2/Testimonials";
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
