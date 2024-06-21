'use client';
import React, { useState } from 'react';
import styles from '@/styles/viewCoinClaim.module.css';
import Image from 'next/image';
import claimCoin from '@/assets/images/view_coin/btn_icon.png';

import lock from '@/assets/images/view_coin/lock.png';
import chart from '@/assets/images/view_coin/chart.png';

const ViewCoinClaim = () => {
  const progress = 51;

  const [hoverWidth, setHoverWidth] = useState(0);

  const handleHover = (event: any) => {
    const div = event.currentTarget;
    const rect = div.getBoundingClientRect();
    const hoverX = event.clientX - rect.left;
    const widthPercent = (hoverX / rect.width) * 100;
    setHoverWidth(Math.round(widthPercent));
  };
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.sellEnded}>
          <span>Sales Ended</span>
        </div>
        <div className={styles.timing}>
          <div>
            <span>12</span>
            <span>Days</span>
          </div>
          <div>
            <span>12</span>
            <span>Hours</span>
          </div>
          <div>
            <span>12</span>
            <span>Mins.</span>
          </div>
          <div>
            <span>12</span>
            <span>Secs.</span>
          </div>
        </div>

        <div className={styles.progress}>
          <div onMouseMove={handleHover} className={styles.progressBarNormal}>
            <span
              style={{ left: `calc(${hoverWidth}% - 10px)` }}
              className={styles.tooltip}
            >
              {hoverWidth}%
            </span>
            <div
              style={{ width: `${progress}%` }}
              className={styles.progressBarYellow}
            ></div>
          </div>
        </div>

        <div className={styles.dataText}>
          <span>3564.1 TON</span>
          <span>1000</span>
        </div>

        <div className={styles.toClaim}>
          <h4>To Claim: </h4>
          <div>
            <span>1 Candle</span>
            <span>1 TON</span>
          </div>
        </div>
        <button className={styles.claimButton}>
          <Image
            src={claimCoin}
            alt="claim_coin_icon"
            width={20}
            height={20}
          ></Image>
          Claim Coin
        </button>
        <div className={styles.iconButtons}>
          <button>
            <Image src={lock} alt="lock_icon" width={20} height={20}></Image>
          </button>
          <button>
            <Image src={chart} alt="chart_icon" width={20} height={20}></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCoinClaim;
