import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";
import EnrollCard from "./EnrollCard";
import { EnrollData } from "./EnrollData";
import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";

export default function EnrollLayout() {
  return (
    <Center className=" py-[1rem] md:py-[4rem]">
      <VStack className=" common-space-x w-[100%] items-center gap-[2rem]">
        <h1 className="banner-title">
          How to <span className="text-primary-400">enroll?</span>{" "}
        </h1>

        <HStack className="flex-col md:flex-row gap-2 w-[100%] h-[100%] ">
          {EnrollData && EnrollData.map((items) => <EnrollCard data={items} />)}
        </HStack>
      </VStack>
    </Center>
  );
}
