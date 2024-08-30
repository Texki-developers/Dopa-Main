import BenefitsSection from "@/Components/HomeComponents/BenefitsSection/BenefitsSection";
import MainLayout from "@/Layouts/MainLayout";
import Counters from "@/PageComponents/HomeV2/Counters";
import Directors from "@/PageComponents/HomeV2/Directors";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <CustomizableBanner
        title={["About Us"]}
        description="DOPA is an initiative started by a group of young doctors who have completed MBBS from Calicut MedicalCollege, Kerala. We support passionate students to crack their entrance exam. Scholarships will be offered tostudents achieving outstandingscores in the Integrated School Entrance Exam!"
        rtl
      >
        <div className="w-[100%] aspect-[741/400] relative mt-[2rem]">
          <Image src="/Assets/homeV2/banner_dopa_directors.png" fill />
        </div>
      </CustomizableBanner>
      <Counters/>
      <Directors />
      <Testimonials />
      <BenefitsSection />
    </MainLayout>
  );
}
