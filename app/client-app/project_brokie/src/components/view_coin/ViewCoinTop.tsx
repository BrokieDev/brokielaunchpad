import React from 'react';
import styles from '@/styles/viewCoinTop.module.css';
import coinImg from '@/assets/images/projects/card_1.png';
import Image from 'next/image';
import telegram from '@/assets/icons/view_coin/telegram.png';
import dribble from '@/assets/icons/view_coin/dribble.png';
import x from '@/assets/icons/view_coin/x.png';

const ViewCoinTop = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topContainerLeft}>
        <div className={styles.imgWrapper}>
          <Image alt="card" src={coinImg} height={200} width={190}></Image>
        </div>
        <div className={styles.textWrapper}>
          <h2>Candle Coin</h2>
          <h4>Lorem ipsum dolor sit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus quia modi.
          </p>
        </div>
      </div>
      <div className={styles.topContainerRight}>
        <span>
          <Image alt="x_icon" src={x} height={20} width={20}></Image>
        </span>
        <span>
          <Image
            alt="dribble_icon"
            src={dribble}
            height={20}
            width={20}
          ></Image>
        </span>
        <span>
          <Image
            alt="telegram_icon"
            src={telegram}
            height={20}
            width={20}
          ></Image>
        </span>
      </div>
    </div>
  );
};

export default ViewCoinTop;
