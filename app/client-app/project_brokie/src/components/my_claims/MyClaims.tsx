'use client';
import React, { useState } from 'react';
import styles from '@/styles/myClaims.module.css';
import ProjectCard from '../home/ProjectCard';
import { usePathname } from 'next/navigation';
const MyClaims = () => {
  const [claimCoins, setClaimCoins] = useState(false);
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.claimsTop}>
        <h2>
          <span>My Claims</span>
        </h2>

        <div className={styles.buttonWrapper}>
          <span
            className={claimCoins ? styles.left_active : styles.right_active}
          ></span>

          <button onClick={() => setClaimCoins(true)}>Claim Coins</button>
          <button onClick={() => setClaimCoins(false)}>MBC Claim</button>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {[...Array(5)].map((i: number) => (
          <ProjectCard key={i} pathname={pathname} ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default MyClaims;
