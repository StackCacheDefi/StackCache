import styled from "styled-components";
import BNB from "../../imgs/img_bnb.png";
import DepositCard from "./DepositCard";
import USDC from "../../imgs/img_usdc.png";
import LOGO from "../../imgs/img_s_logo.svg";

const BgGradient = styled.div`
  border-radius: 12px;
  background: linear-gradient(180deg, #030303 0%, #A3A4A3 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
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
  background: linear-gradient(180deg, #000 0%, #737373 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  color: white;
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  max-width: 500px;
  width: 100%;
`

const Input = styled.input`
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 300;
  flex: 1;
  background-color: transparent;
  
  &::placeholder {
    color: white;
  }
`;

const BuyStackTokens = () => {
  return (
    <BgGradient>
      <div className="text-white text-[30px] tablet:text-[40px] font-[400]">
        Buy STACK Tokens
      </div>
      <div className="text-[#737373] tablet:px-[50px] text-[16px] font-[300] leading-[20px] mt-[20px]">
        During the STACK token phase, a transaction fee of up to 15% is charged (10% if a team leader wallet address is
        used) on all buys of the STACK token that are split between payments to: existing holders, locked liquidity,
        buyback vaults, NTT holders, an improvement vault to strengthen the protocol, and team leaders
      </div>

      <div className="w-full flex flex-col tablet:flex-row gap-[30px] tablet:gap-[80px] justify-between mt-[30px]">
        <div>
          <DepositCard
            title="BNB"
            img={BNB}
            minValue={0.005}
            token="BNB"
            type="Buy"
          />

          <DepositCard
            title="USDC"
            img={USDC}
            minValue={1}
            token="USDC"
          />
        </div>
        <div className="flex flex-col items-center py-[16px] gap-[5px]">
          <img src={LOGO} className="h-[150px]" />
          <div className="text-[#A5A6A5] font-[300] text-[18px]">
            Estimated to be received:
          </div>
          <div className="text-white text-[32px] font-[300]">
            150,000 STACK
          </div>
          <div className="text-[#A5A6A5] font-[300] text-[16px]">
            You are getting a 10% fee on STACK<br />
            (5% discount)
          </div>

          <div className="text-[#A5A6A5] font-[300] text-[16px] mt-[30px]">
            Stack Balance:<br />
            0 ($0)
          </div>

          <div className="text-[#A5A6A5] font-[300] text-[16px] mt-[30px]">
            Team Leader Wallet Address:<br />
            0x0000000000000000
          </div>
        </div>
      </div>

      <div className="text-white tablet:px-[50px] text-[16px] font-[300] leading-[20px] mt-[20px] tablet:mt-[50px]">
        Enter the wallet address of a “Team Leader” or Stack holder below to save 5% on fees. If yo do not have a team
        leader wallet address, select “Get a Leader” to receive a team leader and the discount. If your team wallet
        address says “none” you will not receive a 5% discount on buying STACK.
      </div>

      <div className="rounded-[8px] border border-[#01040D] mt-[20px] flex w-full tablet:w-[500px]">
        <Input type="text" placeholder="Team Leader Wallet Address" />
        <button className="bg-[#000] border border-[#01040D] text-white text-[16px] text-center w-[100px] tablet:w-[120px] leading-[32px] rounded-[8px]">
          Approve
        </button>
      </div>

      <div className="mt-[20px]"></div>
      <GradientButton>Get a Team Leader</GradientButton>

      <div className="mt-[40px] tablet:mt-[60px] text-[#9F041B] text-[24px]">
        STACK Buy Fee Breakdown
      </div>
      <div className="flex gap-[20px] tablet:gap-[60px] text-white text-[16px] font-[300] leading-[24px] text-left mt-[20px]">
        <div>
          10% Fee (with Team Leader)<br/>
          3% - Buyback STACK<br/>
          2% - All Holders<br/>
          2% - STACK Liquidity<br/>
          1% - NTT Holders<br/>
          1% - Improvement Vault<br/>
          1% - Team Leader
        </div>
        <div>
          15% Fee (PCS or No Team Leader)<br/>
          5% - Buyback STACK<br/>
          4% - All Holders<br/>
          4% - STACK Liquidity<br/>
          1% - NTT Holders<br/>
          1% - Improvement Vault
        </div>
      </div>
    </BgGradient>
  );
};

export default BuyStackTokens;
