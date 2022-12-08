import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { SVGs } from "../assets/svg/SVGs";
import ProfileType from "./E-ProfileType";

const handleSubmit = (event) => {
  event.preventDefault();
  const { title, description, fileName } = event;

  Swal.fire({
    title: `<div>You created profile for <h4> ${title}</h4> </div>`,
    icon: "success",
    showConfirmButton: true,
    showCloseButton: true,
  });

  // .then(function () {
  //   window.location = "/superadmin/tasks";
  // });
};

const CreateSOS = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("Profile Type");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <form
      onSubmit={handleSubmit}
      // method="post"
      // action="/profile"
      className="new_estates_form fade-in-bck"
    >
      <div className="form-group">
        {/* <label htmlFor="title">Email address</label> */}

        <div className="create_est ">
          <div className="form_txt">
            <div className="capture_close">
              <h3>Emergency Profile</h3>
            </div>
          </div>
          <ProfileType selected={selected} setSelected={setSelected} />
          {/* <input type="text" id="name" name="name" placeholder="Profile Type" /> */}
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Emergency Service Name"
          />

          {/* Create Account Type */}

          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            id="phone"
            name="phone"
            placeholder="Mobile"
          />
          <input
            type="email"
            value={inputValue}
            onChange={handleInputChange}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <RevokeAccess>
          <h2>News Receiver</h2>

          <div className="revokeOnes">
            <div className="each_access">
              <div class="cntr">
                <label for="cbx" class="label-cbx">
                  <input
                    id="cbx"
                    name="cbx"
                    type="checkbox"
                    class="invisible"
                    checked
                  />
                  <div class="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                  </div>
                </label>
                <span>Estate Admins</span>
              </div>
            </div>
            <div className="each_access">
              <div class="cntr">
                <label for="util" class="label-cbx">
                  <input
                    id="util"
                    name="util"
                    type="checkbox"
                    class="invisible"
                  />
                  <div class="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                  </div>
                </label>
                <span>Households</span>
              </div>
            </div>
            <div className="each_access">
              <div class="cntr">
                <label for="emergency" class="label-cbx">
                  <input
                    id="emergency"
                    name="emergency"
                    type="checkbox"
                    class="invisible"
                  />
                  <div class="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                  </div>
                </label>
                <span>Securities</span>
              </div>
            </div>
          </div>
        </RevokeAccess>
        <button>Create Profile</button>
      </div>
    </form>
  );
};

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <ModalWrapper onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <CreateSOS />
        <img src={SVGs.close} alt="" onClick={onClose} />
      </div>
    </ModalWrapper>
  );
};
export default Modal;

let ModalWrapper = styled.div`
  .modalContainer {
    max-width: 600px;
    .new_estates_form {
      max-width: 600px;
    }
  }
`;

let RevokeAccess = styled.div`
  .revokeOnes {
    height: 200px;
    overflow: auto;
  }
  h2 {
    font-size: 20px;

    font-weight: bold;
    margin-bottom: 0px;
  }
  .cntr {
    margin-top: 10px;
  }
`;
