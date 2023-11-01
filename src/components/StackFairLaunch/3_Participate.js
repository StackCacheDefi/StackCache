import { Underline } from "../HBoardNTT/3_Concept";
import { Link } from "react-router-dom";

const Participate = () => {
  return (
    <div className="w-full flex flex-col items-center border-b border-t border-[#A5A6A5] py-[40px] px-[12px]">
      <div className="font-grotesk text-[#F5515F] text-[26px] tablet:text-[36px] font-[300]">
        HOW TO PARTICIPATE IN THE<br />
        STACK LIQUIDITY DRIVE
      </div>
      <div className="max-w-[800px] text-[16px] font-[300] leading-[22px] mt-[20px] text-black mt-[30px] text-left">
        <ul className="list-disc pl-[30px]">
          <li>
            Connect your wallet and donate their desired amount of BNB and/or USDC (bep-20, Binance Smart Chain)
          </li>
          <li className="ml-[30px]">
            Once your wallet is connected, you will be notified whether you are a{" "}
            <Link className="text-[16px] font-[300]" to="/early_adopters"><Underline>NTT Holder</Underline></Link> or not. If you
            are, there is a 0% fee. If not, there is a 5% fee during the event
          </li>
          <li>
            Up to 48 hours after the event is complete, Stack will be distributed and you can claim your Stack tokens to
            your wallet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Participate;
