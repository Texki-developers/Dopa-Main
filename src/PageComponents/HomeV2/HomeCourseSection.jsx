import React from 'react'
import ComponentHeader from '../ComponentHeader'
import PrimaryCourseCard from '../Courses/CourseCard/PrimaryCourseCard'
import Center from '@/Components/BasicComponents/Center/Center'

export default function HomeCourseSection({Course}) {

  return (
    <Center>
    <div className='p-4 md:px-16 w-full common-space-x'>
        <ComponentHeader url='/Assets/icons/course.png' heading='Courses' alt='⁠best entrance coaching center in kerala' className='md:!justify-center'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {Course && Course.map((items)=>(
                <PrimaryCourseCard key={items} data={items} />
            ))
            }
        </div>
    </div>
    </Center>
  )
}
