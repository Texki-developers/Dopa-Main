import React from 'react'
import styles from './SuccessCardStory.module.scss'
import sana from '../../../public/Assets/Success/success.jpg'
import Image from 'next/image'

export default function SuccessStoryCard({ data }) {
    return (
        <>
            {
                data &&
                <div className={styles.success_story_card}>
                    <p className={styles.success_story}>
                        "{data.content}"
                    </p>
                    <div className={styles.success_person_wrapper}>
                        <Image className={styles.success_person_profile} src={sana} alt="Dopa Success Stories" />
                        <div className={styles.success_person_details}>
                            <div className={styles.name_and_designation_wrapper}>
                                <h4 className={styles.success_person_name}>{data.name}</h4>
                                <p className={styles.success_person_designation}>Student</p>
                            </div>
                            <div className={styles.mark_and_exam}>
                                <strong className={styles.mark}>{data.score}/{data.score}</strong>
                                <p className="styles exam">{data.exam}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
