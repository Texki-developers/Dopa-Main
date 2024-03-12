import Button from "@/Components/BasicComponents/Button/Button";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React from "react";

export default function CrackNeetSection() {
  return (
    <VStack className="text-center bg-primary-600 items-center gap-[2rem] sm:gap-[1rem] py-[2rem] sm:py-[3rem] text-white">
      <VStack className="gap-[0.5rem]">
        <h1 className="section-heading font-[400] leading-[1]">Let's crack</h1>
        <h1 className="section-heading font-[700] leading-[1]">
          The NEET 2024
        </h1>
      </VStack>
      <img src="/Assets/thrissurLanding/crack-neet.png" className="w-[100%]" />
      <Button className="btn-solid uppercase w-max">
        Enroll Capsule 4.0 Today
      </Button>
    </VStack>
  );
}
