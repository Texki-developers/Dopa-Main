import React from "react";
import Center from "../BasicComponents/Center/Center";
import featuresPills from "./featuresPills.json";
import FacilitiesCard from "../Cards/FacilitiesCard/FacilitiesCard";

export default function FeaturesPillContainer() {
  return (
    <Center className="bg-primary-50">
      <div className="common-space-x w-[100%] py-[1rem] gap-[2rem]">
        <h3 className="card-heading-v2 text-left w-[100%]">Features</h3>
        <div className="flex gap-[1rem] flex-wrap">
          {featuresPills?.map((item, index) => (
            <FacilitiesCard {...item} key={index} />
          ))}
        </div>
      </div>
    </Center>
  );
}
