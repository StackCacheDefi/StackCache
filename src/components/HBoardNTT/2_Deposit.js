import CLOCK from "../../imgs/clock.png";
import styled from "styled-components";
import { Table, TableContainer } from "../NTTMain/4_EarlyAdopter";
import { Link } from "react-router-dom";

const BuyNowButton = styled.button`
  background: linear-gradient(91.72deg, #1B4880 -8.25%, #A5A6A5 92.02%),
  linear-gradient(180deg, rgba(53, 144, 255, 0) 0%, rgba(165, 166, 165, 0) 100.12%);
  border-radius: 12px;
  width: 100%;
  height: 80px;
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 24px;
  color: white;
  line-height: 80px;
`;

export default function Deposit() {
  return (
    <div className="w-full border-t border-[#222] flex flex-col items-center pb-[50px] tablet:pb-[100px]">
      <div className="pt-[50px] tablet:pt-[100px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[26px] leading-[26px] tablet:text-[38px] tablet:leading-[48px]">
            <span className="text-[#fefefe] font-[300]">
              Be an HBoard NTT
            </span>
            <br />
            <span className="text-[#3590FF] font-[300] leading-[12px]">
              Early Adopter
            </span>
          </div>
          <div
            className="text-[18px] leading-[20px] tablet:text-[22px] tablet:leading-[28px] text-white max-w-[1080px] font-[200] px-3">
            For a limited time, be an early adopter and own a HBoard NTT in perpetuity, high-level voting privileges,
            and up to 250% of your deposit for a head start at earning passively in Stack Cache
          </div>
        </div>
      </div>
      <img src={CLOCK} className="w-[144px] mt-[28px]" />
      <div className="mt-[52px] tablet:w-[600px] w-full px-[20px]">
        <Link to="/early_adopters">
          <BuyNowButton>BUY NOW and be an EARLY ADOTPER</BuyNowButton>
        </Link>
      </div>
      <div className="text-[#F4DF27] text-[20px] tablet:text-[28px] font-sans font-[300] mt-[50px]">
        HBoard NTT Early Adopter Options
      </div>
      <div className="text-white tablet:w-[1000px] w-full mt-[40px] mb-[80px]">
        <TableContainer>
          <Table>
            <tr>
              <th width="25%">Cost</th>
              <th width="30%">Perks</th>
              <th width="*">Rewards </th>
            </tr>
            <tr>
              <td>$10,000+ USDC</td>
              <td className="text-left">
                <ul className="ml-[10px] list-disc">
                  <li>Permanent in wallet</li>
                  <li>High level DAO vote</li>
                  <li>Exclusive TG/Discord Channel Access</li>
                </ul>
              </td>
              <td className="text-left">
                250% of deposit in Cache Box Plus Principal
                & HBoard NTT (Permanent)
              </td>
            </tr>
            <tr>
              <td>$10,000+ USDC</td>
              <td className="text-left">
                <ul className="ml-[10px] list-disc">
                  <li>Permanent in wallet</li>
                  <li>High level DAO vote</li>
                  <li>Exclusive TG/Discord Channel Access</li>
                </ul>
              </td>
              <td className="text-left">
                200% of deposit & HBoard NTT (Permanent)
                <ul className="ml-[30px] list-disc">
                  <li>100% USDC </li>
                  <li>100% in Cache Box Plus Principal</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>$5,000 USDC</td>
              <td className="text-left">
                <ul className="ml-[10px] list-disc">
                  <li>Permanent in wallet</li>
                  <li>High level DAO vote</li>
                  <li>Exclusive TG/Discord Channel Access</li>
                </ul>
              </td>
              <td className="text-left">
                $5000 in Cache Box Plus Principal
                & HBoard NTT (Permanent)
              </td>
            </tr>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
