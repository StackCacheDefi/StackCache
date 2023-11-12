import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import moment from 'moment-timezone';

const Bg = styled.div`
  background: linear-gradient(180deg, #F5515F, #9F041B);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Days = () => {
  const endTime = moment("2023-11-15 00:00:00 EST").unix();
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
    <>
      {endTime > now &&
        <Bg>
          <div className="font-mono text-white font-[400] text-[60px] tablet:text-[80px] leading-[60px] tablet:leading-[90px] px-[10px]">
            {formatDuration()}
          </div>
          <div className="font-[400] text-white text-[18px] leading-[24px] mt-[10px]">
            We are going big. Get Stack tokens at the lowest cost.
          </div>
        </Bg>
      }
    </>
  );
};

export default Days;
