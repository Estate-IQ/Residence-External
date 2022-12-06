import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const Features = () => {
  return (
    <PageFeatures className="webContainer">
      <div className="headingB ">
        <p>Features</p>
        <h3>
          The <span> Complete Toolset</span> For Your <span>Community</span>
        </h3>
      </div>

      <div className="mainFeatures">
        {/* Section ! */}
        <div className="fSection">
          <div className="eachFea">
            <h4>Safety and Security</h4>
            <p>
              Security is among the most notable considerations when people opt
              for gated communities. Estate managers can support and strengthen
              their security architecture with EstateIQ.
            </p>
          </div>
          <div className="eachFea">
            <h4>Estate Secretariat/Board </h4>
            <p>
              The estate office can enhance productivity and ensure
              effectiveness in communications with residents and vendors.
            </p>
          </div>
        </div>
        {/* Section ! */}
        <div className="fSection">
          <div className="eachFea">
            <img src={Images.dashBoardImg} alt="" />
          </div>
        </div>

        {/* Section ! */}
        <div className="fSection">
          <div className="eachFea">
            <h4>Residents Collaboration</h4>
            <p>
              EstateIQ enables collaboration among residents as well with the
              estate board.
            </p>
          </div>
          <div className="eachFea">
            <h4>Access Control</h4>
            <p>
              EstateIQ offers a secure, convenient, flexible way of controlling
              who has access to your building and when access is allowed.
            </p>
          </div>
          <div className="eachFea">
            <h4>Billing and Payment System</h4>
            <p>
              Collection of fees and dues are critical to maintaining
              infrastructure. EstateIQ makes payments convenient, and
              collections seamless.
            </p>
          </div>
        </div>
      </div>
      <div className="btn_mid">
        <button className="important-btn">Get Started</button>
      </div>
    </PageFeatures>
  );
};

export default Features;

let PageFeatures = styled.section`
  .headingB {
    margin-top: 70px;
    max-width: 650px;
    p {
      color: #1737e6;
      font-weight: 500;
    }
  }
  .btn_mid {
    text-align: center;
  }
  h3 {
    font-family: DM Sans;
    font-size: 60px;
    font-weight: 700;
    line-height: 74px;
    letter-spacing: -0.06em;
    text-align: left;
    @media (max-width: 450px) {
      font-size: 40px;
      line-height: 60px;
      span {
        font-size: 42px !important;
      }
    }
    span {
      font-size: 60px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: -0.06em;
      text-align: left;
      color: rgba(234, 203, 48, 1);
    }
  }
  .mainFeatures {
    margin-top: 30px;
    .fSection {
      margin: 50px 0;
    }
    .eachFea {
      margin: 25px 0;
      h4 {
        font-size: 22px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    @media (min-width: 668px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .fSection {
        width: 45%;
        margin-bottom: 0px;
        .eachFea {
          margin: 10px 0;
        }
      }
    }
    @media (min-width: 1028px) {
      .fSection {
        width: 31%;
      }
    }
  }
`;
