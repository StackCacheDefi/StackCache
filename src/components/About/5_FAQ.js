import { useState } from "react";
import styled from "styled-components";
import ICON_ARROW_UP from "../../imgs/icon-arrow-up.svg";
import RedButton from "../RedButton";
import GrayButton from "../GrayButton";
import DarkRedButton from "../DarkRedButton";
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
    <div id="faq">
      <div className="font-grotesk text-[#fefefe] text-[32px] leading-[32px] tablet:text-[40px] tablet:leading-[48px] my-[50px]">
        FAQ’s
      </div>
      <div className="flex justify-center px-[10px] tablet:px-[20px] py-[50px] w-full bg-[#fff] bg-opacity-[0.1]">
        <div className="w-full max-w-[1024px] flex flex-col gap-[20px]">
          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 1 ? 0 : 1)}
          >
            <CollapseHeaderText>
              How to buy Stack, Cache, & NTT’s
            </CollapseHeaderText>
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
                {`Participants must first have a crypto wallet (metamask) to buy Stack Cache tokens (see our BSC guide below)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Stack can be bought using our Stack Cache Dex to swap BNB and/or USDC in exchange for Stack Tokens (link below)`}
              </CollapseContentText>
              <CollapseContentText style={{ marginLeft: "30px" }}>
                {`Stack can also be bought using Pancake Swap for an additional 1% fee that goes to Stack liquidity`}
              </CollapseContentText>
              <CollapseContentText>
                {`Cache can be minted using our site using BNB and/or USDC (link below)`}
              </CollapseContentText>
              <CollapseContentText style={{ marginLeft: "30px" }}>
                {`Cache can also be bought using Pancake Swap for an additional 1% fee that goes to Cache liquidity`}
              </CollapseContentText>
            </CollapseContent>
            <div className="flex gap-[20px]">
              <Link to="https://tr.ee/ry1QS0Z1Q3" target="_blank">
                <DarkRedButton>S/C BSC Guide</DarkRedButton>
              </Link>
              <Link to="/products/stack">
                <RedButton>Buy Stack Tokens</RedButton>
              </Link>
              <Link to="/products/cache">
                <GrayButton>Buy Cache Tokens</GrayButton>
              </Link>
            </div>
          </CollapseContentContainer>
          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 11 ? 0 : 11)}
          >
            <CollapseHeaderText>
              Why do I need a separate crypto wallet?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 11 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 11 ? "flex" : "none" }}
          >
            <CollapseContent>
              Crypto software wallets like MetaMask or TrustWallet allows you to interact with decentralized
              applications (i.e. Stack Cache) anonymously. Each wallet has a key phrase that is not stored on a
              centralized server so you are the sole custodian of your crypto and MUST keep your wallet key
              phrase private & safe. It is highly recommended that your wallet key phrase is written down and
              stored in multiple secure places. Below is a Stack Cache BSC guide to Metamask
            </CollapseContent>
            <div className="flex gap-[20px]">
              <Link to="https://tr.ee/ry1QS0Z1Q3" target="_blank">
                <DarkRedButton>S/C BSC Guide</DarkRedButton>
              </Link>
            </div>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 2 ? 0 : 2)}
          >
            <CollapseHeaderText>
              Why does Stack Cache use Binance Smart Chain (BSC)?
            </CollapseHeaderText>
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
              {`The primary reason Stack Cache uses the BSC layer one blockchain is for its' security, which we prioritize. Decentralization, low gas fees, and compatibility with Ethereum Virtual Machine (EVM)  also makes BSC protocol & user friendly. BSC also has a proven track record in the DeFi for its reliability, affordability, and providing useful tools. For Stack Cache, BSC has a large community and great liquidity which benefits our protocol for growth and adoption`}
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 3 ? 0 : 3)}
          >
            <CollapseHeaderText>
              Why should I put funds into Stack Cache?
            </CollapseHeaderText>
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
                {`Safe, higher yielding, and permission-less supplement to traditional finance banking`}
              </CollapseContentText>
              <CollapseContentText>
                {`State of art protocol treasuries which enhances protocol and user rewards`}
              </CollapseContentText>
              <CollapseContentText>
                {`Ownership opportunities through NTT’s`}
              </CollapseContentText>
              <CollapseContentText>
                {`Stack Cache is disconnected from the volatility of traditional markets and crypto markets due to how we produce yield (over-collateralization)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Earn high yield thru Cache smart contracts that has many utilities and use-cases with a native stablecoin (1:1 USD)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Organic supply shortage where the available supply decreases while the protocol liquidity increases (store of value like Bitcoin)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Healthy team building that requires participation to earn rewards (including team leaders), has protocol owned team treasuries, and one-level marketing (no multiple uplines)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Earn bi-weekly team rewards (similar to a paycheck)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Get rewards in “blue chip” (i.e. BTC, BNB) tokens through our CBC smart contract`}
              </CollapseContentText>
              <CollapseContentText>
                {`Daily sweepstakes where users can win Cache box deposits and/or direct BNB`}
              </CollapseContentText>
              <CollapseContentText>
                {`Bonding which pays consistently with high yield (0.5% per day) and is backed by our Mega Cache (aids sustainability)`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 4 ? 0 : 4)}
          >
            <CollapseHeaderText>
              Can I sell my tokens and rewards when I want?
            </CollapseHeaderText>
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
                {`Stack tokens can be sold at anytime as they are held in users wallets (user custody)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Cache can be sold anytime its held in users wallets or in Cachet which is withdrawable anytime`}
              </CollapseContentText>
              <CollapseContentText style={{ marginLeft: "30px" }}>
                {`Cache principal in Cache Box (bonds) cannot be sold as rewards are released to participants over time (approx. 400 days)`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 5 ? 0 : 5)}
          >
            <CollapseHeaderText>
              Why is Stack considered a “Fair Launch”? How does it work?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 5 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 5 ? "flex" : "none" }}
          >
            <CollapseContent>
              <CollapseContentText>
                {`Stack Cache is a fair launch because we have no per-distributed Stack nor cheaper Stack for anyone (including devs or team wallets). EVERYONE (including NTT holders) must purchase to receive stack, no exceptions. All can earn on an equal playing field.`}
              </CollapseContentText>
              <CollapseContentText>
                {`The Stack liquidity drive event is a week-long and allows all an opportunity to be a part of our IDO (initial dex offering) and receive Stack for zero fees`}
              </CollapseContentText>
              <CollapseContentText>
                {`After the liquidity drive event, Stack will be distributed & Cache will be available to be minted`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 6 ? 0 : 6)}
          >
            <CollapseHeaderText>
              Is Stack Cache a fork or clone of another project?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 6 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 6 ? "flex" : "none" }}
          >
            <CollapseContent>
              {`No. All earlier Defi Dapps have been an influence on Stack Cache in one way or another, but were are an evolved & adaptable protocol. We utilize facets from other projects that has worked, while eliminating/solving issues that others haven't. We offer “first mover” contracts within our ecosystem and use-cases that has never been seen in Defi, making Stack Cache one of a kind. We are unique for our overcollateralization, a new cutting-edge way of sustainability and paying high yield for all while simultaneously growing protocol liquidity`}
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 7 ? 0 : 7)}
          >
            <CollapseHeaderText>
              Is Stack Cache “teams” a pyramid scheme? What if I dont want to be
              a team leader?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 7 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 7 ? "flex" : "none" }}
          >
            <CollapseContent>
              <CollapseContentText>
                {`No. Pyramid schemes are systems where players in the higher levels of the system get a larger commission & the majority of the profits are funneled to a few at the top. Stack is entirely different.`}
              </CollapseContentText>
              <CollapseContentText className="ml-[30px]">
                {`We have one-level and team leaders are a part of the team, not on top of it. Since we have team treasuries, in order for a team leader to get a share, they must participate WITH other team members and are rewarded based on their participation`}
              </CollapseContentText>
              <CollapseContentText>
                {`Users do not have to rely on teams/team treasuries for success. If a user doesn't want to be a team leader, they can earn as much as they like on their own terms. Teams in Stack Cache are a compliment to protocol rewards, not a necessity`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 8 ? 0 : 8)}
          >
            <CollapseHeaderText>
              If I am on a team I dont like, can I change teams?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 8 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 8 ? "flex" : "none" }}
          >
            <CollapseContent>
              {`Yes! Stack Cache allows users to be a part of a team that will benefit them the most. Participants can freely change to their desired team of choice. However, if a user changes teams, there is a 30 day wait to receive rewards from their new team. Team leaders cannot change teams once a team treasury is created`}
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 9 ? 0 : 9)}
          >
            <CollapseHeaderText>Are All NTT’s Permanent?</CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 9 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 9 ? "flex" : "none" }}
          >
            <CollapseContent>
              <CollapseContentText>
                {`Most NTT’s are permanent, however, not all. Board, Committee, and Team Leader NTT’s are all permanent once owned.`}
              </CollapseContentText>
              <CollapseContentText className="ml-[30px]">
                {`HBoard NTT’s purchased in pre-sale are permanent, but after the Stack launch, one can earn or lose it based on how much Stack they hold compared to the average Stack held by Board and HBoard NTT holders`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 10 ? 0 : 10)}
          >
            <CollapseHeaderText>
              How does the Cache token stay stable?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{ transform: openedTab === 10 ? "" : "rotate(180deg)" }}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{ display: openedTab === 10 ? "flex" : "none" }}
          >
            <CollapseContent>
              {`Cache is created to remain 1:1 with usd. It’s over-collateralized and keeps its stability through multiple protocol functions, strict restrictions on cache abusers, and multiple protocol treasuries/vault (contingencies).`}
              <br />
              <br />
              {`Typically in cryptocurrency, over-collateralization means that anyone who wishes to loan to the stablecoin in question must deposit an excess of collateral. For S/C, instead of relying on loaners (individuals and outside institutions) for collateral (typical for stablecoins), the Stack tokens reflection rewards provides the cache additional collateral. In most cases, built in Stack sells from the regulator provides a over-abundance of collateral for Cache. If the cache liquidity becomes at-risk of being under-collateralized, S/C has protocol owned assets that can strengthen the Regulator to ensure that cache stays collateralized`}
            </CollapseContent>
          </CollapseContentContainer>
        </div>
      </div>
    </div>
  );
}
