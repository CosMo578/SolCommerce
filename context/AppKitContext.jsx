'use client';
import { createContext, useContext } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const projectId = '9a73ce216d780473621e20742c950e5b';

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  projectId,
  features: {
    analytics: true,
  },
});

const AppKitContext = createContext({});
export const useAppKitContext = () => {
  return useContext(AppKitContext);
};

const AppKitProvider = ({ children }) => {
  return <AppKitContext.Provider value={{}}>{children}</AppKitContext.Provider>;
};

export default AppKitProvider;
