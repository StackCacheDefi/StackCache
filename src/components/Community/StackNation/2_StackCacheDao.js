import ICON_ARROW from "../../../imgs/icon-arrow-up.svg";
import LOGO from "../../../imgs/img_stack_white.svg";
import TRIANGLE from "../../../imgs/img_triangle.svg";
import { useState } from "react";
import IconArrowUp from "../../../assets/imgs/IconArrowUp";

const StackCacheDao = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  return (
    <div className="mt-[45px] pb-[85px] border-b border-b-[#D9D9D94D] w-full px-[20px] text-white flex flex-col items-center ">
      <div className="w-full tablet:w-[1200px] flex flex-col items-center relative">
        <img src={LOGO} className="absolute h-[800px]"/>
        <div className="relative z-index-2 w-full">
          <div
            className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
            onClick={() => setCollapse1(!collapse1)}
          >
            <div className="text-[24px] tablet:text-[32px] font-[300] font-sans">
              How The Stack Cache DAO Works
            </div>
            <img
              src={ICON_ARROW}
              alt="icon arrow"
              className={`duration-200 ${collapse1 ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`duration-500 ${
              collapse1 ? "" : "hidden"
            } border border-[#A5A6A5] rounded-lg bg-[#2229] backdrop-blur text-left font-sans font-[200]  px-[48px] py-[22px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1`}
          >
            <ul className="list-disc pl-[10px]">
              <li>
                Stack Cache is a DAO (Decentralized Autonomous Organization) meaning that all participants will have an
                autonomous vote in the project
              </li>
              <br />
              <li>Stack Cache has no single point of power as there are Board members, Committee members, and DAO members
                that collectively makes decisions for the protocol
              </li>
              <br />
              <li>Users have the option to choose what level of the DAO they want to be a part of through
                purchasing/earning NTT’s
              </li>
              <br />
              <li>
                Voting power is separated into 3 groups that each have different levels of voting power
                <ul className="list-disc pl-[30px]">
                  <li><span className="underline">Board</span> - Board Members/Board NTT Holders</li>
                  <li><span className="underline">Committee</span> - Committee NTT Holders & hboard NTT Holders</li>
                  <li><span className="underline">Dao members</span> - All participants that are not board or committee NTT holders</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row mt-[50px] laptop:mb-[50px] gap-[50px] w-full">
          <div
            className={`relative z-index-2 flex-1`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px] text-[#1894E6] fill-[#1894E6]"
              onClick={() => setCollapse2(!collapse2)}
            >
              <div className="text-[20px] tablet:text-[28px] font-[300]">
                Board Members
              </div>
              <div className={`duration-200 ${collapse2 ? "" : "rotate-180"}`}>
                <IconArrowUp />
              </div>
            </div>
            <div
              className={`duration-500 ${
                collapse2 ? "" : "hidden"
              } border border-[#1894E6] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] px-[9px] py-[24px] text-[16px] tablet:text-[18px] leading-[22px] underline-offset-4 decoration-1 h-full`}
            >
              <ul className="ml-[20px] pl-[10px] list-disc">
                <li>
                  Can participate (earn) in all cache products
                </li>
                <li>
                  Receives Stack token reflections
                </li>
                <li>
                  Earns from a team treasury
                </li>
                <li>
                  Receives Stack & Cache rewards from the Board Treasury
                </li>
                <li>
                  Votes thru Telegram & Website
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`relative z-index-2 flex-1`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px] text-[#12AC2A] fill-[#12AC2A]"
              onClick={() => setCollapse3(!collapse3)}
            >
              <div className="text-[20px] tablet:text-[28px] font-[300]">
                Committee Members
              </div>
              <div className={`duration-200 ${collapse3 ? "" : "rotate-180"}`}>
                <IconArrowUp />
              </div>
            </div>
            <div
              className={`duration-500 ${
                collapse3 ? "" : "hidden"
              } border border-[#12AC2A] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] px-[9px] py-[24px] text-[16px] tablet:text-[18px] leading-[22px] underline-offset-4 decoration-1 h-full`}
            >
              <ul className="ml-[20px] pl-[10px] list-disc">
                <li>
                  Can participate (earn) in all cache products
                </li>
                <li>
                  Receives Stack token reflections
                </li>
                <li>
                  Earns from a team treasury
                </li>
                <li>
                  Receives Stack & Cache rewards from the Board Treasury
                </li>
                <li>
                  Votes thru Telegram & Website
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`relative z-index-2 flex-1`}
          >
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px] text-[#BE3184] fill-[#BE3184]"
              onClick={() => setCollapse4(!collapse4)}
            >
              <div className="text-[20px] tablet:text-[28px] font-[300]">
                DAO Members
              </div>
              <div className={`duration-200 ${collapse4 ? "" : "rotate-180"}`}>
                <IconArrowUp />
              </div>
            </div>
            <div
              className={`duration-500 ${
                collapse4 ? "" : "hidden"
              } border border-[#BE3184] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] px-[9px] py-[24px] text-[16px] tablet:text-[18px] leading-[22px] underline-offset-4 decoration-1 h-full`}
            >
              <ul className="ml-[20px] pl-[10px] list-disc">
                <li>
                  Can participate (earn) in all cache products
                </li>
                <li>
                  Receives Stack token reflections
                </li>
                <li>
                  Earns from a team treasury
                </li>
                <li>
                  Receives Stack & Cache rewards from the Board Treasury
                </li>
                <li>
                  Votes thru Telegram & Website
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full tablet:w-[1200px] mt-[30px] tablet:mt-[110px]">
        <img src={TRIANGLE} className="w-full"/>
      </div>
    </div>
  );
};

export default StackCacheDao;
