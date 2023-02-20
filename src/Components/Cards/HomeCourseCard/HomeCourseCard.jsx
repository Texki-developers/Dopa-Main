import Image from 'next/image'
import React from 'react'
import styles from './HomeCourseCard.module.scss'

export default function HomeCourseCard({icon,alt,cardTitle}) {
  return (
    <div className={styles['home-course-card']}>
        <Image src={icon} alt={alt} placeholder='blur' />
        <p>{cardTitle}</p>
    </div>
  )
}
