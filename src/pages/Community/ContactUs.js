import styled from "styled-components";
import Intro from "../../components/Community/ContactUs/1_Intro";
import LetsChat from "../../components/Community/ContactUs/2_LetsChat";
import SocialMedia from "../../components/Community/ContactUs/3_SocailMedia";
import Doc from "../../components/EarlyAdopters/7_Doc";
import Footer from "../../components/Home/8_Footer";
import { useEffect } from "react";

const ComponentContainer = styled.div`
  width: 1280px;
  padding: 50px 0;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elementId = window.location.hash.substring(1);
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({behavior: "smooth"});
  }, []);

  return (
    <div className="mt-[50px] w-full flex flex-col items-center">
      <Intro />
      <LetsChat />
      <SocialMedia />
      <Doc />
      <ComponentContainer>
        <Footer />
      </ComponentContainer>
    </div>
  );
};

export default ContactUs;
