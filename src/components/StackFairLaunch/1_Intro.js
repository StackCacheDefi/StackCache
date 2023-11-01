import LOGO from "../../imgs/img_s_logo.svg";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="w-full flex justify-center pb-[50px]">
      <div className="w-full desktop:w-[1280px] flex flex-col items-center px-[12px]">
        <div className="w-full flex flex-col items-center relative pt-[50px]">
          <div
            className="font-grotesk text-[30px] leading-[32px] tablet:text-[42px] tablet:leading-[48px] text-[#EE0033]">
            Stack Token<br />
            Liquidity Drive
          </div>
          <div
            className="mt-[30px] text-[18px] leading-[20px] tablet:text-[20px] tablet:leading-[24px] text-black max-w-[525px] font-[300]">
            Donate BNB and/or USDC on the Binance Smart Chain (Bep-20) to STACK liquidity for your share of 12.5% of the
            total supply at the lowest cost
          </div>
          <img
            src={LOGO}
            alt="logo"
            className="absolute h-full top-[-20px] left-[0] desktop:left-[150px] opacity-10"
          />
        </div>
        <div className="font-grotesk text-white text-[26px] tablet:text-[36px] font-[300] mt-[70px]">
          About the Stack Token “Fair Launch”
        </div>
        <div className="max-w-[800px] text-[16px] font-[300] leading-[22px] mt-[20px] text-black mt-[30px] text-left">
          The inaugural liquidity drive for the stack token is a week-long (7 day) period where users can donate BNB
          and/or USDC to stack liquidity to receive Stack tokens at distribution at the lowest cost. All users share and
          split a share of Stack tokens based on how much each user donates.
          <ul className="list-disc pl-[30px]">
            <li>
              Fair Launch - All participants must purchase stack tokens with no pre-sale.
            </li>
            <li className="ml-[30px]">
              NO STACK TOKENS HAVE NOR WILL BE PRE-ALLOCATED OR DISCOUNTED TO ANY BOARD MEMBERS, TEAM MEMBERS,
              DEVELOPERS,
              ETC.
            </li>
            <li>
              There is a 0% fee for NTT holders and a 5% fee for Non-NTT Holders
            </li>
            <li className="ml-[30px]">
              Users may buy a Early Adopter NTT before participating in the liquidity drive (for 0% fees)
            </li>
          </ul>
        </div>
        <Link to="/early_adopters">
          <button
            className="mt-[25px] rounded-[12px] w-[240px] h-[40px] flex items-center justify-center font-[600] text-[14px] text-black bg-white">
            Get an Early Adopter NTT
          </button>
        </Link>
      </div>
    </div>
  );
};
