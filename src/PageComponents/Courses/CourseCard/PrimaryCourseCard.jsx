import Link from "next/link";
import React from "react";

export default function PrimaryCourseCard({ data }) {
  return (
    <Link
      href={data?.link || "#"}
      className="p-[4rem] text-center rounded-lg flex flex-col items-center justify-center h-full  2xl:min-h-[18rem]"
      style={{
        background: `url('/Assets/homeV2/courseBg.png') no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <p className={data?.headClass}>{data?.name}</p>
      <p className={data?.subheadClass}>{data?.subtitle}</p>
    </Link>
  );
}
