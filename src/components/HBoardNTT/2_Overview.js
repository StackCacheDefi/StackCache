import STAR from "../../imgs/hboard-star.svg";
import ITEM_ICON from "../../imgs/hboard-li-icon.png";

export default function Overview() {
  return (
    <div className="relative text-white w-full flex justify-center py-[0] tablet:py-[100px]">
      <div className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
        <img src={STAR} alt="star" className="absolute left-[40px] top-[60px] h-[350px]" />
        <div className="relative z-[200] text-[24px] tablet:text-[32px] font-[300]">
          HBoard NTT Overview
        </div>
        <div className="font-[200] z-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[40px]">
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Highest level Stack Cache Ownership</span>
          </div>
          <div className="flex items-center gap-[15px] pl-[50px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Exclusive Rewards from Protocol</span>
          </div>
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Direct Stack Tokens & Cache Box Principal </span>
          </div>
          <div className="flex items-center gap-[15px] pl-[50px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Always Holds Value (Not Tradeable)</span>
          </div>
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>High Level Voting Privledges</span>
          </div>
        </div>
      </div>
    </div>
  );
}
