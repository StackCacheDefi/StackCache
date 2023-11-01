import styled from "styled-components";
import ALL_NTTS from "../../imgs/all-ntts.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  @media (max-width: 1200px) {
    gap: 10px;
    padding: 0 50px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const Image = styled.img`
  flex: 1;
  padding-right: 50px;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 50px;
  text-align: left;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 500px) {
    text-align: center;
    width: 100%;
  }
`;

const WhiteHeader = styled.div`
  font-family: "SpaceGrotesk";
  font-size: 48px;
  line-height: 48px;
  color: #fefefe;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

const RedHeader = styled.div`
  font-family: "SpaceGrotesk";
  font-size: 48px;
  color: #f00;

  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

const Description = styled.div`
  font-family: "WorkSans";
  font-weight: 200;
  font-size: 22px;
  letter-spacing: -0.05em;
  color: #fefefe;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default function NTTRewards() {
  return (
    <Container>
      <Image src={ALL_NTTS} alt="ntts" width={400} />
      <TextContainer>
        <WhiteHeader>Have Permanent Ownership in Stack Cache to Earn</WhiteHeader>
        <RedHeader>NTT rewards</RedHeader>
        <Description>
          Increase you passive rewards and voting privileges with HBoard, Board, and Committee NTT’s. Build and grow a team treasury through earning a Team Leader NTT or join a strong team treasury and participate for additional bi-weekly passive rewards.
        </Description>
      </TextContainer>
    </Container>
  );
}
