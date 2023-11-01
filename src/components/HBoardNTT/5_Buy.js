import { Underline } from "./3_Concept";

export default function Buy() {
  return (
    <div className="py-[50px] tablet:py-[100px] relative w-full xl:w-[1280px]">
      <div className="flex flex-col items-center gap-[15px] tablet:gap-[30px]">
        <div
          className="font-sans font-[300] text-[#3590FF] text-[24px] leading-[32px] tablet:text-[32px] tablet:leading-[48px]">
          How To Get A HBoard NTT
        </div>
        <div
          className="text-left text-[18px] leading-[20px] tablet:text-[22px] tablet:leading-[28px] text-white max-w-[800px] font-[200] px-[10px]">
          <ul className="list-disc pl-[30px]">
            <li>
              <Underline>Pre-launch/Early Adopter (below)</Underline>: complete the early adopter form, determine whether you want to receive 100%
              (Cache Box), 200% (100% USDC, 100% Cache Box), or 250% (Cache Box) of your deposit, and deposit funds
            </li>
            <br/>
            <li>
              <Underline>Post-launch</Underline>: purchase and hold Stack Tokens more than the average amount of Stack held by all Hboard & Board
              NTT holders
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
