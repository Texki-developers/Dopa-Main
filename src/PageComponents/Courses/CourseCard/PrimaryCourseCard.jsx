import Link from "next/link";
import React from "react";

export default function PrimaryCourseCard({ data }) {
  return (
    <Link
      href={data?.link || "#"}
      className="p-[4rem] text-center rounded-lg flex flex-col items-center justify-center h-full"
      style={{
        background: `url('/Assets/homeV2/courseBg.png') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <p
        className={`${
          data.isTitleBold ? "font-bold" : ""
        } text-white text-lg md:text-2xl lg:text-4xl`}
      >
        {data?.name}
      </p>
      <p
        className={`${
          data.isSubtitleBold ? "font-bold" : ""
        } text-[0.9rem] md:text-[1.1rem] lg:text-[1.8rem] text-white`}
      >
        {data?.subtitle}
      </p>
    </Link>
  );
}
