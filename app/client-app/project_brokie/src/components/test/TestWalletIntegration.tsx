'use client';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import React from 'react';

const TestWalletIntegration = () => {
  const wallet = useTonWallet();
  console.log(wallet);

  const handleTest = async () => {
    console.log('testing')
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '30px' }}>
        Hello test wallet
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TonConnectButton className="my-button-class"></TonConnectButton>
        <br />
        <hr />
        <br />

        <button
          style={{
            padding: '15px 35px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius:'5px',
            cursor: 'pointer'
          }}
          onClick={() => handleTest()}
        >
          Test Now
        </button>
      </div>
    </div>
  );
};

export default TestWalletIntegration;
