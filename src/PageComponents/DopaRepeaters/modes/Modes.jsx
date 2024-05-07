import Center from '@/Components/BasicComponents/Center/Center'
import VStack from '@/Components/BasicComponents/VStack/VStack'
import React from 'react'
import Mcards from './Mcards'
import { ModesData } from './modes.data'

export default function Modes() {
  return (
    <Center >
        <VStack className='common-space-x w-[100%] gap-[2rem]'>
        <h1 className='banner-title text-white text-center'>DOPA Repeaters have 4 Modes</h1>
        <div className='grid md:grid-cols-2 gap-[2rem]'>
      { ModesData && ModesData.map((items)=>(
   <Mcards data={items}/>
      ))
    
      }
        </div>
        </VStack>
      
    </Center>
  )
}
