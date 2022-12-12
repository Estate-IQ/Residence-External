import React from "react";
import GNavbar from "../../components/Navbar/ResidentNavigator";
import Mobile from "../../components/Navbar/ResidentMobile";
import TopNav from "../../components/Navbar/ResidentNav";
import QuickAccess from "../../components/QuickAccess";
import ResidentCards from "../../components/ResidentCard";
import CreateAds from "../../components/CreateAds";
import LatestAccess from "../../components/LatestAccess";
import styled from "styled-components";
import Invoices from "../../components/Invoices";
// import LatestResidentsAndChart from "../../components/AdminChart";

const Overview = () => {
  return (
    <section className="change_ratio">
      <GNavbar overview="active_tab" />
      <Mobile />
      <section className="selected_tab">
        <TopNav />
        {/* <Invoices /> */}
        <div className="dashboard_container">
          <QuickAccess />
          <ResidentCards />
          <AdvertContainer>
            <CreateAds />
            <LatestAccess />
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
