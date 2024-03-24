import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import Banner from "@/PageComponents/DopaRepeaters/Banner/Banner";
import DirectorsBatch from "@/PageComponents/DopaRepeaters/DirectorsBatch/DirectorsBatch";
import FeeStructure from "@/PageComponents/DopaRepeaters/FeeStructure/FeeStructure";
import HowToEnrollSection from "@/PageComponents/DopaRepeaters/HowToEnrollSection/HowToEnrollSection";
import Modes from "@/PageComponents/DopaRepeaters/modes/Modes";
import ScholarshipSection from "@/PageComponents/DopaRepeaters/ScholarshipSection/ScholarshipSection";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="pt-[7rem]">
        <Banner />
        <VStack className="bg-primary-500 py-[1rem] md:py-[5rem] gap-[5rem]">
        <DirectorsBatch/>
        <Modes/>
        <FeeStructure/>
        </VStack>
      
        <HowToEnrollSection />
        <ScholarshipSection /> 
      </VStack>
    </MainLayout>
  );
}
