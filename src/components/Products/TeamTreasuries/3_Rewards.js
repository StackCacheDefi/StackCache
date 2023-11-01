import { useState } from "react";
import styled from "styled-components";
import LOGO from "../../../imgs/img_stack_white.svg";
import ICON_ARROW from "../../../imgs/icon-arrow-up-gray.svg";
import STACK_REFLECTION from "../../../imgs/img_stack_reflection.svg";
import CBC_REWARDS from "../../../imgs/img_cbc_rewards.svg";
import CACHEBOX_REWARDS from "../../../imgs/img_cachebox_rewards.svg";
import SWEEPTRACK from "../../../imgs/img_sweepstack.svg";
import BackgroundDots from "../../BackgroundDots";
import { Underline } from "../../HBoardNTT/3_Concept";

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

const GradientBox = styled.div`
  background: rgba(244, 162, 39, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(50px);
  border: 1px solid #A5A6A5;
`;

export default function Rewards() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  return (
    <div className="w-full border-b border-[#222] flex flex-col items-center relative">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[700px] object-contain z-[-1] opacity-50"
      />
      <div className="text-white w-full max-w-[1024px] py-[50px] flex flex-col px-[10px] items-center">
        <div className="text-[24px] tablet:text-[32px] font-[300] mb-[10px] text-[#F4A227]">
          Team Treasury Rewards
        </div>
        <div className="font-[300] text-[16px] tablet:text-[18px] leading-[22px] tablet:w-[800px]">
          Each team treasury pays rewards to participating team members for bi-weekly rewards. Team treasuries grow thru
          team partner deposits/compunds in products in the ecosystem
        </div>
        <div className="font-[300] text-[14px] tablet:text-[16px] text-[#A5A6A5] mt-[10px]">
          *Team Leaders must participate to receive an additional 5% from each treasury distribution
        </div>
        <div className="my-[50px] w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse1(!collapse1)}
          >
            <div className="text-[20px] tablet:text-[24px] font-[300] text-[#A5A6A5]">
              1st Team Treasury Distribution (monthly)
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 text-[#A5A6A5] ${collapse1 ? "rotate-180" : ""}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse1 ? "" : "hidden"
            } flex flex-col items-center`}
          >
            <GradientBox>
              <div className="pt-[10px] tablet:px-[30px] px-[12px] relative flex flex-col items-center justify-center">
                <BackgroundDots />
                <img src={STACK_REFLECTION} width={300} />
                &
                <img src={CBC_REWARDS} width={300} />
              </div>
            </GradientBox>
            <ul
              className="list-disc ml-[20px] mt-[20px] flex flex-col justify-between h-full text-left text-[16px] leading-[26px] font-[300]">
              <li>Awarded 15 days from the teams monthly birth date</li>
              <li style={{marginLeft: 30}}>For example, if the 5th is the teams birth-date, they will receive their 1st
                distribution on the
                20th
              </li>
              <li><Underline>Treasury Reflections:</Underline> Partners award %’s are based on their total % of Stack
                held vs. total Stack held
                by all team partners
              </li>
              <li><Underline>CBC Team Pool Rewards:</Underline> Partners award %’s are based on their total % of CBC
                principal held vs. all
                team partners. With multiple CBC pool tokens available, a user must hold principal in a given CBC pool
                to receive monthly team pool rewards
              </li>
            </ul>
          </div>
        </div>
        <div className="my-[50px] w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse2(!collapse2)}
          >
            <div className="text-[20px] tablet:text-[24px] font-[300] text-[#A5A6A5]">
              2nd Team Treasury Distribution (monthly)
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 text-[#A5A6A5] ${collapse2 ? "rotate-180" : ""}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse2 ? "" : "hidden"
            } flex flex-col items-center`}
          >
            <GradientBox>
              <div className="pt-[10px] tablet:px-[30px] px-[12px] relative flex flex-col items-center justify-center">
                <BackgroundDots />
                <img src={STACK_REFLECTION} width={300} />
                &
                <img src={CACHEBOX_REWARDS} width={300} />
              </div>
            </GradientBox>
            <ul
              className="list-disc ml-[20px] mt-[20px] flex flex-col justify-between h-full text-left text-[16px] leading-[26px] font-[300]">
              <li>Awarded 30 days after the teams monthly birth date</li>
              <li style={{marginLeft: 30}}>For example, if the 7th is the teams birth-date, they will receive this
                distribution on the 7th of the next month
              </li>
              <li><Underline>Treasury Rebalances:</Underline> award %’s are a partners total % of Stack bought in the
                last 30 days vs. the
                total bought by all team partners in the previous 30 days
              </li>
              <li><Underline>Cache Box Rewards:</Underline> award %’s are a partners total % of Cache box deposits in
                the last 30 days vs. the
                total Cache box deposits by all team partners in the previous 30 days
              </li>
            </ul>
          </div>
        </div>
        <div className="my-[50px] w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse3(!collapse3)}
          >
            <div className="text-[20px] tablet:text-[24px] font-[300] text-[#A5A6A5]">
              Daily Team Rewards
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 text-[#A5A6A5] ${collapse3 ? "rotate-180" : ""}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse3 ? "" : "hidden"
            } flex flex-col items-center`}
          >
            <GradientBox>
              <div className="pt-[10px] tablet:px-[30px] px-[12px] relative flex flex-col items-center justify-center">
                <BackgroundDots />
                <img src={SWEEPTRACK} width={300} />
              </div>
            </GradientBox>
            <ul
              className="list-disc ml-[20px] mt-[20px] flex flex-col justify-between h-full text-left text-[16px] leading-[26px] font-[300]">
              <li>Every 24 hours, each team partner who deposits into Cache Box & buys Stack tokens qualifies the team
                and themselves to win BNB thru Team SweepSTACK
              </li>
              <li>Team partners who does not participate on the day, does not qualify to receive BNB (including team
                leader)
              </li>
              <li>If the team wins daily SweepSTACK, contributing partners BNB reward %’s are based on their total % of
                deposits vs. the total team deposits on the day
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
