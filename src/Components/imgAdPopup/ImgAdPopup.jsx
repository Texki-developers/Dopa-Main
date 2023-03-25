import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './ImgAdPopup.module.scss'
import adDesk from '../../../public/Assets/modal/ad mobile.jpeg'
import adMobile from '../../../public/Assets/modal/ad desk.jpeg'

export default function ImgAdPopup({setPopup}) {
    const [isMobile, setMobile] = useState(false);
    
    useEffect(() => {
        if (window.innerWidth > 500) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }, [])
    
    return (
        <div className={styles.popup_wrapper}>
            <div className={styles.popup_container}>
                <button className={styles.btn_close_popup} onClick={() => setPopup(false)}>Close</button>
                <Image loading='lazy' src={isMobile ? adMobile : adDesk} />
            </div>
        </div>
    )
}
