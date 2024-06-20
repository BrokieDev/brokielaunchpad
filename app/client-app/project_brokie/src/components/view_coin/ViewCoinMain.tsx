import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';
import ViewCoinMiddle from './ViewCoinMiddle';

const ViewCoinMain = () => {
  return (
    <div className={styles.mainContainer}>
      <ViewCoinTop></ViewCoinTop>
      {/* <ViewCoinMiddle></ViewCoinMiddle> */}
    </div>
  );
};

export default ViewCoinMain;
