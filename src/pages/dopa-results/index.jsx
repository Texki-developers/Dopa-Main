import React, { useEffect, useState } from 'react'
import styles from '@/styles/results.module.scss'
import MainLayout from '@/Layouts/MainLayout'
import resultBannerBG from '../../../public/Assets/results/result landing.png'
import resultBannerBGMboile from '../../../public/Assets/results/result landing mobile.png'
import Image from 'next/image'
import admissionImage from '../../../public/Assets/results/admission.png'
import HomeSuccessSection from '@/Components/HomeSuccessSection/HomeSuccessSection'
import EliteTutorsSection from '@/Components/EliteTutorsSectino/EliteTutorsSection'
import AppDownloadSection from '@/Components/appDownloadSection/AppDownloadSection'
import FreeTrialComponent from '@/Components/FreeTrialComponent/FreeTrialComponent'

export default function index() {
  const [isMobile,setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 550) {
      setMobile(true);
    }
  },[])
  return (
    <MainLayout>
      <div className={styles.result_page}>
        <div className={styles.result_banner}>
          <h1>OUT STANDING RESULTS IN NEET 2022</h1>
          <h5>250+ ADMISSIONS IN TOP COLLEGES OF INDIA</h5>
          <Image src={isMobile ? resultBannerBGMboile : resultBannerBG} alt="" className={styles.result_banner_img} />
        </div>
        
        <div className={styles.admission_2022}>
          <h2 className={styles.admission_heading}>MBBS ADMISSIONS IN NEET 2022</h2>
          <Image src={admissionImage} alt="Success admissions of Dopa" className={styles.admission_2022_img} />
        </div>

        <HomeSuccessSection />   

        <FreeTrialComponent />

        <EliteTutorsSection /> 

        <AppDownloadSection />
      </div>
    </MainLayout>
  )
}