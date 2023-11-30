import S_LOGO from "../../imgs/img_s_logo.svg";

const Stats = (props) => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="text-[#737373] text-[20px] font-[300]">{props.title}</div>
      <div className="text-[#A5A6A5] text-[36px] font-[300] leading-[40px]">{props.value}</div>
    </div>
  )
};

const OverallStats = () => {
  return (
    <div className="py-[80px] w-full flex justify-center">
      <div className="w-[1200px] flex flex-col items-center">
        <div className="text-[#F5515F] text-[40px] font-[400] font-grotesk">
          Overall Stats & Info
        </div>
        <div className="text-[#737373] text-[20px] font-[300] mt-[10px]">
          Stack Cache Token Contract: 0x000000000000000000000000
        </div>

        <div className="relative flex flex-col items-center py-[80px]">
          <div className="text-[28px] text-[#F5515F] text-[300] font-[300]">
            Stack Token Price
          </div>
          <div className="text-[60px] tablet:text-[80px] leading-[90px] text-white font-[300]">
            $0.00000001
          </div>
          <img src={S_LOGO} className="absolute w-[200px] h-[200px] opacity-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>

        <div className="w-full flex flex-col items-center gap-[30px] tablet:gap-[50px]">
          <div className="w-full flex flex-wrap justify-center tablet:justify-between gap-[30px] tablet:gap-[100px]">
            <Stats
              title="# of Participants"
              value="0"
            />
            <Stats
              title="Total Liquidity"
              value="$0.00"
            />
            <Stats
              title="Transactions"
              value="0"
            />
            <Stats
              title="Marketcap"
              value="$0.00"
            />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-[30px] tablet:gap-[160px]">
            <Stats
              title="Stack/USDC LP"
              value="$0.00"
            />
            <Stats
              title="Stack/BNB LP"
              value="$0.00"
            />
            <Stats
              title="Available Stack"
              value="13,000,000"
            />
          </div>
          <div className="w-full flex flex-wrap justify-center tablet:justify-between gap-[30px] tablet:gap-[100px]">
            <Stats
              title="NTT Holders"
              value="0"
            />
            <Stats
              title="Total NTT $ Rewards"
              value="$0.00"
            />
            <Stats
              title="Total NTT STACK Rewards"
              value="0"
            />
            <Stats
              title="Total NTT STACK Escrowed Rewards"
              value="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallStats;
