import LOGO from "../../imgs/img_s_logo.svg";

export default function Intro() {
  return (
    <div className="w-full flex justify-center pb-[50px] border-b border-[#FFFFFF]">
      <div className="w-full desktop:w-[1200px] flex flex-col items-center px-[12px]">
        <div className="w-full flex flex-col items-center relative pt-[50px] pb-[50px]">
          <div
            className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px] text-[#EE0033]">
            Stack Token Phase
          </div>
          <div
            className="mt-[30px] text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] text-black max-w-[810px] font-[300]">
            Buy Stack tokens and receive more Stack for holding them in the your wallet. Get a NTT to receive Stack in
            escrow & other rewards. Tell friends to use your wallet address and receive 1% of their deposited Stack
          </div>
          <img
            src={LOGO}
            alt="logo"
            className="absolute h-full top-[-20px] right-[0] desktop:right-[150px] opacity-10"
          />
        </div>
      </div>
    </div>
  );
};
