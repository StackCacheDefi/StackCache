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
            <span className="text-[#fefefe] font-[300]">
              HBoard NTT
            </span>
            <br/>
            <span className="text-[#3590FF] font-[300] leading-[12px]">
              Early Adopter
            </span>
          </div>
          <div
            className="tablet:w-[800px] border border-[#FEFEFE] rounded-[7px] font-[200] px-[20px] py-[30px] max-w-[800px]">
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
                Review & choose which NTT deposit option/early adopter rewards you desire (3 boxes below)
              </div>
              <div className="text-left text-[16px] text-[#FEF17E] mt-[30px] list-item">
                Approve & deposit at least the minimum USDC [bep-20, BSC] under your selected option (users can deposit
                higher amounts)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#fff] text-[14px] mt-[30px] font-[400] mb-[15px]">Choose which level HBoard NTT rewards you
        want to receive *
      </div>
      <div className="text-[#fff] max-w-[1300px] pb-[30px] flex flex-col desktop:flex-row gap-[15px] px-[10px]">
        <DepositCard
          titleTop="$10,000 USDC"
          titleBottom="250% (Cache Box Plus)"
          description="Deposit $10,000-$250,000 USDC (BEP20, BSC) to receive:"
          descriptions={[
            "HBoard NTT permanently connected to your wallet (protocol rewards)",
            "A High-level Stack Cache DAO vote",
            "Exclusive TG/Discord channel access",
            "Get 250% value of your deposit in Cache Box to earn immediately after launch",
          ]}
          minValue={10000}
          type="hboard"
          rewardPercent="250"
        />
        <DepositCard
          titleTop="$10,000 USDC"
          titleBottom="200% (1/2 USDC & 1/2 Cache Box  Plus)"
          description="Deposit $10,000-$250,000 USDC (BEP20, BSC) to receive:"
          descriptions={[
            "HBoard NTT permanently connected to your wallet (protocolrewards)",
            "A High-level Stack Cache DAO vote",
            "Exclusive TG/Discord channel access",
            "Get 100% value of your deposit in USDC and 100% value in Cache Box (200% total)",
          ]}
          minValue={10000}
          type="hboard"
          rewardPercent="200"
        />
        <DepositCard
          titleTop="$5,000 USDC"
          titleBottom="100% (Cache Box Plus)"
          description="Deposit $5000-$9,999 USDC (BEP20, BSC) to receive:"
          descriptions={[
            "HBoard NTT permanently connected to your wallet (protocol rewards)",
            "A High-level Stack Cache DAO vote (on all DAO votes)",
            "Exclusive TG/Discord channel access",
            "Get 100% value of your deposit in Cache Box to earn immediately after launch",
          ]}
          minValue={5000}
          type="hboard"
          rewardPercent="100"
        />
      </div>
      <div className="tablet:w-[800px] text-white text-[16px] font-[200] pl-[30px] mt-[40px] text-left">
        <ul className="list-disc">
          <li>
            After all deposits, early adopters will receive a verification within 48 hours (to preferred destination in
            the Early Adopter form)
          </li>
          <li>
            From the early adopter form, the discord, telegram, and/or email address that was provided, buyers will
            receive the official Stack Cache Board private group information after deposit verification
          </li>
          <li>
            Directly after the Stack fair launch, your depositing wallet will receive the official permanent HBoard NTT.
            It includes high-level DAO voting privileges, the ability to receive reflection and re-balance rewards from
            the board treasury, and early adopter rewards in Cache Box principal and/or USDC directly to your depositing
            wallet (depending on the selected option)
          </li>
        </ul>
      </div>
      <div className="tablet:w-[800px] text-white text-[16px] px-[10px] text-left italic font-[200] mt-[30px]">
        *Purchasing a HBoard NTT as an early adopter does NOT give you free or discounted Stack tokens. ALL users must
        buy Stack tokens separately at the Stack fair launch
      </div>
    </div>
  );
}
