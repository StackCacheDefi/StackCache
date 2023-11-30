import LOGO from "../../imgs/img_s_logo.svg";
import styled from "styled-components";

const ConnectWalletButton = styled.button`
  background: linear-gradient(180deg, #737373 0%, #000 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  width: 350px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  color: white; 
  margin-top: 80px;
  
  @media (max-width: 1280px) {
    margin-top: 40px;
  }
`;

const ConnectWallet = () => {
  return (
    <div className="w-full py-[50px] flex justify-center">
      <div className="w-full tablet:w-[1200px] flex flex-col items-center">
        <div className="w-full flex flex-col tablet:flex-row gap-[20px] items-center justify-between">
          <img src={LOGO} className="h-[220px]" />
          <div className="flex flex-col items-center">
            <div className="text-[60px] leading-[60px] text-black font-[300]">
              $0.00000001
            </div>
            <div className="text-[24px] text-[#F5515F] font-[300]">
              Stack Token Price
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[#737373] text-[16px] font-[300]">Marketcap</div>
            <div className="text-[#737373] text-[32px] font-[300]">$000,000.00</div>
            <div className="text-[#737373] text-[16px] font-[300] mt-[20px]">Liquidity</div>
            <div className="text-[#737373] text-[32px] font-[300]">$000,000.00</div>
          </div>
        </div>
        <div className="w-full flex flex-col tablet:flex-row items-center gap-[10px] tablet:gap-[60px] mt-[32px] px-[20px]">
          <div className="text-[#737373] text-[36px] w-[220px] font-[300] text-center">
            Stack Token
          </div>
          <div className="w-full h-[1px] tablet:w-[1px] tablet:h-[50px] bg-[#fff]"></div>
          <div className="text-[#737373] text-[16px] text-left flex-1 font-[300]">
            A reflection token that rewards all holders a Stack tokens on each buy & sell. Hold Stack in your wallet to
            receive more tokens over time based on how much you hold
          </div>
        </div>
        <ConnectWalletButton>
          Connect Wallet
        </ConnectWalletButton>
        <div className="text-[#737373] text-[16px] font-[300] mt-[5px]">
          Wallet: 0x0000000000000000
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
