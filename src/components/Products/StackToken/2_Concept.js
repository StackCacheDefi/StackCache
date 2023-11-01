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
  const [collapse2, setCollapse2] = useState(false);
  const [collapse1, setCollapse1] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

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
              What Is The Stack Token
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
            } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200]  px-[50px] py-[20px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1`}
          >
            <span className="underline">Stack Token:</span> The native Stack
            Cache protocol store of value token (bep-20) on the Binance smart
            chain (bsc) is the key to all parts of the Stack Cache protocol.
            It’s a reflection token meaning it pays all holders with each buy
            and sell of Stack tokens. Participants can hold stack to earn more
            stack tokens through reflections.
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row mt-[50px] laptop:mb-[50px] gap-[50px]">
          <div
            className={`relative z-index-2 w-full tablet:w-[450px] ${
              collapse2 ? "laptop:min-h-[450px]" : ""
            }`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse2(!collapse2)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">
                Stack Token Attributes
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
              } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] px-[20px] py-[50px] text-[16px] tablet:text-[18px] leading-[22px] underline-offset-4 decoration-1 h-full`}
            >
              <ul className="list-disc ml-[20px] flex flex-col justify-between h-full">
                <li>Only 100,000,000 Stack tokens will ever be minted</li>
                <li>
                  The mechanics of Stack allows it to continually reduce the
                  available supply of tokens available, causing a token supply
                  shortage, or a “Gamma Squeeze”
                </li>
                <li>
                  Protocol/team treasury and user purchases creates organic volume
                  for stack, and also takes more stack tokens out of circulation
                </li>
                <li>
                  There is a 10% fee on ech buy and sell of Stack that adds to locked liquidity, all Stack holders, & protocol building treasuries
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`relative z-index-2 w-full tablet:w-[450px] ${
              collapse3 ? "laptop:min-h-[450px]" : ""
            }`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse3(!collapse3)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">
                How To Use Stack
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
              } leading-normal border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] px-[20px] py-[50px] text-[16px] tablet:text-[28px] leading-[22px] underline-offset-4 decoration-1 h-full`}
            >
              <ol className="list-decimal flex flex-col justify-between h-full ml-[20px] tablet:ml-[40px]">
                <li>
                  <b>PURCHASE</b> Stack Tokens
                </li>
                <li>
                  <b>HOLD</b> Stack Tokens In Your Custody (wallet)
                </li>
                <li>
                  <b>EARN</b> More Stack on <span className="underline underline-offset-4 decoration-1">every</span> Stack buy
                  and Sell
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="relative z-index-2 my-[50px] w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse4(!collapse4)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              How Stack Uses S/C Protocol Treasuries For Yield
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 ${collapse4 ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse4 ? "" : "hidden"
            } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] p-[20px] text-[16px] tablet:text-[18px] leading-[22px] underline-offset-4 decoration-1`}
          >
            Stack provides APY’s (yields) for the Cache Token through a cutting
            edge defi process called “over-collateralization”.
            <br />
            <br />
            The over-collateteralization process allows the protocol to
            continuously build locked liquidity and sell stack reflections to
            provide for Cache/Cache token products (contracts).
            <br />
            <br />
            All Treasuries have 4 functions:
            <li className="pl-[50px]">
              Store Stack tokens (reduce total available supply)
            </li>
            <li className="pl-[50px]">Rebalance</li>
            <li className="pl-[50px]">Add USDC & BNB liquidity</li>
            <li className="pl-[50px]">
              Reward other treasuries and NTT holders
            </li>
            <li className="pl-[25px]">
              The multi-treasury system helps neutralize harmful whales and
              allows the protocol to grow fairly
            </li>
            <li className="pl-[25px]">
              The size of the treasures are controlled/regulated through
              rebalancing
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
