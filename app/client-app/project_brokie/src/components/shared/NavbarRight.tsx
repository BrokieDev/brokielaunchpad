'use client';
import styles from '@/styles/navbar.module.css';
import { LuBaggageClaim } from 'react-icons/lu';
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';
import Link from 'next/link';
import { baseUrl, defaultAvatar } from '@/services/constant';

import React, { useEffect, useState } from 'react';
import {
  useCheckTonProofMutation,
  useGenerateTonProofMutation,
} from '@/services/api/ohtersApi/authApi';

const NavbarRight = () => {
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  // using RTK Query hooks for fetching and checking tonProof from the server 
  const [fetchTonProof] = useGenerateTonProofMutation();
  const [checkTonProof] = useCheckTonProofMutation();


  // using useEffect hook to ensure that both fetchTonProof and checkTonProof functions run every time wallet's value is changed. 

  useEffect(() => {
    const initializeTonConnect = async () => {
      tonConnectUI.setConnectRequestParameters({
        state: 'loading',
      });

      
      const tonProofPayload: any = await fetchTonProof(null);
      const tonProof: any = tonProofPayload?.data?.data;

      if (tonProof) {
        tonConnectUI.setConnectRequestParameters({
          state: 'ready',
          value: {
            tonProof,
          },
        });

        tonConnectUI.onStatusChange((wallet: any) => {
          if (
            wallet?.connectItems?.tonProof &&
            'proof' in wallet.connectItems.tonProof
          ) {
            handleStatusChange(wallet);
          }
        });
      } else {
        tonConnectUI.setConnectRequestParameters(null);
        await tonConnectUI.disconnect();
      }
    };

    if (wallet) {
      initializeTonConnect();
    }
  }, [wallet]);

  const handleStatusChange = async (wallet: any) => {
    const proofData = wallet?.connectItems?.tonProof?.proof;

    const address = {
      value: wallet?.account?.address,
    };

    const network = {
      value: wallet?.account?.chain,
    };

    const proof = {
      ...proofData,
      state_init: wallet?.account?.walletStateInit,
    };

    const body = {
      address,
      network,
      proof,
    };

    // await checkProofInYourBackend(body);
    const result = await checkTonProof(body);

    if (result?.data?.status === 'success') {
      console.log('connection success');
    } else {
      await tonConnectUI.disconnect();
    }
  };

  if(!wallet){
    console.log('disconnected')
  }

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
