import React from 'react'
import styles from './FreeTrialComponent.module.scss'
import dopaMagic from '../../../public/Assets/results/dopa magic.png'
import Image from 'next/image'

export default function FreeTrialComponent() {
    return (
        <div className={styles.magic_of_dopa}>
            <Image src={dopaMagic} className={styles.dopa_magic_img} />
            <h2 className={styles.dopa_magic_heading}>Experience the Magic of DOPA's Comprehensive NEET Package and Expert Doctor Mentorship</h2>
            <button className={styles.btn_dopa_magic}>Book a Free Trial</button>
        </div>
    )
}
