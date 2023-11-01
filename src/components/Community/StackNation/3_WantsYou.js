import RedButton from "../../RedButton";
import LOGO from "../../../imgs/about-bg-logo.svg";

const WantsYou = () => {
  return (
    <div
      className="w-full flex text-white flex-col items-center px-[20px] mb-[50px] relative">
      <div
        className="font-grotesk font-[400] text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px] mt-[58px] mb-[48px]">
        Stack Nation Wants You...
      </div>
      <div className="font-sans font-[300] text-[16px] leading-[21px] text-center mb-[50px] tablet:w-[1200px]">
        Stack Cache is all about building and growing community and we offer everyone an opportunity to be a part of the
        Stack Cache ecosystem as a participant. We also welcome you to have more of a say within the ecosystem and/or
        contribute in other ways if you have additional talents
      </div>
      <img src={LOGO} className="absolute h-[800px] bottom-[-60px]"/>
      <div
        className="w-full flex flex-col items-center backdrop-blur bg-[#2229] rounded-[12px] border border-[#DF3D4E] relative tablet:w-[1200px] text-white font-[300] text-[16px] tablet:text-[18px] leading-[20px] font-sans p-[16px] tablet:p-[30px] text-left">
        <div
          className="font-sans font-[300] text-[24px] leading-[32px] tablet:text-[32px] tablet:leading-[48px] mb-[20px] text-center">
          How to Become Stack Nation
        </div>
        <ul className="list-disc pl-[30px]">
          <li>
            Join Stack Cache as a DAO Member
            <ul className="list-disc pl-[30px]">
              <li>
                Find or be given a Team Treasury
              </li>
              <li>
                Buy Stack tokens and/or participate in our Cache products
              </li>
            </ul>
          </li>
          <br />
          <li>
            Recruiting others by being a Team Leader
            <ul className="list-disc pl-[30px]">
              <li>Become a DAO Member</li>
              <li>Recruit 10 Stack Cache participants to use your wallet address as their preferred team</li>
            </ul>
          </li>
          <br />
          <li>
            Enhance your position as a Committee Member
            <ul className="list-disc pl-[30px]">
              <li>Become a DAO Member</li>
              <li>Purchase a Committee NTT</li>
              <li>Join the Private Committee Discord and Telegram groups (sent upon purchase)</li>
            </ul>
          </li>
          <br />
          <li>
            Help lead the project as a Board Member
            <ul className="list-disc pl-[30px]">
              <li>Become a DAO Member</li>
              <li>Attain a Board or HBoard NTT
                <ul className="list-disc pl-[30px]">
                  <li>*Pre-Stack Token Launch* Purchase a HBoard or Board NTT</li>
                  <li>*Post-Stack Token Launch* Buy and hold enough Stack tokens to equal the average of all Board &
                    HBoard NTT Holder
                    (must maintain HBoard NTT status for 60 days)
                  </li>
                </ul>
              </li>
              <li>Join the Private Board Discord and Telegram groups (sent upon purchase or meeting qualifications)</li>
            </ul>
          </li>
        </ul>
        <br />
        Are you a developer, influencer, marketing specialist, community manager, community builder, statistician,
        mathematical guru, or have other talents to bring to Stack Cache? Let’s discuss possibilities...
        <div className="flex justify-center mt-[40px] mb-[10px]">
          <RedButton>Let Us Know How You Can Help</RedButton>
        </div>
      </div>
    </div>
  );
};

export default WantsYou;
