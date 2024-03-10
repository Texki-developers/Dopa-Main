// ResultSlider.jsx
import React from "react";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import SliderRow from "./SliderRow";
import { resultDataRow1, resultDataRow2, resultDataRow3 } from "./resultData";

export default function ResultSlider() {
  return (
    <VStack>
      <SliderRow direction={-1} images={resultDataRow1}/>
      <SliderRow direction={1} images={resultDataRow2}/>
      <SliderRow direction={-1} images={resultDataRow2}/>
      <SliderRow direction={1} images={resultDataRow1}/>
    </VStack>
  );
}
