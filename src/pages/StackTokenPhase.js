import styled from "styled-components";
import Intro from "../components/StackTokenPhase/1_Intro";
import Whitepaper from "../components/About/6_Doc";
import Footer from "../components/Home/8_Footer";
import Concept from "../components/StackTokenPhase/2_Concept";
import ConnectWallet from "../components/StackTokenPhase/3_ConnectWallet";
import BuySellTransfer from "../components/StackTokenPhase/4_BuySellTransfer";
import MyStackStats from "../components/StackTokenPhase/5_MyStackStats";
import OverallStats from "../components/StackTokenPhase/6_OverallStats";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #EBEBEB, #000000);
`;

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const StackTokenPhase = () => {
  return (
    <Container>
      <Intro />
      <Concept />
      <ConnectWallet />
      <BuySellTransfer />
      <MyStackStats />
      <OverallStats />
      <Whitepaper />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </Container>
  )
};

export default StackTokenPhase;
