import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccessType from "./AccessType";
import Frequency from "./Frequency";

// function Navigate() {
//   return (Navigate = useNavigate());
// }
class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      fNmae: "",
      password: "",
      C_password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      residentType: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }

  handleSearch = (event) => {
    console.log(event);
    this.setState({
      state: event,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const { fNmae } = event;
    event.preventDefault();
    const navigate = useNavigate();
    navigate("/redirect=token");
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.handleSubmit}
          className="new_estates_form fade-in-bck"
        >
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            fNmae={this.fNmae}
            estateEmail={this.state.estateEmail}
            residentType={this.state.residentType}
            estate_ads={this.state.estate_ads}
            estateName={this.state.estateName}
          />
        </form>
      </React.Fragment>
    );
  }
}

function Step2(props) {
  const [selected, setSelected] = useState("Access Type");
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt single_form">
          <h1>Quick Access</h1>
        </div>

        <input
          type="text"
          id="fName"
          value={props.fNmae}
          onChange={props.handleChange}
          name="fNmae"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lName"
          value={props.lNmae}
          onChange={props.handleChange}
          name="cost"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="address"
          value={props.address}
          onChange={props.handleChange}
          name="address"
          placeholder="Address"
        />
        <AccessType selected={selected} setSelected={setSelected} />

        <label htmlFor="">
          Date
          <input
            type="date"
            placeholder="Payment Due Date"
            id="date"
            style={{ marginTop: 5 }}
            value={props.date}
            onChange={props.handleChange}
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
              value={props.date}
              onChange={props.handleChange}
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
              value={props.date}
              onChange={props.handleChange}
              name="date"
            />
          </label>
        </div>
      </div>
      <button className="btn btn-success btn-block" type="submit">
        Generate Pin
      </button>
    </div>
  );
}

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
