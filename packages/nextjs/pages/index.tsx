//@ts-nocheck

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSignMessage } from 'wagmi';
import { authenticate, generateChallenge } from '../utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data } = useAccount();
  console.log("data:", data)
  const address = data?.address;
  const connected = !!data?.address;
  const { signMessageAsync } = useSignMessage();
  const [signedIn, setSignedIn] = useState(false);


  const signIn = async () => {
    try {
      if (!connected) {
        return alert('Please connect your wallet first');
      }
      const challenge = await generateChallenge(address);
      const signature = await signMessageAsync({ message: challenge });
      const accessToken = await authenticate(address, signature);
      console.log({ accessToken });
      window.sessionStorage.setItem('accessToken', accessToken);
      setSignedIn(true);
    } catch (error) {
      console.error(error);
      alert('Error signing in');
    }
  };


  return (
    <>
      <div
        style={{
          margin: "0 auto",
          width: '300px',
          height: '300px'


        }}
      >
        <ConnectButton label="Connect your Wallet to Sign In" />

{/*         {!signedIn && (
          <button
            style={{
              width: '75px',
              height: '50px',
              color: 'blue',
              borderRadius: '7px',
              marginTop: '15px',
              padding: '15px',
              background: 'white'
            }}

            onClick={signIn} marginTop='2'>
            Login with Lens
          </button>
        )} */}
      </div>

    </>
  );
}
