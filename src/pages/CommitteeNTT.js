import styled from "styled-components";
import Intro from "../components/CommitteeNTT/1_Intro";
import Deposit from "../components/CommitteeNTT/2_Deposit";
import Overview from "../components/CommitteeNTT/4_Overview";
import Concept from "../components/CommitteeNTT/3_Concept";
import Benefits from "../components/CommitteeNTT/5_Benefits";
import Buy from "../components/CommitteeNTT/6_Buy";
import Doc from "../components/CommitteeNTT/7_Doc";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const CommitteeNTT = () => {
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

export default CommitteeNTT;
