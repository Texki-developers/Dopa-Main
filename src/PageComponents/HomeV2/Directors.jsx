import Center from "@/Components/BasicComponents/Center/Center";
import Image from "next/image";
import React from "react";

export default function Directors() {
  return (
    <Center>
    <div className="grid grid-cols-1 lg:grid-cols-2  px-4 md:px-20 md: md:pt-[3rem] items-start common-space-x w-full">
      <div className="relative flex flex-col gap-4 pt-3 order-2 md:order-1">
        <div className="relative z-10">
          <p className='md:max-w-[32rem] 2xl:max-w-[38rem]'>
            Dream big; we're here to guide you! “ DOPA offers entrance coaching
            that is accessible and affordable for all students. We have highly
            educated and passionate faculties who are committed to providing
            exceptional support to NEET and JEE aspirants. Offering personalized
            medical mentors and one-on-one interaction sessions to ensure
            dedicated guidance towards achieving your goals. giving you the best
            chance at achieving your dreams of becoming a doctor.”
          </p>
        </div>
        <div
          className="absolute inset-0 z-0 h-[6rem] top-[-0.5rem]"
          style={{
            background: `url('/Assets/homeV2/qoute.png') no-repeat`,
            backgroundSize: "contain",
            opacity: 0.2,
          }}
        ></div>
        <p className="font-bold relative z-10 md:max-w-[27rem]">
          Directors of DOPA - Dr.Niyas P, Dr.Asif PP, Dr.Ashique, Dr Jemshith
          Ahmed, Mr.Muneer
        </p>
      </div>
      <div className="relative h-[16rem] md:h-[26rem] md:order-2">
        <Image
          className="object-contain"
          fill
          src="/Assets/homeV2/Directors.png"
          alt="dopa neet coaching calicut"
        />
      </div>
    </div>
    </Center>
  );
}
