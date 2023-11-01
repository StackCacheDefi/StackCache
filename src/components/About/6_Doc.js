import styled from "styled-components";

export const SubscribeButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: linear-gradient(180deg, #f5515f 0%, #9f041b 100.12%),
    linear-gradient(91.72deg, #ff0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
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

export default function Doc() {
  return (
    <div className="flex flex-col tablet:flex-row w-full py-[50px]">
      <div className="flex-1 bg-gradient-to-b from-[#F5515F] to-[#9F041B] p-[30px] flex justify-center">
        <div className="max-w-[500px] flex flex-col items-start gap-[20px]">
          <div className="font-grotesk text-[32px] text-white">
            Read our Whitepaper
          </div>
          <div className="max-w-[400px] font-sans font-[200] text-[22px] leading-[26px] text-white text-left">
            Learn about the specifics of the Stack Cache Ecosystem.
          </div>
          <div className="flex gap-[30px]">
            <a
              href="https://tr.ee/lWPrqUOWyg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-[12px] border rounded-md text-white px-[20px] py-[5px]">
                Download Whitepaper PDF
              </button>
            </a>
            <a
              href="https://d1fdloi71mui9q.cloudfront.net/0RtRXxyRju7TJjeF2jUV_Stack%20Cache%20Litepaper%20v2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-[12px] border rounded-md text-white px-[20px] py-[5px]">
                Download Litepaper PDF
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#555] p-[30px] flex justify-center">
        <div className="max-w-[500px] flex flex-col items-start gap-[20px]">
          <div className="font-grotesk text-[32px] text-white">
            See what’s next...
          </div>
          <div className="max-w-[400px] font-sans font-[200] text-[22px] leading-[26px] text-white text-left">
            Take a look at our roadmap for details of what’s to come for Stack
            Cache.
          </div>
          <div className="flex w-full justify-center">
            <a
              href="https://tr.ee/Bvvbc0YVNz"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-[12px] border rounded-md text-white px-[20px] py-[5px]">
                Download Roadmap PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
