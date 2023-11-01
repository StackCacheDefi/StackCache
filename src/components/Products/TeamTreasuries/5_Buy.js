import { Underline } from "../../HBoardNTT/3_Concept";

export default function Buy() {
  return (
    <div className="py-[50px] mb-[50px] relative w-full xl:w-[1280px]">
      <div className="flex flex-col items-center gap-[15px] tablet:gap-[30px]">
        <div
          className="font-grotesk text-[24px] leading-[32px] tablet:text-[32px] tablet:leading-[48px] text-[#F4A227] font-[300]">
          How to get a Team Leader NTT
        </div>
        <div
          className="text-left text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[28px] text-white max-w-[800px] font-[200] px-[10px] flex flex-col gap-[20px]">
          <ul className="list-disc pl-[30px]">
            <li>
              <Underline>Pre-launch “Phase 3” Team Building</Underline>:
              receive a Team Leader NTT by having 10 users use your wallet address. Additionally, if your team partners
              purchase board or committee NTT’s prior to the Stack fair launch, you can also receive a board or
              committee NTT (depending on how much is bought by partners)
            </li>
            <li className="ml-[30px]">
              By creating a team treasury prior to the Stack fair launch, your team treasury qualifies for bonus Stack
              token distribution allocations
            </li>
            <br />
            <li>
              <Underline>Post Launch</Underline>: Always available and automatically triggered once 10 users use your
              wallet address
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
