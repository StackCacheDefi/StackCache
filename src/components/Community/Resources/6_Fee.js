import BackgroundDots from "../../BackgroundDots";
import logo from "../../../imgs/img_fee.svg";
import { GradientBox } from "./2_GeneralInformation";
import styled from "styled-components";

const FeeSubTitle = styled.div`
  font-family: WorkSans;
  font-weight: 300;
  font-size: 24px;
  line-height: 26px;
  color: #fcc62d;
  margin-bottom: 13px;
  margin-top: 50px;
`;

const FeeStructure = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[109px] px-[20px]">
      <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">
        Protocol Fee Structure
      </div>
      <div
        className="mt-[40px] tablet:w-[1000px] w-full">
        <GradientBox>
          <div className="flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
            <BackgroundDots />
            <img src={logo} />
            <div className="mt-[20px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
              Stack Cache has taxes on its smart contracts which directly goes to the protocol to enhance
              sustainability, organic volume, and liquidity
            </div>
            <FeeSubTitle>Stack Token Fees</FeeSubTitle>
            <div className="w-full font-sans font-[300] tablet:text-[18px] tablet:leading-[220x] text-left">
              *All PCS additional fees goes to Stack Cache Dex liquidity
              <br /><br />
              <ul className="list-disc pl-[30px]">
                <li>
                  <span className="underline">10% on all buys</span> on the Stack Cache Dex (11% on PCS)
                  <ul className="list-disc pl-[30px]">
                    <li>5% - All holders</li>
                    <li>2.5% - Stack Liquidity</li>
                    <li>1% - Team Treasury</li>
                    <li>1% - Treasury (Board, committee, or Stack/Cache)</li>
                    <li>0.5% - Regulator</li>
                  </ul>
                </li>
                <br/>
                <li>
                  <span className="underline">10% on all sells</span> on the Stack Cache Dex (11% on PCS)
                  <ul className="list-disc pl-[30px]">
                    <li>5% - All holders</li>
                    <li>5% - Stack Liquidity</li>
                  </ul>
                </li>
              </ul>
            </div>
            <FeeSubTitle>Cache Box & Cache Box Plus Token Fees</FeeSubTitle>
            <div className="w-full font-sans font-[300] tablet:text-[18px] tablet:leading-[220x] text-left">
              <ul className="list-disc pl-[30px]">
                <li>
                  <span className="underline">
                    5% on all mints (deposits)
                  </span>
                  <ul className="list-disc pl-[30px]">
                    <li>1.25% - Mega Cache</li>
                    <li>1% - Team Treasury Stack</li>
                    <li>1% - Team Treasury Cache Box Bond</li>
                    <li>0.75% - Stack Liquidity</li>
                    <li>0.5% - SweepSTACK Pool</li>
                    <li>0.5% - Regulator</li>
                  </ul>
                </li>
                <br/>
                <li>
                  <span className="underline">
                    Unboxing (withdrawing) Cache Into:
                  </span>
                  <ul className="list-disc pl-[30px]">
                    <li>Stack Token - 10%</li>
                    <li>Cache Token - 5%</li>
                    <li>Cache Blue Chips (CBC) - 25%</li>
                    <li>Cache Box Principal (from Cache Box Plus) - 5%</li>
                  </ul>
                </li>
              </ul>
            </div>
            <FeeSubTitle>Cache Blue Chips (CBC)</FeeSubTitle>
            <div className="w-full font-sans font-[300] tablet:text-[18px] tablet:leading-[220x] text-left">
              <ul className="list-disc pl-[30px]">
                <li>
                  <span className="underline">
                    25% on deposits (from Cache Box & Cache Box Plus)
                  </span>
                  <ul className="list-disc pl-[30px]">
                    <li>15% - CBC liquidity & transaction fees</li>
                    <li>5% - Super CBC Pool</li>
                    <li>5% - Team Treasury CBC Pool</li>
                  </ul>
                </li>
                <br/>
                <li>
                  <span className="underline">
                    5% withdrawal fee (to CBC liquidity)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </GradientBox>
      </div>
    </div>
  );
};

export default FeeStructure;
