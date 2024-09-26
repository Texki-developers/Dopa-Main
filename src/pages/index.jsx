import { starpiInstance } from "@/config/strapiInstance";
import MainLayout from "@/Layouts/MainLayout";
import BannerV2 from "@/PageComponents/banner/BannerV2";
import CustomizableBanner from "@/PageComponents/banner/CustomizableBanner";
import Counters from "@/PageComponents/HomeV2/Counters";
import Directors from "@/PageComponents/HomeV2/Directors";
import DopaUpdates from "@/PageComponents/HomeV2/DopaUpdates";
import HomeBanner from "@/PageComponents/HomeV2/HomeBanner";
import HomeCourseSection from "@/PageComponents/HomeV2/HomeCourseSection";
import Result from "@/PageComponents/HomeV2/Result";
import Testimonials from "@/PageComponents/HomeV2/TestimonialsV2/Testimonials";
import { axiosInstance } from "@/utils/axiosInstance";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

export default function Home({ pageData }) {
  const [updates, setUpdates] = useState(null);
  const [popup, setPopup] = useState(null);

  const fetchUpdates = async () => {
    let data = await axiosInstance.get("updates");
    let popupData = await axiosInstance.get("popup");
    setUpdates(data?.data?.data);
    setPopup(popupData.data?.data?.[0]);
    // onOpen();
  };

  const image_base = process.env.NEXT_PUBLIC_STRAPIE_IMAGE;

  console.log(pageData, "HOME PAGE");
  useEffect(() => {
    fetchUpdates();
  }, []);

  return (
    <MainLayout>
      <HomeBanner data={pageData?.HomeBanner} />
      <CustomizableBanner
        title={[pageData?.HomeAboutUsbanner[0]?.heading]}
        description={pageData?.HomeAboutUsbanner[0]?.description}
        rtl
      >
        <div className="w-[100%] aspect-[741/400] relative lg:mt-[2rem]">
          <Image
            className="object-contain"
            src={
              image_base +
              pageData?.HomeAboutUsbanner[0]?.image?.data?.attributes?.url
            }
            alt="Best neet coaching center in kerala"
            fill
          />
        </div>
      </CustomizableBanner>
      <HomeCourseSection Course={pageData?.Courses} />
      <DopaUpdates updates={pageData?.DopaUpdates?.DopaUpdatesImages.data} />
      <Result
      firstAlt={pageData?.HOMERESULT[0].FirstColumnImage?.data?.attributes?.alternativeText}
      secondAlt={pageData?.HOMERESULT[0].SecondColumnImage?.data?.attributes?.alternativeText}
        firstImage={
          image_base +
          pageData?.HOMERESULT[0].FirstColumnImage?.data?.attributes?.url
        }
        secondImage={
          image_base +
          pageData?.HOMERESULT[0].SecondColumnImage?.data?.attributes?.url
        }
      />
      <Testimonials />
      <Directors alt={pageData?.HomepageDirectors[0]?.image_alt} image={pageData?.HomepageDirectors[0]?.image?.data?.attributes?.url} description={pageData?.HomepageDirectors[0]?.description}  directors={pageData?.HomepageDirectors[0]?.directors}/>
      <Counters />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await starpiInstance(
    "/api/home-page?populate[HomeBanner][populate]=*&populate[HomeAboutUsbanner][populate]=*&populate[Courses][populate]=*&populate[HOMERESULT][populate]=*&populate[HomepageDirectors][populate]=*&populate[DopaUpdates][populate]=*"
  );
  return {
    props: {
      pageData: res.data.data.attributes,
    },
  };
}
