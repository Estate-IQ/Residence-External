import React, { useState } from "react";
import styled from "styled-components";

const ShareAccess = () => {
  const ShareText = (user) => {
    // Get the first name and other info from the user object
    const firstName = user.firstName;
    const code = user.code;
    const address = user.address;
    const date = user.date;
    const from = user.from;
    const to = user.to;
    if (navigator.share) {
      navigator
        .share({
          title: "Estate Invite",
          text: `Hi ${firstName}! Your one-time code is ${code}. Address to the destination is ${address} on ${date} from ${from} to ${to}`,
        })
        .then(() => console.log("Text was shared successfully."))
        .catch((error) =>
          console.log("There was an error sharing the text:", error)
        );
    } else {
      console.log("The Web Share API is not supported on this browser.");
    }
  };

  const user = {
    firstName: "John",
    code: "887457",
    address: "50A Lagos Teaching Hospital Road,Alausa Ikeja Lagos",
    date: "24 July 2023",
    from: "9:30AM",
    to: "12:30PM",
  };

  ShareText(user);
  return (
    <AccessPin className="accessPin">
      <h3>New Access Pin</h3>
      <h1 className="mainPin">PQY-3091</h1>
      <p>Code only valid for 12 Hours</p>

      <button className="important-btn" onClick={ShareText}>
        Share
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

let AccessPin = styled.div`
  background: #fff;
  text-align: center;
  padding: 50px;
  p {
    margin-top: 15px;
    text-align: center;
    color: #2d4bf3;
    font-weight: 500;
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
      padding: 40px;
    }
  }
  .mainPin {
    background: #fbfbfb;
    border: 1px solid #c5cae4;
    border-radius: 4px;
    padding: 40px;
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
