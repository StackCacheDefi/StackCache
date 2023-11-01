import BackgroundDots from "../../BackgroundDots";
import logo from "../../../imgs/img_resources.svg";
import PartnerLogo from "../../../imgs/img_partnerships.svg";
import { GradientBox, GradientButton } from "./2_GeneralInformation";
import styled from "styled-components";
import BgLogo from "../../../imgs/about-bg-logo.svg";
import { Link } from "react-router-dom";

const PinkGradientButton = styled.div`
  background-image: linear-gradient(91.72deg, rgba(255, 0, 0, 0.5) -8.25%, rgba(47, 1, 1, 0.5) 92.02%),
  linear-gradient(180deg, rgba(255, 255, 255, 0.5) 23.99%, rgba(53, 144, 255, 0.5) 100.12%);
  font-family: WorkSans;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
  color: white;
`;

const ComingGradientButton = styled.div`
  background: linear-gradient(91.72deg, rgba(255, 0, 0, 0.2) -8.25%, rgba(47, 1, 1, 0.2) 92.02%),
  linear-gradient(180deg, rgba(255, 255, 255, 0.75) 23.99%, rgba(53, 144, 255, 0.75) 100.12%);
  font-family: WorkSans;
  color: black;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
`;

const PartnerGradientButton = styled.div`
  background: linear-gradient(180deg, #FFFFFF 15.12%, #7BA3D5 100.12%);
  font-family: WorkSans;
  color: black;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  font-weight: 300;
  border-radius: 12px;
  cursor: pointer;
`;

const CommunityResources = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full tablet:w-[1000px] flex flex-col items-center px-[20px] relative overflow-hidden tablet:overflow-visible">
        <img src={BgLogo} className="absolute top-[65%] tablet:top-[60%] translate-x-[50%] translate-y-[-50%] tablet:w-[800px] tablet:h-[800px]"/>
        <div className="w-full flex flex-col items-center pt-[115px]">
          <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">
            Community Resources
          </div>
          <div
            className="mt-[40px] tablet:w-[1000px] w-full">
            <GradientBox>
              <div className="flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
                <BackgroundDots />
                <img src={logo} />
                <div className="mt-[43px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
                  Stack Cache is built on community and welcoming all community members to contribute resources for the
                  betterment of us all. Chat with live community members, reach out to peers with questions, view community
                  member built assets, and easily find board members who are social media influencers
                </div>
                <div className="w-full mt-[43px] grid tablet:grid-cols-3 gap-[33px]">
                  <Link to="https://t.me/stackcacheDAO" target="_blank">
                    <PinkGradientButton>Stack Cache DAO Telegram Group</PinkGradientButton>
                  </Link>
                  <Link to="https://discord.com/invite/skFNnp8DaJ" target="_blank">
                    <PinkGradientButton>Stack Cache DAO Discord Channel</PinkGradientButton>
                  </Link>
                  <Link to="mailto:thestackdao@gmail.com">
                    <PinkGradientButton>Email the Stack Cache Team</PinkGradientButton>
                  </Link>
                </div>
                <div className="text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans mt-[45px]">
                  Community Member Built Assets
                </div>
                <div className="w-full tablet:w-[48%] mt-[18px]">
                  <ComingGradientButton>Coming Soon</ComingGradientButton>
                </div>
                <div className="text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans mt-[54px]">
                  Stack Cache Influencers (Board Members)
                </div>
                <div className="w-full mt-[24px] grid tablet:grid-cols-4 grid-cols-2 gap-[33px]">
                  <Link to="https://linktr.ee/muddymo" target="_blank">
                    <GradientButton>Muddy Mo</GradientButton>
                  </Link>
                  <Link to="https://youtube.com/@Vinman_124?si=W3M7IHusogbCQZ7R" target="_blank">
                    <GradientButton>Vinman</GradientButton>
                  </Link>
                  <GradientButton>Littlefish</GradientButton>
                  <GradientButton>0xDr</GradientButton>
                  <Link to="https://x.com/TinaTee65053940?t=oG9B4p0lW5YOoiANdRnTgg&s=09" target="_blank">
                    <GradientButton>Tina Tee</GradientButton>
                  </Link>
                  <GradientButton>Donatello Investing</GradientButton>
                  <GradientButton>Nakamoto Crypto</GradientButton>
                </div>
              </div>
            </GradientBox>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-[115px]">
          <div className="text-[24px] leading-[36px] tablet:text-[30px] tablet:leading-[48px] font-[300] font-sans">
            Partnerships
          </div>
          <div
            className="mt-[40px] tablet:w-[1000px] w-full backdrop-filter">
            <GradientBox>
              <div className="backdrop-filter flex flex-col items-center py-[40px] tablet:px-[50px] px-[12px] relative">
                <BackgroundDots />
                <img src={PartnerLogo} />
                <div className="mt-[40px] tablet:text-[20px] tablet:leading-[22px] text-center font-sans font-[300]">
                  Stack Cache is empowered through partnerships with individuals and groups. Feel free to contact us if
                  there are ways you can partner with us and we will be happy to explore options with you.
                </div>
                <div className="w-full tablet:w-[48%] mt-[45px]">
                  <Link to="mailto:stackcacheprotocol@gmail.com">
                    <PartnerGradientButton>Chat with Stack Cache About Partnerships</PartnerGradientButton>
                  </Link>
                </div>
                <div
                  className="text-[16px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] font-[300] font-sans mt-[54px] mb-[120px]">
                  Stack Cache Partners Coming Soon...
                </div>
              </div>
            </GradientBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityResources;
