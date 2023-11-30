import styled from "styled-components";
import S_LOGO from "../../imgs/img_s_logo.svg";
import BNB from "../../imgs/img_bnb.png";
import USDC from "../../imgs/img_usdc.png";
import STAKE from "../../imgs/img_stake.png";
import LOGO from "../../imgs/about-bg-logo.svg";

import HBOARD_NTT from "../../assets/imgs/nttmain-star.png";
import BOARD_NTT from "../../assets/imgs/nttmain-board-star.png";
import COMMITTEE_NTT from "../../assets/imgs/nttmain-committee-star.png";
import TEAMLEADER_NTT from "../../assets/imgs/nttmain-teamleader-star.png";

const GradientButton = styled.button`
  border-radius: 12px;
  background: linear-gradient(180deg, #737373 0%, #000 100.12%), linear-gradient(92deg, #F00 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  width: 300px;
  color: white;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  margin-top: 20px;
`;

const Stats = (props) => {
  const Img = styled.img`
    width: 50px;
    height: 50px;
    opacity: 0.5;

    &.md {
      width: 80px;
      height: 80px;
      opacity: 1;
    }

    &.lg {
      width: 120px;
      height: 120px;
      opacity: 1;
    }
  `;

  const Title = styled.div`
    color: #737373;
    font-size: 16px;
    line-height: 16px;
    font-weight: 300;

    &.md,
    &.lg {
      font-size: 20px;
      line-height: 20px;
    }
  `;

  const Value = styled.div`
    color: white;
    font-size: 24px;
    line-height: 24px;
    font-weight: 300;

    &.md {
      font-size: 30px;
      line-height: 30px;
    }

    &.lg {
      font-size: 40px;
      line-height: 40px;
    }
  `;

  return (
    <div className={`flex flex-col items-center gap-[10px] ${props.newLine ? "tablet:mt-[120px]" : ""}`}>
      <Img
        src={props.type === "hboard" ? HBOARD_NTT
          : props.type === "board" ? BOARD_NTT
            : props.type === "committee" ? COMMITTEE_NTT
              : TEAMLEADER_NTT}
        className={props.size}
      />
      <Title className={props.size}>{props.title}</Title>
      <Value className={props.size}>{props.value}</Value>
    </div>
  )
};

