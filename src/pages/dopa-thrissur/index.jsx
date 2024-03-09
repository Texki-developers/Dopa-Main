import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CoursesOffered from "@/PageComponents/CoursesOffered/CoursesOffered";
import AdmissionSection from "@/PageComponents/DopaThrissurLanding/AdmissionSection/AdmissionSection";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="min-h-[100vh] pt-[7rem]">
        <AdmissionSection />
        <CoursesOffered />
      </VStack>
    </MainLayout>
  );
}
