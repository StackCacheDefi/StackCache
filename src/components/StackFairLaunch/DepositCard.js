import { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";

import { useWeb3 } from "../../contexts/Web3Context";

const Button = styled.button`
  height: 32px;
  width: 180px;
  border-radius: 12px;
  background: linear-gradient(180deg, #f5515f 0%, #a5a6a5 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  color: white;

  &:disabled {
    background: #555;
  }
`;

export default function DepositCard(props) {
  const { open } = useWeb3Modal();
  const {
    chain,
    isConnected,
    USDCContract,
    LiquidityDriveContract,
    USDCBalance,
    getUSDCBalance,
    BNBBalance,
    getBNBBalance,
  } = useWeb3();
  const [processDeposit, setProcessDeposit] = useState("");
  const [depositAmount, setDepositAmount] = useState(null);
  const balance = props.token === "BNB" ? BNBBalance : USDCBalance;

  async function handleDonate(weiAmount) {
    if (props.token === "BNB") {
      setProcessDeposit("Donating...");

      const tx = await LiquidityDriveContract.donate(0, {value: weiAmount});
      tx.wait().then(async () => {
        toast.success("Donated successfully!");
        await getBNBBalance();
        setProcessDeposit("");
      });
    } else {
      setProcessDeposit("Approving...");

      const tx = await USDCContract.approve(
        process.env.REACT_APP_LIQUIDITY_DRIVE_CONTRACT,
        weiAmount
      );
      tx.wait()
        .then(async () => {
          setProcessDeposit("Donating...");
          const tx = await LiquidityDriveContract.donate(weiAmount);
          tx.wait().then(async () => {
            toast.success("Donated successfully!");
            await getUSDCBalance();
            setProcessDeposit("");
          });
        })
        .catch((err) => {
          setProcessDeposit("");
          console.log(err);
        });
    }
  }

  const handleDeposit = () => {
    if (depositAmount !== "" && depositAmount !== 0) {
      const weiAmount = ethers.utils.parseEther(depositAmount.toString());
      handleDonate(weiAmount)
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
    <div className="w-full tablet:w-[400px] flex flex-col items-center gap-[10px] py-[16px]">
      <div className="font-[300] text-white text-[24px]">{props.title}</div>
      <img src={props.img} className="w-[52px] h-[52px]" />
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
          placeholder={`Deposit Amount (min. $${props.minValue} ${props.token})`}
          className={`bg-transparent text-white border ${
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
            Number(balance) < Number(depositAmount)
              ? "text-[#f00] font-[500]"
              : "text-[#fff]"
          }`}
        >
          Balance: {balance === undefined ? "Loading..." : balance}{" "}
          {props.token}
        </div>
        <Button
          onClick={isConnected ? () => handleDeposit() : open}
          disabled={
            processDeposit !== "" ||
            depositAmount == null ||
            (depositAmount != null && depositAmount < props.minValue) ||
            Number(balance) < Number(depositAmount)
          }
        >
          <div className="font-[200]">
            {isConnected
              ? chain.id !== +process.env.REACT_APP_CHAIN_ID
                ? "Wrong Network"
                : processDeposit === ""
                ? props.token === "BNB"
                  ? "Donate"
                  : "Approve/Deposit"
                : processDeposit
              : "Connect Wallet"}
          </div>
        </Button>
      </div>
    </div>
  );
}
