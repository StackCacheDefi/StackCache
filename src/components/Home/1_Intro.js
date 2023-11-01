import { Link } from "react-router-dom";
import styled from "styled-components";
import STACK_CACHE_STAR from "../../imgs/stack-cache-star.svg";
import STACK_CACHE_LOGO_STAR from "../../imgs/stack-cache-logo-star.svg";
import RedButton from "../RedButton";
import GrayButton from "../GrayButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    padding: 0 5px;
  }
`;

const ImageStackCacheText = styled.img`
  width: 300px;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const ImageStackCacheLogo = styled.img`
  width: 400px;

  @media (max-width: 1020px) {
    display: none;
  }
`;

const Description = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding-left: 50px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 90%;
    padding-left: 40px;
  }
`;

const DescriptionText = styled.div`
  font-family: WorkSans;
  font-size: 20px;
  font-weight: 200;
  line-height: 32px;
  color: #fff;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Intro() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ImageStackCacheText src={STACK_CACHE_STAR} />
          <Description>
            <DescriptionText>
              People-powered decentralized community banking Dapp with full DAO
              governance. A DeFi system of economic products designed to safely
              provide ALL passive crypto income.
            </DescriptionText>
            <ButtonGroup>
              <RedButton>Launch Dapp</RedButton>
              <Link to="/about">
                <GrayButton>Learn More</GrayButton>
              </Link>
            </ButtonGroup>
          </Description>
        </div>
        <ImageStackCacheLogo src={STACK_CACHE_LOGO_STAR} />
      </Container>
    </>
  );
}
