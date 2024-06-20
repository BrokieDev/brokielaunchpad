import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';

const ViewCoinMain = () => {
  return (
    <div className={styles.mainContainer}>
      <ViewCoinTop></ViewCoinTop>
    </div>
  );
};

export default ViewCoinMain;
