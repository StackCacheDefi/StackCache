import logo from "../../../imgs/img_info.svg";
import styled from "styled-components";
import BackgroundDots from "../../BackgroundDots";
import { Link } from "react-router-dom";

export const GradientButton = styled.div`
  background: linear-gradient(180deg, #737373 0%, #000000 100.12%);
  font-family: WorkSans;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  color: white;
`;

const WhiteGradientButton = styled.div`
  background: linear-gradient(180deg, #FFFFFF 23.99%, #737373 100.12%);
  color: black;
  font-family: WorkSans;
  font-size: 14px;
  line-height: 52px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;
`;

export const GradientBox = styled.div`
  background: linear-gradient(180deg, rgba(165, 166, 165, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid white;
`;

const GeneralInformation = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[75px] px-[20px]">
      <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">General
        Information
      </div>
      <div
        className="mt-[40px] tablet:w-[1000px] w-full">
        <GradientBox>
          <div className="flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
            <BackgroundDots />
            <img src={logo} />
            <div className="mt-[43px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
              Learn about the details of Stack Cache DAO thru our whitepaper, litepaper, medium articles, and GitHub.
              Also,
              find all useful information in one place on the Stack Cache linktree
            </div>
            <div className="w-full mt-[54px] grid tablet:grid-cols-4 grid-cols-2 gap-[33px]">
              <Link to="https://tr.ee/lWPrqUOWyg" target="_blank">
                <GradientButton>Whitepaper</GradientButton>
              </Link>
              <Link to="https://d1fdloi71mui9q.cloudfront.net/0RtRXxyRju7TJjeF2jUV_Stack%20Cache%20Litepaper%20v2.pdf" target="_blank">
                <GradientButton>Litepaper</GradientButton>
              </Link>
              <Link to="https://medium.com/@stackcacheprotocol" target="_blank">
                <GradientButton>Medium</GradientButton>
              </Link>
              <GradientButton>Github (Coming Soon)</GradientButton>
            </div>
            <div className="tablet:w-[48%] mt-[40px]">
              <Link to="https://linktr.ee/stackcache" target="_blank">
                <WhiteGradientButton>Linktree (All Stack Cache resources)</WhiteGradientButton>
              </Link>
            </div>
          </div>
        </GradientBox>
      </div>
    </div>
  );
};

export default GeneralInformation;
