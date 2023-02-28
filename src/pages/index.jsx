import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import bannerFace from '../../public/Assets/home/banner-face.png'
import HomeCourseCard from '@/Components/Cards/HomeCourseCard/HomeCourseCard'
import neetIcon from '../../public/Assets/home/neet.png'
import repeaterIcon from '../../public/Assets/home/repeater.png'
import neetSchoolIcon from '../../public/Assets/home/neet school.png'
import neetFoundationIcon from '../../public/Assets/home/neet foundation.png'
import capsuleCrash from '../../public/Assets/home/capsule crash.png'
import BenefitsSection from '@/Components/HomeComponents/BenefitsSection/BenefitsSection'
import MainLayout from '@/Layouts/MainLayout'
import du1 from '../../public/Assets/temp/du 1.png'
import du2 from '../../public/Assets/temp/du 2.png'
import aboutDopa from '../../public/Assets/home/about dopa.png'
import { Carousel } from '@/Components/Carousel/Carousel'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect, useState } from 'react'
import resultHeaderIcon from '../../public/Assets/home/result icon.png'
import tutorHeaderIcon from '../../public/Assets/home/tutor icon.png'
import tutorSpeciality1 from '../../public/Assets/home/tutor speciality 1.png'
import tutorSpeciality2 from '../../public/Assets/home/tutor speciality 2.png'
import tutorSpeciality3 from '../../public/Assets/home/tutor speciality 3.png'
import result11 from '../../public/Assets/home/result 11.png'
import result16 from '../../public/Assets/home/result 16.png'
import result1 from '../../public/Assets/home/result 1.png'
import result2 from '../../public/Assets/home/result 2.png'
import result3 from '../../public/Assets/home/result 3.png'
import TutorCard from '@/Components/tutorCard/TutorCard'
import tutotForHome from '@/JSON_DB/tutotForHome'
import no1Vector from '../../public/Assets/home/No 1 vector.png'
import downloadAppStore from '../../public/Assets/home/download-appstore.png'
import downloadPlayStore from '../../public/Assets/home/download-playstore.png'
import no1Mobile from '../../public/Assets/home/innovative phone.png'

