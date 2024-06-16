import React from 'react';
import styles from '@/styles/intro.module.css';

const IntroCards = () => {
  return (
    <div className={styles.introCards}>
      <div className={styles.gradient}></div>

      <div className={`${styles.cardLeft} ${styles.card}`}></div>
      <div className={`${styles.cardMiddle} ${styles.card}`}></div>
      <div className={`${styles.cardRight} ${styles.card}`}></div>
    </div>
  );
};

export default IntroCards;
