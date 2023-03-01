import React from 'react'
import styles from './SuccessCardStory.module.scss'
import sana from '../../../public/Assets/Success/success.jpg'
import Image from 'next/image'

export default function SuccessStoryCard() {
  return (
    <div className={styles.success_story_card}>
        <p className={styles.success_story}>
            "I was a DOPA student and a repeater. I received good marks in NEET 2022. DOPA is an excellent app that is user-friendly, with important question banks and exams for NEET. The app also has mentors who provide support from start to finish."
        </p>
        <div className={styles.success_person_wrapper}>
            <Image className={styles.success_person_profile} src={sana} alt="Dopa Success Stories"/>
            <div className={styles.success_person_details}>
                <div className={styles.name_and_designation_wrapper}>
                    <h4 className={styles.success_person_name}>Sana Parveen</h4>
                    <p className={styles.success_person_designation}>Student</p>
                </div>
                <div className={styles.mark_and_exam}>
                    <strong className={styles.mark}>615/720</strong>
                    <p className="styles exam">NEET 2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}
