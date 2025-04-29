import React, { useState, useEffect } from 'react';

import styles from './ProgressBar.module.css';

const getProgress = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  return (scrollTop + windowHeight) / docHeight;
};


const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getProgress());
    };
    window.addEventListener('scroll', handleScroll);

    // initialize progress on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressBarOutline}>
      <div className={styles.progressBar} style={{ width: `${Math.min(100, progress * 100)}%` }}></div>
    </div >
  );
};

export default ProgressBar;