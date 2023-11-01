import styled from "styled-components";
import Intro from "../../components/Products/CacheToken/1_Intro";
import Concept from "../../components/Products/CacheToken/2_Concept";
import Products from "../../components/Products/CacheToken/3_Products";
import Whitepaper from "../../components/Products/CacheToken/4_Whitepaper";
import Footer from "../../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const CacheToken = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <Concept />
      <Products />
      <Whitepaper />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default CacheToken;
