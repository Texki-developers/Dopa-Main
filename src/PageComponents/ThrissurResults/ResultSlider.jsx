// ResultSlider.jsx
import React from "react";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import SliderRow from "./SliderRow";
import { resultData } from "./resultData";

export default function ResultSlider() {
  return (
    <VStack>
      <SliderRow direction={-1} images={resultData.row1}/>
      <SliderRow direction={1} images={resultData.row2}/>
      <SliderRow direction={-1} images={resultData.row3}/>
      <SliderRow direction={1} images={resultData.row4}/>
    </VStack>
  );
}
