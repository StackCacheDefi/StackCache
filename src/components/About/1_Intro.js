import LOGO from "../../imgs/about-SC-logo.png";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px] tablet:pb-[100px]">
      <div className="pt-[50px] tablet:pt-[100px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px]">
            <span className="text-[#fefefe]">About Stack Cache</span>
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[530px] font-[200] px-3">
            The Defi ecosystem designed to provide ALL with passive cash flows of crypto income. Decentralized community
            banking on your own terms...
          </div>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-full top-[-20px] left-[0] desktop:left-[150px] z-[-2]"
        />
      </div>
    </div>
  );
}
