import { publicRuntimeConfig } from "next.config";

export const formatTCKPagesData = (data) => {
  let structData = {};

  structData.banner = data?.attributes?.banner;
  structData.courses = data?.attributes?.course_card?.course_card;
  structData.features = data?.attributes?.feature_card_row?.feature_card;
  structData.gallery = data?.attributes?.gallery?.images?.data;

  structData.banner.image = structData.banner?.image?.data?.attributes?.url;
  if (structData.banner.split_header) {
    structData.banner.heading = structData?.banner?.heading?.split(",");
  } else {
    structData.banner.heading = [structData.banner.heading];
  }

  structData.courses = structData?.courses?.map((item) => ({
    name: item?.heading,
    subtitle: item?.sub_heading,
    link: item?.link || "/",
    headClass: "font-bold text-white text-4xl",
    subheadClass: "text-[1.8rem] text-white",
  }));

  structData.features = structData.features?.map((item) => ({
    ...item,
    text: item?.title,
    icon: `${publicRuntimeConfig?.strapiUrl}${item?.icon?.data?.attributes?.url}`,
  }));

  structData.gallery = structData?.gallery?.map(
    (item) => `${publicRuntimeConfig?.strapiUrl}${item?.attributes?.url}`
  );

  return structData;
};
