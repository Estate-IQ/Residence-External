import React from "react";
import styled from "styled-components";
import { Images } from "../assets/images/Images";
import { SVGs } from "../assets/svg/SVGs";
import Invoice from "./Invoices";

const AdminTransaction = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandleInvoices onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <Invoice />

        <button className="outlined-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </HandleInvoices>
  );
};

export default AdminTransaction;

let HandleInvoices = styled.section`
  .modalContainer {
    background: #fff;
    padding: 20px;
    margin: 100px auto;
    .invoiceFor {
      background: #5376e5;
      border-radius: 5px 5px 0px 0px;
      padding: 10px;
      display: flex;
      padding-bottom: 60px;
      justify-content: space-between;
      img {
        width: 130px;
        height: auto;
        object-fit: cover;
        position: static;
      }
      span {
        font-size: 14px;
        font-weight: 700;
        color: #2d4bf3;
        padding: 0px 10px;
        border-radius: 2px;
        height: 25px;
        margin: 0;
        margin-top: 5px;
        background-color: #fff;
        letter-spacing: -0.06em;
        text-align: left;
      }
    }
  }
`;
