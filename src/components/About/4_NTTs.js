import HBOARD_NTT from "../../imgs/about-ntt-hboard.svg";
import BOARD_NTT from "../../imgs/about-ntt-board.svg";
import TEAMLEADER_NTT from "../../imgs/about-ntt-teamleader.svg";
import COMMITTEE_NTT from "../../imgs/about-ntt-committee.svg";
import { Link } from "react-router-dom";

export default function NTTs() {
  return (
    <div className="w-full flex justify-center py-[50px] border-b border-[#222] overflow-hidden">
      <div className="text-white py-[200px] py-[150px] px-[10px] mobile:px-[50px] w-full max-w-[1024px] flex justify-center">
        <div className="relative border border-[#0A0A0B] rounded-lg p-[20px] tablet:p-[30px] flex flex-col gap-[45px] justify-between w-full tablet:w-[400px]">
          <img
            src={HBOARD_NTT}
            alt="background"
            className="absolute w-[150px] mobile:w-[200px] top-[-100px] left-[-190px] opacity-50"
          />
          <img
            src={BOARD_NTT}
            alt="background"
            className="absolute w-[150px] mobile:w-[200px] bottom-[-150px] left-[-190px] opacity-50"
          />
          <img
            src={TEAMLEADER_NTT}
            alt="background"
            className="absolute w-[150px] mobile:w-[200px] top-[-100px] right-[-190px] opacity-50"
          />
          <img
            src={COMMITTEE_NTT}
            alt="background"
            className="absolute w-[150px] mobile:w-[200px] bottom-[-150px] right-[-190px] opacity-50"
          />
          <div className="font-grotesk text-[32px] leading-[32px] tablet:text-[40px] tablet:leading-[48px]">
            <span className="text-[#fefefe]">NTT’s</span>
          </div>
          <li className="text-[16px] font-[200] text-left">
            <i>Ownership</i> in Stack Cache ecosystem
          </li>
          <li className="text-[16px] font-[200] text-left">
            Earn additional rewards directly from protocol owned treasuries
          </li>
          <li className="text-[16px] font-[200] text-left">
            Receive elevated DAO voting privileges
          </li>
          <li className="text-[16px] font-[200] text-left">
            Earn & lead a team treasury (Team Leader NTT)
          </li>
          <button className="bg-gradient-to-b from-[#949494] from-10% to-[#222] to-80% rounded-md py-[7px]">
            <Link to="/products/ntt" className="text-white font-[200] text-[16px]">
              More NTT Info
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
