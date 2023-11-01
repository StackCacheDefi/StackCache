import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Alert = styled.div`
  font-family: SpaceGrotesk;
  font-weight: 400;
  font-size: 64px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 860px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Description = styled.div`
  font-family: WorkSans;
  font-weight: 300;
  font-size: 24px;
  line-height: 26px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Button = styled.button`
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  color: #000;

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #ccc 100.12%);
  }

  &:active {
    background: linear-gradient(180deg, #ccc 0%, #fff 100.12%);
  }
`;

export default function NTTCountDown() {
  return (
    <Container>
      <Alert>Early Adopter NTT Sale Now!</Alert>
      <Description>
        We want YOU to be an OWNER first. Get up to 250% of your deposit after launch along with a
        NTT to own a piece of the protocol FOREVER!
      </Description>
      <Link to="/early_adopters">
        <Button>Early Adopter Presale</Button>
      </Link>
    </Container>
  );
}
