import STAR from "../../../assets/imgs/teamleaderntt-star.svg";
import ITEM_ICON from "../../../imgs/teamleader-li-icon.png";
import TEAMLEADER_REWARDS from "../../../imgs/img_teamleader_rewards.svg";
import TREASURY_MIGRATION from "../../../imgs/img_treasury_migration.svg";

export default function Overview() {
  return (
    <div className="relative border-b border-[#222] text-white w-full flex flex-col items-center py-[0] tablet:py-[100px]">
      <div className="text-[24px] tablet:text-[32px] font-[300] mb-[10px] text-[#F4A227]">
        Team Treasury Leader NTT
      </div>
      <div className="font-[300] text-[16px] tablet:text-[18px] leading-[22px] tablet:w-[800px]">
        Team leader NTT’s allow Stack Cache users (team leaders) who recruit other users to use their wallet address to
        join their team treasury or potential team treasury
      </div>
      <div
        className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
        <img src={STAR} alt="star" className="absolute left-[40px] top-[60px] h-[350px]" />
        <div className="relative z-[200] text-[24px] tablet:text-[32px] font-[300]">
          Team Leader NTT<br />
          Key Points
        </div>
        <div className="font-[200] z-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[40px]">
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Automatically triggered once achieved</span>
          </div>
          <div className="flex items-center gap-[15px] pl-[30px] tablet:pl-[50px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Must recruit a min. 10 user wallets</span>
          </div>
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Nominate items for your team votes</span>
          </div>
          <div className="flex items-center gap-[15px] pl-[30px] tablet:pl-[50px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Permanent (cant change teams)</span>
          </div>
          <div className="flex items-center gap-[15px]">
            <img
              src={ITEM_ICON}
              alt="item icon"
              width={40}
            />
            <span>Free to earn & available to all users</span>
          </div>
        </div>
      </div>

      <div className="mt-[50px] text-[24px] tablet:text-[32px] font-[300] mb-[10px] text-[#F4A227]">
        Team Leader Rewards
      </div>
      <div className="font-[300] text-[16px] tablet:text-[18px] leading-[22px] tablet:w-[800px]">
        Team Leader NTT holders (team leaders) can receive rewards from their team treasury if they participate by
        buying Stack, minting /depositing into cache box, and withdrawing into CBC. No team leader rewards are given
        from team partner deposits or withdrawals, only thru team treasury reward distributions. Larger team treasury =
        larger rewards
      </div>

      <div className="w-full tablet:w-[1000px] px-[10px] mt-[100px]">
        <img src={TEAMLEADER_REWARDS} className="w-full h-auto" />
      </div>

      <div className="mt-[100px] text-[24px] tablet:text-[32px] font-[300] mb-[10px] text-[#F4A227]">
        Parent Teams & Migrating Teams
      </div>
      <div className="font-[300] text-[16px] tablet:text-[18px] leading-[22px] tablet:w-[800px]">
        While all users can choose or will be given an initial team, users can recruit other users to create/build their
        team treasury while currently being on a team (and haven't achieved 10 participants). This is called a
        “migrating team” while the original team is a “parent team”. Migrating teams prevent teams from becoming too
        large as well as offers EVERYONE a chance to host a team treasury
      </div>

      <div className="w-full tablet:w-[800px] px-[10px] mt-[100px]">
        <img src={TREASURY_MIGRATION} className="w-full h-auto" />
      </div>
    </div>
  );
}
