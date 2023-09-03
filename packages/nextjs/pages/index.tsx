//@ts-nocheck

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSignMessage } from 'wagmi';
import { authenticate, generateChallenge } from '../utils';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import { redirect } from 'next/navigation'



export default function Home() {
  const { data } = useAccount();
  console.log("data:", data)
  const address = data?.address;
  const connected = !!data?.address;
  const { signMessageAsync } = useSignMessage();
  const [signedIn, setSignedIn] = useState(false);
  

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const router = useRouter();
    const isActive = router.pathname === href;
  
    return (
      <Link
        href={href}
        passHref
        className={`${
          isActive ? "bg-secondary shadow-md" : ""
        } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
      >
        {children}
      </Link>
    );
  };

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
        {!connected && 
        <NavLink href="/main">
          
          To the Game
        </NavLink> 
        }

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
