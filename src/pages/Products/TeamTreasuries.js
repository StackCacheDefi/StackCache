import styled from "styled-components";
import { useEffect } from "react";
import Intro from "../../components/Products/TeamTreasuries/1_Intro";
import Concept from "../../components/Products/TeamTreasuries/2_Concept";
import Rewards from "../../components/Products/TeamTreasuries/3_Rewards";
import Doc from "../../components/BoardNTT/7_Doc";
import Footer from "../../components/Home/8_Footer";
import Overview from "../../components/Products/TeamTreasuries/4_Overview";
import Buy from "../../components/Products/TeamTreasuries/5_Buy";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const TeamTreasuries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <Concept />
      <Rewards />
      <Overview />
      <Buy />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default TeamTreasuries;
