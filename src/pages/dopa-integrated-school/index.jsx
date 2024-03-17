import VStack from "@/Components/BasicComponents/VStack/VStack";
import AboutDopa from "@/PageComponents/DopaIntegratedSchool/AboutDopa/AboutDopa";
import IntegratedTestimonials from "@/PageComponents/DopaIntegratedSchool/IntegratedTestimonials/IntegratedTestimonials";
import JoinDopaSection from "@/PageComponents/DopaIntegratedSchool/JoinDopaSection/JoinDopaSection";
import EnrollLayout from "@/PageComponents/DopaIntegratedSchool/Enroll/EnrollLayout";
import SuccessStories from "@/PageComponents/DopaIntegratedSchool/successStories/SuccessStories";
import React from "react";
import Sat from "@/PageComponents/DopaIntegratedSchool/Sat/Sat";
import IntegratedLFacilitiesLayout from "@/PageComponents/DopaIntegratedSchool/IntegratedLFacilities/IntegratedLFacilitiesLayout";
import IntegratedBanner from "@/PageComponents/DopaIntegratedSchool/IntegratedBanner/IntegratedBanner";
import MainLayout from "@/Layouts/MainLayout";

export default function DopaIntegratedSchool() {
  return (
    <MainLayout>
  <VStack className="font-montserrat mt-[4rem] md:mt-[5rem]">
      <IntegratedBanner/>
      <AboutDopa />
      <EnrollLayout/>
      <IntegratedTestimonials />
      <IntegratedLFacilitiesLayout/>
      <SuccessStories/>
      <Sat/>
      <JoinDopaSection />
  
    </VStack>
    </MainLayout>
  
  );
}
