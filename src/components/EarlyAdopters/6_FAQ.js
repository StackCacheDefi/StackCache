import {useState} from "react";
import styled from "styled-components";
import ICON_ARROW_UP from "../../imgs/icon-arrow-up.svg";
import RedButton from "../RedButton";
import GrayButton from "../GrayButton";
import DarkRedButton from "../DarkRedButton";

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
  padding: 20px 47px;
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
    <>
      <div
        className="font-grotesk text-[#fefefe] text-[32px] leading-[32px] tablet:text-[40px] tablet:leading-[48px] my-[50px]">
        Early Adopter FAQ’s
      </div>
      <div className="flex justify-center px-[10px] tablet:px-[20px] py-[50px] w-full bg-[#fff] bg-opacity-[0.1]">
        <div className="w-full max-w-[1024px] flex flex-col gap-[20px]">
          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 1 ? 0 : 1)}
          >
            <CollapseHeaderText>
              Why be an early adopter?
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
                {`Be early in line to get ownership stake in the Stack Cache ecosystem in perpetuity`}
              </CollapseContentText>
              <CollapseContentText>
                {`Receive early adopter rewards in direct principal to earn rewards from the start of the platform release`}
              </CollapseContentText>
              <CollapseContentText>
                {`Earn up to 250% of your deposit tax free (one-time opportunity)`}
              </CollapseContentText>
              <CollapseContentText>
                {`Voting privileges early for more affect on the protocol direction`}
              </CollapseContentText>
              <CollapseContentText>
                {`Help Stack Cache provide development (including audits, budget, and additional marketing funds) to ensure maximal success of Stack Cache`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 2 ? 0 : 2)}
          >
            <CollapseHeaderText>
              How soon will I receive my early adopter rewards?
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
                {`Depeding on the liquidity raised in the Stack fair launch event, rewards will be discpersed to early adopters from 30 to 90 days after the launch`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 3 ? 0 : 3)}
          >
            <CollapseHeaderText>
              Whats the goal of the early adopters launch?
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
                {`To raise funds prior to the Stack liquidity drive to allow the protocol to pay for developers, audits, marketing, and fulfill the Stack Cache budget`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 4 ? 0 : 4)}
          >
            <CollapseHeaderText>
              How much TVL is needed for full early adopter repayment after launch event?
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
                {`20% of total funds raised at the liquidity event is allocated for early adopters`}
              </CollapseContentText>
              <CollapseContentText style={{marginLeft: "30px"}}>
                {`If all is taken in Cache Box payments (250% of deposit) - Max $3.125M raised pays Early Adopter back in full at launch into users cache box (based on $625,000 max to pay out)`}
              </CollapseContentText>
              <CollapseContentText style={{marginLeft: "30px"}}>
                {`If users prefer usdc & Cache Box (200% of deposit) - $2.5M pays Early Adopters back in full at launch (USDC & Cache Box) - Max $1.25M raised pays Early Adopters back USDC in full (100% of USDC deposit) at launch`}
              </CollapseContentText>
              <CollapseContentText>
                {`Of the 20% early adopter launch funds, it is distributed evenly (by percentage) to all early adopters, based on how much they contributed vs. the total amount raised`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 5 ? 0 : 5)}
          >
            <CollapseHeaderText>
              How funds are received into Cache Box?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{transform: openedTab === 5 ? "" : "rotate(180deg)"}}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{display: openedTab === 5 ? "flex" : "none"}}
          >
            <CollapseContent>
              <CollapseContentText>
                {`The total amount owed to early adopters is deposited into their cache box principal at 33.3% of the amount owed (no entry fees)`}
              </CollapseContentText>
              <CollapseContentText style={{marginLeft: "30px"}}>
                {`When the max amount to be earned from cache box reaches 100% or 150% (depending on user allocation) of the Early adopters’ Phase 1 deposit, protocol deposits from phase 1 is exhausted`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>

          <CollapseHeaderContainer
            onClick={() => openTab(openedTab === 6 ? 0 : 6)}
          >
            <CollapseHeaderText>
              When does the early adopter phase end?
            </CollapseHeaderText>
            <CollapseHeaderIcon
              src={ICON_ARROW_UP}
              alt="icon arrow up"
              style={{transform: openedTab === 6 ? "" : "rotate(180deg)"}}
            />
          </CollapseHeaderContainer>
          <CollapseContentContainer
            style={{display: openedTab === 6 ? "flex" : "none"}}
          >
            <CollapseContent>
              <CollapseContentText>
                {`Once $250,000 is reached, the early adopter phase is completed`}
              </CollapseContentText>
            </CollapseContent>
          </CollapseContentContainer>
        </div>
      </div>
    </>
  );
}
