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

export default function Home() {

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

    
    </main>
    </MainLayout>
  )
}
