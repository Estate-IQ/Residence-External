import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../components/ScrollToTop";
import Banner from "../../components/Website/Banner";
import Benefits from "../../components/Website/Benefits";
import BuildLife from "../../components/Website/BuildLife";
import Features from "../../components/Website/Features";
import Footer from "../../components/Website/Footer";
import SubscribeWaitList from "../../components/Website/SubscribeWaitList";
import Testimonial from "../../components/Website/Testimonial";
import TopNav from "../../components/Website/TopNav";

const Home = () => {
  ScrollToTop();

  return (
    <Homepage>
      <TopNav />

      <Banner />
      <YellowBg>
        <BuildLife />
        <Features />
      </YellowBg>
      <BlueBg>
        <Benefits />
      </BlueBg>
      <Blackbg>
        <Testimonial />
      </Blackbg>

      <SubscribeWaitList />
      <Footer />
    </Homepage>
  );
};

export default Home;

let Homepage = styled.section`
  button {
    transform: scale(1);
    transition: 0.4s;
    &:hover {
      transform: scale(0.96) !important;
    }
  }
`;
let YellowBg = styled.section`
  background: #fffbe6;
  padding: 80px 0;
  margin: 80px 0;
  margin-bottom: 0;
`;
let BlueBg = styled.section`
  background: #f2f6ff;
  padding: 80px 0;

  margin-bottom: 0;
`;
let Blackbg = styled.section`
  background: #111;
  padding: 80px 0;
  padding-bottom: 120px;
  margin-bottom: 0;
  p,
  h5,
  h6 {
    color: #fff;
  }
`;
