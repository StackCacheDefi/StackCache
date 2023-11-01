import RedButton from "../RedButton";
import GrayButton from "../GrayButton";
import SLogo from "../../imgs/about-S-logo.png";
import CLogo from "../../imgs/about-C-logo.png";
import { Link } from "react-router-dom";

export default function Earn() {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="text-white py-[50px] w-full max-w-[1024px]">
        <div className="text-[24px] tablet:text-[34px] mb-[50px] text-center laptop:text-left">
          Earn Passive Income Many Ways...
        </div>
        <div className="flex flex-col items-center gap-[20px] laptop:flex-row laptop:items-stretch justify-between px-3">
          <div className="relative border border-[#E24050] p-[20px] tablet:p-[50px] rounded-lg flex flex-col gap-[50px] laptop:gap-0 justify-between w-full tablet:w-[450px]">
            <img
              src={SLogo}
              alt="stack logo"
              className="absolute z-[-2] left-[-250px] top-[100px]"
              width={500}
            />
            <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px]">
              <span className="text-[#fefefe] font-[300]">Stack Token</span>
            </div>
            <li className="text-[20px] font-[200] text-left">
              Store of value (i.e. Bitcoin) & reflect Token (shared fees on
              Stack buys & sells)
            </li>
            <li className="text-[20px] font-[200] text-left">
              Hold Stack In Wallet For Easy Long-term Growth (No Locking/Staking
              Tokens required)
            </li>
            <li className="text-[20px] font-[200] text-left">
              Constantly Shrinking Token Supply (less tokens + increasing locked liquidity)
            </li>
            <Link to="/products/stack" className="flex flex-col">
              <RedButton>
                <div className="font-[200]">More Stack Token Info</div>
              </RedButton>
            </Link>
          </div>
          <div className="relative border border-white rounded-lg p-[20px] tablet:p-[50px] flex flex-col gap-[25px] justify-between w-full tablet:w-[450px]">
            <img
              src={CLogo}
              alt="cache logo"
              className="absolute z-[-2] right-[-250px] top-[100px]"
              width={500}
            />
            <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px]">
              <span className="text-[#fefefe]">Cache Token</span>
            </div>
            <li className="text-[20px] font-[200] text-left">
              Native Stablecoin (1:1 USD) used for high yield, partially
              collateralized by USDC
            </li>
            <div className="text-[20px] font-[200] text-left">
              <span className="underline underline-offset-4 decoration-1">Cachet</span>: high yield (50% APR), lowest risk staking pool. Users can
              withdraw anytime
            </div>
            <div className="text-[20px] font-[200] text-left">
              <span className="underline underline-offset-4 decoration-1">Cache Box</span>: Mint (Bond) Cache to get 0.25% to 0.5% per day
            </div>
            <div className="text-[20px] font-[200] text-left">
              <span className="underline underline-offset-4 decoration-1">SweepSTACK</span>: Daily individual and team based “no loss” sweepstakes
            </div>
            <div className="text-[20px] font-[200] text-left">
              <span className="underline underline-offset-4 decoration-1">Cache Blue Chips (CBC)</span>: Exclusive to cache box participants
              rewarding “blue chip” crypto assets (i.e. BTC)
            </div>
            <Link to="/products/cache" className="flex flex-col">
              <GrayButton>
                <div className="font-[200]">More Cache Token Info</div>
              </GrayButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
