import { useState } from "react";
import styled from "styled-components";
import LOGO from "../../../imgs/about-SC-logo.png";
import ICON_ARROW from "../../../imgs/icon-arrow-up.svg";
import BackgroundDots from "../../BackgroundDots";

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
  background: linear-gradient(180deg, rgba(165, 166, 165, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid #D58E22;
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
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[500px] object-contain z-[-1]"
      />
      <div className="text-white w-full max-w-[1024px] py-[50px] flex flex-col px-[10px] items-center">
        <div className="font-sans text-[24px] tablet:text-[32px] font-[300] mb-[10px] text-[#F4A227]">
          What Is a Team Treasury?
        </div>
        <div className="font-sans font-[300] text-[16px] tablet:text-[18px] leading-[22px]">
          A protocol owned treasury that allows users to earn passive rewards (automated airdrops) through participation
          with a group of other users. Team treasuries are connected to a users wallet (like and ID) and provides all
          team partners the opportunity to earn additional daily & biweekly rewards. All Stack Cache participants must
          be a part of a team to earn rewards in the protocol.
        </div>
        <div
          className="flex flex-col laptop:flex-row laptop:justify-between mt-[50px] gap-[50px] w-full">
          <div
            className={`relative z-index-2 w-full max-w-[450px] ${
              collapse1 ? "laptop:min-h-[220px]" : ""
            }`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse1(!collapse1)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">
                Treasury Details
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
              }`}
            >
              <GradientBox>
                <div className="py-[20px] tablet:px-[30px] px-[12px] relative">
                  <BackgroundDots />
                  <ul className="list-disc ml-[20px] flex flex-col justify-between h-full text-left text-[16px] leading-[26px] font-[300]">
                    <li>Team Partners = Participating Team Wallets</li>
                    <li>Team Leader = Participant that recruits a min. 10 team partners to join their team treasury
                      using their wallet address
                    </li>
                    <li>To join a team treasury, users enter the wallet address of a desired team leader</li>
                    <li>Partners can leave a team at any time</li>
                  </ul>
                </div>
              </GradientBox>
            </div>
          </div>
          <div
            className={`relative z-index-2 w-full max-w-[450px] ${
              collapse2 ? "laptop:min-h-[220px]" : ""
            }`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse2(!collapse2)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">
                Team Governance
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
              }`}
            >
              <GradientBox>
                <div className="py-[20px] tablet:px-[30px] px-[12px] relative text-[16px] leading-[26px] font-[300]">
                  <BackgroundDots />
                  All team partners have voting privileges within a team. The more Stack tokens a users holds, the more
                  voting weight they hold within the team (including the team leader). Team leaders nominate voting
                  items from team partners such as: team name, avatars, and any any other team specific votable items.
                </div>
              </GradientBox>
            </div>
          </div>
        </div>
        <div className="relative z-index-2 my-[50px] w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse3(!collapse3)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300]">
              Team Treasury Key Attributes
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
            }`}
          >
            <GradientBox>
              <div className="py-[20px] tablet:px-[30px] px-[12px] relative">
                <BackgroundDots />
                <ul className="list-disc ml-[20px] flex flex-col justify-between h-full text-left text-[16px] leading-[26px] font-[300]">
                  <li>Teams dont determine individual success in Stack Cache, however, it enhances rewards/perks</li>
                  <li>Rewards are based on how much Stack partners hold and/or how much a partner participates over a
                    month
                  </li>
                  <li>All participating partners receive Bi-weekly rewards (based on teams birthdate)</li>
                  <li>Teams can compete daily as a team in SweepSTACK to earn BNB</li>
                  <li>Team leaders must participate to earn (as a part of the team, not on top of it)</li>
                  <li>No uplines (team leader earns from treasury, not partners)</li>
                  <li>Compete within your team for more rewards by participating more than other team partners</li>
                  <li>If a user leaves a team, their deposits to the team treasury stays with the team treasury</li>
                </ul>
              </div>
            </GradientBox>
          </div>
        </div>
      </div>
    </div>
  );
}
