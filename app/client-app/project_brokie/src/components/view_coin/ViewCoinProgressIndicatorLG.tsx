import React from 'react';
import styles from '@/styles/viewCoinProgressIndicatorLG.module.css';
import { TIndicatorsItem } from '@/types/indicator';
import { indicators } from '@/services/constant';

const ViewCoinProgressIndicatorLG = () => {
  return (
    <div className={styles.indicatorMain}>
      <div className={styles.indicatorLine}>
        <div 
        style={{width: '99%',}}
        className={styles.indicatorLineSuccess}></div>
      </div>
      <div className={styles.indicatorsContainer}>
        {indicators.map((indicator: TIndicatorsItem, i: number) => (
          <div key={i} className={styles.indicator}>
            <div
              className={`${styles.indicatorCircle} ${''}
          ${
            indicator.active
              ? styles.indicatorCircleActive
              : styles.indicatorCircleInactive
          }
          `}
            >
              <div>
                <span></span>
              </div>
            </div>

            <div className={styles.indicatorText}>
              <h3>{indicator.title}</h3>
              <h5>{indicator.subtitle} </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCoinProgressIndicatorLG;