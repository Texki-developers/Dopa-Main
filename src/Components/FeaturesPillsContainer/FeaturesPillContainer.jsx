import React from "react";
import Center from "../BasicComponents/Center/Center";
import featuresPills from "./featuresPills.json";
import FacilitiesCard from "../Cards/FacilitiesCard/FacilitiesCard";

export default function FeaturesPillContainer() {
  return (
    <Center className="py-[2rem]">
      <div className="common-space-x w-[100%] py-[1rem] flex flex-col gap-[1rem] md:gap-[1.5rem]">
        <h3 className="section-heading text-left w-max text-black">Features</h3>
        <div className="flex gap-[1rem] flex-wrap">
          {featuresPills?.map((item, index) => (
            <FacilitiesCard {...item} key={index} />
          ))}
        </div>
      </div>
    </Center>
  );
}
