import React, { useState } from "react";
import styled from "styled-components";
import BankTransfer from "./BankTransfer";

const PayDetails = () => {
  const [modal, setModal] = useState(false);
  return (
    <Details>
      <div className="topDetails">
        <h3>
          Collection Name: <span>Electricity Unit</span>
        </h3>
        <h3>
          Collection Account: <span>089776735676</span>
        </h3>
        <h3>
          Collection Cost: <span>N320,000</span>
        </h3>

        <h4>Total: N320,000</h4>
      </div>
      <div className="prefferedMethod">
        <h2>Choose Payment Method</h2>
        <BankTransfer open={modal} onClose={() => setModal(false)} />
        <div className="payingWith">
          <div className="paywith" onClick={() => setModal(true)}>
            <img
              src="https://lh4.googleusercontent.com/XQhRWSCxbFfM-CT7EepCJ2QsRr-q4Fa-RadR2x6bk-r111Ma4JbQRPoaCn5Tt_ETzVzre7IrXxIhVvPYWlB9pkA-_ST68ES0hw-A6-KM1BuwAH18XPJTt-Emq8SSxW-JCNIJ5-kJ"
              alt=""
            />
          </div>
          <div className="paywith">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="paywith">
            <img
              src="https://www.wpcharitable.com/wp-content/uploads/edd/2021/02/paystack-banner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Details>
  );
};

export default PayDetails;

let Details = styled.div`
  background: #ffffff;
  border: 2px solid #e1e1e1;
  border-radius: 5px;
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
  }
  .topDetails {
    padding: 50px 0;
    background: #f2f6ff;
    text-align: center;
    h4 {
      font-weight: 700;
      color: #2d4bf3;
    }
    h3 {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      margin-bottom: 10px;

      span {
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
  .prefferedMethod {
    padding: 20px;
    .payingWith {
      @media (min-width: 600px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .paywith {
          width: 48%;
        }
      }
      @media (min-width: 1024px) {
        .paywith {
          width: 32%;
        }
      }
      .paywith {
        margin-bottom: 30px;
        background: #f6f6f6;
        border: 1px solid #999999;
        border-radius: 5px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      @media (max-width: 430px) {
        .paywith {
          height: 150px !important;
        }
      }
    }
  }
`;
