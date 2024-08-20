import Image from 'next/image'
import React from 'react'

export default function TestimonialCardV2({data}) {
  return (
    <div className='w-full h-full border border-black rounded-xl'>
      <div className='p-2'>

        <div className='relative aspect-[3/2]'>
        <Image className='object-contain z-10 !w-[3rem] !h-[3rem] !top-[37%] !left-[46%]' fill src='/Assets/icons/Play.png' alt='best_dopa_neet_coaching_center'/>
            <Image className='object-cover' fill src='/Assets/homeV2/testimonial_thumbnail.png' alt='best_dopa_neet_coaching_center'/>
        </div>
        <div >
          <p className='py-3'>{data?.description}</p>
          <div>
            <p className='font-bold'>{data?.student}</p>
            <p>{data?.type}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
