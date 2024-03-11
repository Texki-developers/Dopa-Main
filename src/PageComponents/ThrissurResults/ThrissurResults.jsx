import React from 'react'
import VStack from '@/Components/BasicComponents/VStack/VStack';
import ResultSlider from './ResultSlider';
import Center from '@/Components/BasicComponents/Center/Center';
import Image from "next/image";

export default function ThrissurResults() {
  return (
    <Center className='bg-[#0A7D90] w-[100vw] mb-[10rem]'>
        <VStack className='gap-[3rem]  py-[3rem] pb-0 w-[100%]'>
            <VStack className='text-white'>
             <h1 className="section-heading text-center">Results</h1>
             <p className='section-heading-Xsmall text-center' >Our Dopa Alumins</p>
            </VStack>
            <ResultSlider/>
            <div className='w-[100%] flex justify-center items-end  sm:mb-[-12rem] mb-[-7rem]'>
            <div className='relative w-[20rem] sm:w-[25rem] lg:w-[40rem]  aspect-[4/3] '>
              <Image src='/Assets/thrissurLanding/results/results.png' alt='result' fill />
            </div>
            </div>
        </VStack>
    </Center>
  )
}
