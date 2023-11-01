import styled from "styled-components";
import STAR from "../../assets/imgs/nttmain-hboard.png";
import ITEM_ICON from "../../assets/imgs/nttmain-star.png";
import STAR_BOARD_NTT from "../../assets/imgs/nttmain-board.png";
import ITEM_ICON_BOARD_NTT from "../../assets/imgs/nttmain-board-star.png";
import STAR_COMMITTEE_NTT from "../../assets/imgs/nttmain-committee.png";
import ITEM_ICON_COMMITTEE_NTT from "../../assets/imgs/nttmain-committee-star.png";
import STAR_TEAMLEADER_NTT from "../../assets/imgs/nttmain-teamleader.png";
import ITEM_ICON_TEAMLEADER_NTT from "../../assets/imgs/nttmain-teamleader-star.png";
import { Link } from "react-router-dom";

const Button = styled.button`
  background: ${(props) => props.color};
  height: 48px;
  width: 433px;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 100;
`;

export default function Types() {
  return (
    <div className="w-full">
      <div className="text-white text-[24px] tablet:text-[32px] my-[50px] tablet:mb-0">
        Types of NTT's
      </div>
      <div className="w-full text-white flex justify-center">
        <div className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
          <img src={STAR} alt="star" className="w-[250px]" />
          <div className="font-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <img src={ITEM_ICON} alt="item icon" width={30} />
              <span>Best early adopter benefits (up to 250%)</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[30px]">
              <img src={ITEM_ICON} alt="item icon" width={30} />
              <span>Earn passively from a top protocol owned treasury</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[60px]">
              <img src={ITEM_ICON} alt="item icon" width={30} />
              <span>High-level DAO voting privileges</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[90px]">
              <Link to="/hboardntt">
                <Button color="linear-gradient(180deg, #014da9 0%, #275dd8 100.12%),linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%)">
                  Learn More About HBoard NTT's
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex justify-center">
        <div className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
          <div className="font-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <img src={ITEM_ICON_BOARD_NTT} alt="item icon" width={30} />
              <span>Top-Level DAO voting privileges & decision making</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[30px]">
              <img src={ITEM_ICON_BOARD_NTT} alt="item icon" width={30} />
              <span>Earn passively from a top protocol owned treasury</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[60px]">
              <img src={ITEM_ICON_BOARD_NTT} alt="item icon" width={30} />
              <span>Limited availability, ownership in perpetuity</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[90px]">
              <Link to="/boardntt">
                <Button color="linear-gradient(180deg, #FFFFFF 0%, #1B58CA 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Learn More About Board NTT's
                </Button>
              </Link>
            </div>
          </div>
          <img src={STAR_BOARD_NTT} alt="star" className="w-[250px]" />
        </div>
      </div>
      <div className="w-full text-white flex justify-center">
        <div className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
          <img src={STAR_COMMITTEE_NTT} alt="star" className="w-[250px]" />
          <div className="font-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <img src={ITEM_ICON_COMMITTEE_NTT} alt="item icon" width={30} />
              <span>Earn passively from a protocol owned treasury</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[30px]">
              <img src={ITEM_ICON_COMMITTEE_NTT} alt="item icon" width={30} />
              <span>Exclusive DAO voting & private channel access</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[60px]">
              <img src={ITEM_ICON_COMMITTEE_NTT} alt="item icon" width={30} />
              <span>Earn additional rewards in perpetuity</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[90px]">
              <Link to="/committeentt">
                <Button color="linear-gradient(180deg, #416506 0%, #93D528 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Learn More About Committee NTT's
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex justify-center">
        <div className="relative flex flex-col tablet:flex-row items-center justify-around w-full laptop:w-[1024px] px-[15px] mobile:px-0 py-[50px]">
          <div className="font-[200] text-left text-[20px] tablet:[24px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <img src={ITEM_ICON_TEAMLEADER_NTT} alt="item icon" width={30} />
              <span>
                No uplines & all team partners get “hands-free” airdrops
              </span>
            </div>
            <div className="flex items-center gap-[15px] pl-[30px]">
              <img src={ITEM_ICON_TEAMLEADER_NTT} alt="item icon" width={30} />
              <span>Build a team to lead & grow your OWN team treasury</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[60px]">
              <img src={ITEM_ICON_TEAMLEADER_NTT} alt="item icon" width={30} />
              <span>Earn additional bi-weely rewards from all products</span>
            </div>
            <div className="flex items-center gap-[15px] pl-[90px]">
              <Link to="/products/team_treasuries">
                <Button color=" linear-gradient(180deg, #F9D8A6 0%, #F4A227 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);">
                  Learn More About Team Leader NTT's
                </Button>
              </Link>
            </div>
          </div>
          <img src={STAR_TEAMLEADER_NTT} alt="star" className="w-[250px]" />
        </div>
      </div>
    </div>
  );
}
