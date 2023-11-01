import styled from "styled-components";
import Intro from "../components/Home/1_Intro";
import NTTCountDown from "../components/Home/2_NTTCountDown";
import SocialLinks from "../components/Home/3_SocialLinks";
import Functions from "../components/Home/4_Functions";
import NTTRewards from "../components/Home/5_NTTRewards";
import FAQ from "../components/Home/6_FAQ";
import Whitepaper from "../components/Home/7_Whitepaper";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FullContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const RedColorContainer = styled.div`
  background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%),
    #c40101;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ComponentContainer>
        <Intro />
      </ComponentContainer>
      <RedColorContainer>
        <NTTCountDown />
      </RedColorContainer>
      <ComponentContainer>
        <SocialLinks />
      </ComponentContainer>
      <ComponentContainer>
        <Functions />
      </ComponentContainer>
      <ComponentContainer>
        <NTTRewards />
      </ComponentContainer>
      <FullContainer style={{ background: "rgba(255, 255, 255, 0.11)" }}>
        <ComponentContainer>
          <FAQ />
        </ComponentContainer>
      </FullContainer>
      <Whitepaper />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </Container>
  );
};

export default Home;
