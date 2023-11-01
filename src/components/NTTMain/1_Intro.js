import LOGO from "../../imgs/logo-bg.svg";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px]">
      <div className="pt-[50px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px]">
            <span className="text-[#fefefe]">Own Stack Cache thru</span>
            <br />
            <span className="text-[#ff0000] leading-[12px]">NTT's</span>
          </div>
          <div className="text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[500px] font-[200] px-3">
            Receive rewards from protocol owned treasuries in both Stack and
            Cache tokens. Get exclusive access, voting power, team rewards, as
            well as own a piece of Stack Cache in perpetuity.
          </div>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-full top-[-50px] right-[50%] z-[-2]"
        />
      </div>
    </div>
  );
}
