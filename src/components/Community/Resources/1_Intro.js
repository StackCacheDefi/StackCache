import LOGO from "../../../imgs/img_stack_white.svg";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[80px]">
      <div className="tablet:pt-[100px] pt-[50px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px]">
            Resources
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[24px] tablet:leading-[28px] max-w-[525px] font-[200] px-3">
            Crypto-Defi success starts with knowledge. Check out our information capital to get valuable insight and
            knowledge to grow and scale your crypto
          </div>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-[200px] tablet:h-[300px] top-[-20px] tablet:top-[-20px] left-[0] desktop:left-[150px] z-[-2]"
        />
      </div>
    </div>
  );
}
