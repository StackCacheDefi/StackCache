import styled from "styled-components";
import BuyStackTokens from "./4_BuyStackTokens";
import SellStackTokens from "./4_SellStackTokens";
import TransferStackTokens from "./4_TransferStackTokens";

const GradientBox = styled.div`
  background: linear-gradient(180deg, #B9B8B8 0%, #5B595A 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid #A5A6A5;
  padding: 0 60px;

  @media (max-width: 1200px) {
    padding: 0 12px 20px;
  }
`;

const BuySellTransfer = () => {
  return (
    <div className="py-[50px] w-full flex justify-center border-b border-[#fff]">
      <div className="w-full tablet:w-[1200px] px-[10px]">
        <GradientBox>
          <div className="text-[24px] tablet:text-[32px] font-[400] flex justify-center tablet:gap-[150px] gap-[30px] py-[20px] font-grotesk">
            <div className="text-black">Buy</div>
            <div className="text-[#F5515F]">Sell</div>
            <div className="text-[#737373]">Transfer</div>
          </div>
          <BuyStackTokens />
          <SellStackTokens />
          <TransferStackTokens />
        </GradientBox>
      </div>
    </div>
  );
};

export default BuySellTransfer;
