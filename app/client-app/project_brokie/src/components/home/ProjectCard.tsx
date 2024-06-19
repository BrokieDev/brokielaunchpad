'use client';
import React, { useRef, useState } from 'react';
import styles from '@/styles/projectCard.module.css';
import card_1 from '@/assets/images/projects/card_1.png';
import men_group from '@/assets/icons/men_group.png';
import Image from 'next/image';
import invest from '@/assets/icons/invest.png';
import view from '@/assets/icons/view.png';
import { FaChartArea } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type TProjectCard = {
  pathname?: string;
};

const ProjectCard = ({ pathname }: TProjectCard) => {
  const router = useRouter();
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
    <div className={styles.projectCard}>
      <div className={styles.info}>
        <Image src={card_1} alt="img" height={200} width={300}></Image>
        <div className={styles.statusWrapper}>
          <div className={styles.ongoing}>
            <span>Ongoing</span>
          </div>
          <div className={styles.percentage}>
            <Image
              src={men_group}
              alt="group_men"
              height={15}
              width={15}
            ></Image>
            <span>5%</span>
          </div>
        </div>
        <div className={styles.infoTextWrapper}>
          <h2>Candle Coin</h2>
          <h4>1 Candle = 0.0000312 TON</h4>
          <h3>1000 TON</h3>
          <h5>Soft Cap</h5>
        </div>
        <div className={styles.infoTextSquare}>
          <p className={styles.liquidity}>
            <span>Liquidity:</span>
            <span>51%</span>
          </p>
          <p className={styles.offered}>
            <span>Offered:</span>
            <span>770 000 000 BUZZ</span>
          </p>
        </div>
        <div className={styles.progress}>
          <h4>Progress (51%)</h4>
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
        <div className={styles.buttons}>
          {pathname === '/my_claims' ? (
            <button onClick={() => router.push('/view_coin/0')}>
              <FaChartArea className={styles.chart} />
              Claim Coin
            </button>
          ) : (
            <button onClick={() => router.push('/view_coin/0')}>
              <FaChartArea className={styles.chart} />
              Invest
            </button>
          )}
          <button onClick={() => router.push('/view_coin/0')}>
            <Image
              className={styles.view}
              src={view}
              alt="view_icon"
              width={16}
              height={12}
            ></Image>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
