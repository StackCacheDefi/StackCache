/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAccount, useSigner, useBalance, useNetwork } from "wagmi";
import { ethers, Contract } from "ethers";

import EarlyAdapterABI from "../assets/abis/EarlyAdapter.json";
import StackLiquidityDriveABI from "../assets/abis/StackLiquidityDrive.json";
import USDCABI from "../assets/abis/USDC.json";

export const Web3Context = createContext({
  chain: null,
  address: null,
  isConnected: false,
  EarlyAdapterContract: null,
  LiquidityDriveContract: null,
  USDCContract: null,
  USDCBalance: 0,
  getUSDCBalance: async () => {},
  BNBBalance: 0,
  getBNBBalance: async () => {},
});

export const Web3Provider = ({ children }) => {
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount();
  const { data: balanceData } = useBalance({ address, watch: true });
  const [USDCBalance, setUSDCBalance] = useState();
  const [BNBBalance, setBNBBalance] = useState();

  const EarlyAdapterContract = useMemo(() => {
    if (!signer) return;
    return new Contract(
      process.env.REACT_APP_DEPOSIT_CONTRACT,
      EarlyAdapterABI,
      signer
    );
  }, [signer]);

  const LiquidityDriveContract = useMemo(() => {
    if (!signer) return;
    return new Contract(
      process.env.REACT_APP_LIQUIDITY_DRIVE_CONTRACT,
      StackLiquidityDriveABI,
      signer
    );
  }, [signer]);

  const USDCContract = useMemo(() => {
    if (!signer) return;
    return new Contract(process.env.REACT_APP_USDC, USDCABI, signer);
  }, [signer]);

  const getUSDCBalance = async () => {
    let balance = await USDCContract.balanceOf(address);
    balance = Number(ethers.utils.formatEther(balance));
    setUSDCBalance(balance.toFixed(2));
  };

  const getBNBBalance = async () => {
    const balance = Number(ethers.utils.formatEther(balanceData.value));
    setBNBBalance(balance.toFixed(2));
  };

  useEffect(() => {
    if (USDCContract) {
      getUSDCBalance();
    }

    if (balanceData) {
      getBNBBalance();
    }
  }, [balanceData, address, USDCContract]);

  return (
    <Web3Context.Provider
      value={{
        chain,
        address,
        isConnected,
        EarlyAdapterContract,
        LiquidityDriveContract,
        USDCContract,
        USDCBalance,
        getUSDCBalance,
        BNBBalance,
        getBNBBalance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
