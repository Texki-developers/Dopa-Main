import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './HomeSuccessSection.module.scss'
import successImage from '../../../public/Assets/home/success icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import SuccessStoryCard from '../successStoryCard/SuccessStoryCard';

SwiperCore.use([Navigation, Pagination]);

export default function HomeSuccessSection() {
  const [swiperParams, setSwiperParams] = useState(null)

  useEffect(() => {
    let slidesPerView = 3, spaceBetween = 30;

    if (window.innerWidth < 500) {
      slidesPerView = 1;
    } else if (window.innerWidth < 769) {
      slidesPerView = 2
    }

    setSwiperParams({
      slidesPerView,
      spaceBetween,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }, [])
  return (
    <section className={styles.success_section}>
      <div className={styles.success_header + " icon-header-wrapper"}>
        <Image src={successImage} className="header-icon" />
        <div className={styles.header_wrapper_success + " header-wrapper"}>
          <h3>Success stories of  DOPA</h3>
          <h4>Let’s Build a story for your dreams!</h4>
        </div>
      </div>
      {
        swiperParams &&
        <div className={styles.carousel_wrapper}>
          <Swiper {...swiperParams}>
            <SwiperSlide >
              <div className={styles.success_video_and_card}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YlHwwcIwfJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <SuccessStoryCard />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className={styles.success_video_and_card}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YlHwwcIwfJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <SuccessStoryCard />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className={styles.success_video_and_card}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YlHwwcIwfJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <SuccessStoryCard />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className={styles.success_video_and_card}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YlHwwcIwfJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <SuccessStoryCard />
              </div>
            </SwiperSlide>

          </Swiper>
          {
            window.innerWidth > 500 ?
            <>
              <div className="swiper-button-prev" style={{ color: 'white' }}></div>
          <div className="swiper-button-next" style={{ color: 'white' }}></div>
            </>
            :
            <div className={styles.swiper_pagination_success + " swiper-pagination"}></div>
          }
          
        </div>
      }
    </section>
  )
}
