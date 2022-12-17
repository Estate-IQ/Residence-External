import React from "react";
import styled from "styled-components";

const Transaction = () => {
  return (
    <form>
      <h3>Pay with card</h3>
      <input type="text" placeholder="Card Name" />
      <input type="number" placeholder="Card Number" />
      <div className="double">
        <input type="text" placeholder="Expiry Date" />
        <input type="text" placeholder="Cvv" />
      </div>
      <button className="important-btn">Pay N20000</button>
    </form>
  );
};

const BankTransfer = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Transfer onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <Transaction />
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </Transfer>
  );
};

export default BankTransfer;
let Transfer = styled.section`
  .modalContainer {
    background: #ffffff;
    border-radius: 5px;
    padding: 20px;
    padding-top: 40px;
    margin-top: 70px;
  }
  form {
    h3 {
      color: #111;
      margin-bottom: 15px;
    }
    .double {
      display: flex;
      justify-content: space-between;
      input {
        width: 49%;
      }
    }
    input {
      margin-bottom: 15px;
    }
  }
`;
