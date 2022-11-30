import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Decision from "./Decision";

/**
 *
 * first Handle all Security Inputs
 * Make sure they go back to the previous page
 * navigate()
 */

const ShareAccess = () => {
  const navigate = useNavigate();
  const HandleReturn = (e) => {
    // e.preventDefault();
    navigate("/external");
  };
  const [selected, setSelected] = useState("Action");
  return (
    <AccessPin onSubmit={HandleReturn}>
      <h3>Access info</h3>
      <div className="makeDecision">
        <img
          src="https://media.istockphoto.com/id/1433066048/photo/potrait-of-friendly-man-in-white-t-shirt.jpg?s=612x612&w=0&k=20&c=Gen_thq8JlUntKXsRIAaTfyi85A9w19xqB7RU3lZq3M="
          alt=""
          className="userPic"
        />
        <Decision selected={selected} setSelected={setSelected} />
      </div>

      <div className="accessInfo">
        <div className="eachUnit">
          <p>Guest Name</p>
          <input
            readOnly
            type="text"
            className="unitData"
            value="Ololademi Asake "
          />
        </div>
        <div className="eachUnit">
          <p>Host Name</p>
          <input
            readOnly
            type="text"
            className="unitData"
            value="Babatunde Williams"
          />
        </div>
        <div className="eachUnit">
          <p>Access Code</p>
          <input readOnly type="text" className="unitData" value="PQY-3091 " />
        </div>
        <div className="eachUnit">
          <p>Access Type</p>
          <input readOnly type="text" className="unitData" value="Residence " />
        </div>
        <div className="eachUnit">
          <p>Destination</p>
          <input
            readOnly
            type="text"
            className="unitData"
            value="
            House 33, elegunjobi street, off rigmore road, Golden Estate Gate"
          />
        </div>

        <div className="eachUnit">
          <p>Drop Other issues</p>
          <textarea name="" id=""></textarea>
        </div>
      </div>

      <button className="important-btn" type="submit">
        Confirm User
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
          className="closeBtn"
          onClick={onClose}
        />
      </div>
    </HandleQuickAccess>
  );
};
export default Modal;

let AccessPin = styled.form`
  background: #fff;
  padding: 50px;
  .makeDecision {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 540px) {
    padding: 50px 20px;
  }
  .accessInfo {
    .eachUnit {
      margin: 20px 0;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #686868;
        margin-bottom: 5px;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
      }
      .unitData {
        color: #111;
        border: 0;
        padding: 0;
        max-width: 300px;
        font-size: 25px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: -0.06em;
        text-align: left;
      }
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: -0.06em;
    text-align: left;
  }
  .userPic {
    position: static;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
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
