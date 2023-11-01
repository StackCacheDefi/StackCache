import styled from "styled-components";
import Intro from "../components/HBoardNTT/1_Intro";
import Deposit from "../components/HBoardNTT/2_Deposit";
import Overview from "../components/HBoardNTT/2_Overview";
import Concept from "../components/HBoardNTT/3_Concept";
import Benefits from "../components/HBoardNTT/4_Benefits";
import Buy from "../components/HBoardNTT/5_Buy";
import Doc from "../components/HBoardNTT/6_Doc";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const HBoardNTT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <Overview />
      <Concept />
      <Benefits />
      <Buy />
      <Deposit />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default HBoardNTT;
