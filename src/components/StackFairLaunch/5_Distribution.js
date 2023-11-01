import LOGO from "../../imgs/about-bg-logo.svg";
import BG from "../../imgs/img_distribution.png";

const Distribution = () => {
  return (
    <div className="w-full flex justify-center py-[50px]">
      <div className="w-full tablet:w-[1000px] flex flex-col items-center relative px-[12px]">
        <img
          src={LOGO}
          alt="logo background"
          className="absolute right-[-200px] top-[80px] tablet:max-h-[650px] opacity-50"
        />
        <div className="font-grotesk text-[#F5515F] text-[26px] tablet:text-[36px] font-[400]">
          Stack Token Distribution
        </div>
        <div className="max-w-[800px] text-[16px] font-[300] leading-[22px] mt-[20px] text-[#737373] mt-[30px]">
          Within 48 hours after the Stack liquidity drive is complete, liquidity will be added and all participants will
          receive their allocation of Stack tokens. The overall Stack token distribution is pictured below.
        </div>
        <div
          className="text-black text-[26px] tablet:text-[36px] tablet:leading-[40px] font-[400] max-w-[800px] mt-[50px]">
          All Stack Fair Launch donors get a share of 12,500,000 Stack Tokens
        </div>
        <img
          src={BG}
          className="my-[50px]"
        />
      </div>
    </div>
  )
};

export default Distribution;
