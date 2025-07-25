import React, { useState, useEffect } from 'react';
import styles from './StickyBanner.module.scss';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const StickyBanner = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Check localStorage on client-side only
  useEffect(() => {
    const isBannerClosed = localStorage.getItem('collegeBannerClosed') === 'true';
    setIsVisible(!isBannerClosed);
    onVisibilityChange?.(!isBannerClosed);
  }, [onVisibilityChange]);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem('collegeBannerClosed', 'true');
    onVisibilityChange?.(false);
  };

  const handleBannerClick = (path) => {
    router.push(path);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.bannerContainer}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.div 
            className={styles.banner} 
            onClick={() => handleBannerClick('/collegeprediction')}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={styles.content}>
              <span className={styles.text}>
                <motion.div 
                  className={styles.pulseDot}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <span className={styles.highlight}>COLLEGE PREDICTION 2025: </span>
                <span className={styles.bold}>Find your dream medical college based on your rank</span>
                <span className={styles.cta}>
                  Predict Now
                  <motion.span 
                    className={styles.newBadge}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >NEW</motion.span>
                  <span>→</span>
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.banner} 
            onClick={() => handleBannerClick('/neet-analysis-tool')}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={styles.content}>
              <span className={styles.text}>
                <motion.div 
                  className={styles.pulseDot}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <span className={styles.highlight}>NEET 2025 RE-ATTEMPT ALERT: </span>
                <span className={styles.bold}>Should you repeat? Don't just guess, get a data-driven answer</span>
                <span className={styles.cta}>
                  Check Now
                  <motion.span 
                    className={styles.newBadge}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >NEW</motion.span>
                  <span>→</span>
                </span>
              </span>
            </div>
          </motion.div>
          
          <motion.button 
            className={styles.closeButton} 
            onClick={handleClose}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <IoClose size={20} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBanner;
