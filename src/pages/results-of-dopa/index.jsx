import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack className="pb-[1rem]">
        <div
          className="w-[100%] pt-[5rem] sm:pt-[6rem] flex justify-center items-center "
          style={{
            background:
              "radial-gradient(56.41% 112.81% at 50% 50%, #4D6F84 0%, #204B65 100%)",
          }}
        >
          <img src="/Assets/results/result-banner.png" alt="" />
        </div>
        <img src="/Assets/results/results.jpg" alt="" />
        <Testimonials />
      </VStack>
    </MainLayout>
  );
}
