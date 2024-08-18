import MainLayout from '@/Layouts/MainLayout'
import DopaUpdates from '@/PageComponents/DopaUpdates'
import HomeCourseSection from '@/PageComponents/HomeCourseSection'
import Result from '@/PageComponents/Result'
import React from 'react'

export default function Home() {
  return (
    <MainLayout>
        <HomeCourseSection/>
        <DopaUpdates/>
        <Result/>
        </MainLayout>
  )
}
