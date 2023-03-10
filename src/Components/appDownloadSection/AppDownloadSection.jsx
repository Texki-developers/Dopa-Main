import React from 'react'
import styles from './AppDownloadSection.module.scss'
import no1Vector from '../../../public/Assets/home/No 1 vector.png'
import downloadAppStore from '../../../public/Assets/home/download-appstore.png'
import downloadPlayStore from '../../../public/Assets/home/download-playstore.png'
import no1Mobile from '../../../public/Assets/home/innovative phone.png'
import Image from 'next/image'

export default function AppDownloadSection() {
    return (
        <section className={styles.no_one_section}>
            <Image className={styles.no_one_vector_bg} src={no1Vector} />
            <div className={styles.no_one_content_wrapper}>
                <div className={styles.no_one_content}>
                    <h2 className={styles.no_one_text}>Download India’s First NEET coaching App By Doctors.</h2>
                    <div className={styles.no_one_download_wrapper}>
                        <Image src={downloadAppStore} className={styles['download-img']} alt="Download Dopa appstore" />
                        <Image src={downloadPlayStore} className={styles['download-img']} alt="Download Dopa playstore" />
                    </div>
                </div>
                <Image src={no1Mobile} className={styles.no_one_phone_img} alt="No 1 in India" />
            </div>
        </section>
    )
}
