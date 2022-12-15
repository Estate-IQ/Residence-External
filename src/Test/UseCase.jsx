import React from "react";
import Search from "./MultipleSearch";
import FrequencySelect from "./SelectOption";
import MultiStep from "./MultiStep";

const options = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const ParentComponent = () => {
  const [selectedFrequency, setSelectedFrequency] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      name,
      email,
      frequency: selectedFrequency,
      multiple: hookresult,
    };

    console.log(requestBody);
    // fetch("/your/backend/endpoint", {
    //   method: "POST",
    //   body: JSON.stringify(requestBody),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Show a success message to the user
    //       alert("The form was submitted successfully!");
    //     } else {
    //       // Show an error message to the user
    //       alert(
    //         "There was an error when submitting the form. Please try again."
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     // Show an error message to the user
    //     alert("There was an error when submitting the form. Please try again.");
    //   });
  };
  const hookresult = ["sugar", "beans", "rice"];
  const handleResultClick = (result) => {
    // Handle the selected result here
  };

  // const handleSubmit = () => {
  //   // Handle the form submission here
  //   console.log("Submitting form with inputs: ", hookresult);
  // };
  return (
    <form onSubmit={handleSubmit}>
      <MultiStep />
      {/* Other form fields... */}
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <FrequencySelect
        options={options}
        value={selectedFrequency}
        onChange={(value) => setSelectedFrequency(value)}
      />

      <Search
        hookresult={hookresult}
        onResultClick={handleResultClick}
        onSubmit={handleSubmit}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ParentComponent;
