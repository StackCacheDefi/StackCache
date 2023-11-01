import LOGO from "../../../imgs/about-C-logo.png";
import GrayButton from "../../GrayButton";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px] tablet:pb-[100px]">
      <div className="pt-[50px] tablet:pt-[100px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px]">
            <span className="text-[#fefefe]">Cache Token</span>
          </div>
          <div className="text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[530px] font-[200] px-3">
            Stack Cache’s native stabilized token that can be used to provide
            high stable yields on a consistent basis. Mint or earn Cache to
            enjoy decentralized community banking on your terms...
          </div>
          <GrayButton>Buy Cache Tokens</GrayButton>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-full top-[-20px] right-[0] desktop:right-[150px] z-0"
        />
      </div>
    </div>
  );
}
