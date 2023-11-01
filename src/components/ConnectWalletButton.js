import styled from "styled-components";
import { useConnect, useAccount } from "wagmi";
import truncateEthAddress from "truncate-eth-address";

export const Button = styled.button`
  background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s;
  color: #fff;

  &:hover {
    background: linear-gradient(180deg, #ff616f 0%, #af142b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:active {
    background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:disabled {
    background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }
`;

export default function ConnectWalletButton() {
  const { connect, connectors, isLoading } = useConnect();
  const { address, isConnected } = useAccount();

  return (
    <Button onClick={() => connect({ connector: connectors[0] })}>
      {isLoading && "Connecting"}
      {isConnected && <div>{truncateEthAddress(address)}</div>}
      {!isLoading && !isConnected && <>Connect Wallet</>}
    </Button>
  );
}