export default function Home() {
  const [navigator, setNavigator] = useState(0)
  const [isMobile, setMobile] = useState(false)
  const [isTab, setTab] = useState(false)

  const handleNavigation = (dir) => {
    setNavigator(dir)
    setTimeout(() => {
      setNavigator(0)
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
    <MainLayout>
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles['banner-content']}>
            <h1>Unleashing your potential <br /> to succeed in NEET.</h1>
            <p>Become a doctor with experienced mentor support.</p>
            <button>
              <span>
                <strong>Join with DOPA Capsule 3.0</strong> <br /> NEET2023 Exclusive Crash Course
              </span>
            </button>
          </div>
          <Image src={bannerFace} className={styles.bannerImage} />
        </section>

        <section className={styles.courseSection}>
          <h1 className={styles.sectionTitle}>Our Courses</h1>
          <div className={styles['cards-wrapper']}>
            <HomeCourseCard
              icon={neetIcon}
              alt="+1/+2 Neet Coaching"
              cardTitle="+1/+2 Neet Coaching"
            />
            <HomeCourseCard
              icon={repeaterIcon}
              alt="Repeater's programs"
              cardTitle="Repeater's programs"
            />
            <HomeCourseCard
              icon={neetSchoolIcon}
              alt="NEET School"
              cardTitle="NEET School"
            />
            <HomeCourseCard
              icon={neetFoundationIcon}
              alt="NEET Foundation"
              cardTitle="NEET Foundation"
            />
            <HomeCourseCard
              icon={capsuleCrash}
              alt="Capsule Crash Course for Neet"
              cardTitle="Capsule Crash Course"
            />
          </div>
        </section>

        <BenefitsSection />

        <div className={styles.dopa_updates_section}>
          <div className={styles.dopa_updates_header}>
            <h3>DOPA Updates!</h3>
            <h4>What's been happening?</h4>
          </div>
          <div className={styles.dopa_updates_carousel_wrapper}>
            <SlArrowLeft onClick={() => handleNavigation(1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_left} />
            <SlArrowRight onClick={() => handleNavigation(-1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_right} />
            <Carousel itemsPerWindow={isMobile ? 1.2 : 2} gap={isMobile ? 10 : 16} navigator={navigator} setNavigator={setNavigator}>
              <Image src={du1} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
              <Image src={du2} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
              <Image src={du1} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
              <Image src={du2} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
              <Image src={du1} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
              <Image src={du2} alt="Dopa updates" className={styles.dopa_updates_carousel_item} />
            </Carousel>
          </div>
        </div>

        <div className={styles.about_dopa_section}>
          <div className={styles.about_dopa_left}>
            <h4 className={styles.about_dopa_head}>Dare to dream big with DOPA</h4>
            <p className={styles.about_dopa_content}>“ DOPA offers medical entrance coaching that is accessible and affordable for all students. Our innovative, online program is designed to help students succeed on exams like NEET, regardless of their socio-economic background. Our team of expert instructors will guide you through the necessary subject material and test-taking strategies, giving you the best chance at achieving your dreams of becoming a doctor.”</p>
            <div className={styles.dopa_said_wrapper}>
              <strong className={styles.about_dopa_content}>Directors of DOPA</strong>
              <p className={styles.about_dopa_content}>Dr.Niyas P, Dr.Asif PP, Dr.Ashique, Dr.Muneer</p>
            </div>
          </div>
          <div className={styles.about_dopa_right}>
            <Image src={aboutDopa} className={styles.about_dopa_img} alt="What dopa say's?" />
          </div>
        </div>

        <section className={styles.result_section}>
          <div className={styles.result_header_wrapper}>
            <Image className={styles.result_header_icon} src={resultHeaderIcon} alt="Results of Dopa" />
            <div className={styles.result_header}>
              <h3>Our Results</h3>
              <h4>Unparalleled results in NEET’22 !</h4>
            </div>
          </div>
          <div className={styles.results_wrapper}>
            <div className={styles.main_results}>
              <Image className={styles.main_result_img} alt="Dopa rank 11" src={result11} />
              <Image className={styles.main_result_img} alt="Dopa rank 16" src={result16} />
            </div>
            <div className={styles.dopa_updates_carousel_wrapper}>
              <SlArrowLeft onClick={() => handleNavigation(1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_left} />
              <SlArrowRight onClick={() => handleNavigation(-1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_right} />
              <Carousel itemsPerWindow={1} gap={isMobile ? 10 : 16} navigator={navigator} setNavigator={setNavigator}>
                <Image src={result1} alt="Dopa updates" className={styles.dopa_result_secondary_img} />
                <Image src={result2} alt="Dopa updates" className={styles.dopa_result_secondary_img} />
                <Image src={result3} alt="Dopa updates" className={styles.dopa_result_secondary_img} />
              </Carousel>
            </div>
          </div>
        </section>


        <section className={styles.tutor_section}>
          <div className={styles.result_header_wrapper + " " + styles.tutor_header_wrapper}>
            <Image className={styles.result_header_icon} src={tutorHeaderIcon} alt="Results of Dopa" />
            <div className={styles.result_header}>
              <h3>Elite Tutors of DOPA.</h3>
              <h4>A path to achieve your dreams</h4>
            </div>
          </div>

          <div className={styles.tutors_specialities_wrapper}>
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
          </div>

          <div className={styles.dopa_updates_carousel_wrapper}>
            <SlArrowLeft onClick={() => handleNavigation(1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_left} />
            <SlArrowRight onClick={() => handleNavigation(-1)} className={styles.dopa_update_navigator + " " + styles.dopa_update_navigator_right} />
            <Carousel itemsPerWindow={isMobile ? 1 : isTab ? 2 : 3} gap={isMobile ? 10 : 16} navigator={navigator} setNavigator={setNavigator}>
              {
                tutotForHome.map((tutor, index) => (
                  <TutorCard index={index} key={index} data={tutor} />
                ))
              }

            </Carousel>
          </div>
        </section>


        <section className={styles.no_one_section}>
          <Image className={styles.no_one_vector_bg} src={no1Vector} />
          <div className={styles.no_one_content_wrapper}>
            <div className={styles.no_one_content}>
              <h2 className={styles.no_one_text}>Download India’s First NEET coaching App By Doctors.</h2>
              <div className={styles.no_one_download_wrapper}>
                <Image src={downloadAppStore} className={styles['download-img']} alt="Download Dopa appstore" />
                <Image src={downloadPlayStore} className={styles['download-img']} alt="Download Dopa playstore" />
              </div>
            </div>
             <Image src={no1Mobile} className={styles.no_one_phone_img} alt="No 1 in India" />
          </div>
        </section>

      </main>
    </MainLayout>
  )
}
