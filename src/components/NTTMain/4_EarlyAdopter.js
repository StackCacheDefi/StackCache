import styled from "styled-components";
import CLOCK from "../../imgs/clock.png";
import { Link } from "react-router-dom";

const BuyNowButton = styled.button`
  background: linear-gradient(180deg, rgba(53, 144, 255, 0) 0%, rgba(165, 166, 165, 0) 100.12%),
  linear-gradient(91.72deg, #FF0000 -8.25%, #A5A6A5 92.02%);
  border-radius: 12px;
  width: 100%;
  height: 80px;
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 24px;
  color: white;
  line-height: 80px;
`;

export const TableContainer = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid black;
    z-index: 1;
  }
`;

export const Table = styled.table`
  width: 100%;
  position: relative;

  th, td {
    font-family: "WorkSans";
    font-weight: 300;
    font-size: 16px;
    padding: 25px;
    border: 1px solid #A5A6A5;
  }
  
  th {
    color: #A5A6A5;
    font-size: 20px;
    padding: 10px;
  }
`;

const HBoardNTT = styled.div`
  height: 50px;
  background: rgba(53, 144, 255, 0.5);
  font-family: SpaceGrotesk;
  font-weight: 500;
  color: white;
  line-height: 50px;
  border-radius: 4px;
`;

const BoardNTT = styled.div`
  height: 50px;
  background: #FFFFFFBF;
  font-family: SpaceGrotesk;
  font-weight: 500;
  color: #3590FF;
  line-height: 50px;
  border-radius: 4px;
`;

const CommitteeNTT = styled.div`
  height: 50px;
  background: #1EBA1A80;
  font-family: SpaceGrotesk;
  font-weight: 500;
  color: white;
  line-height: 50px;
  border-radius: 4px;
`;

export default function EarlyAdopter() {
  return (
    <div className="w-full border-b border-[#222] flex flex-col justify-center items-center relative">
      <div className="text-white text-[26px] tablet:text-[36px] font-[400]">
        Be an “Early Adopter” thru <span className="text-[#ff0000]">NTT’s</span>
      </div>
      <div className="max-w-[800px] text-white text-[16px] font-[300] leading-[22px] mt-[20px]">
        For a limited time, be an early NTT adopter and get early rewards at launch in USDC, Cache Box, and/or CBC.
        Choose which NTT works best for you and be rewarded with a permanent NTT (ownership), voting privileges, and
        early principal for a head start at earning passively in Stack Cache
      </div>
      <img src={CLOCK} className="w-[144px] mt-[28px]" />
      <div className="mt-[52px] tablet:w-[600px] w-full px-[20px]">
        <Link to="/early_adopters">
          <BuyNowButton>BUY NOW and be an EARLY ADOTPER</BuyNowButton>
        </Link>
      </div>
      <div className="text-[#F4DF27] text-[20px] tablet:text-[28px] font-sans font-[300] mt-[50px]">
        NTT Early Adopter Options
      </div>
      <div className="text-white tablet:w-[1000px] w-full mt-[40px] mb-[80px]">
        <TableContainer>
          <Table>
            <tr>
              <th width="27%">Type of NTT</th>
              <th width="27%">Cost</th>
              <th width="*">Rewards</th>
            </tr>
            <tr>
              <td>
                <Link className="relative z-[2]" to="/hboardntt">
                  <HBoardNTT>HBoard NTT</HBoardNTT>
                </Link>
              </td>
              <td>$10,000+ USDC</td>
              <td className="text-left">
                250% of deposit in Cache Box Plus Principal
                & HBoard NTT (Permanent)
              </td>
            </tr>
            <tr>
              <td>
                <Link className="relative z-[2]" to="/hboardntt">
                  <HBoardNTT>HBoard NTT</HBoardNTT>
                </Link>
              </td>
              <td>$10,000+ USDC</td>
              <td className="text-left">
                200% of deposit & HBoard NTT (Permanent)
                <ul className="ml-[30px] list-disc">
                  <li>100% USDC</li>
                  <li>100% in Cache Box Plus Principal</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <Link className="relative z-[2]" to="/hboardntt">
                  <HBoardNTT>HBoard NTT</HBoardNTT>
                </Link>
              </td>
              <td>$5,000 USDC</td>
              <td className="text-left">
                $5000 in Cache Box Plus Principal
                & HBoard NTT (Permanent)
              </td>
            </tr>
            <tr>
              <td>
                <Link className="relative z-[2]" to="/boardntt">
                  <BoardNTT>Board NTT</BoardNTT>
                </Link>
              </td>
              <td>$2,500 USDC</td>
              <td className="text-left">
                $1000 in principal & Board NTT
                <ul className="ml-[30px] list-disc">
                  <li>$500 Cache Box Plus</li>
                  <li>$500 CBC (wBTC Pool)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <Link className="relative z-[2]" to="/committeentt">
                  <CommitteeNTT>Committee NTT</CommitteeNTT>
                </Link>
              </td>
              <td>$1,000 USDC</td>
              <td className="text-left">
                $500 in principal & Committee NTT
                <ul className="ml-[30px] list-disc">
                  <li>$250 Cache Box Plus</li>
                  <li>$250 CBC (wBTC Pool)</li>
                </ul>
              </td>
            </tr>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
