import { configureChains, createClient } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';

export const { chains, provider } = configureChains([bsc, bscTestnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Stack-Cache',
  projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
