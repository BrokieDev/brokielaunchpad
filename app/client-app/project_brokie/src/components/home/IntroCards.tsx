import React from 'react';
import styles from '@/styles/intro.module.css';
import Image from 'next/image';
import left from '@/assets/images/intro/left.png';
import middle from '@/assets/images/intro/middle.png';
import right from '@/assets/images/intro/right.png';

const IntroCards = () => {
  return (
    <div className={styles.introCards}>
      <div className={styles.gradient}></div>

      <div className={`${styles.cardLeft} ${styles.card}`}>
        <Image alt="card" src={left} height={250} width={300}></Image>
      </div>
      <div className={`${styles.cardMiddle} ${styles.card}`}>
        <Image alt="card" src={middle} height={250} width={300}></Image>
      </div>
      <div className={`${styles.cardRight} ${styles.card}`}>
        <Image alt="card" src={right} height={250} width={300}></Image>
      </div>
    </div>
  );
};

export default IntroCards;
