import styled from "styled-components";
import Intro from "../components/About/1_Intro";
import Concept from "../components/About/2_Concept";
import Earn from "../components/About/3_Earn";
import NTTs from "../components/About/4_NTTs";
import FAQ from "../components/About/5_FAQ";
import Doc from "../components/About/6_Doc";
import Footer from "../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elementId = window.location.hash.substring(1);
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({behavior: "smooth"});
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <Concept />
      <Earn />
      <NTTs />
      <FAQ />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default About;
