import React, { useState } from "react";
import styled from "styled-components";
import { SVGs } from "../assets/svg/SVGs";
// import InvoiceDownloader from "";

const Invoices = (props) => {
  const [user, setUser] = useState(props.user);
  return (
    <MainInvoices>
      <div className="invoiceFor">
        <img src={SVGs.inWhite} alt="" />
        <span>Residence</span>
      </div>

      <div className="transactionDetails">
        <div className="eachDetails">
          <h3>Transaction ID</h3>
          {/* <p>{user.transactionId}</p> */}
        </div>
        <div className="eachDetails">
          <h3>Amount</h3>
          {/* <p>{user.amount} </p> */}
        </div>
        <div className="eachDetails">
          <h3>Description</h3>
          {/* <p>{user.description}</p> */}
        </div>
        <div className="eachDetails">
          <h3>Date</h3>
          {/* <p>{user.date}</p> */}
        </div>
        <div className="eachDetails">
          <h3>Status</h3>
          {/* <p>{user.status}</p> */}
        </div>
      </div>
    </MainInvoices>
  );
};

export default Invoices;

let MainInvoices = styled.section`
  .transactionDetails {
    margin-top: 30px;
    .eachDetails {
      margin: 15px 0;
      h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: 0;
        color: #545454;
      }
    }
  }
`;
