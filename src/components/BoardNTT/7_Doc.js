import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 500px;
  }
`;

const LeftSideContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%),
    #c40101;

  @media (max-width: 1200px) {
    justify-content: center;
    padding: 0;
  }
`;

const WhitepaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;

  @media (max-width: 510px) {
    max-width: none;
    width: 100%;
    padding: 0 20px 0 40px;
  }

  @media (max-width: 400px) {
    max-width: none;
    width: 100%;
    padding: 0 10px;
  }
`;

const Header = styled.div`
  font-family: SpaceGrotesk;
  font-size: 42px;
  font-weight: 100;
  letter-spacing: -0.05em;
  color: #fff;
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 860px) {
    font-size: 46px;
  }

  @media (max-width: 510px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-family: "WorkSans";
  font-weight: 300;
  font-size: 22px;
  letter-spacing: -0.05em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fefefe;
  max-width: 600px;
  text-align: left;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fefefe;
  border-radius: 6px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const RightSideContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: center;
    padding: 0;
  }
`;

const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 450px;

  @media (max-width: 510px) {
    max-width: none;
    width: 100%;
    padding: 0 20px 0 40px;
  }

  @media (max-width: 400px) {
    max-width: none;
    width: 100%;
    padding: 0 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  padding: 17px 0 17px 22px;
  background: #fff;
  border-radius: 12px;
  font-family: "WorkSans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border: none;
  flex: 1;
`;

export const SubscribeButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s;
  color: #fff;

  &:hover {
    background: linear-gradient(180deg, #ff616f 0%, #af142b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:active {
    background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:disabled {
    background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Whitepaper() {
  return (
    <>
      <Container>
        <LeftSideContainer>
          <WhitepaperContainer>
            <Header>Read our Whitepaper</Header>
            <Description>
              Learn about the specifics of the Stack Cache Ecosystem.
            </Description>
            <DownloadButtons>
              <a
                href="https://tr.ee/lWPrqUOWyg"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Download Whitepaper PDF</Button>
              </a>
              <a
                href="https://d1fdloi71mui9q.cloudfront.net/0RtRXxyRju7TJjeF2jUV_Stack%20Cache%20Litepaper%20v2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Download Litepaper PDF</Button>
              </a>
            </DownloadButtons>
          </WhitepaperContainer>
        </LeftSideContainer>
        <RightSideContainer>
          <NewsletterContainer>
            <div>
              <Header>Join our Newsletter</Header>
              <Description>
                Get access to premium Stack Cache content
              </Description>
            </div>
            <InputContainer>
              <Input placeholder="Enter your email address" />
              <SubscribeButton>Subscribe Now</SubscribeButton>
            </InputContainer>
          </NewsletterContainer>
        </RightSideContainer>
      </Container>
    </>
  );
}
