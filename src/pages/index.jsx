import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import bannerFace from '../../public/Assets/home/banner-face.png';
import HomeCourseCard from '@/Components/Cards/HomeCourseCard/HomeCourseCard';
import neetIcon from '../../public/Assets/home/neet.png';
import repeaterIcon from '../../public/Assets/home/repeater.png';
import neetSchoolIcon from '../../public/Assets/home/neet school.png';
import neetFoundationIcon from '../../public/Assets/home/neet foundation.png';
import capsuleCrash from '../../public/Assets/home/capsule crash.png';
import BenefitsSection from '@/Components/HomeComponents/BenefitsSection/BenefitsSection';
import MainLayout from '@/Layouts/MainLayout';
import du1 from '../../public/Assets/temp/du 1.png';
import du2 from '../../public/Assets/temp/du 2.png';
import aboutDopa from '../../public/Assets/home/about dopa.png';
import { Carousel } from '@/Components/Carousel/Carousel';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useEffect, useRef, useState } from 'react';
import resultHeaderIcon from '../../public/Assets/home/result icon.png';
import result11 from '../../public/Assets/home/result 11.png';
import result16 from '../../public/Assets/home/result 16.png';
import result1 from '../../public/Assets/home/result 1.png';
import result2 from '../../public/Assets/home/result 2.png';
import result3 from '../../public/Assets/home/result 3.png';
import HomeSuccessSection from '@/Components/HomeSuccessSection/HomeSuccessSection';
import insightIcon from '../../public/Assets/home/insight.png';
import viewsStatics from '../../public/Assets/home/views statics.png';
import admissionStatics from '../../public/Assets/home/admission statics.png';
import learningStatics from '../../public/Assets/home/learning statics.png';
import studentsStatics from '../../public/Assets/home/students statics.png';
import bannerBgPrimary from '../../public/Assets/home/home banner bg primary.png';
import bannerBgSecondary from '../../public/Assets/home/home banner bg secondary.png';
import EliteTutorsSection from '@/Components/EliteTutorsSectino/EliteTutorsSection';
import AppDownloadSection from '@/Components/appDownloadSection/AppDownloadSection';
import Link from 'next/link';
import Popup from '@/Components/popupLayout/Popup';
import { useRouter } from 'next/router';
import update1 from '../../public/Assets/home/update 1.png';
import update2 from '../../public/Assets/home/update 2.png';
import update3 from '../../public/Assets/home/update 3.png';
import ImgAdPopup from '@/Components/imgAdPopup/ImgAdPopup';

let dopaUpdates = [update1, update2, update3];

