import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';
import ViewCoinMiddle from './ViewCoinMiddle';
import ViewCoinBottom from './ViewCoinBottom';


const ViewCoinMain = () => {
  return (
    <div className={styles.mainContainer}>
      <ViewCoinTop></ViewCoinTop>
      <ViewCoinMiddle></ViewCoinMiddle>
      <ViewCoinBottom></ViewCoinBottom>
    </div>
  );
};

export default ViewCoinMain;
