import styled from "styled-components";
import Intro from "../components/StackFairLaunch/1_Intro";
import Days from "../components/StackFairLaunch/2_Days";
import Participate from "../components/StackFairLaunch/3_Participate";
import ConnectWallet from "../components/StackFairLaunch/4_ConnectWallet";
import Distribution from "../components/StackFairLaunch/5_Distribution";
import Whitepaper from "../components/StackFairLaunch/7_Whitepaper";
import Footer from "../components/StackFairLaunch/8_Footer";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #A8A8A8, #FFFFFF);
`;

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const StackFairLaunch = () => {
  return (
    <Container>
      <Intro />
      <Days />
      <Participate />
      <ConnectWallet />
      <Distribution />
      <Whitepaper />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </Container>
  )
};

export default StackFairLaunch;
