import React from 'react'
import VStack from '@/Components/BasicComponents/VStack/VStack';
import ResultSlider from './ResultSlider';
import Center from '@/Components/BasicComponents/Center/Center';

export default function ThrissurResults() {
  return (
    <Center className='bg-[#0A7D90] '>
        <VStack className='gap-[3rem] w-[100%] py-[3rem]'>
            <VStack className='text-white'>
             <h1 className="section-heading text-center">Results</h1>
             <p className='section-heading-Xsmall text-center' >Our Dopa Alumins</p>
            </VStack>
            <ResultSlider/>
        </VStack>
    </Center>
  )
}
