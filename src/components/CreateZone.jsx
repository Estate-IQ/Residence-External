import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./MultipleValueInOne";
import StreetList from "./StreetList";
import ZoneList from "./ZoneList";

const MultiStepForm = () => {
  // State to keep track of the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState([]);
  const [selected, setSelected] = useState("Add to Zone");
  const [street, setStreet] = useState("Attach to Street");
  // State to keep track of the form data
  const [formData, setFormData] = useState({});

  // Helper function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Helper function to handle moving to the next step
  const handleNext = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  // Helper function to handle moving to the previous step
  const handlePrev = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
  };

  // Helper function to handle submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data here...
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <>
          {/* Step 1 form fields go here */}
          <div className="formHeader">
            <p>Step 1 of 3</p>
            <h2>Estate Setup</h2>
            <h5>Create Estate</h5>
          </div>
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            placeholder="Estate Name"
          />
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            placeholder="Estate Address"
          />
          <div>
            <InputField onValuesChange={setValues} />
            {/* Display the values provided by the InputField component */}
            {/* <ul>
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul> */}
          </div>

          <button type="button" className="clickNext" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {currentStep === 2 && (
        <>
          {/* Step 1 form fields go here */}
          <div className="formHeader">
            <p>Step 2 of 3</p>
            <h2>Estate Setup</h2>
            <h5>Attach Lists of Streets to Zone</h5>
          </div>
          <div>
            <InputField
              onValuesChange={setValues}
              //   label="Add Zone, Seprate using comma"
            />
          </div>
          <ZoneList selected={selected} setSelected={setSelected} />
          <button type="button" className="clickNext" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" className="clickNext" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {currentStep === 3 && (
        <>
          {/* Step 3 form fields go here */}
          <div className="formHeader">
            <p>Step 3 of 3</p>
            <h2>Estate Setup</h2>
            <h5>Attach Numbers to Street</h5>
          </div>
          <div>
            <InputField
              onValuesChange={setValues}
              //   label="Add Zone, Seprate using comma"
            />
          </div>
          <StreetList selected={street} setSelected={setStreet} />

          {/* <button type="button" className="clickNext" onClick={handlePrev}>
            Previous
          </button> */}
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

const CreateEstateZone = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandleZoneModal onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <MultiStepForm />
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </HandleZoneModal>
  );
};
export default CreateEstateZone;

const HandleZoneModal = styled.section`
  form {
    margin-top: 50px;
    background: #fff;
    padding: 20px;
    input {
      margin-bottom: 15px;
      margin-top: 5px;
    }
    .submitBtn {
      padding: 10px 20px;
      background: #1737e6;
      border-radius: 5px;
      color: #fff;
      margin-right: 20px;
      width: 100%;
    }
    .clickNext {
      padding: 10px 20px;
      background: #1737e6;
      border-radius: 5px;
      color: #fff;
      margin-right: 20px;
    }
    .formHeader {
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
      h2 {
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        margin: 0;
        margin-bottom: 20px;
      }
      h5 {
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0.03em;
        text-align: left;
        margin: 0;
      }
    }
  }
`;
