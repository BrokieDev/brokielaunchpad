import React from 'react';
import styles from '@/styles/viewCoinToken.module.css';
import Chart from '../others/Chart';

const ViewCoinToken = () => {
  const chartData = [
    { title: 'Marketing', value: 23, color: '#333399' },
    { title: 'DEX listing', value: 10, color: '#FF5F6D' },
    { title: 'DEX listing', value: 22, color: '#FC00FF' },
    { title: 'Fairlaunch', value: 30, color: '#FFB75E' },
  ];
  return (
    <div className={styles.card}>
      <h3>Candle Tokenomics</h3>
      <div>
        <div className={styles.chartWrapper}>
          <Chart></Chart>
        </div>
        <div className={styles.textWrapper}>
          {chartData.map((c: any) => (
            <div key={c.title}>
              <span style={{ backgroundColor: `${c.color}` }}></span>
              <span>
                {c.title} ({c.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCoinToken;
