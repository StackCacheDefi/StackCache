import Intro from "../../components/Community/StackNation/1_Intro";
import StackCacheDao from "../../components/Community/StackNation/2_StackCacheDao";
import WantsYou from "../../components/Community/StackNation/3_WantsYou";
import Doc from "../../components/EarlyAdopters/7_Doc";
import Footer from "../../components/Home/8_Footer";
import styled from "styled-components";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const StackNation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[55px] w-full flex flex-col items-center">
      <Intro />
      <StackCacheDao />
      <WantsYou />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default StackNation;
