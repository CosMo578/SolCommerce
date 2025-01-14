'use client'
import ConnectButton from '@/components/ConnectButton';
import userAccountButton from '@/components/userAccountButton';

export default function Home() {
  const [address, isConnected, caipAddress, status, embeddedWalletInfo] =
    userAccountButton();

  return (
    <>
      <ConnectButton />
      [{address}, {isConnected}, {caipAddress}, {status}, {embeddedWalletInfo}]
    </>
  );
}
