import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import { SVGs } from "../../assets/svg/SVGs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import GNavbar from "../../components/Navbar/ResidentNavigator";
import AllUtilities from "../../components/SetUtilityView";
import Mobile from "../../components/Navbar/ResidentMobile";
import TopNav from "../../components/Navbar/ResidentNav";

function AdminTransaction() {
  return (
    <>
      <section className="change_ratio">
        <GNavbar transaction="active_tab" />
        <Mobile />
        {/* <AllUtilities open={edit} onClose={() => setEditCollection(false)} /> */}

        <div className="selected_tab">
          <TopNav />
        </div>
      </section>
    </>
  );
}

export default AdminTransaction;

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
  @media (max-width: 420px) {
    .search_set,
    button {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .search_set {
      width: 220px;
    }
    .outlined {
      width: 180px !important;
    }
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin: 0 10px;
        width: 135px;
      }
      button {
        margin-top: 0;
        height: 45px;
        margin-left: 10px;
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
    margin-bottom: 30px;
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;
      padding: 5px 20px;
      text-align: center;
      margin-right: 15px;
      border-bottom: 3px solid #c0c0c0;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 10px;
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
const TableFrame = styled.div`
  .activity_heading {
    font-family: "Satoshi";

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    color: #545454;
  }
  .ddk {
    min-width: 143px;
  }
  .activity_table {
    font-family: "Satoshi";

    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #545454;
  }
  .user-name {
    margin-left: 10px;
    font-weight: 700;
  }
  .team-members {
    margin-top: 40px;
    width: 65%;
  }

  .Residents-address {
    width: 153px;
    height: 34px;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    /* or 17px */

    display: flex;
    align-items: center;

    /* Grey/2 */
    color: #545454;
  }

  .resume_data {
    margin: 15px;
    width: 32px;
    height: 18px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    letter-spacing: -0.06em;
  }
  .transaction-account {
    font-weight: 700;
  }

  .transaction-purpose {
    font-weight: 700;
  }

  .action_data {
    margin: 20px 0;
    width: 32px;
    height: 10px;
    font-size: 16px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  .img-action {
    margin: 20px 0;
    display: flex;
    align-itens: center;
    justify-content: space-between;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    padding: 8px;
    color: #2d4bf3;
    cursor: pointer;
  }

  .img-action a {
    margin-right: 8px;
    cursor: pointer;
  }
  .activity-time {
    font-weight: 700;
  }
`;

// DATA
