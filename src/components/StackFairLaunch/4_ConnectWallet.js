import styled from "styled-components";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

import DepositCard from "./DepositCard";
import BNB from "../../imgs/img_bnb.png";
import USDC from "../../imgs/img_usdc.png";
import S_LOGO from "../../imgs/img_s_logo.svg";
import LOGO from "../../imgs/about-bg-logo.svg";
import STAKE from "../../imgs/img_stake.png";
import { useWeb3 } from "../../contexts/Web3Context";
import { useEffect, useState } from "react";

const ConnectWalletButton = styled.button`
  background: linear-gradient(180deg, #404040 0%, #a5a6a5 100.12%);
  border-radius: 12px;
`;

const GradientBox = styled.button`
  background: linear-gradient(180deg, #000000 0%, #a5a6a5 100.12%);
  border-radius: 12px;
`;

const TOTAL_TOKENS_FOR_FAIR_LAUNCH = 12500000;

const defaultFairLaunchInfo = {
  estimatedTokens: 0,
  estimatedPercentage: 0,
  claimedTokens: 0,
  bnbDonated: 0,
  participants: 0,
  totalBNBDonated: 0,
  transactions: 0,
};

const ConnectWallet = () => {
  const { address, LiquidityDriveContract } = useWeb3();
  const [fairLaunchInfo, setFairLaunchInfo] = useState(defaultFairLaunchInfo);

  const setInfo = async () => {
    const bnbDonated = await LiquidityDriveContract._bnbDonated(
      ethers.utils.getAddress(address)
    );
    const participants = await LiquidityDriveContract.participants();
    const totalBNBDonated = await LiquidityDriveContract.totalBNBDonated();
    const transactions = await LiquidityDriveContract.totalTxs();
    const claimedTokens = await LiquidityDriveContract._claimed(address);

    const estimatedPercentage = Number(
      (ethers.utils.formatEther(bnbDonated) /
        ethers.utils.formatEther(totalBNBDonated)) *
        100
    ).toFixed(2);

    const estimatedTokens =
      (TOTAL_TOKENS_FOR_FAIR_LAUNCH * estimatedPercentage) / 100;

    setFairLaunchInfo({
      ...fairLaunchInfo,
      estimatedTokens,
      estimatedPercentage,
      claimedTokens:
        claimedTokens > 0 ? ethers.utils.formatEther(claimedTokens) : 0,
      bnbDonated: ethers.utils.formatEther(bnbDonated),
      participants: ethers.utils.formatUnits(participants, "wei"),
      totalBNBDonated: ethers.utils.formatEther(totalBNBDonated),
      transactions: ethers.utils.formatUnits(transactions, "wei"),
    });
  };

  useEffect(() => {
    if (address && LiquidityDriveContract) {
      setInfo();
    }
  }, [address, LiquidityDriveContract]);

  return (
    <div className="w-full flex justify-center border-b border-[#A5A6A5] py-[50px]">
      <div className="w-full tablet:w-[1200px] relative flex flex-col items-center">
        <img
          src={LOGO}
          alt="logo background"
          className="absolute left-0 top-[80px] tablet:max-h-[650px] opacity-50"
        />
        <ConnectWalletButton>
          <button className="w-[240px] h-[48px] text-white flex items-center justify-center font-[700] text-[16px]">
            Connect Wallet
          </button>
        </ConnectWalletButton>
        <div className="flex flex-col tablet:flex-row w-full tablet:w-[1000px] tablet:gap-[200px] mt-[50px] tablet:mt-[80px] z-[1] px-[12px] tablet:px-0">
          <div className="flex-1 flex flex-col gap-[50px] tablet:gap-[100px]">
            <GradientBox>
              <DepositCard title="BNB" img={BNB} minValue={0.005} token="BNB" />
            </GradientBox>
            <GradientBox>
              <DepositCard title="USDC" img={USDC} minValue={1} token="USDC" />
            </GradientBox>
            <GradientBox>
              <div className="font-[300] text-[30px] leading-[120px] text-white">
                Claim Stack
              </div>
            </GradientBox>
          </div>
          <div className="flex-1 flex flex-col items-center mt-[50px] tablet:mt-0">
            <div className="font-[300] text-[36px] text-[#737373]">
              My Stats
            </div>
            <img
              src={S_LOGO}
              className="opacity-30 mt-[30px] w-[100px] h-[100px]"
            />
            <div className="text-[16px] text-[#737373] mt-[10px]">
              Estimated Tokens
            </div>
            <div className="font-[300] text-[36px] text-black">
              {fairLaunchInfo.estimatedTokens}
            </div>
            <div className="uppercase text-[#737373] text-[16px]">Stack</div>
            <div className="flex flex-col items-center mt-[30px]">
              <div className="flex gap-[10px]">
                <img src={BNB} className="w-[100px] h-[100px]" />
                <img src={USDC} className="w-[100px] h-[100px]" />
              </div>
              <div className="text-[16px] text-[#737373] mt-[10px]">
                Total $ of Donated BNB & USDC
              </div>
              <div className="font-[300] text-[36px] text-black">
                {fairLaunchInfo.bnbDonated} BNB
              </div>
            </div>
            <div className="w-full flex justify-between mt-[30px] gap-[20px] px-[30px]">
              <div className="flex flex-col items-center">
                <img src={STAKE} className="w-[100px] h-[100px]" />
                <div className="text-[16px] text-[#737373] mt-[10px]">
                  Estimated Stake
                </div>
                <div className="font-[300] text-[36px] text-black">
                  {fairLaunchInfo.estimatedPercentage}
                </div>
                <div className="uppercase text-[#737373] text-[16px]">%</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={S_LOGO} className="w-[100px] h-[100px] opacity-30" />
                <div className="text-[16px] text-[#737373] mt-[10px]">
                  Claimed
                </div>
                <div className="font-[300] text-[36px] text-black">
                  {fairLaunchInfo.claimedTokens}
                </div>
                <div className="uppercase text-[#737373] text-[16px]">
                  Stack
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center tablet:w-[1000px] mt-[100px]">
          <div className="font-[300] text-[36px] text-[#737373]">
            Overall Stats
          </div>
          <div className="w-full grid grid-cols-3 gap-[30px] mt-[30px] mb-[50px] px-[10px]">
            <div className="flex flex-col items-center">
              <div className="text-[16px] text-[#737373]">
                # of Participants
              </div>
              <div className="font-[300] text-[36px] text-black">
                {fairLaunchInfo.participants}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[16px] text-[#737373]">Total Liquidity</div>
              <div className="font-[300] text-[36px] text-black">
                {fairLaunchInfo.totalBNBDonated} BNB
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[16px] text-[#737373]">Transactions</div>
              <div className="font-[300] text-[36px] text-black">
                {fairLaunchInfo.transactions}
              </div>
            </div>
          </div>
          <div className="text-[16px] text-[#737373]">
            Stack Cache Liquidity Wallet:{" "}
            <Link
              className="text-[16px] font-[400] text-[#737373]"
              to="https://bscscan.com/address/0x022eE24D97619b37B6C6649a61990BAcf9a20d2a"
              target="_blank"
            >
              0x022eE24D97619b37B6C6649a61990BAcf9a20d2a
            </Link>
          </div>
          <div className="text-[16px] text-[#737373]">
            Stack Fair Launch Contract:
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
