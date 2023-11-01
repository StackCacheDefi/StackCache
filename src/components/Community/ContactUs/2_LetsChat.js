import LOGO from "../../../imgs/about-bg-logo.svg";
import RedButton from "../../RedButton";
import { Link } from "react-router-dom";

export default function LetsChat() {
  return (
    <div className="w-full border-b border-[#222] flex flex-col justify-center items-center relative py-[50px]">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[700px]"
      />
      <div className="text-[#F0F431] text-[26px] tablet:text-[36px] font-[300]">
        Let’s Chat...
      </div>
      <div className="max-w-[820px] text-white text-[16px] tablet:text-[20px] font-[300] leading-[24px]">
        Whether you’re curious about features, protocol functions, or even press—we’re ready to answer any and all questions
      </div>

      <div className="w-full max-w-[1024px] grid auto-rows-fr grid-cols-1 justify-between mt-[30px] laptop:grid-cols-2 tablet:grid-cols-1">
        <div className="flex flex-col items-center p-[20px]">
          <div className="text-white text-[20px] tablet:text-[24px] font-[300] leading-[64px]">
            Chat With Us
          </div>
          <div className="backdrop-blur flex flex-col flex-1 items-center justify-between w-full tablet:w-[450px] font-[200] gap-[22px] text-white bg-[#2229] border border-[#A5A6A5] rounded-[12px] px-[30px] py-[15px]">
            <div className="flex flex-1 items-center">
              For all general inquiries email,<br/>
              thestackdao@gmail.com
              <br/><br/>
              For all business inquiries email,<br/>
              stackcacheprotocol@gmail.com
            </div>
            <Link to="https://discord.com/invite/skFNnp8DaJ" target="_blank">
              <RedButton>
                Reach Out To Us
              </RedButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center p-[20px]">
          <div className="text-white text-[20px] tablet:text-[24px] font-[300] leading-[64px]">
            Support
          </div>
          <div className="backdrop-blur flex flex-col flex-1 items-center justify-between w-full tablet:w-[450px] font-[200] gap-[22px] text-white bg-[#2229] border border-[#A5A6A5] rounded-[12px] px-[30px] py-[15px]">
            <div className="flex flex-1 items-center">
              Need a hand on how to use Stack Cache or need technical assistance your? Communicate with a real, live human who understands Stack Cache & Defi
            </div>
            <Link to="https://t.me/stackcacheDAO" target="_blank">
              <RedButton>
                Get Support
              </RedButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center p-[20px]">
          <div className="text-white text-[20px] tablet:text-[24px] font-[300] leading-[64px]">
            Media
          </div>
          <div className="backdrop-blur flex flex-col flex-1 items-center justify-between w-full tablet:w-[450px] font-[200] gap-[22px] text-white bg-[#2229] border border-[#A5A6A5] rounded-[12px] px-[30px] py-[15px]">
            <div className="flex flex-1 items-center">
              We love connecting with influencers to share the Stack Cache info. Send us a note and our PR and Communications team will be in touch
            </div>
            <Link to="mailto:stackcacheprotocol@gmail.com">
              <RedButton>
                Get In Touch
              </RedButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center p-[20px]">
          <div className="text-white text-[20px] tablet:text-[24px] font-[300] leading-[64px]">
            Partnerships
          </div>
          <div className="backdrop-blur flex flex-col flex-1 items-center justify-between w-full tablet:w-[450px] font-[200] gap-[22px] text-white bg-[#2229] border border-[#A5A6A5] rounded-[12px] px-[30px] py-[15px]">
            <div className="flex flex-1 items-center">
              We’re into co-marketing with awesome brands. Reach out to us and our Partnerships team member will circle back.
            </div>
            <Link to="mailto:stackcacheprotocol@gmail.com">
              <RedButton>
                Let’s Chat
              </RedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
