import React, { useEffect, useState } from 'react'
import styles from './EliteTutorsSection.module.scss'
import tutorHeaderIcon from '../../../public/Assets/home/tutor icon.png'
import tutorSpeciality1 from '../../../public/Assets/home/tutor speciality 1.png'
import tutorSpeciality2 from '../../../public/Assets/home/tutor speciality 2.png'
import tutorSpeciality3 from '../../../public/Assets/home/tutor speciality 3.png'
import TutorCard from '@/Components/tutorCard/TutorCard'
import tutotForHome from '@/JSON_DB/tutotForHome'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Carousel } from '@/Components/Carousel/Carousel'
import Image from 'next/image'

export default function EliteTutorsSection({isHideSubHeading}) {
  const [isMobile, setMobile] = useState(false)
  const [isTab, setTab] = useState(false)
  const [tutorNavigator,setTutorNavigator] = useState(0)

  const handleNavigation = (dir,type) => {
        setTutorNavigator(dir)
    setTimeout(() => {
      setTutorNavigator(0)
    }, 100)
  }

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    if (window.innerWidth < 769) {
      setTab(true)
    } else {
      setTab(false)
    }
  }, [])
  return (
    <section className={styles.tutor_section}>
      <div style={{marginBottom:isHideSubHeading && '1.5rem'}} className={'icon-header-wrapper' + " " + styles.tutor_header_wrapper}>
        <Image className='header-icon' src={tutorHeaderIcon} alt="Results of Dopa" />
        <div className={styles.result_header}>
          <h3>Elite Tutors of DOPA.</h3>
          {!isHideSubHeading && <h4>A path to achieve your dreams</h4>}
        </div>
      </div>

    {!isHideSubHeading &&  <div className={styles.tutors_specialities_wrapper}>
        <div className={styles.tutors_speciality}>
          <Image className={styles.speciality_icon} alt="Speciality Icon" src={tutorSpeciality1} />
          <p>From the Top-notch institutions with relevant experience.</p>
        </div>
        <div className={styles.tutors_speciality}>
          <Image className={styles.speciality_icon} alt="Speciality Icon" src={tutorSpeciality2} />
          <p>Expertly prepared educators to unlock the full potential of each learner.</p>
        </div>
        <div className={styles.tutors_speciality}>
          <Image className={styles.speciality_icon} alt="Speciality Icon" src={tutorSpeciality3} />
          <p>Excel in NEET with Doctor-Guided Lessons, Your Path to Medical School Starts Here</p>
        </div>
      </div>}

      <div className={styles.dopa_updates_carousel_wrapper}>
        <SlArrowLeft onClick={() => handleNavigation(1, 'tutor')} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_left} />
        <SlArrowRight onClick={() => handleNavigation(-1, 'tutor')} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_right} />
        <Carousel itemsPerWindow={isMobile ? 1 : isTab ? 2 : 3} gap={isMobile ? 10 : 16} navigator={tutorNavigator} setNavigator={setTutorNavigator}>
          {
            tutotForHome.map((tutor, index) => (
              <TutorCard index={index} key={index} data={tutor} />
            ))
          }

        </Carousel>
      </div>
    </section>
  )
}
