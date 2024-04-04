import Center from '@/Components/BasicComponents/Center/Center'
import HStack from '@/Components/BasicComponents/HStack/HStack'
import React, { useEffect, useState } from 'react'
import CoachingTextComponent from './CoachingTextComponent'
import CoachingPlatformCard from './CoachingPLatformCard'
import { CoachingPlatformData } from './coachingPlatformData'

export default function CoachingPlatform() {
    const [width, setWidth] = useState(0);
    const [data, setData] = useState({
      divide: 3,
      equal: 2,
      minus: 6,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (width >= 500) {
        setData({
          divide: 3,
          equal: 2,
          minus: 6,
        })
      }else {
        setData({
          divide: 2,
          equal: 3,
          minus: 8,
        });
      }
    }, [width]);
    
    return (
      <Center className='py-[3rem]'>
        <HStack className='flex-col xl:flex-row common-space-x w-[100%] gap-[2rem]'>
          <CoachingTextComponent/>
          <div className='grid grid-cols-2 sm:grid-cols-3'>
            {CoachingPlatformData &&
              CoachingPlatformData.map((item, index) => (
                <div
                  key={index}
                  className={
                    "border-[#B5AFAF] " +
                    ((index + 1) % data.divide !== 0 ? "border-r-[1px] " : "") + // Apply right border to non-last column items
                    (index < data.minus ? "border-b-[1px] " : "") // Apply bottom border to non-last row items
                  }
                  style={{borderStyle: 'dotted', padding: '0.5rem'}}
                >
                  <CoachingPlatformCard data={item} />
                </div>
              ))}
          </div>
        </HStack>
      </Center>
    )
}
