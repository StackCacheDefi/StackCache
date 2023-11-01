import STAR from "../../assets/imgs/committeentt-star.png";
import BANK_CARD from "../../imgs/hboard-bank-card.svg";
import BANK from "../../imgs/hboard-bank.svg";
import DOLLAR from "../../imgs/hboard-dollar.svg";

export default function Benefits() {
  return (
    <div className="w-full flex justify-center py-0 tablet:py-[100px]">
      <div className="relative text-white w-full laptop:w-[1024px] flex flex-col tablet:flex-row items-center justify-center py-[50px] px-[15px] laptop:px-0">
        <img src={STAR} alt="star" className="absolute right-0 top-[30px] h-[400px] z-[-1]" />
        <div className="font-sans items-center text-white text-[32px] font-[300] p-0 laptop:pl-[100px] flex tablet:hidden mb-[20px]">
          Exclusive Benefits
        </div>
        <div>
          <div className="bg-white border border-3 border-[#f00] rounded-xl text-black font-grotesk max-w-[550px] px-[5px] py-[10px] tablet:px-[20px] tablet:py-[50px] flex flex-col gap-[40px] tablet:gap-[70px]">
            <div className="flex flex-col tablet:flex-row justify-between gap-[5px] tablet:gap-[20px]">
              <div className="flex items-center gap-1">
                <img src={BANK_CARD} alt="bank card" width={30} />
                <span className="text-[15px] font-[700]">Passive Transactions</span>
              </div>
              <div className="text-left text-[14px] w-[300px] px-[10px] tablet:p-0">Permanent passive rewards directly to NTT holders wallet, not dependent on price</div>
            </div>

            <div className="flex flex-col tablet:flex-row justify-between gap-[5px] tablet:gap-[20px]">
              <div className="flex items-center gap-1">
                <img src={BANK} alt="bank" width={30} />
                <span className="text-[15px] font-[700]">Become The “Bank”</span>
              </div>
              <div className="text-left text-[14px] w-[300px] px-[10px] tablet:p-0">Be a part of the decision making governance & receive non-stop interest</div>
            </div>

            <div className="flex flex-col tablet:flex-row justify-between gap-[5px] tablet:gap-[20px]">
              <div className="flex items-center gap-1">
                <img src={DOLLAR} alt="bank" width={30} />
                <span className="text-[15px] font-[700]">Stack More Cache</span>
              </div>
              <div className="text-left text-[14px] w-[300px] px-[10px] tablet:p-0">Receive Stack tokens to store and get a head start in earning Cache from Cache Box </div>
            </div>
          </div>
        </div>
        <div className="font-sans items-center text-white text-[32px] font-[300] p-0 tablet:pl-[50px] laptop:pl-[100px] hidden tablet:flex">
          Exclusive Benefits
        </div>
      </div>
    </div>
  );
}
