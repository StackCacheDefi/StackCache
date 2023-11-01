import styled from "styled-components";
import Intro from "../../components/Community/Resources/1_Intro";
import Doc from "../../components/EarlyAdopters/7_Doc";
import Footer from "../../components/Home/8_Footer";
import GeneralInformation from "../../components/Community/Resources/2_GeneralInformation";
import CommunityResources from "../../components/Community/Resources/3_CommunityResources";
import SmartContracts from "../../components/Community/Resources/4_SmartContracts";
import CryptoWalletAndMarketing from "../../components/Community/Resources/5_WalletAndMarketing";
import FeeStructure from "../../components/Community/Resources/6_Fee";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[55px] w-full flex flex-col items-center text-white">
      <Intro />
      <GeneralInformation />
      <CommunityResources />
      <SmartContracts />
      <CryptoWalletAndMarketing />
      <FeeStructure />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default Resources;
