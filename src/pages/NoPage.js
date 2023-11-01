import Footer from "../components/Home/8_Footer";
import styled from "styled-components";
import Doc from "../components/EarlyAdopters/7_Doc";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[55px] w-full flex flex-col items-center">
      <div className="py-[230px] w-[300px] tablet:w-[600px] font-grotesk font-[400] text-[32px] leading-[32px] tablet:text-[48px] tablet:leading-[48px] text-white">
        Whitepaper pdf in the scroll down menu, no need for a page just yet
      </div>
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>

  );
};

export default NoPage;
