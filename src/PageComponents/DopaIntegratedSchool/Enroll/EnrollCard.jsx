import HStack from '@/Components/BasicComponents/HStack/HStack'
import VStack from '@/Components/BasicComponents/VStack/VStack'
import React from 'react'
import Image from 'next/image'
import { MaterialSymbolsCheckSmallRounded } from '@/Components/Icons/Icons'
export default function EnrollCard({data}) {
  return (
  <VStack className="bg-[#E3EEFF] rounded-xl  w-[100%] ">
    <VStack className="p-[2rem] gap-[1rem]  w-[100%] ">
        <HStack className="gap-[1rem] ">
            <div className='relative w-[3.5rem] h-[3rem] md:w-[4rem] md:h-[4rem]' >
            <Image src={data?.image} alt="sci-sat" fill />
            </div>
       
            <VStack>
                <h1 className='section-heading-small font-[600]'>
               {data.head}
                </h1>
                {data.sub && <p className='text-basic font-[600]'>
                {data.sub}
                </p>}
            </VStack>
        </HStack>
        <VStack className="gap-[1rem] ">
            <HStack className="gap-[1rem]">
                <MaterialSymbolsCheckSmallRounded />
                <p className='text-basic font-[600]'>{data.point1}</p>
            </HStack>
            <HStack className="gap-[1rem] ">
            <MaterialSymbolsCheckSmallRounded/>
                <p className='text-basic font-[600]'>{data.point2}</p>
            </HStack>
        </VStack>
    </VStack>
  </VStack>
  )
}
