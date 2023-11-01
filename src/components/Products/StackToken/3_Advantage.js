import styled from "styled-components";
import LOGO from "../../../imgs/about-bg-logo.svg";
import BlockchainIcon from "../../../imgs/advantage-blockchain.svg";
import OwnerkeyIcon from "../../../imgs/advantage-owner-key.svg";
import DistributionIcon from "../../../imgs/advantage-distribution.svg";
import TransferIcon from "../../../imgs/advantage-transfer.svg";
import ChartIcon from "../../../imgs/advantage-chart.svg";
import GroupIcon from "../../../imgs/advantage-group.svg";
import BlockRewardIcon from "../../../imgs/advantage-block-reward.svg";
import NetworkIcon from "../../../imgs/advantage-network.svg";

const Card = styled.div`
  background-color: #fff;
  border: 3px solid #f00;
  display: flex;
  flex-direction: column;
  padding: 20px 5px;
  width: 350px;
  height: 320px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    width: 350px;
    height: auto;
  }
`;

export default function Advantage() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[300px] left-[300px] z-0 h-full max-h-[700px]"
      />
      <img
        src={LOGO}
        alt="logo background"
        className="absolute bottom-[300px] right-[300px] z-0 h-full max-h-[700px]"
      />
      <div className="relative z-10 text-white py-[50px] w-full max-w-[1024px]">
        <div className="text-[24px] tablet:text-[40px] font-[200] mb-[50px] text-center">
          Advantages of the Stack Token
        </div>
        <div className="flex flex-col laptop:flex-row items-center justify-center gap-[100px] w-full">
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              Stack Token Reflections
            </div>
            <img
              src={BlockchainIcon}
              alt="blockchain icon"
              className="w-[150px]"
            />
            <div className="text-[#000] text-[14px] leading-[18px]">
              The Stack tokens rewarded to all Stack <br />
              holders from the tax on all buys and sells
            </div>
          </Card>
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              User Custody (Permissionless)
            </div>
            <img
              src={OwnerkeyIcon}
              alt="owner key icon"
              className="w-[150px]"
            />
            <div className="text-[#000] text-[14px] leading-[18px]">
              Stack is controlled by users in their <br />
              preferred wallet to transact at they like
            </div>
          </Card>
        </div>
        <div className="flex justify-center w-full mt-[50px] laptop:mt-[-30px]">
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              Protocol Ownership (NTT’s)
            </div>
            <img
              src={DistributionIcon}
              alt="distribution icon"
              className="w-[150px]"
            />
            <div className="text-[#000] text-[14px] leading-[18px]">
              Own a piece of the ecosystem & earn
              <br />
              through protocol treasuries, FOREVER
            </div>
          </Card>
        </div>
        <div className="flex flex-col laptop:flex-row items-center justify-center gap-[50px] w-full mt-[50px] laptop:mt-[-30px]">
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              Organic Protocol Volume
            </div>
            <img src={TransferIcon} alt="transfer icon" className="w-[150px]" />
            <div className="text-[#000] text-[14px] leading-[18px]">
              Enjoy steady volume through Stack price
              <br /> appreciation & treasuries (participants)
            </div>
          </Card>
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              Stack Supply Shortage
            </div>
            <img src={ChartIcon} alt="transfer icon" className="w-[150px]" />
            <div className="text-[#000] text-[14px] leading-[18px]">
              As protocol & team treasuries grow, the
              <br /> available Stack reduces in a “Gamma Squeeze”
            </div>
          </Card>
        </div>
        <div className="flex justify-center w-full mt-[50px] laptop:mt-[-30px]">
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              Team Treasury Rewards
            </div>
            <img src={GroupIcon} alt="group icon" className="w-[150px]" />
            <div className="text-[#000] text-[14px] leading-[18px]">
              Earn additional Stack rewards for
              <br /> participation as a part of a team treasury
            </div>
          </Card>
        </div>
        <div className="flex flex-col laptop:flex-row items-center justify-center gap-[50px] w-full mt-[50px] laptop:mt-[-30px]">
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              No Staking or Timelocking
            </div>
            <img
              src={BlockRewardIcon}
              alt="block reward icon"
              className="w-[150px]"
            />
            <div className="text-[#000] text-[14px] leading-[18px]">
              Stack holders naturally earn rewards
              <br /> through reflections, no locking needed
            </div>
          </Card>
          <Card>
            <div className="text-[#A5A6A5] text-[22px]">
              100% Decentralized & Fair
            </div>
            <img src={NetworkIcon} alt="network icon" className="w-[150px]" />
            <div className="text-[#000] text-[14px] leading-[18px]">
              No team or dev wallet recieves additional <br />
              or cheaper Stack (equal playing field)
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
