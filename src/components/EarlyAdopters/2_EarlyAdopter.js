import styled from "styled-components";
import CLOCK from "../../imgs/clock.png";
import Star from "../../imgs/nttmain-star.svg";
import BoardStar from "../../imgs/nttmain-board-star.svg";
import CommitteeStar from "../../imgs/nttmain-committee-star.svg";
import { Link } from "react-router-dom";

const Button = styled.button`
  background: ${(props) => props.color};
  height: 48px;
  width: 100%;
  border-radius: 12px;
  font-weight: 300;
  font-family: WorkSans;
  font-size: 16px;
  color: white;
`;

export default function EarlyAdopter() {
  return (
    <div className="w-full border-b border-[#222] flex flex-col justify-center items-center relative pb-[50px]">
      <img src={CLOCK} alt="clock" width={200} className="pt-10 pb-10" />
      <div className="text-white text-[26px] tablet:text-[36px] font-[300]">
        Be an “Early Adopter” thru NTT’s
      </div>
      <div className="max-w-[800px] text-white text-[16px] font-[300] leading-[22px] mt-[20px] px-[10px]">
        For a limited time, be an early NTT adopter and get early rewards at launch in our Cache Box Plus, Cache Box, &
        CBC contracts. Choose which NTT works best for you and be rewarded with a permanent NTT (ownership), voting
        privileges, and early rewards for a head start in Stack Cache
      </div>
      <div className="relative mt-[50px]">
        <img src={Star} alt="star" className="absolute top-0 h-full z-[-1] left-[50%] translate-x-[-50%] opacity-50" />
        <div className="text-white text-[20px] tablet:text-[28px] font-[100]">
          HBoard NTT Early Adopter Options
        </div>
        <div
          className="text-[#fff] w-full max-w-[1300px] py-[30px] flex flex-col desktop:flex-row gap-[15px] px-[10px]">
          <div className="w-full flex flex-col">
            <div
              className="bg-[#3590FF] border border-[#fff] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]">
              $10,000 USDC
              <br /> 250% (Cache Box Plus)
            </div>
            <div
              className="border border-[#A5A6A5] font-[300] rounded-lg p-[10px] flex flex-col justify-between h-[300px]">
              <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
                Deposit $10,000-$250,000 USDC (BEP20, BSC) to receive:
                <li className="pl-[10px]">
                  HBoard NTT permanently connected to your wallet (protocol rewards)
                </li>
                <li className="pl-[10px]">
                  A High-level Stack Cache DAO vote
                </li>
                <li className="pl-[10px]">
                  Exclusive TG/Discord channel access
                </li>
                <li className="pl-[10px]">
                  Get 250% value of your deposit in Cache Box Plus to earn immediately after launch
                </li>
              </div>
              <Link to="/hboardntt">
                <Button
                  color="linear-gradient(180deg, #3590FF 0%, #A5A6A5 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Buy Now & Enjoy Extra Rewards
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className="bg-[#3590FF] border border-[#fff] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]">
              $10,000 USDC
              <br /> 200% (1/2 USDC & 1/2 Cache Box Plus)
            </div>
            <div
              className="border border-[#A5A6A5] font-[300] rounded-lg p-[10px] flex flex-col justify-between h-[300px]">
              <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
                Deposit $10,000-$250,000 USDC (BEP20, BSC) to receive:
                <li className="pl-[10px]">
                  HBoard NTT permanently connected to your wallet (protocol rewards)
                </li>
                <li className="pl-[10px]">
                  A High-level Stack Cache DAO vote
                </li>
                <li className="pl-[10px]">
                  Exclusive TG/Discord channel access
                </li>
                <li className="pl-[10px]">
                  Get 100% value of your deposit in USDC and 100% value in Cache Box Plus (200% total)
                </li>
              </div>
              <Link to="/hboardntt">
                <Button
                  color="linear-gradient(180deg, #3590FF 0%, #A5A6A5 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Buy Now & Enjoy Extra Rewards
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className="bg-[#3590FF] border border-[#fff] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]">
              $5,000 USDC
              <br /> 100% (Cache Box Plus)
            </div>
            <div
              className="border border-[#A5A6A5] font-[300] rounded-lg p-[10px] flex flex-col justify-between h-[300px]">
              <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
                Deposit $5000 USDC (BEP20, BSC) to receive:
                <li className="pl-[10px]">
                  HBoard NTT permanently connected to your wallet (protocol rewards)
                </li>
                <li className="pl-[10px]">
                  A High-level Stack Cache DAO vote (on all DAO votes)
                </li>
                <li className="pl-[10px]">
                  Exclusive TG/Discord channel access
                </li>
                <li className="pl-[10px]">
                  Get 100% value of your deposit in Cache Box Plus to earn immediately after launch
                </li>
              </div>
              <Link to="/hboardntt">
                <Button
                  color="linear-gradient(180deg, #3590FF 0%, #A5A6A5 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Buy Now & Enjoy Extra Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#fff] w-full max-w-[1300px] py-[30px] flex flex-col desktop:flex-row gap-[15px] px-[10px]">
        <div className="w-full mb-[50px] desktop:mb-0 flex flex-col items-center relative py-[20px]">
          <img src={BoardStar} alt="star"
               className="absolute top-0 h-full z-[-1] left-[50%] translate-x-[-50%] opacity-50" />
          <div className="text-white text-[20px] tablet:text-[28px] font-[100] mb-[30px]">
            Board NTT Early Adopter Options
          </div>
          <div className="w-full desktop:max-w-[380px] flex flex-col flex-1">
            <div
              className="bg-[#fff] border border-[#fff] text-[#3590FF] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]">
              $2,500 USDC
              <br /> $1000 ($500 Cache Box Plus & $500 CBC)
            </div>
            <div
              className="border border-[#A5A6A5] font-[300] rounded-lg p-[10px] flex flex-col justify-between h-[300px]">
              <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
                Deposit $2500 USDC (BEP20, BSC) to receive:
                <li className="pl-[10px]">
                  Board NTT permanently connected to your wallet (protocol rewards)
                </li>
                <li className="pl-[10px]">
                  Highest-level Stack Cache DAO vote
                </li>
                <li className="pl-[10px]">
                  Exclusive TG/Discord channel access
                </li>
                <li className="pl-[10px]">
                  Get $500 value in Cache Box Plus and $500 value in CBC ($1000 total)
                </li>
              </div>
              <Link to="/boardntt">
                <Button
                  color="linear-gradient(180deg, #FFFFFF 23.99%, #3590FF 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Buy Now & Enjoy Extra Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center relative  py-[20px]">
          <img src={CommitteeStar} alt="star"
               className="absolute top-0 h-full z-[-1] left-[50%] translate-x-[-50%] opacity-50" />
          <div className="text-white text-[20px] tablet:text-[28px] font-[100] mb-[30px]">
            Committee NTT Early Adopter Options
          </div>
          <div className="w-full desktop:max-w-[380px] flex flex-col flex-1">
            <div
              className="bg-[#1EBA1A] border border-[#fff] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]">
              $1,000 USDC
              <br /> $500 ($250 Cache Box & $250 CBC)
            </div>
            <div
              className="border border-[#A5A6A5] font-[300] rounded-lg p-[10px] flex flex-col justify-between h-[300px]">
              <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
                Deposit $1000 USDC (BEP20, BSC) to receive:
                <li className="pl-[10px]">
                  Committee NTT permanently connected to your wallet (protocol rewards)
                </li>
                <li className="pl-[10px]">
                  Stack Cache DAO committee voter
                </li>
                <li className="pl-[10px]">
                  Exclusive TG/Discord channel access
                </li>
                <li className="pl-[10px]">
                  Get $250 value in Cache Box and $250 value in CBC ($500 total)
                </li>
              </div>
              <Link to="/committeentt">
                <Button
                  color="linear-gradient(180deg, #1EBA1A 23.99%, #000000 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Buy Now & Enjoy Extra Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
