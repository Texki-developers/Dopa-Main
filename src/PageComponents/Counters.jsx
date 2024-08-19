import Image from "next/image";
import React from "react";

export default function Counters() {
  const counters = [
    {
      title: "50k+",
      subtitle: "Students Impacted",
      logo: "/assets/",
    },
    {
        title: "2 Million+",
        subtitle: "hours of Live learning",
        logo: "/assets/",
      },
      {
        title: "1 Million+",
        subtitle: "Monthly Youtube Views",
        logo: "/assets/",
      },
      {
        title: "1k+",
        subtitle: "Admissions in Top-colleges",
        logo: "/assets/",
      },
  ];
  return (
    <div className='flex gap-4 bg-[#F6FDFE] p-4 md:px-32 '>
      {counters &&
        counters.map((data) => (
          <div key={data.title} className='border border-black p-6 rounded-md bg-white w-full'>
            <div className="relative">
              <Image src={data?.logo} alt="" fill />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-[600] text-3xl">{data?.title}</h1>
              <p>{data?.subtitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
