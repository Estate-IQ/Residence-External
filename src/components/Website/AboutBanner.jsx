import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const AboutBanner = () => {
  return (
    <HandleBg>
      <Banner className="webContainer ">
        <div className="two_boxes">
          <div className="cloneWith">
            <h1>About Us</h1>
            <p>
              We would love to be recognized for being innovative in how we
              provide solutions that enhance living conditions and help
              communities attain higher levels of efficiencies in estate
              management. We value collaboration, ingenuity and hospitality.
            </p>
          </div>
          <div className="cloneWith img_side">
            <img src={Images.About1} alt="" />
          </div>
        </div>
      </Banner>
    </HandleBg>
  );
};

export default AboutBanner;

let Banner = styled.section`
  h1 {
    font-size: 51px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: -0.06em;
    text-align: left;
  }
  .two_boxes {
    @media (min-width: 850px) {
      display: flex;
      justify-content: space-between;

      .cloneWith {
        width: 45%;
        img {
          object-fit: contain;
          height: 405px;
        }
      }

      .img_side {
        width: 50%;
      }
    }
  }
  .cloneWith {
    h1 {
      font-size: 51px;
      color: rgba(23, 55, 229, 1);
      font-weight: 700;
      line-height: 61px;
      letter-spacing: -0.06em;
      text-align: left;
    }
    p {
      margin-bottom: 50px;
    }
  }
`;

let HandleBg = styled.section`
  margin-top: 80px;
  background: #f2f6ff;
  padding: 80px 0;
`;
