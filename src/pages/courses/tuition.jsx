import VStack from '@/Components/BasicComponents/VStack/VStack'
import MainLayout from '@/Layouts/MainLayout'
import BannerV2 from '@/PageComponents/banner/BannerV2'
import CourseCard from '@/PageComponents/Courses/CourseCard/CourseCard'
import { coursesData } from '@/PageComponents/Courses/CourseCard/CourseCard.data'
import React from 'react'

export default function Tution() {
  return (
    <MainLayout>
    <VStack className="gap-[1rem] pb-[1rem]">
      <BannerV2 />
      {
       coursesData &&  coursesData.map((items)=>(
          <div key={items?.heading} className="flex flex-col gap-4 px-4 md:px-[9rem]" >
            <CourseCard data={items}/>
            </div>
       ))
      }
      
    </VStack>
  </MainLayout>

  )
}
