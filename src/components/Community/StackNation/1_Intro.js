import StackNationImg from "../../../imgs/img_stack_nation.png";
import RedButton from "../../RedButton";

const Intro = () => {
  return (
    <div className="w-full flex flex-col items-center pb-[75px] border-b border-b-[#D9D9D94D] px-[20px]">
      <img src={StackNationImg} className="tablet:w-auto w-full" />
      <div
        className="font-grotesk font-[400] text-white text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px] mt-[58px] mb-[48px]">
        What is Stack Nation?
      </div>
      <div className="w-full backdrop-blur bg-[#2229] rounded-[12px] border border-white relative tablet:w-[1200px] text-white font-[300] text-[18px] leading-[20px] font-sans p-[16px] tablet:p-[40px] pb-[33px] text-left">
        Stack Cache participants “Stack Nation” is comprised of a board & committee of veteran defi users, DAO members,
        team leaders (influencers), and YOU together as one to bring a great ecosystem for passive income for all.
        PEOPLE POWERED DEFI!
        <br/><br/>
        Our slogan is “For Defi Users, by Defi Users” and Stack Nation comes together to provide a fair and transparent
        defi ecosystem that we (as users) want to see. No special privileges for anyone, no exceptions. Stack Cache is
        fully democratic, transparent, and allows ALL participants to have a voice in the project.
        <br/><br/>
        Stack Cache was created with the goal of providing a solution for the common issues faced by investors in the
        crypto-defi space, such as: rug pulls, false information, unfulfilled promises, locked funds, distrustful
        developers/project leaders, excessive taxes and more.
        <br/><br/>
        Stack Nation’s Solutions For Defi Fairness:
        <ul className="list-disc pl-[30px]">
          <li>Open Source Code</li>
          <li>Multi-signature wallets (no one person can do anything)</li>
          <li>Voting on ALL aspects of the protocol</li>
          <li>Fair launch (nobody gets free/cheap Stack tokens)</li>
          <li>No dev wallet/admin keys</li>
          <li>Locked liquidity</li>
          <li>No MLM, and (team leaders only get rewarded from their team treasury)</li>
        </ul>
        <br/>
        <div className="flex justify-center gap-[16px] tablet:gap-[80px]">
          <RedButton>Chat with Stack Nation on Telegram</RedButton>
          <RedButton>Chat with Stack Nation on Discord</RedButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
