import Center from "@/Components/BasicComponents/Center/Center";
import AppCard from "@/Components/Cards/AppCard/AppCard";
import React, { useEffect, useState } from "react";
import data from "./appcards.json";
import { publicRuntimeConfig } from "next.config";

export default function AppCards({ data }) {
  const [structData, setStructData] = useState([]);

  useEffect(() => {
    setStructData(
      (data || []).map((item) => ({
        heading: item.title,
        image: `${publicRuntimeConfig.strapiUrl}${item?.image?.data?.attributes?.url}`,
        description: !item?.is_list ? item.description : null,
        points: item?.is_list ? item?.description?.split(",") : null,
      }))
    );
  }, [data]);

  console.log({ structData, data });
  return (
    <Center>
      <div className="common-space-x w-[100%] grid md:grid-cols-2 gap-[1.5rem]">
        {structData?.map((item, index) => (
          <AppCard key={index} {...item} />
        ))}
      </div>
    </Center>
  );
}
