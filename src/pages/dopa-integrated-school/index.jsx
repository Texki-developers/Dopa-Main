import VStack from "@/Components/BasicComponents/VStack/VStack";
import AboutDopa from "@/PageComponents/DopaIntegratedSchool/AboutDopa/AboutDopa";
import IntegratedTestimonials from "@/PageComponents/DopaIntegratedSchool/IntegratedTestimonials/IntegratedTestimonials";
import JoinDopaSection from "@/PageComponents/DopaIntegratedSchool/JoinDopaSection/JoinDopaSection";
import EnrollLayout from "@/PageComponents/DopaIntegratedSchool/Enroll/EnrollLayout";
import SuccessStories from "@/PageComponents/DopaIntegratedSchool/successStories/SuccessStories";
import React from "react";

export default function DopaIntegratedSchool() {
  return (
    <VStack className="font-montserrat">
      <AboutDopa />
      <IntegratedTestimonials />
      <JoinDopaSection />
      <SuccessStories/>
      <EnrollLayout/>
    </VStack>
  );
}
