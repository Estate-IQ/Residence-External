import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const BuildLife = () => {
  return (
    <LifeEasier className="webContainer">
      <h2>ENHANCING COMMUNICATION, CONVENIENCE AND SECURITY</h2>
      {/* <p>ENHANCING COMMUNICATION, CONVENIENCE AND SECURITY</p> */}

      <div className="threeImages">
        <div className="managed">
          <img src={Images.selfManaged} alt="" />
          <div className="compromised">
            <p>Self Managed </p>
          </div>
        </div>
        <div className="managed">
          <img src={Images.communityuse} alt="" />
          <div className="compromised">
            <p>Community Management</p>
          </div>
        </div>
        <div className="managed">
          <img src={Images.estateDev} alt="" />
          <div className="compromised">
            <p>Real Estate Developer</p>
          </div>
        </div>
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
      .managed {
        width: 48%;
        position: relative;
        .compromised {
          p {
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #f2f6ff;
            text-align: center;
          }
          position: absolute;
          width: 100%;
          text-align: center;
          top: 20px;
        }
        img {
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
    @media (min-width: 808px) {
      .managed {
        width: 32%;
      }
    }
  }
`;
