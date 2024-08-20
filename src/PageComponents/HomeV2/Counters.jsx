import LottieAnimation from "@/Components/LottieAnimation";
import React from "react";
import rocket from '../../public/Assets/lottie/rocket.json'
import people from '../../public/Assets/lottie/people.json'
import youtube from '../../public/Assets/lottie/youtube.json'
import live from '../../public/Assets/lottie/live.json'
import Center from "@/Components/BasicComponents/Center/Center";

export default function Counters() {

  const counters = [
    {
      title: "50k+",
      subtitle: "Students Impacted",
      logo: <LottieAnimation autoplay loop animationData={people}/>,
    },
    {
        title: "2 Million+",
        subtitle: "hours of Live learning",
        logo: <LottieAnimation autoplay loop animationData={live}/>,
      },
      {
        title: "1 Million+",
        subtitle: "Monthly Youtube Views",
        logo: <LottieAnimation autoplay loop animationData={youtube}/>,
      },
      {
        title: "1k+",
        subtitle: "Admissions in Top-colleges",
        logo: <LottieAnimation autoplay loop animationData={rocket}/>,
      },
  ];

  return (
    <Center>
    <div className='flex gap-4 bg-[#F6FDFE] p-4 common-space-x py-8'>
      {counters && 
        counters.map((data) => (
          <div key={data.title} className='border border-black p-6 rounded-md bg-white '>
            <div >
              {data.logo}
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="font-[600] text-3xl">{data?.title}</h1>
              <p>{data?.subtitle}</p>
            </div>
          </div>
        ))}
    </div>
    </Center>
  );
}
