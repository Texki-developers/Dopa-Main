import Image from 'next/image'
import React from 'react'
import styles from './InnovativeApproachPoints.module.scss'

export default function InnovativeApproachPoints({icon, title, description}) {
    return (
        <div className={styles['points-wrapper']}>
            <h6 className={styles['title-wrapper']}>
                <Image src={icon} alt={title}/>
                <span>{title}</span>
            </h6>
            <p>{description}</p>
        </div>
    )
}