export default function Home() {
  const [navigator, setNavigator] = useState(0);
  const [resultNavigator, setResultNavigator] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const [isTab, setTab] = useState(false);
  const [imageAd, setImageAd] = useState(false);
  const [type, setType] = useState();
  const popRef = useRef();

  const handlePopup = (type, mode) => {
    if (mode === 1) {
      setType(1);
    } else {
      setType(2);
    }
    if (type == 1) {
      popRef.current.style.display = 'flex';
    } else {
      popRef.current.style.display = 'none';
    }
  };

  const { push } = useRouter();

  const handleNavigation = (dir, type) => {
    switch (type) {
      case 'update':
        setNavigator(dir);
        break;
      case 'result':
        setResultNavigator(dir);
        break;
      default:
        break;
    }
    setTimeout(() => {
      setNavigator(0);
      setResultNavigator(0);
    }, 100);
  };

  const handleRedirectToNeet = (data) => {
    localStorage.setItem('class', data);
    push(`/courses/neet`);
  };
  const handleRedirectToFound = (data) => {
    localStorage.setItem('class', data);
    push(`/courses/foundation`);
  };

  const handleSessionClose = () => {
    localStorage.removeItem('imageAd');
  };

  useEffect(() => {
    let isAdShown = localStorage.getItem('imageAd');
    if (!isAdShown) {
      setImageAd(true);
      localStorage.setItem('imageAd', true);
    }
    window.addEventListener('beforeunload', handleSessionClose);
    return () => {
      window.removeEventListener('beforeunload', handleSessionClose);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    if (window.innerWidth < 769) {
      setTab(true);
    } else {
      setTab(false);
    }
  }, []);
  return (
    <MainLayout>
      <main className={styles.main}>
        {imageAd && <ImgAdPopup setPopup={setImageAd} />}

        <Popup action={handlePopup} refs={popRef}>
          <div className={styles.popup_container_home}>
            <h3>Which class are you Preparing for ?</h3>
            <div
              onClick={() =>
                type === 1
                  ? handleRedirectToNeet('plusOne')
                  : handleRedirectToFound('8')
              }
              className={styles.popup_class_container}
            >
              <p>{type === 1 ? 'Plus One' : '8th'}</p>
            </div>
            <div
              onClick={() =>
                type === 1
                  ? handleRedirectToNeet('plusTwo')
                  : handleRedirectToFound('9')
              }
              className={styles.popup_class_container}
            >
              <p>{type === 1 ? 'Plus Two' : '9th'}</p>
            </div>
            <div
              onClick={() =>
                type === 1
                  ? handleRedirectToNeet('plusOne&plustwo')
                  : handleRedirectToFound('10')
              }
              className={styles.popup_class_container}
            >
              <p>{type === 1 ? 'Plus One & Plus Two' : '10th'}</p>
            </div>
          </div>
        </Popup>
        <section className={styles.banner}>
          <div className={styles.banner_wrapper_main}>
            <div className={styles['banner-content']}>
              <h1>
                Unleashing your potential <br /> to succeed in NEET.
              </h1>
              <p>Become a doctor with experienced mentor support.</p>
              <button>
                <Link href='/contact'>
                  <span>
                    <strong>Enroll Now</strong> <br /> NEET2023 Exclusive Crash
                    Course
                  </span>
                </Link>
              </button>
            </div>
            <Image src={bannerFace} className={styles.bannerImage} />
            <Image src={bannerBgPrimary} className={styles.banner_bg_primary} />
            <Image
              src={bannerBgSecondary}
              className={styles.banner_bg_secondary}
            />
          </div>
        </section>

        <section className={styles.courseSection}>
          <h1 className={styles.sectionTitle}>Our Courses</h1>
          <div className={styles['cards-wrapper']}>
            <HomeCourseCard
              icon={neetIcon}
              alt='+1/+2 Neet Coaching'
              cardTitle='+1/+2 Neet Coaching'
              to=''
              action={() => handlePopup(1, 1)}
            />
            <HomeCourseCard
              icon={repeaterIcon}
              alt="Repeater's programs"
              cardTitle="Repeater's programs"
              to='/courses/repeaters'
            />
            <HomeCourseCard
              icon={neetSchoolIcon}
              alt='NEET School'
              cardTitle='NEET School'
              to='/courses/dopaSchool'
            />
            <HomeCourseCard
              icon={neetFoundationIcon}
              alt='NEET Foundation'
              cardTitle='NEET Foundation'
              to=''
              action={() => handlePopup(1, 2)}
            />
            <HomeCourseCard
              icon={capsuleCrash}
              alt='Capsule Crash Course for Neet'
              cardTitle='Capsule Crash Course'
              to='/courses/capsule'
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
            <SlArrowLeft
              onClick={() => handleNavigation(1, 'update')}
              className={
                styles.dopa_update_navigator +
                ' ' +
                styles.dopa_update_navigator_left
              }
            />
            <SlArrowRight
              onClick={() => handleNavigation(-1, 'update')}
              className={
                styles.dopa_update_navigator +
                ' ' +
                styles.dopa_update_navigator_right
              }
            />
            <Carousel
              itemsPerWindow={isMobile ? 1.2 : 2}
              gap={isMobile ? 10 : 16}
              navigator={navigator}
              setNavigator={setNavigator}
            >
              {dopaUpdates.map((update, index) => (
                <Image
                  src={update}
                  key={index}
                  alt='Dopa updates'
                  className={styles.dopa_updates_carousel_item}
                />
              ))}
            </Carousel>
          </div>
        </div>

        <div className={styles.about_dopa_section}>
          <div className={styles.about_dopa_left}>
            <h4 className={styles.about_dopa_head}>
              Dare to dream big with DOPA
            </h4>
            <p className={styles.about_dopa_content}>
              “ DOPA offers medical entrance coaching that is accessible and
              affordable for all students. Our innovative, online program is
              designed to help students succeed on exams like NEET, regardless
              of their socio-economic background. Our team of expert instructors
              will guide you through the necessary subject material and
              test-taking strategies, giving you the best chance at achieving
              your dreams of becoming a doctor.”
            </p>
            <div className={styles.dopa_said_wrapper}>
              <strong className={styles.about_dopa_content}>
                Directors of DOPA
              </strong>
              <p className={styles.about_dopa_content}>
                Dr.Niyas P, Dr.Asif PP, Dr.Ashique, Mr.Muneer
              </p>
            </div>
          </div>
          <div className={styles.about_dopa_right}>
            <Image
              src={aboutDopa}
              className={styles.about_dopa_img}
              alt="What dopa say's?"
            />
          </div>
        </div>

        <section className={styles.result_section}>
          <div className={styles.result_header_wrapper}>
            <Image
              className={styles.result_header_icon}
              src={resultHeaderIcon}
              alt='Results of Dopa'
            />
            <div className={styles.result_header}>
              <h3>Our Results</h3>
              <h4>Unparalleled results in NEET’22 !</h4>
            </div>
          </div>
          <div className={styles.results_wrapper}>
            <div className={styles.main_results}>
              <Image
                className={styles.main_result_img}
                alt='Dopa rank 11'
                src={result11}
              />
              <Image
                className={styles.main_result_img}
                alt='Dopa rank 16'
                src={result16}
              />
            </div>
            <div className={styles.dopa_updates_carousel_wrapper}>
              <SlArrowLeft
                onClick={() => handleNavigation(1, 'result')}
                className={
                  styles.dopa_update_navigator +
                  ' ' +
                  styles.dopa_update_navigator_left
                }
              />
              <SlArrowRight
                onClick={() => handleNavigation(-1, 'result')}
                className={
                  styles.dopa_update_navigator +
                  ' ' +
                  styles.dopa_update_navigator_right
                }
              />
              <Carousel
                itemsPerWindow={1}
                gap={isMobile ? 10 : 16}
                navigator={resultNavigator}
                setNavigator={setResultNavigator}
              >
                <Image
                  src={result1}
                  alt='Dopa updates'
                  className={styles.dopa_result_secondary_img}
                />
                <Image
                  src={result2}
                  alt='Dopa updates'
                  className={styles.dopa_result_secondary_img}
                />
                <Image
                  src={result3}
                  alt='Dopa updates'
                  className={styles.dopa_result_secondary_img}
                />
              </Carousel>
            </div>
          </div>
        </section>

        <HomeSuccessSection />

        <EliteTutorsSection />

        <section className={styles.insight_section}>
          <div className={styles.insight_header_wrapper}>
            <div className={styles.icon_and_heading}>
              <Image src={insightIcon} className={styles.insight_icon} />
              <h3>Insightful Insights</h3>
            </div>
            <h4>Bridging the Gap to Affordable and Accessible Learning.</h4>
          </div>

          <div className={styles.statics_wrapper}>
            <div className={styles.statics_card}>
              <Image className={styles.statics_icon} src={studentsStatics} />
              <div className={styles.statics_details_wrapper}>
                <h3>20k+</h3>
                <p>Students impacted</p>
              </div>
            </div>
            <div className={styles.statics_card}>
              <Image className={styles.statics_icon} src={learningStatics} />
              <div className={styles.statics_details_wrapper}>
                <h3>2+ Million</h3>
                <p>hours of LIVE learning</p>
              </div>
            </div>
            <div className={styles.statics_card}>
              <Image className={styles.statics_icon} src={viewsStatics} />
              <div className={styles.statics_details_wrapper}>
                <h3>1+ Million</h3>
                <p>Monthly YouTube Views</p>
              </div>
            </div>
            <div className={styles.statics_card}>
              <Image className={styles.statics_icon} src={admissionStatics} />
              <div className={styles.statics_details_wrapper}>
                <h3>1k+ </h3>
                <p>Admissions in Top-colleges</p>
              </div>
            </div>
          </div>
        </section>

        <AppDownloadSection />
      </main>
    </MainLayout>
  );
}
