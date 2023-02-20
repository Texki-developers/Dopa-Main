'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './BenefitsSection.module.scss'
import { IoBulbOutline } from 'react-icons/io5'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { VscGraphLine } from 'react-icons/vsc'
import { BiBookReader } from 'react-icons/bi'
import { Carousel } from '@/Components/Carousel/Carousel'
import image1 from '../../../../public/Assets/temp/1.jpg'
import image2 from '../../../../public/Assets/temp/2.jpg'
import image3 from '../../../../public/Assets/temp/3.jpg'
import InnovativeApproach from '../InnovativeApproach/InnovativeApproach'
import doctorLed from '../../../../public/Assets/home/doctor led.png'
import systematicStrategy from '../../../../public/Assets/home/systematic strategy.png'
import eliteTution from '../../../../public/Assets/home/elite tution.png'
import Image from 'next/image'

export default function BenefitsSection() {
  const [sliderStatus, setSliderStatus] = useState([0, 0])
  const sliderChildRef = useRef(null)

  const slideHandler = (index) => {
    console.log(index, sliderChildRef.current.offsetWidth);
    const childWidth = sliderChildRef.current.offsetWidth;
    setSliderStatus([index, -((index * childWidth) + (index * 16))])
  }
  return (
    <section className={styles['benefits-section']}>
      <h1 className={styles['main-title']}>Get the edge you need to succeed on NEET.</h1>
      <h3 className={styles['sub-title']}>Experience the benefits of DOPA</h3>

      {/* <div className={styles['benefits-container']}>
        <ul className={styles['benefits-selector-wrapper']}>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 0 ? styles['benefits-selector--active']:'')} onClick={() => slideHandler(0)}>
            <IoBulbOutline className={styles['selector-icon']} />
            <span>Innovative Approach</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 1 ? styles['benefits-selector--active']:'')} onClick={() => slideHandler(1)}>
            <FaHandHoldingHeart className={styles['selector-icon']} />
            <span>Mentorship by Doctors</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 2 ? styles['benefits-selector--active']:'')} onClick={() => slideHandler(2)}>
            <VscGraphLine className={styles['selector-icon']} />
            <span>Systematic Strategies</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 3 ? styles['benefits-selector--active']:'')} onClick={() => slideHandler(3)}>
            <BiBookReader className={styles['selector-icon']} />
            <span>Elite Tutors</span>
          </li>
        </ul>

        <div className={styles.benefit_slider_container}>
          <div className={styles.benefit_slider_wrapper} style={{transform: `translateX(${sliderStatus[1]}px)`}}>
            <div className={styles.benefit_child} ref={sliderChildRef}>
              <div className={styles.benefit_left}>
                <div className={styles.benefits_title_wrapper}>
                  <h4>To reach your full potential</h4>
                  <h3>Doctor-led Mentorship</h3>
                </div>
                <p>
                  Doctor-led mentorship program for NEET coaching students provides expert guidance and personalized support to help aspiring medical students succeed on the competitive exam. Include study materials, practice tests and strategies for managing stress. Helps students realize their full potential.
                </p>
                <button className="btn-primary">Book a free trial</button>
              </div>

              <div className={styles['phone-img-wrapper']}>
                <Image src={doctorLed} className={styles['r-img']} alt="Doctor Led Mentorship" />
              </div>
            </div>

            <div className={styles.benefit_child}>
              <div className={styles.benefit_left}>
                <div className={styles.benefits_title_wrapper}>
                  <h4>NEET success with ease</h4>
                  <h3>Streamlined approach</h3>
                </div>
                <p>
                  Looking to excel on the NEET exam?
                  Our success program can help you get there.
                  Our expert-designed program includes a doctor's success planner, weekly exams, and tracking and analysis of scores to keep you focused and on track. With our proven approach, you can achieve NEET success with confidence.
                </p>
                <button className="btn-primary">Download Doctor’s success planner</button>
              </div>

              <div className={styles['phone-img-wrapper']}>
                <span className={styles['ellipse-1']}></span>
                <span className={styles['ellipse-2']}></span>
                <span className={styles['ellipse-3']}></span>
                <Image src={systematicStrategy} className={styles['r-img-system']} alt="Doctor Led Mentorship" />
              </div>
            </div>

            <Carousel>
              <div className={styles.benefit_child}>
                <div className={styles.benefit_left}>
                  <div className={styles.benefits_title_wrapper}>
                    <h4>Learn from the Doctors.</h4>
                    <h3>Excel in Your Studies</h3>
                  </div>
                  <p>
                    Our elite tutors are experts in their field, with a wealth of knowledge and experience in preparing students for the NEET. We understand that NEET is a challenging exam and requires a tailored approach to learning. Our tutors work with you to identify your strengths and weaknesses and create a customized study plan that will help you reach your full potential.
                  </p>
                  <button className="btn-primary">Schedule a Trial Class</button>
                </div>

                <div className={styles['phone-img-wrapper']}>
                  <Image src={eliteTution} className={styles['r-img-elite']} alt="Doctor Led Mentorship" />
                </div>
              </div>
              <div className={styles.benefit_video_wrapper}>
                <iframe src="https://www.youtube.com/embed/Bf8a6IC1dE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Carousel>
            <Carousel>
              <InnovativeApproach />
            </Carousel>
          </div>
        </div>
      </div> */}
      <div className={styles['benefits-container-mobile']}>
        <Carousel itemsPerWindow={1.5} gap={16}>
          <div className={styles['abc']}></div>
          <div className={styles['abc']}></div>
          <div className={styles['abc']}></div>
        </Carousel>
      </div>
    </section >
  )
}
