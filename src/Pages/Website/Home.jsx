import React from "react";
import styled from "styled-components";
import Banner from "../../components/Website/Banner";
import Footer from "../../components/Website/Footer";
import TopNav from "../../components/Website/TopNav";

const Home = () => {
  return (
    <Homepage>
      <TopNav />
      <Banner />
      <Footer />
    </Homepage>
  );
};

export default Home;

let Homepage = styled.section``;
