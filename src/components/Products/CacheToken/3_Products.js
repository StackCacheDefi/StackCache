import styled from "styled-components";
import CacheDrawTransaction from "../../../imgs/cache-draw-transaction.svg";
import CacheDrawBlock from "../../../imgs/cache-draw-block.svg";
import CacheDrawCloud from "../../../imgs/cache-draw-cloud.svg";
import CacheDrawNode from "../../../imgs/cache-draw-node.svg";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
`;

export default function Products() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <div className="relative z-10 text-white py-[50px] w-full max-w-[1024px]">
        <div className="text-[24px] tablet:text-[40px] font-[200] mb-[50px] text-center">
          Cache Token Products
        </div>
        <div className="relative z-index-2 w-full">
          <div className="flex justify-center">
            <div className="border border-[#A5A6A5] mb-[30px] rounded-lg bg-[url('/public/assets/imgs/cache-card-bg.png')] backdrop-blur text-left font-[200]  px-[40px] py-[30px] text-[16px] tablet:text-[20px] leading-[24px] underline-offset-4 decoration-1 max-w-[900px]">
              Stack Cache provides multiple products that uses the Cache utility coin in different ways to provide passive income opportunities for all participants
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div className="w-[350px] h-[220px] tablet:w-[500px] tablet:h-[330px] laptop:w-[900px] laptop:h-[560px] bg-[url('/public/assets/imgs/cache-token-flow.png')] bg-contain bg-center" />
          </div>
          <Card className="border-4 border-[#A5A6A5] mb-[30px]">
            <div className="text-[#A5A6A5] text-[34px] mb-3">Cachet</div>
            <div className="flex items-start gap-[30px]">
              <img
                src={CacheDrawTransaction}
                alt="cache draw transaction"
                className="w-[130px] mt-[-20px]"
              />
              <div className="text-[#000] text-[20px] font-[300] leading-relaxed text-left">
                <ul className="list-disc ml-[20px]">
                  <li>Low risk, single asset staking pool</li>
                  <li>Principal & rewards can be withdrawn at any time</li>
                  <li>High yield, up to 75% APR for Fee-less cache rewards</li>
                  <li>Cache rewards can be re-invested (compoundable)</li>
                  <li>
                    Similar to traditional bank’s “checking or savings”, but with
                    higher APR %’s
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="border-4 border-[#EB1912] mb-[30px]">
            <div className="text-[#EB1912] text-[34px] mb-3">
              Cache Box (Bonds)
            </div>
            <div className="flex items-start gap-[30px]">
              <div className="text-[#000] text-[20px] font-[300] leading-relaxed text-left">
                <ul className="list-disc ml-[20px]">
                  <li>
                    Mint (Bond) Cache to get rewarded 0.25% per day (up to 150% of deposit)
                  </li>
                  <li>
                    Perpetual (until maturity is reached) w/added principal from team treasuries
                  </li>
                  <li>
                    Low risk bond yield that is repaid by user rewards accruing constantly
                  </li>
                  <li>
                    Available Cache rewards can be withdrawn, compounded, and/or added directly to cache blue chips (CBC)
                  </li>
                </ul>
              </div>
              <img
                src={CacheDrawBlock}
                alt="cache draw block"
                className="w-[130px] mt-[-20px]"
              />
            </div>
          </Card>

          <Card className="border-4 border-[#F4A227] mb-[30px]">
            <div className="text-[#F4A227] text-[34px] mb-3">
              Cache Box Plus (Bonds)
            </div>
            <div className="flex items-start gap-[30px]">
              <img
                src={CacheDrawBlock}
                alt="cache draw block"
                className="w-[130px] mt-[-20px]"
              />
              <div className="text-[#000] text-[20px] font-[300] leading-relaxed text-left">
                <ul className="list-disc ml-[20px]">
                  <li>
                    Mint (Bond) Cache to get rewarded 0.5% per day for 400 days
                  </li>
                  <li>
                    Similar to a traditional banking “Bond”, principal is time-locked
                  </li>
                  <li>
                    Low risk bond yield that is repaid by user rewards accruing constantly
                  </li>
                  <li>
                    Available rewards can be withdrawn, compounded, and/or added directly to Cache Box & Cache Blue Chips (CBC)
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="border-4 border-[#0099FD] mb-[30px]">
            <div className="text-[#0099FD] text-[34px] mb-3">
              Cache Blue Chips (CBC)
            </div>
            <div className="flex items-start gap-[30px]">
              <div className="text-[#000] text-[20px] font-[300] leading-relaxed text-left">
                <ul className="list-disc ml-[20px]">
                  <li>
                    Exclusive to cache box participants rewarding direct blue chip
                    crypto tokens
                  </li>
                  <li>
                    Users’ bond rewards are deposited into CBC which pays rewards
                    after 30 days
                  </li>
                  <li>
                    Stack Cache DAO members can vote on tokens to be added to CBC
                    rewards
                  </li>
                  <li>
                    CBC participants earn a maximum of 50% apr on deposited
                    principal
                  </li>
                  <li>
                    Teams have a CBC treasury where partners can earn monthly
                  </li>
                </ul>
              </div>
              <img
                src={CacheDrawNode}
                alt="cache draw node"
                className="w-[130px] mt-[-20px]"
              />
            </div>
          </Card>
          <Card className="border-4 border-[#66FCE7]">
            <div className="text-[#66FCE7] text-[34px] mb-3">SweepSTACK</div>
            <div className="flex items-start gap-[30px]">
              <img
                src={CacheDrawCloud}
                alt="cache draw cloud"
                className="w-[130px] mt-[-20px]"
              />
              <div className="text-[#000] text-[20px] font-[300] leading-relaxed text-left">
                <ul className="list-disc ml-[20px]">
                  <li>
                    Lossless sweepstakes, each entry grows users’ Cache box and/or
                    Stack
                  </li>
                  <li>
                    All individual entrants can win misc. and/or max depositor
                    cache box prizes
                  </li>
                  <li>
                    Teams participate daily to earn BNB by meeting standards for
                    depositing (daily) and can win a misc. and/or team max
                    depositor prize
                  </li>
                  <li>
                    Teams & Team members qualify by bonding in cache box & buying
                    stack
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
