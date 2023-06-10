import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './ImgAdPopup.module.scss';
import config from '@/utils/config';
export default function ImgAdPopup({ setPopup, adMobile, adDesk }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup_container}>
        <button
          className={styles.btn_close_popup}
          onClick={() => setPopup(false)}
        >
          Close
        </button>
        <img
          loading='lazy'
          src={`${config.imageURL}${isMobile ? adMobile : adDesk}`}
        />
      </div>
    </div>
  );
}
