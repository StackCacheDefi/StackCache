import styled from "styled-components";
import BNB from "../../imgs/img_bnb.png";
import DepositCard from "./DepositCard";
import USDC from "../../imgs/img_usdc.png";
import LOGO from "../../imgs/img_s_logo.svg";
import SellDepositCard from "./SellDepositCard";

const BgGradient = styled.div`
  border-radius: 12px;
  background: linear-gradient(180deg, #737373 0%, #FFF 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px 80px;
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    padding: 20px 20px;
    margin-bottom: 40px;
  }
`;

const GradientButton = styled.button`
  border-radius: 12px;
  background: linear-gradient(180deg, #000 0%, #A5A6A5 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  height: 36px;
  line-height: 36px;
  width: 170px;
  color: white;
  margin-top: 5px;
`;

const TransferStackTokens = () => {
  return (
    <BgGradient>
      <div className="text-white text-[30px] tablet:text-[40px] font-[400]">
        Transfer STACK Tokens
      </div>
      <div className="text-white tablet:px-[50px] text-[16px] font-[300] leading-[20px] mt-[20px]">
        During the STACK token phase, a transaction fee of up to 10% is charged on all transfers of the STACK token that
        are split between payments to: existing holders, locked liquidity, buyback vaults, NTT holders, and an
        improvement vault to strengthen the protocol.
      </div>

      <div className="flex flex-col items-center my-[30px] tablet:mt-[50px]">
        <img src={LOGO} className="h-[150px]" />
        <div className="text-black text-[20px] mt-[10px]">
          Stack Balance:<br />
          0 ($0)
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-[12px]">
        <input
          className="w-full tablet:w-[400px] bg-transparent rounded-[8px] outline-none border border-[#fff] h-[40px] text-center text-[#A5A6A5]"
          placeholder="Wallet address to receive STACK" />
        <input
          className="w-full tablet:w-[400px] bg-transparent rounded-[8px] outline-none border border-[#fff] h-[40px] text-center text-[#A5A6A5]"
          placeholder="STACK Token amount to transfer" />
        <GradientButton>Sell</GradientButton>
        <div className="text-[#A5A6A5] text-[16px] my-[10px]"># of STACK to be received</div>
        <div className="text-white text-[32px] leading-[24px]">1234</div>
      </div>

      <div className="mt-[40px] tablet:mt-[60px] text-black text-[24px]">
        STACK Transfer Fee Breakdown
      </div>
      <div
        className="gap-[20px] tablet:gap-[60px] text-black text-[16px] font-[300] leading-[24px] text-left mt-[20px]">
        10% Fee (with Team Leader)<br/>
        3% - Buyback STACK<br/>
        3% - All Holders<br/>
        2% - STACK Liquidity<br/>
        1% - NTT Holders<br/>
        1% - Improvement Vault
      </div>
    </BgGradient>
  );
};

export default TransferStackTokens;
