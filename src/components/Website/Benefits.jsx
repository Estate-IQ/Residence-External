import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const Benefits = () => {
  return (
    <PageBenefits className="webContainer" id="Benefits">
      <div className="handleDisplay">
        <img src={Images.Enable} alt="Benefits" className="ff_part" />
        <div className="benefits">
          <p>Benefits</p>
          <h3>Enable your Community Enjoy these...</h3>
        </div>
      </div>

      <div className="mainBenefits">
        {/* SECTION! */}
        <div className="funPart">
          <div className="eachBenefits">
            <h4>Seamless Communication</h4>

            <p>
              Keep your community informed and engaged with the real-time
              communication capabilities that EstateIQ offers.
            </p>
          </div>
          <div className="eachBenefits">
            <h4>Additional Layer of Security</h4>

            <p>
              With EstateIQ, estate managers and residents have access to robust
              and auditable entry/exit data that can be used for investigations,
              security and facility enhancements.
            </p>
          </div>
          <div className="eachBenefits">
            <h4>Fully Cloud Managed Services</h4>

            <p>
              Managing IT assets can be an expensive, time-consuming, and
              daunting task. With EstateIQ, estate managers can focus on
              strategic needs and reduce costs via cloud based IT services. Our
              certified support personnel fully manage the underlying cloud and
              security infrastructure.
            </p>
          </div>

          <Link to="/get-started">
            <button className="important-btn">Get Started</button>
          </Link>
        </div>

        {/* SECTION */}
        <div className="dashboardImg">
          <img src={Images.chartFrame} alt="" />
        </div>
      </div>
    </PageBenefits>
  );
};

export default Benefits;

let PageBenefits = styled.section`
  .handleDisplay {
    .benefits {
      margin-top: 30px;
      margin-bottom: 30px;
      p {
        color: #1737e6;
      }
      h3 {
        font-size: 60px;
        font-weight: 700;
        line-height: 72px;
        letter-spacing: -0.03em;
        text-align: left;
      }
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      .ff_part {
        width: 48%;
      }
      .benefits {
        width: 48%;
      }
    }
  }
  .dashboardImg {
    margin-top: 40px;
  }
  .mainBenefits {
    margin-top: 70px;
    .funPart {
      .eachBenefits {
        margin: 15px 0;
        margin-bottom: 50px;
        border-top: 5px solid #2d4bf3;
        h4 {
          padding-top: 5px;
          font-size: 22px;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      margin-top: 90px;
      .funPart {
        width: 30%;
      }
      .dashboardImg {
        width: 60%;
      }
    }
  }
`;
