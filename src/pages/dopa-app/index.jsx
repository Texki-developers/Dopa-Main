import VStack from "@/Components/BasicComponents/VStack/VStack";
import MainLayout from "@/Layouts/MainLayout";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <VStack>
        <CustomizableBanner>
          <div className="w-[100%] h-[100%] relative">
            <Image
              src="/Assets/dopaApp/dopa-app-banner.png"
              fill
              className="object-cover"
            />
          </div>
        </CustomizableBanner>
      </VStack>
    </MainLayout>
  );
}
