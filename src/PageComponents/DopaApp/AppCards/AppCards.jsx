import Center from "@/Components/BasicComponents/Center/Center";
import AppCard from "@/Components/Cards/AppCard/AppCard";
import React from "react";
import data from "./appcards.json";

export default function AppCards() {
  return (
    <Center>
      <div className="common-space-x w-[100%] grid md:grid-cols-2 gap-[1.5rem]">
        {data?.map((item, index) => (
          <AppCard key={index} {...item} />
        ))}
      </div>
    </Center>
  );
}
