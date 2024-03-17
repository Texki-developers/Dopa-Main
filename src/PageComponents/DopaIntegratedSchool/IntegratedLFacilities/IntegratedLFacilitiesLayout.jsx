import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React, { useEffect, useState } from "react";
import IntegratedLFacilitiesCard from "./IntegratedLFacilitiesCard";
import { FacilitiesData } from "./facilitiesData";

export default function IntegratedLFacilitiesLayout() {
  const [width, setWidth] = useState(0);
  const [data, setData] = useState({
    divide: 4,
    equal: 3,
    minus: 4,
  });

  useEffect(() => {
    setWidth(window.innerWidth);

    if (width >= 1280) {
      setData({
        divide: 4,
        equal: 3,
        minus: 4,
      });
    } else if (width >= 768) {
      setData({
        divide: 3,
        equal: 2,
        minus: 2,
      });
    } else if (width >= 640) {
      setData({
        divide: 2,
        equal: 1,
        minus: 2,
      });  
    } else{
      setData({
        divide: 1,
        equal: 0,
        minus: 1,
      });
    }
  }, [width]);
  console.log(data,width)
  return (
    <Center
      style={{
        background: 'url("/Assets/integratedSchool/facilites_bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-[1rem] md:py-[4rem] w-[100%]"
    >
      <VStack className="common-space-x w-[100%] items-center gap-[3rem]">
        <h1 className="banner-title">
          <span className="text-primary-500">Easy</span> Learning Facilities
        </h1>
        <div
          className="rounded-xl p-[2rem] grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0"
          style={{
            background:
              "linear-gradient(155.62deg, #FFFFFF 0%, #FFFFFF 84.41%)",
          }}
        >
          {FacilitiesData &&
            FacilitiesData.map((items, index) => (
              <div
                key={items}
                className={
                  "border-[#B5AFAF] p-[2rem] " +
                  (index % data.divide === data.equal ? "" : "border-r-[1px] ") +
                  (index < FacilitiesData.length - data.minus ? "border-b-[1px] " : "")
                }
              >
                <IntegratedLFacilitiesCard data={items} />
              </div>
            ))}
        </div>
      </VStack>
    </Center>
  );
}
