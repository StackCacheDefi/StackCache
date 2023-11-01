import LOGO from "../../../imgs/img_stack_white.svg";

export default function Intro() {
  return (
    <div className="w-full border-b border-[#222] flex justify-center pb-[50px]">
      <div className="pt-[50px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px]">
            <span className="text-[#ffffff]">Contact Us</span>
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[525px] font-[200] px-3">
            Stack Cache prides itself on hearing the community and providing the best Defi experience for all users
          </div>
        </div>
        <img
          src={LOGO}
          alt="logo"
          className="absolute h-[200px] tablet:h-[300px] top-[-20px] tablet:top-[-80px] left-[0] desktop:left-[150px] z-[-2]"
        />
      </div>
    </div>
  );
}
