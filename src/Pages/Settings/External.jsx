import React, { useState } from "react";
import styled from "styled-components";
import ExternalProfile from "../../components/ExternalProfile";
import AdminEmail from "../../components/ChangeEmail";
import GNavbar from "../../components/Navbar/ExternalNavigator.jsx";
import Mobile from "../../components/Navbar/ExternalNavbar";
import TopNav from "../../components/Navbar/ExternalNotify";
import AdminPassword from "../../components/ChangePassword";
import AdminNotice from "../../components/NotificationSettings";

const ExternalSettings = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <profileContainer>
      <section className="change_ratio">
        <GNavbar />
        <Mobile />
        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <div className="tabs">
                  <span
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={() => handleClick(1)}
                  >
                    <button>Profile</button>
                  </span>

                  <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button>Email</button>
                  </span>
                  <span
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                  >
                    <button>Password</button>
                  </span>
                  <span
                    className={`tab ${checkActive(4, "active")}`}
                    onClick={() => handleClick(4)}
                  >
                    <button>Notification</button>
                  </span>
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <ExternalProfile />
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <AdminEmail />
              </div>
              <div className={`panel ${checkActive(3, "active")}`}>
                <AdminPassword />
              </div>
              <div className={`panel ${checkActive(4, "active")}`}>
                <AdminNotice />
              </div>
            </div>
          </div>
        </div>
      </section>
    </profileContainer>
  );
};

export default ExternalSettings;

const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .event-input {
    max-width: 675px;
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin-left: 10px;
        width: auto !important;
      }
      button {
        margin-top: 0;
        height: 45px;
      }
      .event-select {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .event-input {
      .event-select {
        display: none;
      }
    }
  }
  .tabs {
    margin: 0;

    .tab {
      margin: 0;
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 10px;

      text-align: center;
      margin-right: 15px;
      border-bottom: 3px solid #c0c0c0;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 5px 10px;
        //styleName: Web/Small Copy;

        font-size: 16px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .active {
      background: transparent;
      border-bottom: 3px solid #2d4bf3;
      button {
        color: #2d4bf3;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
`;
