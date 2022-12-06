import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const TheTeam = () => {
  return (
    <Teams>
      <section className="webContainer">
        <div className="topLabel mb-4">
          <p>Meet the Team</p>
          <h3>
            We bring a wealth of skills and experience from a wide range of
            backgrounds...
          </h3>
          <span>
            We are a team of tech enthusiasts, and our goal is to offer
            stakeholders across the real estate markets in Africa, a unified and
            easy to use platform that delivers value through a variety of
            property related products, services and analytics.
          </span>
        </div>

        <div className="mainTeams">
          <div className="eachTeam">
            <img src={Images.Olaitan} alt="" />
            <div className="nameBank">
              <h4>Olaitan Oludare</h4>
              <p>Co-founder & CEO</p>
            </div>
          </div>
          <div className="eachTeam">
            <img src={Images.oyedotun} alt="" />
            <div className="nameBank">
              <h4>Aderolake Oyedotun</h4>
              <p>People Matters</p>
            </div>
          </div>
          {/* <div className="eachTeam">
            <img src={Images.img3} alt="" />
            <div className="nameBank">
              <h4>Makinde Sodiq Abiodun</h4>
              <p>Web Designer</p>
            </div>
          </div>
          <div className="eachTeam">
            <img src={Images.img4} alt="" />
            <div className="nameBank">
              <h4>Makinde Sodiq Abiodun</h4>
              <p>Web Designer</p>
            </div>
          </div>
          <div className="eachTeam">
            <img src={Images.img6} alt="" />
            <div className="nameBank">
              <h4>Makinde Sodiq Abiodun</h4>
              <p>Web Designer</p>
            </div>
          </div> */}
        </div>
      </section>
    </Teams>
  );
};

export default TheTeam;

let Teams = styled.section`
  background: #fffbe6;
  padding: 50px 0;
  .mainTeams {
    .eachTeam {
      position: relative;
      width: 100%;
      margin-bottom: 30px;
      img {
        border-radius: 5px 5px 0px 0px;
      }
      .nameBank {
        position: absolute;
        bottom: 0;
        padding: 10px 16px;
        background: #2d4bf3;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 100%;
        h4 {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          display: flex;

          color: #f6f6f6;
        }
        p {
          color: #eacb30;
          font-size: 16px;
          font-weight: 600;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
    @media (min-width: 700px) {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .eachTeam {
        margin: 20px 7px;
        width: 48%;
      }
    }

    @media (min-width: 900px) {
      .eachTeam {
        width: 32%;
      }
    }
    @media (min-width: 1100px) {
      .eachTeam {
        width: 23.5%;
      }
    }
  }
  .webContainer {
    .topLabel {
      h3,
      span {
        display: inline-block;
        max-width: 610px !important;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #2d4bf3;
      }
      h3 {
        font-size: 38px;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 0em;
        margin-bottom: 0;
        text-align: left;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;
