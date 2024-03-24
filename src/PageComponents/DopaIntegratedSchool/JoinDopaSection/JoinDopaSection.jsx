import Button from "@/Components/BasicComponents/Button/Button";
import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import Image from "next/image";
import React from "react";

export default function JoinDopaSection() {
  return (
    <Center className="bg-soft-blue py-[3rem]">
      <div className="common-space-x">
        <div
          className="grid grid-col-1 sm:grid-cols-[1.5fr_1fr] md:grid-cols-2 items-center bg-white rounded-2xl"
          style={{
            background: `url('/Assets/integratedSchool/join-pattern.svg')`,
            backgroundSize: "cover",
          }}
        >
          <VStack className="gap-4 sm:gap-6 p-[1rem] sm:p-[2rem]">
            <h2 className="section-heading leading-[1.1]">
              <span className="text-primary-500">Join Dopa</span> and <br />{" "}
              Change your future
            </h2>
            <p className="text-basic">
              All students are eligible for admission to Dopa Integrated School
              after successfully completing the 10th standard. Integrated School
              is here to turn your entrance dream into reality.All students are
              eligible for admission to Dopa Integrated School after
              successfully completing the 10th standard. Integrated School is
              here to turn your entrance dream into reality.
            </p>
            <Button className="btn-solid bg-primary-500 text-white font-medium w-max rounded-xl">
              Contact Us
            </Button>
          </VStack>
          <div className="w-[100%] h-[100%] grid items-end pr-4 pt-4">
            <div className="aspect-[14/23] hidden sm:block w-[100%] md:w-[70%]  xl:w-[40%] relative ml-auto">
              <Image
                src="/Assets/integratedSchool/join-dopa-boy.png"
                fill
                alt="Join Dopa for change you future"
              />
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
}
