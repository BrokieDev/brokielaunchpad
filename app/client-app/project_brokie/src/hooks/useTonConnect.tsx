import { TonConnect } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

export const useTonConnect = (manifestUrl: any) => {
  const [tonConnect, setTonConnect] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeTonConnect = async () => {
      try {
        const tonConnectInstance: any = new TonConnect({ manifestUrl });
        setTonConnect(tonConnectInstance);
      } catch (err: any) {
        setError(err);
      }
    };

    initializeTonConnect();
  }, [manifestUrl]);

  return { tonConnect, error };
};
