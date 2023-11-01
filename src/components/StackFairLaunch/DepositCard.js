import { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useAccount, useNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";
import { useWeb3 } from "../../contexts/Web3Context";

const Button = styled.button`
  height: 32px;
  width: 180px;
  border-radius: 12px;
  background: linear-gradient(180deg, #F5515F 0%, #A5A6A5 100.12%),
  linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  color: white;

  &:disabled {
    background: #555;
  }
`;

export default function DepositCard(props) {
  const {open} = useWeb3Modal();
  const {isConnected} = useAccount();
  const {chain} = useNetwork();
  const {USDCContract, EarlyAdapterContract, USDCBalance, getUSDCBalance, BNBContract, BNBBalance, getBNBBalance} =
    useWeb3();
  const [processDeposit, setProcessDeposit] = useState("");
  const [depositAmount, setDepositAmount] = useState(null);
  const balance = props.token === "BNB" ? BNBBalance : USDCBalance;

  async function handleApprove(weiAmount, reward) {
    setProcessDeposit("Approving...");

    if (props.token === "BNB") {
      const tx = await BNBContract.approve(
        process.env.REACT_APP_DEPOSIT_CONTRACT,
        weiAmount
      );
      tx.wait()
        .then(async () => {
          setProcessDeposit("Depositing...");
          const tx = await EarlyAdapterContract.deposit(weiAmount, reward);
          tx.wait().then(async () => {
            toast.success("Deposited successfully!");
            await getBNBBalance();
            setProcessDeposit("");
          });
        })
        .catch((err) => {
          setProcessDeposit("");
          console.log(err);
        });
    } else {
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
    <div className="w-full tablet:w-[400px] flex flex-col items-center gap-[10px] py-[16px]">
      <div className="font-[300] text-white text-[24px]">
        {props.title}
      </div>
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
          onClick={
            isConnected
              ? () =>
                handleDeposit(props.token)
              : open
          }
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
                  ? "Approve/Deposit"
                  : processDeposit
              : "Connect Wallet"}
          </div>
        </Button>
      </div>
    </div>
  );
}
