import React from "react";
import GNavbar from "../../components/Navbar/ExternalNavigator.jsx";
import Mobile from "../../components/Navbar/ExternalNavbar";
import TopNav from "../../components/Navbar/ExternalNotify";
import ExternalCards from "../../components/ExternalCards";
import styled from "styled-components";
import VerifyButton from "../../components/VerifyButton";
import VerifyState from "../../components/VerifyState.jsx";
// import LatestResidentsAndChart from "../../components/AdminChart";

const Overview = () => {
  return (
    <section className="change_ratio">
      <GNavbar overview="active_tab" />
      <Mobile />
      <section className="selected_tab">
        <TopNav />

        <div className="dashboard_container">
          <VerifyButton />
          <ExternalCards />
          <VerifyState />
          <AdvertContainer>
            {/* <CreateAds />
            <LatestAccess /> */}
          </AdvertContainer>
        </div>
      </section>
    </section>
  );
};

export default Overview;

let AdvertContainer = styled.section`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    .handleCarouselBanner {
      width: 63%;
    }
    .latestAccess {
      width: 35%;
    }
  }
`;
