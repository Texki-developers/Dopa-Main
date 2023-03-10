import React from 'react'
import styles from '@/styles/results.module.scss'
import MainLayout from '@/Layouts/MainLayout'
import resultBannerBG from '../../../public/Assets/results/result landing.png'
import Image from 'next/image'
import admissionImage from '../../../public/Assets/results/admission.png'
import HomeSuccessSection from '@/Components/HomeSuccessSection/HomeSuccessSection'
import dopaMagic from '../../../public/Assets/results/dopa magic.png'
import EliteTutorsSection from '@/Components/EliteTutorsSectino/EliteTutorsSection'
import AppDownloadSection from '@/Components/appDownloadSection/AppDownloadSection'

export default function index() {
  return (
    <MainLayout>
      <div className={styles.result_page}>
        <div className={styles.result_banner}>
          <h1>OUT STANDING RESULTS IN NEET 2022</h1>
          <h5>250+ ADMISSIONS IN TOP COLLEGES OF INDIA</h5>
          <Image src={resultBannerBG} alt="" className={styles.result_banner_img} />
        </div>
        
        <div className={styles.admission_2022}>
          <h2 className={styles.admission_heading}>MBBS ADMISSIONS IN NEET 2022</h2>
          <Image src={admissionImage} alt="Success admissions of Dopa" className={styles.admission_2022_img} />
        </div>

        <HomeSuccessSection />   

        <div className={styles.magic_of_dopa}>
          <Image src={dopaMagic} className={styles.dopa_magic_img}/>
          <h2 className={styles.dopa_magic_heading}>Experience the Magic of DOPA's Comprehensive NEET Package and Expert Doctor Mentorship</h2>
          <button className={styles.btn_dopa_magic}>Book a Free Trial</button>
        </div>    

        <EliteTutorsSection /> 

        <AppDownloadSection />
      </div>
    </MainLayout>
  )
}
