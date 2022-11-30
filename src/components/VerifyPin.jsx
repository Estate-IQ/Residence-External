import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ShareAccess = () => {
  const navigate = useNavigate();
  const HandleReturn = (e) => {
    e.preventDefault();
    navigate("/verify/user");
  };
  return (
    <AccessPin onSubmit={HandleReturn} className="accessPin">
      <h3>Input Access Code</h3>
      {/* <h1>PQY-3091</h1> */}
      <input type="text" className="mainPin" required />
      <p>Code only valid for 12 Hours</p>

      <button className="important-btn" type="submit">
        Verify
      </button>
    </AccessPin>
  );
};

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandleQuickAccess onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <ShareAccess />
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </HandleQuickAccess>
  );
};
export default Modal;

let AccessPin = styled.form`
  background: #fff;
  text-align: center;
  padding: 50px;
  p {
    margin-top: 15px;
    text-align: center;
    color: #2d4bf3;
    font-weight: 500;
  }
  input {
    text-align: center;
  }
  button {
    padding: 20px;
    font-size: px;
    min-width: 200px;
  }
  h3 {
    font-size: 20px;

    font-weight: 700;
    line-height: 23px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
  @media (min-width: 768px) {
    .mainPin {
      font-size: 64px;
      font-weight: 700;
      padding: 30px;
    }
  }
  .mainPin {
    background: #fbfbfb;
    border: 1px solid #c5cae4;
    border-radius: 4px;
    padding: 30px;
  }
`;

let HandleQuickAccess = styled.div`
  .modalContainer {
    margin-top: 80px;
    max-width: 650px;
  }
  @media (min-width: 600px) {
    .doubleInput {
      display: flex;
      justify-content: space-between;
      label {
        width: 100%;
      }
      input {
        width: 96%;
      }
    }
  }
`;
