import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";

import DepositCard from "./DepositCard";
import BNB from "../../imgs/img_bnb.png";
import USDC from "../../imgs/img_usdc.png";
import S_LOGO from "../../imgs/img_s_logo.svg";
import LOGO from "../../imgs/about-bg-logo.svg";
import STAKE from "../../imgs/img_stake.png";
import { useWeb3 } from "../../contexts/Web3Context";
import { getBNBPrice } from "../../helpers/coingecko-api";
import { decimalFloat } from "../../helpers/utils";

const ConnectWalletButton = styled.button`
  background: linear-gradient(180deg, #404040 0%, #a5a6a5 100.12%);
  border-radius: 12px;
`;

const GradientBox = styled.button`
  background: linear-gradient(180deg, #000000 0%, #a5a6a5 100.12%);
  border-radius: 12px;
`;

const Button = styled.button`
  border-radius: 12px;
  background: linear-gradient(180deg, #f5515f 0%, #a5a6a5 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  color: white;

  &:disabled {
    background: #555;
  }
`;

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
  const { open } = useWeb3Modal();
  const { address, LiquidityDriveContract, isConnected, chain } = useWeb3();
  const [fairLaunchInfo, setFairLaunchInfo] = useState(defaultFairLaunchInfo);
  const [bnbPrice, setBNBPrice] = useState(0);
  const [processDeposit, setProcessDeposit] = useState("");

  const updateInfo = async () => {
    const bnbDonated = address
      ? Number(
          ethers.utils.formatEther(
            await LiquidityDriveContract._bnbDonated(address)
          )
        )
      : 0;
    const participants = await LiquidityDriveContract.participants();
    const totalBNBDonated = Number(
      ethers.utils.formatEther(await LiquidityDriveContract.totalBNBDonated())
    );
    const transactions = await LiquidityDriveContract.totalTxs();
    const claimedTokens = address
      ? Number(
          ethers.utils.formatUnits(
            await LiquidityDriveContract._claimed(address),
            9
          )
        )
      : 0;

    const estimatedPercentage = decimalFloat(
      (bnbDonated / totalBNBDonated) * 100,
      2
    );

    const estimatedTokens = address
      ? Number(
          ethers.utils.formatUnits(
            await LiquidityDriveContract.availableOf(address),
            9
          )
        )
      : 0;

    setFairLaunchInfo({
      ...fairLaunchInfo,
      estimatedTokens: decimalFloat(estimatedTokens, 4),
      estimatedPercentage,
      claimedTokens: decimalFloat(claimedTokens, 4),
      bnbDonated: decimalFloat(bnbDonated, 4),
      participants: ethers.utils.formatUnits(participants, "wei"),
      totalBNBDonated: decimalFloat(totalBNBDonated, 4),
      transactions: ethers.utils.formatUnits(transactions, "wei"),
    });
  };

  const updateBNBPrice = async () => {
    const price = await getBNBPrice();
    setBNBPrice(price);
  };

  async function handleClaimStack() {
    setProcessDeposit("Claiming...");

    const tx = await LiquidityDriveContract.claimTokens();
    tx.wait()
      .then(async () => {
        toast.success("Claimed successfully!");
        await updateInfo();
        setProcessDeposit("");
      })
      .catch((err) => {
        console.log(err);
        setProcessDeposit("");
      });
  }

  useEffect(() => {
    updateInfo();
  }, [address]);

  useEffect(() => {
    updateBNBPrice();

    const intervalId = setInterval(() => {
      updateBNBPrice();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex justify-center border-b border-[#A5A6A5] py-[50px]">
      <div className="w-full tablet:w-[1200px] relative flex flex-col items-center">
        <img
          src={LOGO}
          alt="logo background"
          className="absolute left-0 top-[80px] tablet:max-h-[650px] opacity-50"
        />
        <div className="flex flex-col tablet:flex-row w-full tablet:w-[1000px] tablet:gap-[200px] mt-[50px] tablet:mt-[80px] z-[1] px-[12px] tablet:px-0">
          <div className="flex-1 flex flex-col gap-[50px] tablet:gap-[100px]">
            <GradientBox>
              <DepositCard
                title="BNB"
                img={BNB}
                minValue={0.005}
                token="BNB"
                updateInfo={updateInfo}
              />
            </GradientBox>
            <GradientBox>
              <DepositCard
                title="USDC"
                img={USDC}
                minValue={1}
                token="USDC"
                updateInfo={updateInfo}
              />
            </GradientBox>
            <Button
              onClick={isConnected ? () => handleClaimStack() : open}
              disabled={
                isConnected &&
                (chain.id !== +process.env.REACT_APP_CHAIN_ID ||
                  fairLaunchInfo.claimedTokens > 0 ||
                  processDeposit !== "")
              }
            >
              <div className="font-[300] text-[30px] leading-[120px]">
                {isConnected
                  ? chain.id !== +process.env.REACT_APP_CHAIN_ID
                    ? "Wrong Network"
                    : processDeposit === ""
                    ? "Claim Stack"
                    : processDeposit
                  : "Connect Wallet"}
              </div>
            </Button>
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
                {fairLaunchInfo.bnbDonated} BNB ($
                {decimalFloat(bnbPrice * +fairLaunchInfo.bnbDonated, 2)})
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
                {fairLaunchInfo.totalBNBDonated} BNB ($
                {decimalFloat(bnbPrice * +fairLaunchInfo.totalBNBDonated, 2)})
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
            Stack Fair Launch Contract:{" "}
            <Link
              className="text-[16px] font-[400] text-[#737373]"
              to="https://bscscan.com/address/0xb2bd13bc60749b8d8bf5a9413e97e04f4e2f0721"
              target="_blank"
            >
              0xB2bd13Bc60749b8d8Bf5a9413e97E04F4e2f0721
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
