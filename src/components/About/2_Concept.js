import styled from "styled-components";
import LOGO from "../../imgs/about-bg-logo.svg";
import ICON_ARROW from "../../imgs/icon-arrow-up.svg";
import ICON_ARROW_RED from "../../imgs/icon-arrow-up-red.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  color: #000;

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #ccc 100.12%);
  }

  &:active {
    background: linear-gradient(180deg, #ccc 0%, #fff 100.12%);
  }
`;

const MoreOnStackNation = styled.div`
  background: linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  color: white;
`;

export default function Concept() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  return (
    <div className="w-full border-b border-[#222] flex flex-col items-center relative">
      <img
        src={LOGO}
        alt="logo background"
        className="absolute top-[50%] translate-y-[-50%] h-full max-h-[700px]"
      />
      <div className="text-white w-full max-w-[1024px] py-[50px] flex flex-col px-[10px]">
        <div>
          <div className="relative z-index-2 w-full laptop:w-[700px]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse1(!collapse1)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">
                What Is Stack Cache?
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
              } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] p-[20px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1`}
            >
              <span className="underline">Stack Cache DAO</span> is a
              decentralized crypto-defi community banking ecosystem on the
              Binance Smart Chain (BSC, Bep-20). A permissionless, two-token
              protocol providing passive cash flow through offering: advanced
              tokenomics (over-collateralization), multiple income-earning
              products, protocol ownership (NTT’s), and team building rewards
              <br />
              <br />
              Stack, Cache, and NTT’s
              <li className="ml-[10px]">
                <span className="underline">Stack</span> is a store of value
                reflection token that provides returns to users for holding them
                in their wallet. Stack has a organically shrinking available
                token supply, increasing its scarcity over time
                <br />
                <br />
              </li>
              <li className="ml-[10px]">
                <span className="underline">Cache</span> is a native stable-coin
                (1:1 usd) of stack/cache that provides consistent yield earning
                opportunities
                <br />
                <br />
              </li>
              <li className="ml-[10px]">
                <span className="underline">NTT’s</span>: allows users to earn
                extra rewards directly from protocol owned treasuries
              </li>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-[50px]">
          <div className="relative z-index-2 w-full laptop:w-[700px]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse2(!collapse2)}
            >
              <div className="text-[24px] tablet:text-[32px] font-[300]">Who We Are</div>
              <img
                src={ICON_ARROW}
                alt="icon arrow"
                className={`duration-200 ${collapse2 ? "" : "rotate-180"}`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse2 ? "" : "hidden"
              } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] p-[20px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1`}
            >
              Stack Cache participants “Stack Nation” is comprised of a board &
              committee as well as a DAO of veteran defi users. spearheading an
              evolved ecosystem for passive income. PEOPLE POWERED DEFI!
              <br />
              <br />
              Our slogan is “For Defi Users, by Defi Users”, with no dev wallet
              nor special privileges for anyone. Were fully democratic,
              transparent, and allow ALL participants to have a voice in the
              ecosystem. With a fair launch and no leadership/dev wallet to pay
              in protocol tokens, every participant has the opportunity to earn
              on an equal playing field.
              <br />
              <br />
              Stack Cache was created with the intent of providing a solution
              for the common issues faced by investors in the crypto-defi space
              <Link className="flex justify-center mt-[40px]" to="/community/stack_nation">
                <MoreOnStackNation>More on stack Nation</MoreOnStackNation>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[50px]">
          <div className="relative z-index-2 w-full laptop:w-[700px]">
            <div
              className="flex items-center gap-[15px] mb-[10px] justify-center cursor-pointer duration-500 hover:translate-y-[-2px]"
              onClick={() => setCollapse3(!collapse3)}
            >
              <div className="text-[24px] tablet:text-[32px] text-[#ff4949] font-[300]">
                How To Participate
              </div>
              <img
                src={ICON_ARROW_RED}
                alt="icon arrow"
                className={`duration-200 ${collapse3 ? "" : "rotate-180"}`}
              />
            </div>
            <div
              className={`duration-500 ${
                collapse3 ? "" : "hidden"
              } border border-[#DF3D4E] rounded-lg bg-[#2229] backdrop-blur text-left font-[200] p-[20px] text-[16px] tablet:text-[20px] leading-[22px] underline-offset-4 decoration-1`}
            >
              1. <span className="underline">Join a Team</span>: (chosen or
              given) as all users must be on a team to earn rewards (however S/C
              is based on individual performance)
              <li className="ml-[10px]">
                Teams/team treasuries: rewards all its team partners bi-weekly
                for participation in Stack Cache
              </li>
              <br />
              <br />
              2. <span className="underline">Buy Stack Tokens</span>: earn more
              Stack tokens through simply holding in wallet. The more Stack you
              have, the more Stack you earn
              <br />
              <br />
              3. <span className="underline">Mint Cache Tokens</span>: Users can
              use multiple Cache products powered by the cache token (native
              stablecoin, 1:1 USD) to passively & safely earn stable yield
              <br />
              <br />
              4.
              <span className="underline">
                Purchase or Earn a NTT (optional)
              </span>
              : NTT’s allow users to earn additional rewards directly from
              protocol owned treasuries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
