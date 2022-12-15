import React, { useState } from "react";
import styled from "styled-components";

// EmailInput component
function InputField(props) {
  const [emails, setEmails] = useState([]);
  const [showList, setShowList] = useState(false);

  function handleChange(event) {
    // Get the value from the input field
    const value = event.target.value;

    // Split the value by comma to get individual email addresses
    const emailArray = value.split(",");

    // Update the state with the array of email addresses
    setEmails(emailArray);
  }

  function handleDelete(index) {
    // Create a new array with the email at the given index removed
    const newEmails = emails.filter((email, i) => i !== index);

    // Update the state with the new array of emails
    setEmails(newEmails);
  }

  function handleKeyDown(event) {
    // Check if the key pressed is the comma or Enter key
    if (event.key === "," || event.key === "Enter") {
      // Call the handleChange function to add the input
      handleChange(event);
    }
  }
  function handleFocus() {
    // Show the email list when the input field is focused
    setShowList(true);
  }

  function handleBlur() {
    // Hide the email list when the input field is blurred
    setShowList(false);
  }

  return (
    <AddMany>
      <input
        type="text"
        // placeholder={props.label}
        placeholder="Add ,Seprate using comma"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showList && (
        <ul className="renderedList">
          {emails.map((email, index) => (
            <button key={index}>
              {email}
              <img
                src="https://www.svgrepo.com/show/348068/cancel.svg"
                alt="x"
                onClick={() => handleDelete(index)}
              />
            </button>
          ))}
        </ul>
      )}
    </AddMany>
  );
}

// Form component
// function Form(props) {
//   return (
//     <form>
//       <h3>Enter your email addresses:</h3>
//       {/* Use the EmailInput component in the form */}
//       <EmailInput />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default InputField;

let AddMany = styled.section`
  .renderedList {
    img {
      position: static;
      width: 20px;
      height: 20px;
      margin-left: 15px;
    }
    button {
      margin: 0;
      border: 1px solid #545454;
      margin-right: 10px;
      margin-bottom: 10px;

      border-radius: 5px;
      padding: 6px 10px;
    }
  }
`;
function App() {
  const [values, setValues] = useState([]);

  return (
    <div>
      <InputField onValuesChange={setValues} />
      {/* Display the values provided by the InputField component */}
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
