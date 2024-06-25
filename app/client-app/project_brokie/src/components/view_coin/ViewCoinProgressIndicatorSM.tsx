import React from 'react';
import styles from '@/styles/viewCoinProgressIndicatorSM.module.css';
import { indicators } from '@/services/constant';
import { TIndicatorsItem } from '@/types/indicator';

const ViewCoinProgressIndicatorSM = () => {
  return (
    <div className={styles.indicatorMain}>
      <div className={styles.indicatorLine}>
        <div
          style={{ height: '33%' }}
          className={styles.indicatorLineSuccess}
        ></div>
      </div>

      <div className={styles.indicatorsContainer}>
        {indicators.map((indicator: TIndicatorsItem, i: number) => (
          <div key={i} className={styles.indicator}>
            <div className={styles.indicatorCircleWrapper}>
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

export default ViewCoinProgressIndicatorSM;
