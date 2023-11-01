import { useState } from "react";
import styled from "styled-components";
import ICON_ARROW_UP from "../../imgs/icon-arrow-up.svg";
import RedButton from "../RedButton";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  gap: 20px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

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
    background: rgba(255, 255, 255, 0.2)
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
  font-family: "WorkSans";
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  text-align: left;
  list-style-type: disc;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export default function FAQ() {
  const [openedTab, openTab] = useState(0);

  return (
    <Container>
      <CollapseHeaderContainer onClick={() => openTab(openedTab === 1 ? 0 : 1)}>
        <CollapseHeaderText>Stack Token</CollapseHeaderText>
        <CollapseHeaderIcon
          src={ICON_ARROW_UP}
          alt="icon arrow up"
          style={{ transform: openedTab === 1 ? "" : "rotate(180deg)" }}
        />
      </CollapseHeaderContainer>
      <CollapseContentContainer
        style={{ display: openedTab === 1 ? "flex" : "none" }}
      >
        <CollapseContent>
          <CollapseContentText>
            Native store of value token of the Stack Cache ecosystem
          </CollapseContentText>
          <CollapseContentText>
            Users hold Stack tokens in their wallet for easy long term growth
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            No locking/staking required
          </CollapseContentText>
          <CollapseContentText>
            Deflationary with a constantly shrinking available token supply
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            Less Stack available + more locked liquidity
          </CollapseContentText>
          <CollapseContentText>
            Stack generates value to be added for increased Cache token liquidity
          </CollapseContentText>
        </CollapseContent>
        <Link to="/products/stack">
          <RedButton>Stack Token Info</RedButton>
        </Link>
      </CollapseContentContainer>

      <CollapseHeaderContainer onClick={() => openTab(openedTab === 2 ? 0 : 2)}>
        <CollapseHeaderText>Cache Token</CollapseHeaderText>
        <CollapseHeaderIcon
          src={ICON_ARROW_UP}
          alt="icon arrow up"
          style={{ transform: openedTab === 2 ? "" : "rotate(180deg)" }}
        />
      </CollapseHeaderContainer>
      <CollapseContentContainer
        style={{ display: openedTab === 2 ? "flex" : "none" }}
      >
        <CollapseContent>
          <CollapseContentText>
            Native utility token (1:1 USD) used for high yield, partially collateralized by USDC
          </CollapseContentText>
          <CollapseContentText>
            Utilizes products that rewards users passive crypto rewards
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            <span className="underline">Cachet</span>: high yield (50% APR), lowest risk staking pool. Users can withdraw and/or withdraw anytime
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            <span className="underline">Cache Box</span>: Mint (Bond) Cache to get 0.25% per day (up to 150% of deposited principal)
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            <span className="underline">Cache Box Plus</span>: Mint (Bond) Cache to get 0.5% per day (up to 200% of deposit) for 400 days
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            <span className="underline">SweepSTACK</span>: Daily individual and team based “no loss” sweepstakes
          </CollapseContentText>
          <CollapseContentText style={{marginLeft: 30}}>
            <span className="underline">Cache Blue Chips (CBC)</span>: Exclusive to cache box participants rewarding “blue chip” crypto assets (i.e. BTC)
          </CollapseContentText>
        </CollapseContent>
        <Link to="/products/cache">
          <RedButton>Cache Token Info</RedButton>
        </Link>
      </CollapseContentContainer>

      <CollapseHeaderContainer onClick={() => openTab(openedTab === 3 ? 0 : 3)}>
        <CollapseHeaderText>NTT’s (Ownership)</CollapseHeaderText>
        <CollapseHeaderIcon
          src={ICON_ARROW_UP}
          alt="icon arrow up"
          style={{ transform: openedTab === 3 ? "" : "rotate(180deg)" }}
        />
      </CollapseHeaderContainer>
      <CollapseContentContainer
        style={{ display: openedTab === 3 ? "flex" : "none" }}
      >
        <CollapseContent>
          <CollapseContentText>
            Allows users to have OWNERSHIP in the Stack Cache ecosystem
          </CollapseContentText>
          <CollapseContentText>
            Users earn additional rewards directly from protocol owned treasuries
          </CollapseContentText>
          <CollapseContentText>
            Elevated DAO voting privileges & private channel access
          </CollapseContentText>
          <CollapseContentText>
            Earn & lead a team treasury (with a Team Leader NTT)
          </CollapseContentText>
        </CollapseContent>
        <Link to="/products/ntt">
          <RedButton>NTT Info</RedButton>
        </Link>
      </CollapseContentContainer>

      <CollapseHeaderContainer onClick={() => openTab(openedTab === 4 ? 0 : 4)}>
        <CollapseHeaderText>Team Treasuries</CollapseHeaderText>
        <CollapseHeaderIcon
          src={ICON_ARROW_UP}
          alt="icon arrow up"
          style={{ transform: openedTab === 4 ? "" : "rotate(180deg)" }}
        />
      </CollapseHeaderContainer>
      <CollapseContentContainer
        style={{ display: openedTab === 4 ? "flex" : "none" }}
      >
        <CollapseContent>
          <CollapseContentText>
            Protocol owned treasuries where users earn passive rewards (automatic airdrops) through participation with a group of other users
          </CollapseContentText>
          <CollapseContentText>
            Team partners receive rewards from a team treasury thru: reflections and rebalances (Stack), cache box principal, CBC principal, and can qualify for daily Team SweepSTACK rewards
          </CollapseContentText>
          <CollapseContentText>
            Are connected to a users wallet (like an ID)
          </CollapseContentText>
          <CollapseContentText>
            All Stack Cache participants must be a part of a team (to receive rewards)
          </CollapseContentText>
        </CollapseContent>
        <Link to="/products/team_treasuries">
          <RedButton>Team Treasury Info</RedButton>
        </Link>
      </CollapseContentContainer>
    </Container>
  );
}
