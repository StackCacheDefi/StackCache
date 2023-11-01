import { useState } from "react";
import styled from "styled-components";
import LOGO from "../../../imgs/about-bg-logo.svg";
import ICON_ARROW from "../../../imgs/icon-arrow-up.svg";

export const Button = styled.button`
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  color: #000;

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #ccc 100.12%);
  }

  &:active {
    background: linear-gradient(180deg, #ccc 0%, #fff 100.12%);
  }
`;

export default function Concept() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  return (
    <div className="w-full border-b border-[#222] flex flex-col items-center relative">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[700px]"
      />
      <div className="text-white w-full max-w-[1024px] py-[50px] flex flex-col px-[10px] items-center">
        <div className="relative z-index-2 w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse1(!collapse1)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              What Is The Cache Token
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 ${collapse1 ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse1 ? "" : "hidden"
            } border border-[#DF3D4E] rounded-lg bg-[url('/public/assets/imgs/cache-card-bg.png')] backdrop-blur text-left font-[200] px-[30px] py-[40px] text-[16px] tablet:text-[20px] leading-[24px] underline-offset-4 decoration-1`}
          >
            <span className="underline">Cache Token:</span> (1:1 usd), the
            native stack cache stablecoin (bep-20) on the binance smart chain
            (BSC) used to yield rewards continuously. Cache can be utilized in
            multiple native smart contracts for participants to earn passive
            income cash flow.
          </div>
        </div>
        <div className="relative z-index-2 w-full mt-[50px]">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse2(!collapse2)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              Cache Token Attributes
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 ${collapse2 ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse2 ? "" : "hidden"
            } border border-[#DF3D4E] rounded-lg bg-[url('/public/assets/imgs/cache-card-bg.png')] backdrop-blur text-left font-[200]  px-[30px] py-[40px] text-[16px] tablet:text-[20px] leading-[24px] underline-offset-4 decoration-1`}
          >
            <li>
              Cache is supported through an over-collateralized Stack token
            </li>
            <li className="pl-[30px]">
              Apr’s and yield are generated from the stack tokenomics & protocol
              functions, enabling cache to remain stable and reward users with
              passive income yield.
            </li>
            <li>
              Participants can stake, bond, compound, earn, and win by using the
              cache token.
            </li>
            <li>
              Cache liquidity is backed by the cache/usdc LP’s (PCS & S/C Dex),
              making cache liquid (easy to sell) and easily exchangeable between
              parties for a trusted medium of exchange
            </li>
            <li className="pl-[30px]">
              Cache functions also benefit stack holders, adding stack liquidity
              and buying stack
            </li>
          </div>
        </div>
        <div className="relative z-index-2 w-full mt-[50px]">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse3(!collapse3)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              Ways To Use Cache
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 ${collapse3 ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse3 ? "" : "hidden"
            } leading-normal flex flex-col gap-[50px] justify-between border border-[#DF3D4E] rounded-lg bg-[url('/public/assets/imgs/cache-card-bg.png')] backdrop-blur text-left font-[200] px-[50px] py-[30px] text-[16px] tablet:text-[28px] leading-[22px] underline-offset-4 decoration-1 h-full`}
          >
            <div>
              <span className="w-[30px] inline-block">1.</span>
              <b className="mr-[15px]">MINT</b>Cache Tokens
            </div>
            <div>
              <span className="w-[30px] inline-block">2.</span>
              <b className="mr-[15px]">STORE</b>Cache Tokens In Your Custody
              (wallet) (wallet)
            </div>
            <div>
              <span className="w-[30px] inline-block">3.</span>
              <b className="mr-[15px]">STACK</b>Cache with high & safe yield
            </div>
            <div>
              <span className="w-[30px] inline-block">4.</span>
              <b className="mr-[15px]">BOND</b>Cache and earn 0.5% per day
            </div>
            <div>
              <span className="w-[30px] inline-block">5.</span>
              <b className="mr-[15px]">WIN</b>Cache daily in a “no loss”
              sweepstakes
            </div>
            <div>
              <span className="w-[30px] inline-block">6.</span>
              <b className="mr-[15px]">EARN</b>Blue chips tokens
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
