'use client';
import { useAppKit } from '@reown/appkit/react';

export default function ConnectButton() {
  const { open } = useAppKit();

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button>
      <button onClick={() => open({ view: 'AllWallets' })}>
        Open All Wallets
      </button>
      <button onClick={() => open({ view: 'WhatIsANetwork' })}>
        What Is A Network
      </button>
      <button onClick={() => open({ view: 'Swap' })}>Swap main view</button>
      <button onClick={() => open({ view: 'OnRampProviders' })}>
        On Ramp Providers
      </button>
    </>
  );
}