const MyStackStats = () => {
  return (
    <div className="pt-[50px] pb-[100px] w-full border-b border-[#fff] flex justify-center">
      <div className="w-full tablet:w-[1200px] flex flex-col items-center">
        <div className="text-[#A5A6A5] text-[30px] tablet:text-[40px] font-[300] font-grotesk">
          My STACK Stats
        </div>
        <GradientButton>Connect Wallet</GradientButton>
        <img src={S_LOGO} className="w-[120px] mt-[50px] mb-[20px]" />
        <div className="text-[48px] tablet:text-[60px] leading-[60px] text-white font-[300]">
          1234.56 ($0.00)
        </div>
        <div className="text-[#A5A6A5] text-[24px] tablet:text-[30px] font-[300]">
          STACK Tokens In Wallet
        </div>

        <div className="w-full flex flex-col tablet:flex-row justify-between items-center mt-[50px] gap-[30px]">
          <div className="flex flex-col items-center">
            <img
              src={S_LOGO}
              className="opacity-30 h-[70px]"
            />
            <div className="text-[16px] text-[#737373] mt-[10px]">
              Total STACK Reflections Received
            </div>
            <div className="font-[300] text-[36px] text-white">
              123 ($0.00)
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={STAKE} className="h-[70px]" />
            <div className="text-[16px] text-[#737373] mt-[10px]">
              Stake %
            </div>
            <div className="font-[300] text-[36px] text-white">
              0.00
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-[10px]">
              <img src={BNB} className="h-[70px]" />
              <img src={USDC} className="h-[70px]" />
            </div>
            <div className="text-[16px] text-[#737373] mt-[10px]">
              Total $ of Spent BNB & USDC
            </div>
            <div className="font-[300] text-[36px] text-white">
              $0.00
            </div>
          </div>
        </div>

        <div className="w-[200px] tablet:w-[900px] h-[2px] bg-[#7373734D] my-[50px]"></div>

        <div className="w-full flex flex-col items-center">
          <div className="text-[#F5515F] text-[30px] font-[300]">
            My NTT Stats
          </div>

          <div
            className="rounded-[15px] bg-white leading-[30px] h-[30px] text-[16px] text-black font-[600] w-[300px] mt-[30px]">
            Get an Early Adopter NTT
          </div>

          <div className="w-full flex flex-col gap-[40px] mt-[50px] relative">
            <div className="w-full flex flex-col tablet:flex-row items-center justify-between">
              <div className="w-[300px]">
                <Stats
                  size="md"
                  type="hboard"
                  title="HBoard NTT Holder?"
                  value="Yes"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 tablet:grid-cols-4">
                <Stats
                  size="sm"
                  type="hboard"
                  title="Direct Stack Received"
                  value="123"
                />
                <Stats
                  size="sm"
                  type="hboard"
                  title="Stack in Escrow"
                  value="456"
                />
                <Stats
                  size="sm"
                  type="hboard"
                  title="Cache in Escrow"
                  value="10,000"
                />
                <Stats
                  size="sm"
                  type="hboard"
                  title="Direct $ Received"
                  value="$1234"
                />
              </div>
            </div>
            <div className="w-full flex flex-col tablet:flex-row items-center justify-between">
              <div className="w-[300px]">
                <Stats
                  size="md"
                  type="board"
                  title="Board NTT Holder?"
                  value="Yes"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 tablet:grid-cols-4">
                <Stats
                  size="sm"
                  type="board"
                  title="Direct Stack Received"
                  value="123"
                />
                <Stats
                  size="sm"
                  type="board"
                  title="Stack in Escrow"
                  value="456"
                />
                <Stats
                  size="sm"
                  type="board"
                  title="Cache in Escrow"
                  value="10,000"
                />
                <Stats
                  size="sm"
                  type="board"
                  title="Direct $ Received"
                  value="$1234"
                />
              </div>
            </div>
            <div className="w-full flex flex-col tablet:flex-row items-center justify-between">
              <div className="w-[300px]">
                <Stats
                  size="md"
                  type="committee"
                  title="Committee NTT Holder?"
                  value="Yes"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 tablet:grid-cols-4">
                <Stats
                  size="sm"
                  type="committee"
                  title="Direct Stack Received"
                  value="123"
                />
                <Stats
                  size="sm"
                  type="committee"
                  title="Stack in Escrow"
                  value="456"
                />
                <Stats
                  size="sm"
                  type="committee"
                  title="Cache in Escrow"
                  value="10,000"
                />
                <Stats
                  size="sm"
                  type="committee"
                  title="Direct $ Received"
                  value="$1234"
                />
              </div>
            </div>

            <img
              src={LOGO}
              alt="logo background"
              className="absolute left-[50%] top-[50%] tablet:max-h-[600px] opacity-50 translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
        </div>

        <div className="w-[200px] tablet:w-[900px] h-[2px] bg-[#7373734D] my-[50px]"></div>

        <div className="text-[#F5515F] text-[30px] font-[300]">
          My Team Leader Stats
        </div>

        <div className="w-full flex flex-col tablet:flex-row items-center justify-between mt-[50px]">
          <div className="w-[240px] tablet:mr-[100px]">
            <Stats
              size="lg"
              type="team_leader"
              title="Team Leader?"
              value="Yes"
            />
          </div>
          <div className="flex-1 grid grid-cols-2 tablet:grid-cols-4 tablet:flex-row justify-between gap-[30px]">
            <Stats
              size="sm"
              type="team_leader"
              title="# of Partners"
              value="123"
            />
            <Stats
              size="sm"
              type="team_leader"
              title="Total STACK bought by partners"
              value="123"
              newLine
            />
            <Stats
              size="sm"
              type="team_leader"
              title="Total STACK earned from parters"
              value="456"
            />
            <Stats
              size="sm"
              type="team_leader"
              title="Team Partners with an NTT"
              value="456"
              newLine
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStackStats;
