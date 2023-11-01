import { Link } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../../imgs/logo.svg";
import YOUTUBE from "../../imgs/icon-social-youtube.png";
import DISCORD from "../../imgs/icon-social-discord.png";
import TWITTER from "../../imgs/icon-social-twitter.png";
import TELEGRAM from "../../imgs/icon-social-telegram.png";
import MEDIUM from "../../imgs/icon-social-medium.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 0 100px;
  }

  @media (max-width: 1080px) {
    padding: 0 50px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`;

const LogoImage = styled.img`
  width: 150px;

  @media (max-width: 1020px) {
    width: 100px;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.div`
  font-family: "WorkSans";
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ItemTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: black;
`;

const ItemText = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: black;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`;

const InfoLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoText = styled.div`
  font-family: Inter;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: black;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const Divider = styled.div`
  height: 0;
  width: 100%;
  border-top: 0.5px solid rgba(255, 255, 255, 0.3);
  margin: 100px 0;
`;

const Image = styled.img`
  width: 15px;
`;

export default function Footer() {
  return (
    <Container>
      <ItemContainer>
        <ItemList>
          <LogoImage src={LOGO} alt="logo" />
          <Title>
            Decentralized Community
            <br />Banking DAO
          </Title>
          <div className="flex flex-col items-start">
            <div>Join our community</div>
            <div className="flex gap-3">
              <a
                className="w-[32px] h-[32px] flex items-center justify-center bg-black"
                href="https://www.youtube.com/@stackcache"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={YOUTUBE} alt="youtube" />
              </a>
              <a
                className="w-[32px] h-[32px] flex items-center justify-center bg-black"
                href="https://twitter.com/_StackCache"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={TWITTER} alt="twitter" />
              </a>
              <a
                className="w-[32px] h-[32px] flex items-center justify-center bg-black"
                href="https://t.me/stackcacheDAO"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={TELEGRAM} alt="telegram" />
              </a>
              <a
                className="w-[32px] h-[32px] flex items-center justify-center bg-black"
                href="https://discord.com/invite/skFNnp8DaJ"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={DISCORD} alt="discord" />
              </a>
              <a
                className="w-[32px] h-[32px] flex items-center justify-center bg-black"
                href="https://medium.com/@stackcacheprotocol"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={MEDIUM} alt="medium" />
              </a>
            </div>
          </div>
        </ItemList>
        <ItemList>
          <ItemTitle>Community</ItemTitle>
          <Link to="/community/resources">
            <ItemText>Resources</ItemText>
          </Link>
          <Link to="/community/stack_nation">
            <ItemText>Stack Nation</ItemText>
          </Link>
          <Link to="/community/contact_us">
            <ItemText>Contact Us</ItemText>
          </Link>
          <Link to="/community/contact_us#social">
            <ItemText>Socials</ItemText>
          </Link>
        </ItemList>
        <ItemList>
          <ItemTitle>Products</ItemTitle>
          <Link to="/products/stack">
            <ItemText>Stack Token</ItemText>
          </Link>
          <Link to="/products/cache">
            <ItemText>Cache Token</ItemText>
          </Link>
          <Link to="/products/ntt">
            <ItemText>NTT's</ItemText>
          </Link>
          <Link to="/products/team_treasuries">
            <ItemText>Team Treasuries</ItemText>
          </Link>
        </ItemList>
        <ItemList>
          <ItemTitle>About</ItemTitle>
          <Link to="/about">
            <ItemText>How it works</ItemText>
          </Link>
          <Link to="/about#faq">
            <ItemText>FAQ's</ItemText>
          </Link>
          <Link to="/community/resources">
            <ItemText>Smart Contracts</ItemText>
          </Link>
          <Link to="/community/resources">
            <ItemText>Documentation</ItemText>
          </Link>
        </ItemList>
      </ItemContainer>

      <Divider />

      <InfoPanel>
        <InfoText>© 2023 Stack Cache DAO, All Rights Reserved</InfoText>
        <InfoLinks>
          <InfoText>Privacy Policy</InfoText>
          <InfoText>Terms & Conditions</InfoText>
        </InfoLinks>
      </InfoPanel>
    </Container>
  );
}
