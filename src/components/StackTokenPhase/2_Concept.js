import { Underline } from "../HBoardNTT/3_Concept";
import { useState } from "react";
import ICON_ARROW from "../../imgs/icon-arrow-up.svg";
import styled from "styled-components";
import LOGO from "../../imgs/about-bg-logo.svg";

const GradientBox = styled.div`
  background: linear-gradient(180deg, #D9D1D2 0%, #D7D1D1 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid #A5A6A5;
  height: 260px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    height: 300px;
    justify-content: center;
  }
`;

const GradientButton = styled.div`
  border-radius: 12px;
  background: linear-gradient(180deg, #A5A6A5 0%, #737373 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  display: flex;
  flex: 1;
  height: 39px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 300;
`;

const RedGradientButton = styled.div`
  border-radius: 12px;
  background: linear-gradient(180deg, #F5515F 0%, #A5A6A5 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  display: flex;
  flex: 1;
  height: 39px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 300;
`;

const Concept = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  return (
    <div className="w-full flex justify-center px-[12px] pb-[50px] border-b border-[#ffffff]">
      <div className="w-full tablet:max-w-[1200px] flex flex-col items-center">
        <div className="font-grotesk text-[#737373] text-[26px] tablet:text-[36px] font-[300] mt-[50px]">
          About the Stack Token Phase
        </div>
        <div className="text-[16px] font-[300] leading-[22px] mt-[20px] text-black mt-[30px] text-left">
          The <Underline>STACK TOKEN</Underline> phase is a period after the Stack Fair Launch and before the release of
          the Cache token
          products. Its purpose is to: strengthen protocol treasuries, allow users to grow their positions in the stack
          token, heighten the protocol’s locked liquidity, increase the visibility/familiarity of Stack Cache and the
          STACK TOKEN, as well as enable the protocol to enhance marketing, hire multiple developers, receive the
          highest quality audits, and much more.
        </div>

        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 tablet:gap-[100px] gap-[30px] relative mt-[50px]">
          <div className="flex flex-col items-center z-[2]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse1(!collapse1)}
            >
              <div className="text-[20px] text-[#F5515F] font-light">
                Buy/Sell/Transfer Stack
              </div>
              <img
                src={ICON_ARROW}
                alt="icon arrow"
                className={`duration-200 ${collapse1 ? "" : "rotate-180"} w-[14px]`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse1 ? "" : "hidden"
              } text-left font-[200] text-[16px] leading-[26px] text-[#737373]`}
            >
              <GradientBox>
                <ul className="list-disc ml-[30px]">
                  <li>
                    <Underline>Buy Stack</Underline> - 10% fee (5% discount) by using a team leaders wallet address
                    and buying below. Team leaders addresses can be chosen or given to participants
                  </li>
                  <li className="ml-[30px]">
                    15% fee to buy Stack on PCS
                  </li>
                  <li>
                    <Underline>Sell Stack</Underline> - 20% fee
                  </li>
                  <li>
                    <Underline>Transfer Stack</Underline> - 10% fee
                  </li>
                </ul>
                <div className="mt-[20px] flex w-[260px]">
                  <GradientButton>Buy Stack Now</GradientButton>
                </div>
              </GradientBox>
            </div>
          </div>
          <div className="flex flex-col items-center z-[2]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px] "
              onClick={() => setCollapse2(!collapse2)}
            >
              <div className="text-[20px] text-[#F5515F] font-light">
                NTT (Ownership) Rewards
              </div>
              <img
                src={ICON_ARROW}
                alt="icon arrow"
                className={`duration-200 ${collapse2 ? "" : "rotate-180"} w-[14px]`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse2 ? "" : "hidden"
              } text-left font-[200] text-[16px] leading-[22px] text-[#737373]`}
            >
              <GradientBox>
                <ul className="list-disc ml-[30px]">
                  <li>
                    NTT Early Adopters and NTT holders receive many benefits during the Stack token phase
                  </li>
                  <li className="ml-[30px]">
                    Early Adopter NTT HBoard NTT holders receive 1% of all buys and sells in direct BNB & USDC
                  </li>
                  <li className="ml-[30px]">
                    All NTT holders receive Stack in Escrow (to be received after the Cache token products are
                    released, & direct Stack rewards from protocol treasuries
                  </li>
                </ul>
                <div className="flex mt-[20px] gap-[40px] w-full">
                  <GradientButton>Learn About NTT’s</GradientButton>
                  <RedGradientButton>Buy an NTT</RedGradientButton>
                </div>
              </GradientBox>
            </div>
          </div>
          <div className="flex flex-col items-center z-[2]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse3(!collapse3)}
            >
              <div className="text-[20px] text-[#F5515F] font-light">
                Refer Others To Stack Cache
              </div>
              <img
                src={ICON_ARROW}
                alt="icon arrow"
                className={`duration-200 ${collapse3 ? "" : "rotate-180"} w-[14px]`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse3 ? "" : "hidden"
              } text-left font-[200] text-[16px] text-[#737373]`}
            >
              <GradientBox>
                <ul className="list-disc ml-[30px]">
                  <li>
                    Use your influence to bring more people into Stack Cache and earn additional Stack tokens
                  </li>
                  <li className="ml-[30px]">
                    Provide your wallet address that you hold Stack tokens to a friend.
                  </li>
                  <li className="ml-[30px]">
                    When they are ready to buy, they need to enter and approve your wallet address in the “Team Leader
                    Wallet Address” box & approve
                  </li>
                </ul>
                <div className="mt-[10px] flex w-[260px]">
                  <GradientButton>Get/Become a Team Leader</GradientButton>
                </div>
              </GradientBox>
            </div>
          </div>
          <div className="flex flex-col items-center z-[2]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse4(!collapse4)}
            >
              <div className="text-[20px] text-[#F5515F] font-light">
                Earn Stack by Holding Stack
              </div>
              <img
                src={ICON_ARROW}
                alt="icon arrow"
                className={`duration-200 ${collapse4 ? "" : "rotate-180"} w-[14px]`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse4 ? "" : "hidden"
              } text-left font-[200] text-[16px] leading-[26px] text-[#737373]`}
            >
              <GradientBox>
                <ul className="list-disc ml-[30px] mt-[15px]">
                  <li>
                    In STACK, there is no time-locking to receive additional STACK rewards
                  </li>
                  <li>
                    All users hold STACK tokens in their own self-custody
                  </li>
                  <li>
                    Anytime a user buys or sells STACK, a % of the tax is split among all STACK holder (based on how
                    much they hold)
                  </li>
                </ul>
                <div className="mt-[30px] flex w-[260px]">
                  <GradientButton>Learn More About Stack</GradientButton>
                </div>
              </GradientBox>
            </div>
          </div>
          <img
            src={LOGO}
            alt="logo background"
            className="absolute left-[50%] top-[50%] tablet:max-h-[400px] opacity-50 translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Concept;
