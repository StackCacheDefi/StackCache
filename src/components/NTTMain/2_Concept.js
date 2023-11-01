import { useState } from "react";
import styled from "styled-components";
import LOGO from "../../imgs/about-bg-logo.svg";
import ICON_ARROW from "../../imgs/icon-arrow-up.svg";

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
    <div className="w-full border-b border-[#222] flex flex-col justify-center items-center relative pt-[50px]">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[700px]"
      />
      <div className="text-white text-[26px] tablet:text-[36px] font-[300]">
        What Are NTT’s?
      </div>
      <div className="max-w-[820px] text-white text-[16px] tablet:text-[20px] font-[300] leading-[24px]">
        NTT’s are non-transferable tokens. While similar to the popular “NFT”,
        NTT’s differ because they are not tradeable. NTT’s are connected to
        participating user wallets (like an ID), to designate users’ teams,
        allocate additional perks, and DAO voting privileges.
      </div>
      <div className="text-white w-full max-w-[1024px] py-[50px] flex flex-col desktop:flex-row gap-[30px] px-[10px]">
        <div className="relative z-index-2 w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse1(!collapse1)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              NTT Rewards
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
            } border border-[#A5A6A5] rounded-lg backdrop-blur text-center font-[200] px-[30px] py-[40px] text-[16px] tablet:text-[20px] leading-[24px] underline-offset-4 decoration-1 h-[150px] desktop:h-[300px] flex items-center`}
          >
            While all Stack Cache users earn rewards passively, NTT holders earn
            additional rewards without needing to do anything. Earn more Stack
            and Cache directly from protocol owned treasuries.
          </div>
        </div>
        <div className="relative z-index-2 w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse2(!collapse2)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              NTT Team Perks
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
            } border border-[#A5A6A5] rounded-lg backdrop-blur text-center font-[200]  px-[30px] py-[40px] text-[16px] tablet:text-[20px] leading-[24px] underline-offset-4 decoration-1 h-[150px] desktop:h-[300px] flex items-center`}
          >
            As Stack Cache participants must be a part of a team in order to
            earn passive rewards, NTT’s connect users to their chosen team
            treasury. Team treasuries reward airdrops to all its partners
            consistently in Stack and Cache tokens.
          </div>
        </div>
        <div className="relative z-index-2 w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse3(!collapse3)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              NTT DAO Voting
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
            } border border-[#A5A6A5] rounded-lg backdrop-blur text-center font-[200] px-[50px] py-[30px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1 h-[150px] desktop:h-[300px] flex items-center`}
          >
            NTT’s also allows users to vote in the DAO with added voting
            privileges. As part owners, NTT holders have the ability to
            continuously add input to improve the Stack Cache Ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
}
