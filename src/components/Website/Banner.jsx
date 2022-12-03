import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const Banner = () => {
  return (
    <PageBanner className="webContainer">
      <section className="pageBanner">
        <div className="grade">
          <div className="phrase">
            <h1>
              Living can be a lot <span>simpler</span> and
              <span> intuitive</span>
            </h1>
            <p>For Estate Managers & Residents within Gated Communities</p>
          </div>

          <div className="ctaButtons">
            <button className="important-btn">Get Started</button>
            <button className="outlined-btn">Schedule Demo</button>
          </div>
        </div>

        <div className="imgBanner">
          <div className="forTransition">
            <img src={Images.banner} alt="" />
          </div>
        </div>
      </section>
    </PageBanner>
  );
};

export default Banner;

let PageBanner = styled.section`
  .ctaButtons {
  }
  .pageBanner {
    margin-top: 130px;
    .ctaButtons {
      button {
        margin-right: 20px;
        @media (max-width: 400px) {
          margin: 0;
          margin-top: 20px;
          width: 100%;
        }
      }
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      .grade {
        width: 50%;
      }
      .imgBanner {
        width: 40%;
      }
    }
    .imgBanner {
      img {
        width: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: 1.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .forTransition {
        width: 460px;
        height: 460px;

        overflow: hidden;
      }
    }

    h1 {
      font-family: DM Sans;
      font-size: 70px;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: -0.06em;
      text-align: left;
      @media (max-width: 450px) {
        font-size: 60px;
        line-height: 70px;
      }
      span {
        font-family: DM Sans;
        font-size: 70px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: -0.06em;
        text-align: left;
        color: rgba(234, 203, 48, 1);
      }
    }
  }
`;
