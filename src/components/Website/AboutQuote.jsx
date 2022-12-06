import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const AboutQuote = () => {
  return (
    <HandleBg>
      <section className="webContainer">
        <HandleQuote className="two_boxes">
          <div className="cloneWith img_side">
            <img src={Images.About2} alt="" />
          </div>
          <div className="cloneWith img_side">
            <div className="handleText">
              <h4>
                One is <span> too small</span> a number to achieve
                <span>greatness…</span>
              </h4>
              <p>John C. Maxwell</p>
            </div>
          </div>
        </HandleQuote>
      </section>
    </HandleBg>
  );
};

export default AboutQuote;

let HandleBg = styled.section`
  //   background: #f2f6ff;
  padding: 80px 0;
`;
let HandleQuote = styled.div`
  .handleText {
    margin-top: 30px;

    p {
      margin-top: 30px;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      color: rgba(23, 55, 229, 1);
      text-align: left;
    }
    h4 {
      padding-top: 20px;

      font-size: 64px;
      font-weight: 700;
      line-height: 77px;
      letter-spacing: -0.06em;
      text-align: left;
      span {
        font-size: 64px;
        display: inline-block;
        font-weight: 700;

        letter-spacing: -0.06em;
        text-align: left;
        color: rgba(234, 203, 48, 1);
      }
    }
    @media (max-width: 540px) {
      p {
        font-size: 20px;
      }
      h4 {
        font-size: 50px !important;
        line-height: 60px;
        span {
          font-size: 50px !important;
        }
      }
    }
  }
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
`;
