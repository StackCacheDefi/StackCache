import styled from "styled-components";
import Intro from "../../components/Products/StackToken/1_Intro";
import Concept from "../../components/Products/StackToken/2_Concept";
import Advantage from "../../components/Products/StackToken/3_Advantage";
import Whitepaper from "../../components/Products/StackToken/4_Whitepaper";
import Footer from "../../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const StackToken = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center bg-gradient-to-b from-[#100000] from-10% to-[#000000] to-80%">
      <Intro />
      <Concept />
      <Advantage />
      <Whitepaper />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default StackToken;
