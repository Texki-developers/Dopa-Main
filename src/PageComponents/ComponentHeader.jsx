import Image from "next/image";
import React from "react";

export default function ComponentHeader({ heading, url, alt,className }) {
  return (
    <div className={`flex pt-[4rem] pb-[1.5rem] lg:pt-[5rem] gap-[1rem] items-center justify-center md:justify-start ${className}`}>
      <div className="relative w-[2rem] h-[2rem]">
        <Image src={url} fill alt={alt} />
      </div>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-teal-800 to-black'>{heading}</h1>
    </div>
  );
}
