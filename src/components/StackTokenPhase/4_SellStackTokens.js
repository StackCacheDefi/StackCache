import styled from "styled-components";
import BNB from "../../imgs/img_bnb.png";
import USDC from "../../imgs/img_usdc.png";
import LOGO from "../../imgs/img_s_logo.svg";
import SellDepositCard from "./SellDepositCard";

const BgGradient = styled.div`
  border-radius: 12px;
  background: linear-gradient(180deg, #9F041B 0%, #A5A6A5 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
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

const SellStackTokens = () => {
  return (
    <BgGradient>
      <div className="text-white text-[30px] tablet:text-[40px] font-[400]">
        Sell STACK Tokens
      </div>
      <div className="text-white tablet:px-[50px] text-[16px] font-[300] leading-[20px] mt-[20px]">
        During the STACK token phase, a transaction fee of up to 20% is charged on all sells of the STACK token that are
        split between payments to: existing holders, locked liquidity, buyback vaults, NTT holders, and an improvement
        vault to strengthen the protocol.
      </div>

      <div className="flex flex-col items-center my-[30px] tablet:my-[50px]">
        <img src={LOGO} className="h-[150px]" />
        <div className="text-[#A5A6A5] text-[20px] mt-[10px]">
          Stack Balance:<br/>
          0 ($0)
        </div>
      </div>

      <div className="w-full flex flex-col tablet:flex-row gap-[30px] tablet:gap-[80px] justify-between">
        <SellDepositCard
          title="BNB"
          img={BNB}
          minValue={0.005}
          token="BNB"
          type="Buy"
        />

        <SellDepositCard
          title="USDC"
          img={USDC}
          minValue={1}
          token="USDC"
        />
      </div>

      <div className="mt-[40px] tablet:mt-[60px] text-white text-[24px]">
        STACK Sell Fee Breakdown
      </div>
      <div
        className="gap-[20px] tablet:gap-[60px] text-white text-[16px] font-[300] leading-[24px] text-left mt-[20px]">
        <div className="w-full text-center">20% Fee</div>
        6% - Buyback STACK<br/>
        5% - All Holders<br/>
        5% - STACK Liquidity<br/>
        2% - NTT Holders<br/>
        2% - Improvement Vault
      </div>
    </BgGradient>
  );
};

export default SellStackTokens;
