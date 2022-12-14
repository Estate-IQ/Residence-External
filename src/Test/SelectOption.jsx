import React from "react";

const FrequencySelect = (props) => {
  const { options, value, onChange } = props;

  const [selectedOption, setSelectedOption] = React.useState(props.value);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    setIsOpen(false);

    // Call the onChange callback to update the value in the parent component
    if (onChange) {
      onChange(newValue);
    }
  };

  // Find the option with the currently selected value
  const selectedOptionObject = options.find(
    (option) => option.value === selectedOption
  );

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOptionObject ? selectedOptionObject.label : "Select frequency"}
      </button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.value}>
              <label htmlFor={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  name="frequency"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleChange}
                />
                <label for={option.value}>{option.label}</label>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FrequencySelect;
