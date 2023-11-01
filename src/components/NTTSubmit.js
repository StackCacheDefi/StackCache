import { useState } from "react";
import styled from "styled-components";
import { useContract, useSigner } from "wagmi";
import EarlyAdapterABI from "../assets/abis/EarlyAdapter.json";
import RedButton from "./RedButton";
import { toast } from "react-toastify";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 500px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 12px;
  text-align: left;
`;

const Input = styled.input`
  background: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;
`;

export default function NTTSubmit() {
  const { data: signer } = useSigner();
  const [depositInfo, setDepositInfo] = useState({
    email: "",
    discord: "",
    telegram: "",
    wallet: "",
  });
  const [validate, setValidate] = useState(false);
  const [processSubmit, setProcessSubmit] = useState("");

  const EarlyAdapterContract = useContract({
    address: process.env.REACT_APP_DEPOSIT_CONTRACT,
    abi: EarlyAdapterABI,
    signerOrProvider: signer,
  });

  const handleSubmit = async () => {
    setValidate(true);
    if (depositInfo.email !== "" && depositInfo.wallet !== "") {
      setProcessSubmit("Submitting...");
      const tx = await EarlyAdapterContract.submit(
        depositInfo.email,
        depositInfo.discord,
        depositInfo.telegram,
        depositInfo.wallet
      );
      tx.wait()
        .then(() => {
          toast.success("Successfully submitted");
          console.log("submitted");
          setProcessSubmit("");
        })
        .catch((err) => {
          console.log("error", err);
          setProcessSubmit("");
        });
    }
  };

  return (
    <>
      <div className="text-[#fff]">
        <InputWrapper>
          <Label>Email *</Label>
          <Input
            id="email"
            onChange={(e) => {
              setDepositInfo({ ...depositInfo, email: e.target.value });
            }}
            className={`border ${
              validate && depositInfo.email === ""
                ? "border-[#f00]"
                : "border-[#aaa]"
            }`}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Discord Username (for private channel access)</Label>
          <Input
            id="discord"
            onChange={(e) => {
              setDepositInfo({ ...depositInfo, discord: e.target.value });
            }}
            className="border border-[#aaa]"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Telegram Username (for private channel access)</Label>
          <Input
            id="telegram"
            onChange={(e) => {
              setDepositInfo({ ...depositInfo, telegram: e.target.value });
            }}
            className="border border-[#aaa]"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>
            Wallet Address * (must match the wallet you use to deposit)
          </Label>
          <Input
            id="twitter"
            onChange={(e) => {
              setDepositInfo({ ...depositInfo, wallet: e.target.value });
            }}
            className="border border-[#aaa]"
          />
        </InputWrapper>
      </div>
      <RedButton onClick={handleSubmit}>
        <div className="font-[200]">
          {processSubmit === "" ? "Submit" : processSubmit}
        </div>
      </RedButton>
    </>
  );
}
