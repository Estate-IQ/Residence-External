import React from "react";
import styled from "styled-components";

const Search = ({ hookresult, onSubmit, onResultClick }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (result) => {
    if (!results.includes(result)) {
      // Only add the result if it's not already in the results array
      setResults([...results, result]);
    }
    onResultClick(result); // Call the callback function with the selected result
  };
  const handleRemoveResult = (result) => {
    setResults(results.filter((r) => r !== result));
    onSubmit([...hookresult, result]);
  };

  const filteredOptions =
    searchTerm.length > 0
      ? hookresult.filter(
          (option) => option.includes(searchTerm) && !results.includes(option)
        ) // Only include options that match the search term and are not already in the results array
      : [];

  return (
    <HandleMultipleSearch>
      <input
        type="text"
        name="multiple"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 0 && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => handleClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="gaugeResults">
        {results.map((result) => (
          <div key={result}>
            {result}
            <button onClick={() => handleRemoveResult(result)}>Remove</button>
          </div>
        ))}
      </div>
    </HandleMultipleSearch>
  );
};

export default Search;

let HandleMultipleSearch = styled.section`
  .gaugeResults {
    background: yellow;
  }
`;
