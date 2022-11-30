import React, { useState } from "react";
import styled from "styled-components";
import Dial from "./DialNumber";
import GiveAccess from "./VerifyPin";

const VerifyButton = () => {
  const [emergency, setEmergency] = useState(false);
  const [accesspin, setAccessPin] = useState(false);
  const [Accessible, setAccessible] = useState(true);

  return (
    <OnboardingTag>
      <div className="download_filter">
        <h6></h6>
        <div className="filter_download">
          <button className="important-btn" onClick={() => setAccessPin(true)}>
            Access Verification
          </button>
        </div>
      </div>

      <GiveAccess open={accesspin} onClose={() => setAccessPin(false)} />
      {/* <SetEmergency open={ViewSOS} onClose={() => setViewSOS(false)} /> */}
    </OnboardingTag>
  );
};

export default VerifyButton;

let OnboardingTag = styled.div`
  .ff-right {
    margin-bottom: 30px;
  }
  @media (max-width: 414px) {
    button {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .download_filter {
      height: 60px;
    }
  }
  .filter_download {
    @media (min-width: 768px) {
      .outlined-btn {
        margin-right: 10px;
      }
    }
    .outlined-btn {
      margin-right: 10px;
      color: #ff0000;
      border-color: #ff0000;
      &:hover {
        background-color: #ff0000;
        color: #ffffff;
      }
    }
    button {
      margin-top: 0;
      padding: 10px 20px;
      height: 45px;
      // border: 2px solid #1737e6;
      font-weight: 500;
      // background: #1737e6;
      // color: #ffffff;
      transition: 0.4s;
      transform: scale(1);
      &:hover {
        transform: scale(0.95);
      }
    }
  }
  @media (min-width: 768px) {
    .outlined {
      margin-right: 10px;
    }
  }
`;
