import React from "react";
import styled from "styled-components";
import AboutBanner from "../../components/Website/AboutBanner";
import AboutQuote from "../../components/Website/AboutQuote";
import Footer from "../../components/Website/Footer";
import SubscribeWaitList from "../../components/Website/SubscribeWaitList";
import TopNav from "../../components/Website/TopNav";

const AboutUs = () => {
  return (
    <AboutPage>
      <TopNav />
      <AboutBanner />
      <AboutQuote />
      <SubscribeWaitList />
      <Footer />
    </AboutPage>
  );
};

export default AboutUs;

let AboutPage = styled.section`
  button {
    transform: scale(1);
    transition: 0.4s;
    &:hover {
      transform: scale(0.96) !important;
    }
  }
`;
