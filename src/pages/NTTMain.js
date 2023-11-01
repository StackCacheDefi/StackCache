import styled from "styled-components";
import Intro from "../components/NTTMain/1_Intro";
import Concept from "../components/NTTMain/2_Concept";
import Types from "../components/NTTMain/3_Types";
import EarlyAdopter from "../components/NTTMain/4_EarlyAdopter";
import FAQ from "../components/NTTMain/5_FAQ";
import Doc from "../components/NTTMain/6_Doc";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const NTTMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <Concept />
      <Types />
      <EarlyAdopter />
      <FAQ />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default NTTMain;
