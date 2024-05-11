import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import EnrollDetailCard from "@/Components/Cards/EnrollDetailCard/EnrollDetailCard";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { enrollDetails } from "./enroll.data";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowToEnrollSection() {
  let component = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 500) {
      let ctx = gsap.context(() => {
        gsap.to(component.current, {
          scrollTrigger: {
            trigger: component.current,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: false,
            end: "70%",
          },
        });
      }, component); // <- selector scoping
      return () => ctx.revert();
    }
  });

  return (
    <Center className="w-[100%]">
      <div className="grid common-space-x sm:grid-cols-2 gap-2rem w-[100%] overflow-hidden">
        <div
          className="flex flex-col items-center sm:items-start gap-[1rem] pt-[5rem] md:pt-[7rem]"
          ref={component}
        >
          <h2 className="text-[2rem] sm:text-[3rem] font-[800] text-primary-600">
            {width > 500 ? (
              <>
                How to <br /> Enroll
              </>
            ) : (
              "How to Enroll"
            )}
          </h2>
          <HStack className="gap-[1rem] mr-auto">
            <Center className="aspect-square w-[2.5rem] rounded-full bg-primary-600">
              <BiPhoneCall className="text-[1.2rem] text-white" />
            </Center>
            <VStack>
              <p className="card-heading uppercase">Admission Desk</p>
              <Link href="tel:919645202200">+91 9645202200</Link>
            </VStack>
          </HStack>
        </div>
        <VStack className="gap-[3rem] pt-[5rem] md:pt-[7rem]">
          {enrollDetails.map((item, index) => (
            <EnrollDetailCard key={item.title} {...item} number={index + 1} />
          ))}
        </VStack>
      </div>
    </Center>
  );
}
