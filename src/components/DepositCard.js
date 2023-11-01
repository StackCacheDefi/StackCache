import { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useAccount, useNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";

import { useWeb3 } from "../contexts/Web3Context";

const Button = styled.button`
  background: ${(props) => props.color};
  height: 32px;
  width: 180px;
  border-radius: 12px;

  &:disabled {
    background: #555;
    color: #888;
  }
`;

export default function DepositCard(props) {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { USDCContract, EarlyAdapterContract, USDCBalance, getUSDCBalance } =
    useWeb3();
  const [processDeposit, setProcessDeposit] = useState("");
  const [depositAmount, setDepositAmount] = useState(null);

  async function handleApprove(weiAmount, reward) {
    setProcessDeposit("Approving...");
    const tx = await USDCContract.approve(
      process.env.REACT_APP_DEPOSIT_CONTRACT,
      weiAmount
    );
    tx.wait()
      .then(async () => {
        setProcessDeposit("Depositing...");
        const tx = await EarlyAdapterContract.deposit(weiAmount, reward);
        tx.wait().then(async () => {
          toast.success("Deposited successfully!");
          await getUSDCBalance();
          setProcessDeposit("");
        });
      })
      .catch((err) => {
        setProcessDeposit("");
        console.log(err);
      });
  }

  const handleDeposit = async (reward) => {
    if (depositAmount !== "" && depositAmount !== 0) {
      const weiAmount = ethers.utils.parseEther(depositAmount.toString());
      handleApprove(weiAmount, reward)
        .then()
        .catch((err) => {
          console.log(err);
          setProcessDeposit("");
        });
    } else {
      alert("Input deposit amount greater than 0.");
    }
  };

  return (
    <div
      className={`${props.type === "hboard" && "w-[400px]"} ${
        props.type === "board" && "w-[400px] tablet:w-[500px]"
      } ${props.type === "committee" && "w-[400px] tablet:w-[500px]"}`}
    >
      <div
        className={`${props.type === "hboard" && "bg-[#3590FF]"} ${
          props.type === "board" && "bg-[#fff] text-[#3590FF]"
        } ${
          props.type === "committee" && "bg-[#1EBA1A]"
        } border border-[#fff] rounded-lg text-[14px] tablet:text-[18px] font-[400] py-[10px] leading-[22px]`}
      >
        {props.titleTop}
        <br /> {props.titleBottom}
      </div>
      <div className="border border-[#A5A6A5] font-[300] rounded-lg backdrop-blur p-[10px] h-[350px] flex flex-col justify-between items-center">
        <div className="text-left text-[12px] tablet:text-[14px] leading-[24px]">
          {props.description}
          {props.descriptions.map((item, i) => {
            return (
              <li className="pl-[10px]" key={i}>
                {item}
              </li>
            );
          })}
        </div>
        <div className="w-[90%]">
          <div
            className={`text-[#f00] text-[12px] font-[500] ${
              depositAmount != null && depositAmount < props.minValue
                ? "block"
                : "hidden"
            } text-right`}
          >
            Minimum amount is ${props.minValue}
          </div>
          <input
            placeholder={`Deposit Amount (min. $${props.minValue} USDC)`}
            className={`bg-transparent border ${
              depositAmount != null && depositAmount < props.minValue
                ? "border-[#f00]"
                : "border-[#aaa]"
            } w-full rounded-md px-[10px] py-[5px] outline-none`}
            onChange={(e) => setDepositAmount(e.target.value)}
            type="number"
            min={props.minValue}
            value={depositAmount}
          />
          <div
            className={`mb-[15px] text-right text-[12px] ${
              Number(USDCBalance) < Number(depositAmount)
                ? "text-[#f00] font-[500]"
                : "text-[#fff]"
            }`}
          >
            Balance: {USDCBalance === undefined ? "Loading..." : USDCBalance}{" "}
            USDC
          </div>
          <Button
            color={
              props.type === "hboard"
                ? "linear-gradient(180deg, #3590FF 0%, #A5A6A5 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);"
                : props.type === "board"
                ? "linear-gradient(180deg, #3590FF 28.68%, #000000 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);"
                : "linear-gradient(180deg, #1EBA1A 28.68%, #000000 100.12%), linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);"
            }
            onClick={
              isConnected
                ? () =>
                    handleDeposit(
                      props.type === "hboard"
                        ? `${props.type}_${props.rewardPercent}`
                        : `${props.type}`
                    )
                : open
            }
            disabled={
              processDeposit !== "" ||
              depositAmount == null ||
              (depositAmount != null && depositAmount < props.minValue) ||
              Number(USDCBalance) < Number(depositAmount)
            }
          >
            <div className="font-[200]">
              {isConnected
                ? chain.id !== +process.env.REACT_APP_CHAIN_ID
                  ? "Wrong Network"
                  : processDeposit === ""
                  ? "Approve/Deposit"
                  : processDeposit
                : "Connect Wallet"}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
