import styled from "styled-components";
import YOUTUBE from "../../imgs/icon-social-youtube.png";
import DISCORD from "../../imgs/icon-social-discord.png";
import TWITTER from "../../imgs/icon-social-twitter.png";
import TELEGRAM from "../../imgs/icon-social-telegram.png";
import MEDIUM from "../../imgs/icon-social-medium.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Image = styled.img`
  height: 25px;

  @media (max-width: 1020px) {
  }
`;

export default function SocialLinks() {
  return (
    <Container>
      <a
        href="https://www.youtube.com/@stackcache"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={YOUTUBE} alt="youtube" />
      </a>
      <a
        href="https://twitter.com/_StackCache"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={TWITTER} alt="twitter" />
      </a>
      <a href="https://t.me/stackcacheDAO" target="_blank" rel="noreferrer">
        <Image src={TELEGRAM} alt="telegram" />
      </a>
      <a href="https://discord.com/invite/skFNnp8DaJ" target="_blank" rel="noreferrer">
        <Image src={DISCORD} alt="discord" />
      </a>
      <a
        href="https://medium.com/@stackcacheprotocol"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={MEDIUM} alt="medium" />
      </a>
    </Container>
  );
}
