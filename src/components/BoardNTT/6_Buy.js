import { Underline } from "../HBoardNTT/3_Concept";

export default function Buy() {
  return (
    <div className="py-[50px] relative w-full xl:w-[1280px]">
      <div className="flex flex-col items-center gap-[15px] tablet:gap-[30px]">
        <div
          className="font-grotesk text-[24px] leading-[32px] tablet:text-[32px] tablet:leading-[48px] text-white font-[400]">
          How To Get A HBoard NTT
        </div>
        <div
          className="text-left text-[18px] leading-[20px] tablet:text-[22px] tablet:leading-[28px] text-white max-w-[800px] font-[200] px-[10px] flex flex-col gap-[20px]">
          <ul className="list-disc pl-[30px]">
            <li>
              <Underline>Pre-launch Phase 2 Early Adopter:</Underline> complete the form, deposit funds, and receive $500 credited to your
              Cache Box principal, and $500 credited to your CBC principal after the Stack launch
            </li>
            <br />
            <li>
              <Underline>Pre-launch Phase 3 Team Building:</Underline> available for $2500 purchase (no early adopter rewards)
            </li>
            <br />
            <li>
              <Underline> Pre-Launch “Phase 3” Stack Fair Launch:</Underline> available for $5000 purchase (no early adopter rewards)
            </li>
            <br />
            <li>
              <Underline>Post Launch:</Underline> Board NTT’s are not available for purchase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
