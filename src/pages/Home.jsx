import MainLayout from "@/Layouts/MainLayout";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import Counters from "@/PageComponents/Counters";
import Directors from "@/PageComponents/Directors";
import DopaUpdates from "@/PageComponents/DopaUpdates";
import HomeBanner from "@/PageComponents/HomeBanner";
import HomeCourseSection from "@/PageComponents/HomeCourseSection";
import Result from "@/PageComponents/Result";
import React from "react";

export default function Home() {
  return (
    <MainLayout>
      <HomeBanner />
      <BannerV2/>
      <HomeCourseSection />
      <DopaUpdates />
      <Result />
      <Directors />
      <Counters />
    </MainLayout>
  );
}
