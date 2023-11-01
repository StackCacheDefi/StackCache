/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAccount, useSigner } from "wagmi";
import { ethers, Contract } from "ethers";

import EarlyAdapterABI from "../assets/abis/EarlyAdapter.json";
import BNBABI from "../assets/abis/BNB.json";
import USDCABI from "../assets/abis/USDC.json";

export const Web3Context = createContext({
  EarlyAdapterContract: null,
  USDCContract: null,
  USDCBalance: 0,
  getUSDCBalance: async () => {},
  BNBContract: null,
  BNBBalance: 0,
  getBNBBalance: async () => {},
});

export const Web3Provider = ({ children }) => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
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

  const USDCContract = useMemo(() => {
    if (!signer) return;
    return new Contract(process.env.REACT_APP_USDC, USDCABI, signer);
  }, [signer]);

  const BNBContract = useMemo(() => {
    if (!signer) return;
    return new Contract(process.env.REACT_APP_BNB, BNBABI, signer);
  }, [signer]);

  const getUSDCBalance = async () => {
    let balance = await USDCContract.balanceOf(address);
    balance = Number(ethers.utils.formatEther(balance));
    setUSDCBalance(balance.toFixed(2));
  };

  const getBNBBalance = async () => {
    let balance = await BNBContract.balanceOf(address);
    balance = Number(ethers.utils.formatEther(balance));
    setBNBBalance(balance.toFixed(2));
  };

  useEffect(() => {
    if (USDCContract) {
      getUSDCBalance();
    }
    if (BNBContract) {
      getBNBBalance();
    }
  }, [address, USDCContract, BNBContract]);

  return (
    <Web3Context.Provider
      value={{
        EarlyAdapterContract,
        USDCContract,
        USDCBalance,
        getUSDCBalance,
        BNBContract,
        BNBBalance,
        getBNBBalance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
