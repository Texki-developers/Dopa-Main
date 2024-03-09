import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import AdmissionSection from "@/PageComponents/DopaThrissurLanding/AdmissionSection/AdmissionSection";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="h-[100vh] pt-[7rem]">
        <AdmissionSection />
      </VStack>
    </MainLayout>
  );
}
