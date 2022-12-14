import React, { useState } from "react";
import styled from "styled-components";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // Add a constant to store the total number of steps in the form
  const totalSteps = 2;
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    // handleSubmit();
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data); // Log all input
    fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const renderStepFields = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <input type="text" placeholder="FIrst Name" />

            <input type="text" placeholder="Last Name" />
          </>
        );
      case 2:
        return (
          <>
            <label>Step 2 Field 1:</label>
            <input type="text" />
            <label>Step 2 Field 2:</label>
            <input type="text" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {renderStepFields()}
      {currentStep > 1 && (
        <button type="button" onClick={handlePrev}>
          Previous
        </button>
      )}
      {currentStep < totalSteps ? (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      ) : (
        // Only render the Submit button on the last step
        <button type="submit">Submit</button>
      )}
    </StyledForm>
  );
};

export default MultiStepForm;

const StyledForm = styled.form`
  padding: 16px;
  background-color: #eee;
`;
