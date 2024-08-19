import MainLayout from "@/Layouts/MainLayout";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <CustomizableBanner
        title={["About Us"]}
        description="DOPA is an initiative started by a group of young doctors who have completed MBBS from Calicut MedicalCollege, Kerala. We support passionate students to crack their entrance exam. Scholarships will be offered tostudents achieving outstandingscores in the Integrated School Entrance Exam!"
      >
        
      </CustomizableBanner>
    </MainLayout>
  );
}
