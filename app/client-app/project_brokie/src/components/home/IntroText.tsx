import React from 'react';
import styles from '@/styles/intro.module.css';

const IntroText = () => {
  return (
    <div className={styles.introText}>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at est
        ab! Natus, animi voluptates exercitationem molestias, minima unde iste
        maiores, dicta earum tempora laborum.
      </p>
      <div className={styles.buttonWrapper}>
        <button>Connect Wallet</button>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default IntroText;
