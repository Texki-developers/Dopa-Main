import React from 'react'
import ComponentHeader from './ComponentHeader'
import PrimaryCourseCard from './Courses/CourseCard/PrimaryCourseCard'

export default function HomeCourseSection() {

    const Course = [
        {
            name:'TEST AND DISCUSSION',
            headClass:'font-bold text-white text-4xl 2xl:w-[15rem]',
            subheadClass:'text-[1.8rem] text-white',
            subtitle:'BATCH',
            link:'/'
        },
        {
            name:'TAMIL',
            subtitle:'REPEATERS',
            link:'/',
            headClass:'font-bold text-white text-4xl',
            subheadClass:'text-[1.8rem] text-white',
        },
        {
            name:'INTEGRATED',
            subtitle:'SCHOOL',
            link:'/',
            headClass:'font-bold text-white text-4xl',
            subheadClass:'text-[1.8rem] text-white',
        },
        {
            name:'TEST AND DISCUSSION',
            headClass:'font-bold text-white text-4xl 2xl:w-[15rem]',
            subheadClass:'text-[1.8rem] text-white',
            subtitle:'BATCH',
            link:'/'
        },
        {
            name:'TAMIL',
            subtitle:'REPEATERS',
            link:'/',
            headClass:'font-bold text-white text-4xl',
            subheadClass:'text-[1.8rem] text-white',
        },
        {
            name:'INTEGRATED',
            subtitle:'SCHOOL',
            link:'/',
            headClass:'font-bold text-white text-4xl',
            subheadClass:'text-[1.8rem] text-white',
        }
    ]
  return (
    <div className='p-4 md:px-16'>
        <ComponentHeader url='/Assets/icons/course.png' heading='Courses' alt='⁠best entrance coaching center in kerala'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {Course && Course.map((items)=>(
                <PrimaryCourseCard key={items} data={items} />
            ))
            }
        </div>
    </div>
  )
}
