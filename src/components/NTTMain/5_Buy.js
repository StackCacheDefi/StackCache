import RedButton from "../RedButton";

export default function Buy() {
  return (
    <div className="py-[50px] tablet:py-[100px] relative w-full xl:w-[1280px]">
      <div className="flex flex-col items-center gap-[15px] tablet:gap-[30px]">
        <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px]">
          <span className="text-[#fefefe] font-[300]">How To Get A HBoard NTT</span>
        </div>
        <div className="text-[18px] leading-[20px] tablet:text-[22px] tablet:leading-[28px] text-white max-w-[600px] font-[200] px-[10px]">
          Complete the form below, deposit funds, and determine whether you want to receive 200% (100% USDC, 100% Cache Box) or 250% (Cache Box) of your deposit.
        </div>
        <RedButton>
          <div className="font-[200]">Buy HBoard NTT</div>
        </RedButton>
      </div>
    </div>
  );
}
