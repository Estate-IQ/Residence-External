import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const BuildLife = () => {
  return (
    <LifeEasier className="webContainer">
      <h2>ENHANCING COMMUNICATION, CONVENIENCE AND SECURITY</h2>
      {/* <p>ENHANCING COMMUNICATION, CONVENIENCE AND SECURITY</p> */}

      <div className="threeImages">
        <img src={Images.selfManaged} alt="" />
        <img src={Images.communityuse} alt="" />
        <img src={Images.estateDev} alt="" />
      </div>
    </LifeEasier>
  );
};

export default BuildLife;

let LifeEasier = styled.section`
  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 470px) {
      font-size: 40px;
    }
  }
  p {
    text-align: center;
    margin-top: 10px;
  }
  .threeImages {
    margin-top: 50px;
    img {
      width: 100%;
      margin: 20px 0;
    }

    @media (min-width: 608px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 48%;
      }
    }
    @media (min-width: 808px) {
      img {
        width: 32%;
      }
    }
  }
`;
