'use client';
import styles from '@/styles/navbar.module.css';
import { LuBaggageClaim } from 'react-icons/lu';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import Link from 'next/link';
import { defaultAvatar } from '@/services/constant';

import React from 'react';

const NavbarRight = () => {
  const wallet = useTonWallet();

  return (
    <div className={styles.navbarRight}>
      {wallet && (
        <>
          <Link href="/my_claims">
            <LuBaggageClaim className={styles.icon}></LuBaggageClaim>
          </Link>
          <img src={defaultAvatar} alt="avatar" className={styles.avatar}></img>
        </>
      )}
      <TonConnectButton className="my-button-class"></TonConnectButton>
    </div>
  );
};

export default NavbarRight;
