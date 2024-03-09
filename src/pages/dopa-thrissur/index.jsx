import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CoursesOffered from "@/PageComponents/CoursesOffered/CoursesOffered";
import AdmissionSection from "@/PageComponents/DopaThrissurLanding/AdmissionSection/AdmissionSection";
import LearningCenters from "@/PageComponents/LearningCenter/LearningCenters";
import Tbanner from "@/PageComponents/banner/TBanner";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="min-h-[100vh] pt-[5rem]">
        <Tbanner/>
        {/* <AdmissionSection /> */}
        <CoursesOffered />
        <LearningCenters/>
      </VStack>
    </MainLayout>
  );
}
