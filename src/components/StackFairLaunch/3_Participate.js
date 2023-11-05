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
            Enter the desired amount of BNB and/or USDC (bep-20, Binance Smart Chain) in the corresponding boxes below
          </li>
          <li className="ml-[30px]">
            Through your Metamask (or similar) wallet, you will be asked to approve a spending limit. Directly after,
            you will be prompted to deposit the amount you entered
          </li>
          <li className="ml-[60px]">
            Its best to use the Binance Smart Chain, but if using ANKR or other RPC’s, you might need to adjust your
            gwei
          </li>
          <li className="ml-[30px]">
            If you are a <Link className="text-[16px] font-[300]" to="/early_adopters"><Underline>NTT Holder</Underline></Link> there
            is a 0% fee, if not, there is a 5% fee during the event (you can purchase a NTT prior to purchasing during
            the liquidity drive).
          </li>
          <li className="ml-[60px]">
            To check your NTT Status, go to: <Underline>Stack Cache NTT Wallets</Underline>
          </li>
          <li className="ml-[30px]">
            Once you purchase your personal stats and the protocol stats will be populated and your wallet will be
            connected to the site
          </li>
          <li>
            Up to 48 hours after the event is complete, Stack will be distributed to claim your Stack tokens to your
            wallet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Participate;
