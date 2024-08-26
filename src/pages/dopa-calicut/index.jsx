import VStack from "@/Components/BasicComponents/VStack/VStack";
import TSRGallery from "@/Components/CarousalComponents/TSRGallery";
import Courses from "@/Components/Courses/Courses";
import FeaturesPillContainer from "@/Components/FeaturesPillsContainer/FeaturesPillContainer";
import MainLayout from "@/Layouts/MainLayout";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="gap-[1rem]">
        <VStack>
          <CustomizableBanner
            title={["Dopa Calicut", "Campus"]}
            description="Kozhikode campus is a renowned center for education, particularly known for its exceptional NEET repeaters program. This program stands out as the most systematic and effective NEET repeating course in Kerala. Additionally, the campus offers classes from grades 11 and 12, providing students with comprehensive preparation for various entrance exams."
          >
            <div className="lg:py-[2rem]">
              <div className="w-[100%] md:h-[100%] hidden sm:block relative overflow-hidden">
                <Image
                  src="/Assets/calicut-campus.jpeg"
                  fill
                  className="object-cover rounded-[14px]"
                />
              </div>
            </div>
          </CustomizableBanner>
          <Courses />
        </VStack>
        <FeaturesPillContainer />
        <TSRGallery type="clt" />
      </VStack>
    </MainLayout>
  );
}
