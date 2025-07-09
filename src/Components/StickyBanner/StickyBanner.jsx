import React, { useState, useEffect } from 'react';
import styles from './StickyBanner.module.scss';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Check if banner was previously closed
  useEffect(() => {
    const isBannerClosed = localStorage.getItem('collegeBannerClosed');
    if (isBannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem('collegeBannerClosed', 'true');
  };

  const handleBannerClick = () => {
    router.push('/collegeprediction'); // Update this path to your college prediction page
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <div className={styles.content}>
        <span className={styles.text}>
          NEET 2025? Check your Kerala Medical College admission chances now! Predict your seat based on your score.
        </span>
      </div>
      <button className={styles.closeButton} onClick={handleClose}>
        <IoClose size={20} />
      </button>
    </div>
  );
};

export default StickyBanner;
