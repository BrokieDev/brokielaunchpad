import React from 'react';
import styles from '@/styles/viewCoinBottom.module.css';
import ViewCoinProgressIndicator from './ViewCoinProgressIndicator';
import { TIndicatorsItem } from '@/types/indicator';

const ViewCoinBottom = () => {
  const indicators: TIndicatorsItem[] = [
    {
      title: 'Waiting for pool start',
      subtitle: 'No one can purchase',
      lastChild: false,
      active: true,
    },
    {
      title: 'Pool start',
      subtitle: 'Pool start at 2024',
      lastChild: false,
      active: true,
    },
    {
      title: 'Pool ended',
      subtitle: 'Pool ended at 2024',
      lastChild: false,
      active: true,
    },
    {
      title: 'Claim coins',
      subtitle: 'Claim coins at 2024',
      lastChild: true,
      active: false,
    },
  ];
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainerLeft}>
        {indicators.map((indicator: TIndicatorsItem, i: number) => (
          <ViewCoinProgressIndicator
            key={i}
            indicator={indicator}
          ></ViewCoinProgressIndicator>
        ))}
      </div>
      <div className={styles.bottomContainerRight}></div>
    </div>
  );
};

export default ViewCoinBottom;
