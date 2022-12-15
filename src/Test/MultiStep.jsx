import React, { useState } from "react";
import styled from "styled-components";

const MultiStepForm = () => {
  // State to keep track of the current step
  const [currentStep, setCurrentStep] = useState(1);

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
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          />

          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {currentStep === 2 && (
        <>
          {/* Step 2 form fields go here */}
          <input
            type="text"
            name="field3"
            value={formData.field3}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field4"
            value={formData.field4}
            onChange={handleChange}
          />

          <button type="button" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {currentStep === 3 && (
        <>
          {/* Step 3 form fields go here */}
          <input
            type="text"
            name="field5"
            value={formData.field5}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field6"
            value={formData.field6}
            onChange={handleChange}
          />

          <button type="button" onClick={handlePrev}>
            Previous
          </button>
          <button type="submit">Submit</button>
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
  padding: 16px;
  background-color: #eee;
`;
