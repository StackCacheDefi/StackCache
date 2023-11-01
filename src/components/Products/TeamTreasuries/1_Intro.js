import LOGO from "../../../imgs/logo-bg.svg";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px] tablet:pb-[100px]">
      <div className="pt-[50px] tablet:pt-[100px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[26px] leading-[32px] tablet:text-[38px] tablet:leading-[38px]">
            <span className="text-[#F4A227] font-[300]">
              Team Treasuries &
            </span>
            <br />
            <span className="text-[#ffffff] font-[300] leading-[12px]">
              Team Leader NTT’s
            </span>
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[22px] tablet:leading-[28px] text-white max-w-[600px] font-[200] px-3">
            Get rewarded airdrops by how much your participate. Thru your team treasury, let your voice be heard, build
            massive passive rewards, and control your destiny!
          </div>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-full top-[-50px] left-0 z-[-2]"
        />
      </div>
    </div>
  );
}
