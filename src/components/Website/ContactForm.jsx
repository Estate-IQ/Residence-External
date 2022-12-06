import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Contact className="container">
      <div className="mainForm">
        <h1>Contact Us</h1>

        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" required />
        <textarea name="" placeholder="Message"></textarea>
        <button type="submit" className="important-btn">
          Send
        </button>
      </div>
    </Contact>
  );
};

export default ContactForm;

let Contact = styled.form`
  border: 1.5px solid #999999;
  margin-top: 150px;
  max-width: 700px;
  border-radius: 5px;
  .mainForm {
    background: #ffffff;
    padding: 50px 20px;
    margin: 0 auto;
    max-width: 600px;
    h1 {
      font-size: 35px;
      font-weight: 700;
      line-height: 41px;
      margin-bottom: 40px;
      letter-spacing: 0px;
      text-align: center;
    }
    input,
    textarea {
      margin-top: 20px;
    }
    button {
      width: 100%;
    }
  }
`;
