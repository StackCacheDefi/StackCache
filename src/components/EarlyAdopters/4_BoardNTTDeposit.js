import NTTSubmit from "../NTTSubmit";
import DepositCard from "../DepositCard";
import RedButton from "../RedButton";
import {useState} from "react";

export default function Deposit() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full border-b border-[#222] flex flex-col items-center pb-[50px] tablet:pb-[100px]">
      <div className="pt-[50px] tablet:pt-[100px] relative w-full desktop:w-[1280px] flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-[15px] tablet:gap-[30px]">
          <div className="font-grotesk text-[26px] leading-[26px] tablet:text-[38px] tablet:leading-[48px]">
            <span className="text-[#3590FF] font-[300]">
              Board NTT
            </span>
            <br />
            <span className="text-[#fefefe] font-[300] leading-[12px]">
              Early Adopter
            </span>
          </div>
          <div className="tablet:w-[800px] border border-[#FEFEFE] rounded-[7px] font-[200] px-[20px] py-[30px] max-w-[800px]">
            <div className="text-[16px] text-white font-[400]">
              How to Become an HBoard NTT Holder & Early Adopter
            </div>
            <div className="mt-[24px] list-decimal pl-[20px]">
              <div className="text-left text-[16px] text-[#FEF17E] list-item">
                Complete the “Stack Cache Early Adopter Form”
                <div className="flex flex-col items-center justify-center my-[30px]">
                  {showForm ?
                    <NTTSubmit/> :
                    <RedButton onClick={() => setShowForm(true)}>
                      <div className="font-[200] min-w-[300px]">
                        Stack Cache Early Adopter Form
                      </div>
                    </RedButton>
                  }
                </div>
              </div>
              <div className="text-left text-[16px] text-[#FEF17E] list-item">
                Review (below) the details of being a Board NTT early adopter
              </div>
              <div className="text-left text-[16px] text-[#FEF17E] mt-[30px] list-item">
                Approve & deposit $2500 USDC [bep-20, BSC]
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-[50px] text-[#fff] desktop:mb-0 flex flex-col items-center">
        <div className="text-white text-[12px] tablet:text-[14px] mt-[50px] mb-[10px]">
          Deposit below to receive early adopter Board NTT rewards *
        </div>
        <DepositCard
          titleTop="$2,500 USDC"
          titleBottom="$1000 ($500 Cache Box Plus & $500 CBC)"
          description="Deposit $2500 USDC (BEP20, BSC) to receive:"
          descriptions={[
            "Board NTT permanently connected to your wallet (protocol rewards)",
            "Highest-level Stack Cache DAO vote",
            "Exclusive TG/Discord channel access",
            "Get $500 value in Cache Box and $500 value in CBC ($1000 total)",
          ]}
          minValue={2500}
          type="board"
        />
      </div>
      <div className="tablet:w-[800px] text-white text-[16px] font-[200] pl-[30px] mt-[40px] text-left">
        <ul className="list-disc">
          <li>
            After all deposits, early adopters will receive a verification within 48 hours (to preferred destination in the Early Adopter form)
          </li>
          <li>
            From the early adopter form, the discord, telegram, and/or email address that was provided will receive the official Stack Cache Board private group information after deposit verification
          </li>
          <li>
            Directly after the Stack fair launch, your depositing wallet will receive the official permanent Board NTT. It includes high-level DAO voting privileges, the ability to receive reflection and re-balance rewards from the board treasury, and early adopter rewards deposited
          </li>
        </ul>
      </div>
      <div className="tablet:w-[800px] text-white text-[16px] px-[10px] text-left italic font-[200] mt-[30px]">
        *Purchasing a Board NTT as an early adopter does NOT give you free or discounted Stack tokens. ALL users must buy Stack tokens separately at the Stack fair launch
      </div>
    </div>
  );
}
