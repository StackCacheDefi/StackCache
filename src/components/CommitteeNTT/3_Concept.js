import styled from "styled-components";
import { Underline } from "../HBoardNTT/3_Concept";

export const Button = styled.button`
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  color: #000;

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #ccc 100.12%);
  }

  &:active {
    background: linear-gradient(180deg, #ccc 0%, #fff 100.12%);
  }
`;

export default function Concept() {
  return (
    <div className="max-w-[500px] tablet:max-w-[1000px] pt-[50px]">
      <div className="text-[#1EBA1A] text-[24px] tablet:text-[32px] mb-[25px]">
        What Is a Board NTT
      </div>
      <div className="text-white font-[200] text-[16px] tablet:text-[20px] px-[10px] text-left">
        <ul className="pl-[30px] list-disc">
          <li>
            <Underline>Committee NTT’s</Underline> allow users to have a permanent ownership stake in Stack Cache thru
            the 3nd largest protocol treasury, the committee treasury. Committee NTT’s are connected to participating
            users’ wallets (like an ID)
          </li>
          <li className="ml-[30px]">
            Once a user owns a Committee NTT, they own it in perpetuity
          </li>
          <li className="ml-[30px]">
            Holders receive Stack tokens and Cache box principal rewards without needing to do anything
          </li>
          <br />
          <li>
            Committee members can nominate items for vote amongst the Stack Cache DAO membes, hence “committee”
            referring to what the holders are considered for the project. There are private discussion channels for
            Committee NTT holders to help steer the aspects and future of the project. Committee NTT’s can be purchased
            at any time
          </li>
        </ul>
      </div>
    </div>
  );
}
