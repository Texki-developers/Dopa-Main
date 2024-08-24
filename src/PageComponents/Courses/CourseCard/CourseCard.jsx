import Image from "next/image";
import React from "react";

export default function CourseCard({ data,className,imageClassName }) {
  console.log(imageClassName,className, "DAtA");
  return (
    <div className={`border border-black rounded-lg px-[1.5rem] lg:px-[2rem]  grid grid-cols-1 lg:grid-cols-[2fr,1fr] xl:grid-cols-[3fr,1fr] items-end ${className}`} style={{boxShadow: '0px 4px 4px -2px #18274B14'
      }}>
        <div className='py-[1rem] lg:py-[2rem]'>

      
      <div className="flex flex-col gap-[1rem]">
        <h1 className="font-bold text-darkBlue text-lg md:text-2xl lg:text-4xl">{data?.heading}</h1>
        {data?.details &&<div className="flex flex-col md:flex-row gap-[1rem] lg:gap-[2rem]">
          <p
            style={{
              background: "linear-gradient(90deg, #C5F8FF 0%, #F9FEFF 100%)",
              borderRadius:'0.8rem',
              padding:'8px 15px'
            }}
          
          >
            Course Duration: {data?.details?.duration}
          </p>
          <p
            style={{
              background: "linear-gradient(90deg, #C5F8FF 0%, #F9FEFF 100%)",
              borderRadius:'0.8rem',
              padding:'8px 15px'
            }}
          >
            Total no. of exams: {data?.details?.exams}
          </p>
        </div>}
      </div>
      {data.description && <p className='py-4 lg:max-w-[70%] lg:min-w-[60%]'>{data.description}</p>}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-4 lg:min-w-[max-content] lg:w-[90%] pt-3 '>
      {data && data.perks.map((items,index)=>(
      <div key={items} className={`flex gap-4  ${data.perks.length -1 === index ? '' : 'border-b-[1px] border-black'}  `}>
        <div className="w-[1.8rem] h-[1.56rem] relative">
          <Image fill className="object-cover object-top"  src='/Assets/coursesV2/dopa_courses_perk.png' alt='dopa_neet_coaching_course_perks'/>
        </div>
        <p className='pb-2 md:pb-4'>{items}</p>
      </div>))}
      </div>

      </div>

      <div className="hidden lg:flex h-[30rem] xl:w-[100%] xl:h-[100%] relative">
          <Image fill className={`object-cover object-top pt-[3rem] ${imageClassName}`}  src={data.image} alt='dopa_neet_coaching_course_perks'/>
        </div>
    </div>
  );
}
