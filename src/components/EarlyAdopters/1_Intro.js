import LOGO from "../../imgs/about-SC-logo.png";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px]">
      <div className="pt-[50px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px]">
            <span className="text-[#ffffff]">Stack Cache<br/>Early Adopters</span>
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[525px] font-[200] px-3">
            Participation in the early stages of the Stack Cache
            gives you the opportunity to be an OWNER early and
            receive up to 250% of your deposit back or get credited
            with principal in Cache Box & CBC!
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
