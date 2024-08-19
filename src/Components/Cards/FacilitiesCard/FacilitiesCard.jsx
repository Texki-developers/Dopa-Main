import HStack from "@/Components/BasicComponents/HStack/HStack";
import React from "react";

export default function FacilitiesCard({ text, icon, bg }) {
  return (
    <HStack
      style={{
        background: !bg ? "url('/Assets/thrissurLanding/pattern.png')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "0.71px solid",
        borderImageSource: "linear-gradient(180deg, #D7F7FF 0%, #6DDEFC 100%)",
      }}
      className={`px-[2rem] p-[0.5rem] sm:p-[1rem] text-center sm:text-left gap-4 flex-col sm:flex-row rounded-[14px] border-[2px] border-primary-50 w-[calc(50%-0.5rem)] sm:w-max max-w-[19rem] ${bg}`}
    >
      <img src={icon} className="w-[2.5rem]" />
      <p className="text-basic">{text}</p>
    </HStack>
  );
}
