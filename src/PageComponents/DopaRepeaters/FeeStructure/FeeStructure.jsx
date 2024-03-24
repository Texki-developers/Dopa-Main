import Center from '@/Components/BasicComponents/Center/Center'
import VStack from '@/Components/BasicComponents/VStack/VStack'
import React from 'react'
import { FeeCardData } from './cardData'
import FeeCard from './FeeCard'

export default function FeeStructure() {
  return (
   <Center className='text-white'>
    <VStack className='common-space-x w-[100%] gap-[2rem]'>
                <h1 className='banner-title text-white text-center'>
                Fees Structure
                </h1>

                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[2rem]'>
                    {
                        FeeCardData && FeeCardData.map((items)=>(
                            <FeeCard  data={items}/>
                        ))
                    } 
                </div>
    </VStack>
    </Center>
  )
}
