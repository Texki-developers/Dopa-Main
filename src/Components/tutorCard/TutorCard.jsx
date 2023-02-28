import Image from 'next/image'
import React from 'react'
import styles from './TutorCard.module.scss'

export default function TutorCard({data, index}) {
  return (
    <div className={styles.tutor_card+" " + (index % 2 === 1 ? styles.tutor_card_second : "")}>
        <div className={styles.tutor_profile_wrapper}>
            <Image src={data.profile} className={styles.tutor_card_img} alt="Tutors of Dopa"/>
        </div>
        <div className={styles.tutor_details_wrapper}>
            <h4 className={styles.tutor_name}>{data.name}</h4>
            <h5 className={styles.tutor_designation}>{data.designation}</h5>
            <h5 className={styles.tutor_designation}>{data.education}</h5>
            <strong className={styles.tutor_experience}>{data.experience}</strong>
        </div>
    </div>
  )
}
