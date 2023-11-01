import logo from "../../../imgs/img_audits.svg";
import sLogo from "../../../imgs/img_s_logo.svg";
import cLogo from "../../../imgs/img_c_logo.svg";
import styled from "styled-components";
import BackgroundDots from "../../BackgroundDots";
import { GradientBox } from "./2_GeneralInformation";

const AuditRedButton = styled.div`
  background: linear-gradient(91.72deg, rgba(255, 0, 0, 0.5) -8.25%, rgba(47, 1, 1, 0.465) 92.02%);
  font-family: WorkSans;
  font-size: 14px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
  padding: 0 16px;
`;

const AuditGrayButton = styled.div`
  background: linear-gradient(91.72deg, rgba(165, 166, 165, 0.5) -8.25%, rgba(64, 64, 64, 0.5) 92.02%);
  font-family: WorkSans;
  font-size: 14px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
  padding: 0 16px;
`;

const AuditGoldButton = styled.div`
  background: linear-gradient(91.72deg, rgba(255, 237, 171, 0.5) -8.25%, rgba(244, 162, 39, 0.5) 92.02%);
  font-family: WorkSans;
  font-size: 14px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
  padding: 0 16px;
`;

const AuditWhiteButton = styled.div`
  background: linear-gradient(91.72deg, #FFFFFF -8.25%, rgba(255, 255, 255, 0.75) 92.02%);
  width: 100%;
  color: black;
  font-family: WorkSans;
  font-size: 14px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
  padding: 0 16px;
`;

const SmartContracts = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[75px] px-[20px]">
      <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">General
        Smart Contracts & Audits
      </div>
      <div
        className="mt-[40px] tablet:w-[1000px] w-full">
        <GradientBox>
          <div className="flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
            <BackgroundDots />
            <img src={logo} />
            <div className="mt-[49px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
              All smart contracts within the Stack Cache ecosystem are open-sourced code. Listed below are the smart contracts associated with the project and the audits of the entire ecosystem
            </div>
            <img src={sLogo} className="w-[100px] h-[100px] mt-[54px]"/>
            <div
              className="mt-[30px] text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans">
              Stack Token & Smart Contacts
            </div>
            <div className="mt-[30px] grid grid-cols-1 tablet:grid-cols-2 gap-[34px]">
              <AuditRedButton>Stack Fair Launch (Coming Soon)</AuditRedButton>
              <AuditRedButton>Stack Token (Coming Soon)</AuditRedButton>
            </div>
            <img src={cLogo} className="h-[100px] mt-[69px]"/>
            <div
              className="mt-[30px] text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans">
              Cache Token & Smart Contacts
            </div>
            <div className="mt-[30px] grid grid-cols-1 tablet:grid-cols-3 gap-x-[34px] gap-y-[10px]">
              <AuditGrayButton>Cache Token (Coming Soon)</AuditGrayButton>
              <AuditGrayButton>Cachet (Coming Soon)</AuditGrayButton>
              <AuditGrayButton>Cache Box (Coming Soon)</AuditGrayButton>
              <AuditGrayButton>Cache Box Plus (Coming Soon)</AuditGrayButton>
              <AuditGrayButton>CBC (Coming Soon)</AuditGrayButton>
              <AuditGrayButton>Cache Box Plus (Coming Soon)</AuditGrayButton>
            </div>
            <div
              className="mt-[90px] text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans">
              Other Smart Contracts
            </div>
            <div className="mt-[22px] grid grid-cols-1 tablet:grid-cols-3 gap-[34px]">
              <AuditGoldButton>Solo SweepSTACK (Coming Soon)</AuditGoldButton>
              <AuditGoldButton>Team SweepSTACK (Coming Soon)</AuditGoldButton>
              <AuditGoldButton>Early Adopter Launch</AuditGoldButton>
            </div>
            <div
              className="mt-[80px] text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans">
              Audits
            </div>
            <div className="w-full mt-[22px] flex justify-center">
              <div className="w-full tablet:w-[440px]">
                <AuditWhiteButton>Coming Soon</AuditWhiteButton>
              </div>
            </div>
          </div>
        </GradientBox>
      </div>
    </div>
  );
};

export default SmartContracts;
