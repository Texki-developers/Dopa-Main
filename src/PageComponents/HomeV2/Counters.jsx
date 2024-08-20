import LottieAnimation from "@/Components/LottieAnimation";
import React from "react";
import CountUp from "react-countup";
import rocket from '../../../public/Assets/lottie/rocket.json';
import people from '../../../public/Assets/lottie/people.json';
import youtube from '../../../public/Assets/lottie/youtube.json';
import live from '../../../public/Assets/lottie/live.json';
import Center from "@/Components/BasicComponents/Center/Center";
import { useInView } from 'react-intersection-observer';

export default function Counters() {
  const counters = [
    {
      title: 50,
      subtitle: "Students Impacted",
      logo: (
        <div className="relative h-[7.5rem] w-[7.5rem] flex items-center justify-center"> 
          <img src='/Assets/icons/round_counters.svg' alt="round icon" className="absolute inset-0 w-full h-full" />
          <LottieAnimation autoplay loop animationData={people} />
        </div>
      ),
      suffix: "k+",
      duration: 2
    },
    {
      title: 2,
      subtitle: "Hours of Live Learning",
      logo: (
        <div className="relative h-[7.5rem] w-[7.5rem] flex items-center justify-center">
          <img src='/Assets/icons/round_counters.svg' alt="round icon" className="absolute inset-0 w-full h-full" />
          <LottieAnimation autoplay loop animationData={live} />
        </div>
      ),
      suffix: " Million+",
      duration: 2.5
    },
    {
      title: 1,
      subtitle: "Monthly YouTube Views",
      logo: (
        <div className="relative h-[7.5rem] w-[7.5rem] flex items-center justify-center">
          <img src='/Assets/icons/round_counters.svg' alt="round icon" className="absolute inset-0 w-full h-full" />
          <LottieAnimation autoplay loop animationData={youtube} />
        </div>
      ),
      suffix: " Million+",
      duration: 2
    },
    {
      title: 1,
      subtitle: "Admissions in Top-Colleges",
      logo: (
        <div className="relative h-[7.5rem] w-[7.5rem] flex items-center justify-center">
          <img src='/Assets/icons/round_counters.svg' alt="round icon" className="absolute inset-0 w-full h-full" />
          <LottieAnimation autoplay loop animationData={rocket} />
        </div>
      ),
      suffix: "k+",
      duration: 1.5
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <Center className='bg-[#F6FDFE]'>
      <div ref={ref} className='grid gap-4 p-4 common-space-x py-8 w-full place-items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-[15rem,15rem,15rem,15rem]'>
        {counters.map((data) => (
          <div key={data.subtitle} className='border border-black p-6 rounded-md bg-white flex flex-col items-center w-[20rem]  md:w-full lg:w-[15rem] px-0'>
            <div className="relative">
              {data.logo}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="font-[600] text-3xl">
                {inView && (
                  <CountUp
                    start={0}
                    end={data.title}
                    duration={data.duration}
                    suffix={data.suffix}
                    separator=","
                  />
                )}
              </h1>
              <p>{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Center>
  );
}
