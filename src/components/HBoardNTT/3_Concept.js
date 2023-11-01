import styled from "styled-components";

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

export const Underline = styled.span`
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
`;

export default function Concept() {
  return (
    <div className="max-w-[500px] tablet:max-w-[1000px] py-[50px]">
      <div className="text-[24px] tablet:text-[32px] mb-[25px] font-[300] text-[#3590FF]">What Is a HBoard NTT</div>
      <div className="text-white font-[200] text-[16px] tablet:text-[20px] px-[10px] text-left">
        <ul className="pl-[30px] list-disc">
          <li>
            <Underline>HBoard (hybrid board) NTT’s</Underline> allow users to have an ownership stake in Stack Cache thru the 2nd largest
            protocol treasury, the board treasury. Connected to participating users’ wallets (like an ID)
          </li>
          <li className="ml-[30px]">
            Rewards holders according to how much Stack tokens they hold or can be owned in perpetuity (based on when
            users attain the HBoard NTT)
          </li>
          <li className="ml-[30px]">
            Holders receive Stack tokens and Cache box principal rewards without needing to do anything, while also
            enjoying voting privileges and a say in the projects’ direction (similar to a board of directors at a
            company)
          </li>
          <br/>
          <li>
            Users can purchase and own a permanent HBoard NTT during the seed phases (pre-launch), receiving 200% or
            250% of their deposit back shortly after the Stack distribution as early adopters. HBoard NTT’s are also
            available after the Stack launch, however, they can only be attained or lost according to how much Stack a
            user holds
          </li>
        </ul>
      </div>
    </div>
  );
}
