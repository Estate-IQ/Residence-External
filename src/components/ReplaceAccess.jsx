import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MasterForm = (props) => {
  // State to store the form data
  const [state, setState] = useState({
    currentStep: 1,
    fNmae: "",
    firstName: "",
    lastName: "",
    mobile: "",
    residentType: "",
  });

  const history = useNavigate();

  // Handle form submission
  const HandleSubmit = (event) => {
    event.preventDefault();

    // Redirect the user to the specified URL
    history.push("/");
    // Send a POST request to the server with the form data
    fetch("/register", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // Render form fields
  return (
    <React.Fragment>
      <form onSubmit={HandleSubmit} className="new_estates_form fade-in-bck">
        <div className="form-group">
          <div className="create_est ">
            <div className="form_txt single_form">
              <h1>Quick Access</h1>
            </div>

            <input
              type="text"
              id="fName"
              value={state.fNmae}
              onChange={handleChange}
              name="fNmae"
              placeholder="First Name"
            />
            <input
              type="text"
              id="lName"
              value={state.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
            />
            <input
              type="text"
              id="address"
              value={state.address}
              onChange={handleChange}
              name="address"
              placeholder="Address"
            />
            {/* <AccessType selected={selected} setSelected={setSelected} /> */}
            <label htmlFor="">
              Date
              <input
                type="date"
                placeholder="Payment Due Date"
                id="date"
                style={{ marginTop: 5 }}
                value={state.date}
                onChange={handleChange}
                name="date"
              />
            </label>

            <div className="doubleInput">
              <label htmlFor="">
                From:
                <input
                  type="date"
                  placeholder="Payment Due Date"
                  id="date"
                  style={{ marginTop: 5 }}
                  value={state.date}
                  onChange={handleChange}
                  name="date"
                />
              </label>
              <label htmlFor="">
                to:
                <input
                  type="date"
                  placeholder="Payment Due Date"
                  id="date"
                  style={{ marginTop: 5 }}
                  value={state.date}
                  onChange={handleChange}
                  name="date"
                />
              </label>
            </div>
          </div>
          <Link to="/redirect=token">
            <button className="btn btn-success btn-block" type="submit">
              Generate Pin
            </button>
          </Link>
        </div>
      </form>
    </React.Fragment>
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
        <MasterForm />
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

let HandleQuickAccess = styled.div`
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
