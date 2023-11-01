import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment-timezone";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Alert = styled.div`
  font-family: SpaceGrotesk;
  font-weight: 400;
  font-size: 64px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 860px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Description = styled.div`
  font-family: WorkSans;
  font-weight: 300;
  font-size: 24px;
  line-height: 26px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const GrayButton = styled.button`
  background: linear-gradient(180deg, #FFFFFF, #737373);
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  border-radius: 12px;
  width: 100%;
  font-weight: 400;
`;

const BlackButton = styled.button`
  background: linear-gradient(180deg, #000000, #737373);
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  border-radius: 12px;
  width: 100%;
  font-weight: 300;
`;

export const Button = styled.button`
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  color: #000;

  &:hover {
    background: linear-gradient(180deg, #fff 0%, #ccc 100.12%);
  }

  &:active {
    background: linear-gradient(180deg, #ccc 0%, #fff 100.12%);
  }
`;

export default function NTTCountDown() {
  const endTime = moment("2023-11-08 17:00:00 EST").unix();
  const startTime = moment("2023-11-01 17:00:00 EST").unix();
  const [now, setNow] = useState(moment().tz("EST").unix());

  const timerId = useRef();

  const formatDuration = () => {
    let totalSeconds = endTime - now;
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= (24 * 60 * 60);
    const hours = Math.floor(totalSeconds / (60 * 60));
    totalSeconds %= (60 * 60);
    const minutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    const seconds = Math.floor(totalSeconds);

    return `${days > 0 ? days + " DAYS " : ""}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} to go`;
  };

  useEffect(() => {
    if (endTime > now) {
      timerId.current = setInterval(() => {
        setNow(moment().tz("EST").unix());
      }, 1000);

      return () => {
        clearInterval(timerId.current);
      };
    }
  }, []);

  useEffect(() => {
    if (endTime <= now)
      clearInterval(timerId.current);
  }, [now]);

  return (
    <Container>
      {(now > startTime && now < endTime) ? (
        <>
          <div className="font-mono text-white font-[400] text-[60px] tablet:text-[80px] leading-[60px] tablet:leading-[80px] px-[10px] mt-[30px]">
            {formatDuration()}
          </div>
          <div className="font-grotest font-[400] text-[36px] leading-[36px] text-[#ffeb3c]">
            The Stack Fair Launch is open NOW!
          </div>
          <div className="flex w-full flex-col tablet:flex-row px-[12px] tablet:max-w-[1000px] justify-between mb-[-30px] gap-[20px]">
            <div className="w-full tablet:w-[50%] flex flex-col gap-[10px]">
              <Link to="/stack_fair_launch">
                <GrayButton>
                  Enter The Stack Liquidity Event & Get Stack Tokens
                </GrayButton>
              </Link>
              <div className="text-[14px] font-[300] text-white">
                Donate BNB and/or USDC to get Stack Tokens at the lowest cost!
              </div>
            </div>
            <div className="w-full tablet:w-[35%] flex flex-col gap-[10px]">
              <Link to="/early_adopters">
                <BlackButton>
                  Buy an Early Adopter NTT
                </BlackButton>
              </Link>
              <div className="text-[13px] font-[300] text-[#A5A6A5]">
                Get 0% fees at Stack Fair Launch By Being a NTT Holder
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Alert>Early Adopter NTT Sale Now!</Alert>
          <Description>
            We want YOU to be an OWNER first. r Get up to 250% of your deposit after launch along with a
            NTT to own a piece of the protocol FOREVER!
          </Description>
          <Link to="/early_adopters">
            <Button>Early Adopter Presale</Button>
          </Link>
        </>
      )}
    </Container>
  );
}
