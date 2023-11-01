import LinkTree from "../../../imgs/icon-social-linktree.svg";
import XTwitter from "../../../imgs/icon-social-twitter-x.svg";
import Discord from "../../../imgs/icon-social-discord-blue.svg";
import Youtube from "../../../imgs/icon-social-youtube.svg";
import Telegram from "../../../imgs/icon-social-telegram.svg";
import Medium from "../../../imgs/icon-social-medium.svg";
import styled from "styled-components";

const Title = styled.div`
  font-family: WorkSans;
  font-weight: 300;
  font-size: 28px;
  line-height: 50px;
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  align-content: flex-start;
  font-family: WorkSans;
  font-weight: 200;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const LinkItem = styled.div`
  font-family: WorkSans;
  font-weight: 300;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 15px;
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  text-decoration: underline;
`;
export default function SocialMedia() {
  return (
    <div className="w-full py-[50px]" id="social">
      <div className="font-grotesk text-white text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px]">
        Stack Cache Social Media
      </div>
      <div className="w-full flex justify-center mt-[30px] tablet:mt-[80px] px-[16px]">
        <div className="w-full tablet:w-[1024px] flex flex-col gap-[16px] tablet:gap-[45px]">
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={LinkTree}
              alt="linktree"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#00E45B] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#00E45B]">Linktree</Title>
              <Description>For all Stack Cache Resources and Information</Description>
              <a
                href="https://linktr.ee/stackcache"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://linktr.ee/stackcache
                </LinkItem>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={XTwitter}
              alt="xtwitter"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#fff] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#fff]">X (Twitter)</Title>
              <Description>Stay up to date on the latest news and updates from Stack Cache</Description>
              <a
                href="https://twitter.com/_StackCache"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://twitter.com/_StackCache
                </LinkItem>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={Discord}
              alt="discord"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#5865F2] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#5865F2]">Discord</Title>
              <Description>For public & private channel (NTT) community chatting and information share</Description>
              <a
                href="https://discord.com/invite/skFNnp8DaJ"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://discord.com/invite/skFNnp8DaJ
                </LinkItem>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={Youtube}
              alt="youtube"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#FF0000] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#FF0000]">Youtube</Title>
              <Description>For videos & content from Stack Cache and community members</Description>
              <a
                href="https://www.youtube.com/@stackcache"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://www.youtube.com/@stackcache
                </LinkItem>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={Telegram}
              alt="Telegram"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#00E45B] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#00E45B]">Telegram</Title>
              <Description>For real-time conversations/chat with Stack Cache DAO members and community</Description>
              <a
                href="https://t.me/stackcacheDAO"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://t.me/stackcacheDAO
                </LinkItem>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px] tablet:gap-[45px]">
            <img
              src={Medium}
              alt="Medium"
              className="flex justify-center w-[60px] h-[60px] tablet:h-[180px] tablet:w-[180px]"
            />
            <div
              className="flex-1 border border-[#fff] h-[140px] py-[20px] px-[12px] tablet:h-[180px] rounded-[12px] flex flex-col items-center overflow-hidden">
              <Title className="text-[#fff]">Medium</Title>
              <Description>Stay up to date on the latest news and updates from Stack Cache</Description>
              <a
                href="https://medium.com/@stackcacheprotocol"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <LinkItem>
                  https://medium.com/@stackcacheprotocol
                </LinkItem>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
