import React from "react";
import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  const options = ["option1", "option2", "option3"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsActive(false);

    // Send a POST request to the server with the selected option
    fetch("/api/options", {
      method: "POST",
      body: JSON.stringify({ option }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <button onClick={() => setIsActive(true)}>Select an option</button>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div className="select_items" onClick={(e) => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      <p>Selected: {selected}</p>
    </div>
  );
};

export default Example;
