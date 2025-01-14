'use client';
import { useAppKitAccount } from '@reown/appkit/react';

const userAccountButton = () => {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount();

  return [address, isConnected, caipAddress, status, embeddedWalletInfo];
};

export default userAccountButton;
