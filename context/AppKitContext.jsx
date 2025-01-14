'use client';
import { createContext, useContext } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// ---------------------------------------------------------
// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = '9a73ce216d780473621e20742c950e5b';

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

// ---------------------------------------------------------

const AppKitContext = createContext({});
export const useAppKitContext = () => {
  return useContext(AppKitContext);
};

const AppKitProvider = ({ children }) => {
  return <AppKitContext.Provider value={{}}>{children}</AppKitContext.Provider>;
};

export default AppKitProvider;
