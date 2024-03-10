// ResultSlider.jsx
import React from "react";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import SliderRow from "./SliderRow";

export default function ResultSlider() {
  return (
    <VStack>
      <SliderRow direction={-1} />
      <SliderRow direction={1} />
      <SliderRow direction={-1} />
      <SliderRow direction={1} />
    </VStack>
  );
}
