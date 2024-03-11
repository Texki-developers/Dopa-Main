import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CoursesOffered from "@/PageComponents/CoursesOffered/CoursesOffered";
import AdmissionSection from "@/PageComponents/DopaThrissurLanding/AdmissionSection/AdmissionSection";
import CrackNeetSection from "@/PageComponents/DopaThrissurLanding/CrackNeetSection/CrackNeetSection";
import FacilitiesSection from "@/PageComponents/DopaThrissurLanding/FacilitiesSection/FacilitiesSection";
import Gallery from "@/PageComponents/DopaThrissurLanding/Gallery/Gallery";
import StudentTestimonials from "@/PageComponents/DopaThrissurLanding/StudentTestimonials/StudentTestimonials";
import LearningCenters from "@/PageComponents/LearningCenter/LearningCenters";
import ThrissurResults from "@/PageComponents/ThrissurResults/ThrissurResults";
import Tbanner from "@/PageComponents/banner/TBanner";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="mt-[4rem] md:mt-[5rem] gap-[3rem]">
        <div>
          <Tbanner />
          <CoursesOffered />
          <ThrissurResults />
        </div>
        <StudentTestimonials />
        <div>
          <AdmissionSection />
          <FacilitiesSection />
        </div>
        <CrackNeetSection />
        <LearningCenters />
        <Gallery />
      </VStack>
    </MainLayout>
  );
}
