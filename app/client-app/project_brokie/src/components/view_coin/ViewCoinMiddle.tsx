import React from 'react';
import styles from '@/styles/viewCoinMiddle.module.css';

const ViewCoinMiddle = () => {
  const items = [
    'Presale Address',
    'Token Name',
    'Token Symbol',
    'Token Decimal',
    'Token Address',
    'Total Supply',
    'Tokens for Presale',
    'Tokens for Liquidity',
    'Initial Market Cap (Estimate)',
    'Soft Cap',
    'Limit Per User',
    'Presale Start Time',
    'Presale End Time',
    'Listing On',
    'Liquidity Percent',
  ];
  return (
    <div className={styles.middleContainer}>
      <div className={styles.middleContainerLeft}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Coin Info</h2>
        </div>
        <ul className={styles.listContainer}>
          {items.map((item: any, i: number) => (
            <li className={styles.listItem} key={i}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.middleContainerRight}>
       
      </div>
    </div>
  );
};

export default ViewCoinMiddle;
