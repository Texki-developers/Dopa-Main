import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import Banner from "@/PageComponents/DopaRepeaters/Banner/Banner";
import HowToEnrollSection from "@/PageComponents/DopaRepeaters/HowToEnrollSection/HowToEnrollSection";
import ScholarshipSection from "@/PageComponents/DopaRepeaters/ScholarshipSection/ScholarshipSection";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="pt-[7rem]">
        <Banner />
        <HowToEnrollSection />
        <ScholarshipSection /> 
      </VStack>
    </MainLayout>
  );
}
