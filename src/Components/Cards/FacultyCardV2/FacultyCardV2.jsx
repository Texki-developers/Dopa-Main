import Image from "next/image";
import React from "react";

export default function FacultyCardV2({
  image,
  name,
  designation,
  education,
  experience,
}) {
  return (
    <div
      className="flex flex-col w-[100%] rounded-[14px] overflow-hidden border-[#eeeeee] border-[1px] pb-[0.5rem]"
      style={{
        background: "linear-gradient(180deg, #F5F7F9 0%, #F6FEFF 100%)",
      }}
    >
      <div className="w-[100%] h-[18rem] sm:h-[20rem] relative">
        <Image src={image} fill className="object-cover object-top" />
      </div>
      <div className="flex flex-col gap-[0.2rem] px-[1rem] py-[0.5rem] border-b-[1px] border-b-[#eeeeee] mb-[0.5rem]">
        <h6 className="card-heading font-[600]">{name}</h6>
        <p className="text-basic">{designation}</p>
      </div>
      <div className="flex flex-col gap-[0.5rem] px-[1rem] py-[0.5rem]">
        <div className="flex gap-[0.5rem] items-center justify-start">
          <div className="w-[2.5rem] flex-2 h-[2.5rem] relative">
            <Image src="/Assets/icons/education.png" fill />
          </div>
          <p className="text-basic flex-shrink-[10]">{education}</p>
        </div>
        <div className="flex gap-[0.5rem] items-center justify-start">
          <div className="w-[2.5rem] h-[2.5rem] relative">
            <Image src="/Assets/icons/shield.png" fill />
          </div>
          <p className="text-basic">{experience}</p>
        </div>
      </div>
    </div>
  );
}
