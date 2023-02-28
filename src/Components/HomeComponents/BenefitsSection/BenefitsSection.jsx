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
import downloadAppStore from '../../../../public/Assets/home/download-appstore.png'
import downloadPlayStore from '../../../../public/Assets/home/download-playstore.png'
import innovativePhone from '../../../../public/Assets/home/innovative phone.png'
import videoLecture from '../../../../public/Assets/home/video lecture.png'
import liveClass from '../../../../public/Assets/home/live class.png'
import testSeries from '../../../../public/Assets/home/test series.png'
import dopaQuiz from '../../../../public/Assets/home/dopa quiz.png'
import questionBank from '../../../../public/Assets/home/question bank.png'
import doubtClearance from '../../../../public/Assets/home/doubt clearance.png'
import discussionPanel from '../../../../public/Assets/home/discussion panel.png'
import dopaMine from '../../../../public/Assets/home/dopa mine.png'
import InnovativeApproachPoints from '../InnovativeApproachPoints/InnovativeApproachPoints'

import Image from 'next/image'

export default function BenefitsSection() {
  const [sliderStatus, setSliderStatus] = useState([0, 0])
  const sliderChildRef = useRef(null)
  const [isMobile, setMobile] = useState(false)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)

  const slideHandler = (index) => {
    console.log(index, sliderChildRef.current.offsetWidth);
    const childWidth = sliderChildRef.current.offsetWidth;
    setSliderStatus([index, -((index * childWidth) + (index * 16))])
  }

  const mobileSelectionHandler = (event, index) => {
    let active = document.querySelector('.benefit_mobile_selector__active')
    if (active) {
      active.classList.remove('benefit_mobile_selector__active')
    }
    event.target.classList.add('benefit_mobile_selector__active')
    setMobileActiveIndex(index)
  }

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])

  return (
    <section className={styles['benefits-section']}>
      <h1 className={styles['main-title']}>Get the edge you need to succeed on NEET.</h1>
      <h3 className={styles['sub-title']}>Experience the benefits of DOPA</h3>

      <div className={styles['benefits-container']}>
        <ul className={styles['benefits-selector-wrapper']}>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 0 ? styles['benefits-selector--active'] : '')} onClick={() => slideHandler(0)}>
            <IoBulbOutline className={styles['selector-icon']} />
            <span>Innovative Approach</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 1 ? styles['benefits-selector--active'] : '')} onClick={() => slideHandler(1)}>
            <FaHandHoldingHeart className={styles['selector-icon']} />
            <span>Mentorship by Doctors</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 2 ? styles['benefits-selector--active'] : '')} onClick={() => slideHandler(2)}>
            <VscGraphLine className={styles['selector-icon']} />
            <span>Systematic Strategies</span>
          </li>
          <li className={styles['benefits-selector'] + ' ' + (sliderStatus[0] === 3 ? styles['benefits-selector--active'] : '')} onClick={() => slideHandler(3)}>
            <BiBookReader className={styles['selector-icon']} />
            <span>Elite Tutors</span>
          </li>
        </ul>

        <div className={styles.benefit_slider_container}>
          <div className={styles.benefit_slider_wrapper} style={{ transform: `translateX(${sliderStatus[1]}px)` }}>
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
      </div>

      {/* For Mobile */}
      <div className={styles['benefits-container-mobile']}>
        <ul className={styles.benefit_mobile_selector}>
          <li className='benefit_mobile_selector__active' onClick={e => mobileSelectionHandler(e, 0)}><span>Innovative Approach</span></li>
          <li onClick={e => mobileSelectionHandler(e, 1)}><span>Mentorship by Doctors</span></li>
          <li onClick={e => mobileSelectionHandler(e, 2)}><span>Systematic Strategy</span></li>
          <li onClick={e => mobileSelectionHandler(e, 3)}><span>Elite Tutors</span></li>
        </ul>

        <div className={styles.benefits_container_slider_wrapper}>

          {
            mobileActiveIndex === 0 ?
              <div className={styles.benefits_container_slider}>
                <Carousel itemsPerWindow={isMobile ? false : 2} dots={isMobile ? true : false} gap={16}>
                  <div className={styles.benefits_mobile_slide_card + " " + styles.benefits_card_colored}>
                    <div className={styles.benefits_title_wrapper}>
                      <h4>Adaptive Learning with</h4>
                      <h3>Our Coaching App</h3>
                    </div>
                    <p>
                      The DOPA app helps you prepare for the NEET exam with personalized lessons and support. Whether you're new to the exam or have experience, the app gives you the tools you need to succeed.
                      <br /><br />
                      Elevate your NEET preparation with our comprehensive and interactive app.
                      <br />
                      <span>DOWNLOAD NOW</span>
                    </p>
                    <div className="downloads-wrapper">
                      <Image src={downloadAppStore} className={styles['download-img']} alt="Download Dopa appstore" />
                      <Image src={downloadPlayStore} className={styles['download-img']} alt="Download Dopa playstore" />
                    </div>
                  </div>
                  <div className={styles.benefits_mobile_slide_card}>
                    <div className={styles.benefits_title_wrapper}>
                      <h4>A comprehensive learning solution</h4>
                      <h3>Experience the Features</h3>
                    </div>
                    <div className='grid-1-1'>
                      <InnovativeApproachPoints
                        icon={videoLecture}
                        title="Video Lectures"
                        description="Enhance your NEET exam preparation with DOPA’s Elite tutors, personalized learning, flexible learning and in-depth coverage of important topics."
                      />
                      <InnovativeApproachPoints
                        icon={liveClass}
                        title="Live Classes"
                        description="Help with NEET exam preparation by providing immediate clarification, personalized guidance, peer interaction, and flexibility."
                      />
                      <InnovativeApproachPoints
                        icon={dopaQuiz}
                        title="DOPA Quizzes"
                        description="A brief assessment helps you to be more familiar with the questions; test your Knowledge and measure the growth."
                      />
                      <InnovativeApproachPoints
                        icon={testSeries}
                        title="Test Series"
                        description="Regular tests and mock exams can help track progress and boost confidence for the NEET exam"
                      />
                      <InnovativeApproachPoints
                        icon={questionBank}
                        title="Question Bank"
                        description="An invaluable tool for success helps students prepare for exams and improve their knowledge and reinforce their understanding of key concepts."
                      />
                      <InnovativeApproachPoints
                        icon={doubtClearance}
                        title="24x7 Doubt Clearance"
                        description="Get your doubts cleared instantly by DOPA subject experts anytime and make your learning hassle-free"
                      />
                      <InnovativeApproachPoints
                        icon={discussionPanel}
                        title="Discussion Panel"
                        description="A dynamic classroom where students are actively participating in discussions that foster critical thinking and a deeper understanding of the concepts."
                      />
                      <InnovativeApproachPoints
                        icon={dopaMine}
                        title="DOPA Mine"
                        description="DOPA Mines are visual guides to help students easily memorize NCERT concepts. "
                      />
                    </div>
                  </div>
                </Carousel>
              </div>
              : mobileActiveIndex === 1 ?
                <div className={styles.benefits_container_slider}>
                  <Carousel itemsPerWindow={isMobile ? false : 2} dots={isMobile ? true : false} gap={16}>
                    <div className={styles.benefits_mobile_slide_card + " " + styles.benefits_card_colored}>
                      <div className={styles.benefits_title_wrapper}>
                        <h4>To reach your full potential</h4>
                        <h3>Doctor-led Mentorship</h3>
                      </div>
                      <p>
                        Doctor-led mentorship program for NEET coaching students provides expert guidance and personalized support to help aspiring medical students succeed on the competitive exam. Include study materials, practice tests and strategies for managing stress. Helps students realize their full potential.
                      </p>
                      <button className="btn-primary">Download Doctor’s success planner</button>
                    </div>

                    <div className={styles.benefit_video_wrapper}>
                      <iframe src="https://www.youtube.com/embed/Bf8a6IC1dE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </Carousel>
                </div>
                : mobileActiveIndex === 2 ?
                  <div className={styles.benefits_container_slider}>
                    <div className={styles.benefits_mobile_slide_card}>
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
                  </div>
                  : mobileActiveIndex === 3 ?
                    <div className={styles.benefits_container_slider}>
                      <Carousel itemsPerWindow={isMobile ? false : 2} dots={isMobile ? true : false} gap={16}>
                        <div className={styles.benefits_mobile_slide_card + " " + styles.benefits_card_colored}>
                          <div className={styles.benefits_title_wrapper}>
                            <h4>Learn from the Doctors.</h4>
                            <h3>Excel in Your Studies</h3>
                          </div>
                          <p>
                            Our elite tutors are experts in their field, with a wealth of knowledge and experience in preparing students for the NEET. We understand that NEET is a challenging exam and requires a tailored approach to learning. Our tutors work with you to identify your strengths and weaknesses and create a customized study plan that will help you reach your full potential.
                          </p>
                          <button className="btn-primary btn-light">Schedule a Trial Class</button>
                        </div>

                        <div className={styles.benefit_video_wrapper}>
                          <iframe src="https://www.youtube.com/embed/Bf8a6IC1dE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                      </Carousel>
                    </div>
                    : null
          }
      </div>
    </div>
    </section >
  )
}
