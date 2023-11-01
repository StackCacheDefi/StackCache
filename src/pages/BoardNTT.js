import styled from "styled-components";
import Intro from "../components/BoardNTT/1_Intro";
import Deposit from "../components/BoardNTT/2_Deposit";
import Overview from "../components/BoardNTT/4_Overview";
import Concept from "../components/BoardNTT/3_Concept";
import Benefits from "../components/BoardNTT/5_Benefits";
import Buy from "../components/BoardNTT/6_Buy";
import Doc from "../components/BoardNTT/7_Doc";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const BoardNTT = () => {
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

export default BoardNTT;
