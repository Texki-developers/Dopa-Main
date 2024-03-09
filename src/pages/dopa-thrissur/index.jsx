import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CoursesOffered from "@/PageComponents/CoursesOffered/CoursesOffered";
import AdmissionSection from "@/PageComponents/DopaThrissurLanding/AdmissionSection/AdmissionSection";
import CrackNeetSection from "@/PageComponents/DopaThrissurLanding/CrackNeetSection/CrackNeetSection";
import FacilitiesSection from "@/PageComponents/DopaThrissurLanding/FacilitiesSection/FacilitiesSection";
import StudentTestimonials from "@/PageComponents/DopaThrissurLanding/StudentTestimonials/StudentTestimonials";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="pt-[7rem] gap-[3rem]">
        <StudentTestimonials />
        <div>
          <AdmissionSection />
          <FacilitiesSection />
        </div>
        <CrackNeetSection />
        {/* <CoursesOffered /> */}
      </VStack>
    </MainLayout>
  );
}
