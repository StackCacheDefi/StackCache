import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(180deg, #949494 0%, #333 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, #545454 92.02%);
  border-radius: 12px;
  min-height: 40px;
  min-width: 150px;
  padding: 5px 10px 8px 10px;
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
    background: linear-gradient(180deg, #838383 0%, #444 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:active {
    background: linear-gradient(180deg, #777 0%, #050505 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }

  &:disabled {
    background: linear-gradient(180deg, #999 0%, #333 100.12%),
      linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }
`;

export default function GrayButton({ children }) {
  return <Button>{children}</Button>;
}
