import styled from "styled-components";
import Footer from "../components/Home/8_Footer";
import Intro from "../components/EarlyAdopters/1_Intro";
import EarlyAdopter from "../components/EarlyAdopters/2_EarlyAdopter";
import HBoardNTTDeposit from "../components/EarlyAdopters/3_HBoardNTTDeposit";
import BoardNTTDeposit from "../components/EarlyAdopters/4_BoardNTTDeposit";
import CommitteeNTTDeposit from "../components/EarlyAdopters/5_CommitteeNTTDeposit";
import FAQ from "../components/EarlyAdopters/6_FAQ";
import Doc from "../components/EarlyAdopters/7_Doc";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const EarlyAdopters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <EarlyAdopter />
      <HBoardNTTDeposit />
      <BoardNTTDeposit />
      <CommitteeNTTDeposit />
      <FAQ />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default EarlyAdopters;
