import { useState } from "react";
import styled from "styled-components";
import ICON_ARROW_UP from "../../imgs/icon-arrow-up.svg";
import RedButton from "../RedButton";
import { Link } from "react-router-dom";

const CollapseHeaderContainer = styled.div`
  cursor: pointer;
  padding: 14px;
  border: 1px solid #fff;
  filter: drop-shadow(0px 4px 5px rgba(145, 36, 212, 0.03));
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 400px) {
    padding: 10px 15px;
  }
`;

const CollapseHeaderText = styled.div`
  font-family: "SpaceGrotesk";
  font-size: 24px;
  letter-spacing: -0.03em;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const CollapseHeaderIcon = styled.img`
  width: 20px;
`;

const CollapseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 22px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03);
  border-radius: 8px;

  @media (max-width: 400px) {
    padding: 8px 12px;
  }
`;

const CollapseContent = styled.ul`
  font-family: "WorkSans";
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  padding-left: 20px;

  @media (max-width: 400px) {
    gap: 16px;
  }
`;

const CollapseContentText = styled.li`
  list-style-type: disc;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export default function FAQ() {
  const [openedTab, openTab] = useState(0);

  return (
    <div className="flex justify-center px-[10px] tablet:px-[20px] py-[50px] w-full bg-[#fff] bg-opacity-[0.1]">
      <div className="w-full max-w-[1024px] flex flex-col gap-[20px]">
        <CollapseHeaderContainer
          onClick={() => openTab(openedTab === 1 ? 0 : 1)}
        >
          <CollapseHeaderText>
            HBoard NTT
          </CollapseHeaderText>
          <CollapseHeaderIcon
            src={ICON_ARROW_UP}
            alt="icon arrow up"
            style={{transform: openedTab === 1 ? "" : "rotate(180deg)"}}
          />
        </CollapseHeaderContainer>
        <CollapseContentContainer
          style={{display: openedTab === 1 ? "flex" : "none"}}
        >
          <CollapseContent>
            <CollapseContentText>
              Available for purchase in launch phase 1 & 2 (seed phase) or attained by users holding more Stack than the
              average of Stack token holdings of HBoard or Board NTT holders
            </CollapseContentText>
            <CollapseContentText style={{marginLeft: 30}}>
              <b>If purchased in phase 1 or 2, participants receive 200% to 250% of their deposit after launch and
                permanently will be connected to wallet</b>
            </CollapseContentText>
            <CollapseContentText style={{marginLeft: 30}}>
              If attained after the Stack launch, NTT can be lost if users falls below NTT holder average
            </CollapseContentText>
            <CollapseContentText>
              <b>Receive reflection & rebalance Stack, and Cache Box Plus rewards from the board treasury</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>2nd Level Voting Privileges</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Can also hold a Committee NTT and/or a Team Treasury NTT</b>
            </CollapseContentText>
          </CollapseContent>
          <div className="flex gap-[20px]">
            <Link to="/hboardntt">
              <RedButton>Buy HBoard NTT</RedButton>
            </Link>
          </div>
        </CollapseContentContainer>

        <CollapseHeaderContainer
          onClick={() => openTab(openedTab === 2 ? 0 : 2)}
        >
          <CollapseHeaderText>
            Board Level NTT
          </CollapseHeaderText>
          <CollapseHeaderIcon
            src={ICON_ARROW_UP}
            alt="icon arrow up"
            style={{transform: openedTab === 2 ? "" : "rotate(180deg)"}}
          />
        </CollapseHeaderContainer>
        <CollapseContentContainer
          style={{display: openedTab === 2 ? "flex" : "none"}}
        >
          <CollapseContent>
            <CollapseContentText>
              Only available for purchase before the Stack liquidity drive event
            </CollapseContentText>
            <CollapseContentText>
              <b>Receive reflection & rebalance stack, and Cache Box Plus rewards from the board treasury</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Permanent (earn in perpetuity)</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Top Voting Privileges</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Can also hold a Committee NTT and/or a Team Treasury NTT</b>
            </CollapseContentText>
          </CollapseContent>
          <div className="flex gap-[20px]">
            <Link to="/boardntt">
              <RedButton>Buy Board NTT</RedButton>
            </Link>
          </div>
        </CollapseContentContainer>

        <CollapseHeaderContainer
          onClick={() => openTab(openedTab === 3 ? 0 : 3)}
        >
          <CollapseHeaderText>
            Committee Level NTT
          </CollapseHeaderText>
          <CollapseHeaderIcon
            src={ICON_ARROW_UP}
            alt="icon arrow up"
            style={{transform: openedTab === 3 ? "" : "rotate(180deg)"}}
          />
        </CollapseHeaderContainer>
        <CollapseContentContainer
          style={{display: openedTab === 3 ? "flex" : "none"}}
        >
          <CollapseContent>
            <CollapseContentText>
              Available for purchase ANYTIME
            </CollapseContentText>
            <CollapseContentText>
              <b>
                Receive reflection and rebalance stack, and cache box rewards from the committee treasury
              </b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Permanent (earn in perpetuity)</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>2nd level Voting Privileges</b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Can also hold a Team Treasury NTT</b>
            </CollapseContentText>
          </CollapseContent>
          <div className="flex gap-[20px]">
            <Link to="/committeentt">
              <RedButton>Buy Committee NTT</RedButton>
            </Link>
          </div>
        </CollapseContentContainer>

        <CollapseHeaderContainer
          onClick={() => openTab(openedTab === 4 ? 0 : 4)}
        >
          <CollapseHeaderText>
            Team Leader NTT
          </CollapseHeaderText>
          <CollapseHeaderIcon
            src={ICON_ARROW_UP}
            alt="icon arrow up"
            style={{transform: openedTab === 4 ? "" : "rotate(180deg)"}}
          />
        </CollapseHeaderContainer>
        <CollapseContentContainer
          style={{display: openedTab === 4 ? "flex" : "none"}}
        >
          <CollapseContent>
            <CollapseContentText>
              Attainable by having 10 partners (receive a team treasury)
            </CollapseContentText>
            <CollapseContentText>
              <b>
                Recieve Team Treasury reflection and rebalance rewards (Stack), team cache box, team CBC, and can
                qualify for daily Team SweepSTACK rewards
              </b>
            </CollapseContentText>
            <CollapseContentText>
              <b>Team Treasury is permanent once achieved (earn in perpetuity)</b>
            </CollapseContentText>
            <CollapseContentText style={{marginLeft: 30}}>
              Team Leaders cannot change team once leading a Team Treasury
            </CollapseContentText>
            <CollapseContentText>
              <b>Team governance (partners can vote on team names, team rules, etc.)</b>
            </CollapseContentText>
          </CollapseContent>
        </CollapseContentContainer>
      </div>
    </div>
  );
}
