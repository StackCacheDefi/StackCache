import BackgroundDots from "../../BackgroundDots";
import MetaMaskLogo from "../../../imgs/img_metamask.svg";
import MarketingLogo from "../../../imgs/img_marketing.svg";
import BinanceIcon from "../../../imgs/icon-binance.svg";
import { GradientBox } from "./2_GeneralInformation";
import styled from "styled-components";
import BgLogo from "../../../imgs/about-bg-logo.svg";
import { Link } from "react-router-dom";

const BinanceButton = styled.div`
  background: linear-gradient(180deg, #FFFFFF 15.12%, #F0B90B 100.12%);
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

const MarketingButton = styled.div`
  background: linear-gradient(180deg, #FFFFFF 15.12%, #45563C 100.12%);
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

const CryptoWalletAndMarketing = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full tablet:w-[1000px] flex flex-col items-center px-[20px] relative overflow-hidden tablet:overflow-visible">
        <img src={BgLogo}
             className="absolute top-[60%] translate-x-[-50%] translate-y-[-50%] tablet:w-[800px] tablet:h-[800px]" />
        <div className="w-full flex flex-col items-center pt-[133px]">
          <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">
            Connect Your Crypto Wallet
          </div>
          <div
            className="mt-[40px] tablet:w-[1000px] w-full">
            <GradientBox>
              <div className="flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
                <BackgroundDots />
                <img src={MetaMaskLogo} />
                <div className="tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
                  Below are guides to creating crypto wallet(s) of your own custody in order to interact with Defi and
                  Stack Cache
                </div>
                <img src={BinanceIcon} className="mt-[30px] w-[100px]" />
                <div
                  className="text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans mt-[56px]">
                  Binance Smart Chain (BSC)
                </div>
                <div className="w-full tablet:w-[48%] mt-[22px]">
                  <Link to="https://tr.ee/ry1QS0Z1Q3" target="_blank">
                    <BinanceButton>BSC Guide (for Defi & Stack Cache)</BinanceButton>
                  </Link>
                </div>
              </div>
            </GradientBox>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-[127px]">
          <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">
            Stack Cache Marketing Materials
          </div>
          <div
            className="mt-[40px] tablet:w-[1000px] w-full backdrop-filter">
            <GradientBox>
              <div className="backdrop-filter flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
                <BackgroundDots />
                <img src={MarketingLogo} />
                <div className="mt-[40px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
                  We welcome you to spread the word of Stack Cache, and to do that, you need marketing materials. Get
                  full access to our official logos, banners, and other Stack Cache resources
                </div>
                <div className="w-full tablet:w-[48%] mt-[45px]">
                  <MarketingButton>Stack Cache Marketing Materials</MarketingButton>
                </div>
              </div>
            </GradientBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoWalletAndMarketing;
