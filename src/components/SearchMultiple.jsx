import React from "react";
import styled from "styled-components";

const Search = ({ hookresult, onSubmit, onResultClick, props }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // React.useEffect(() => {
  //   // Make an API call to retrieve the options from the backend
  //   axios
  //     .get("/api/options")
  //     .then((response) => {
  //       setOptions(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

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
          (option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !results.includes(option)
        ) // Only include options that match the search term and are not already in the results array
      : [];

  return (
    <HandleMultipleSearch>
      <div className="gaugeResults">
        {results.map((result) => (
          <div key={result} className="eachResult">
            <div className="rendered">
              <h2>{result}</h2>
            </div>
            <p onClick={() => handleRemoveResult(result)}>x</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        name="multiple"
        placeholder="Recipients"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 0 && filteredOptions.length > 0 && (
        <ul className="gaugeSuggest">
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => handleClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </HandleMultipleSearch>
  );
};

export default Search;

let HandleMultipleSearch = styled.section`
  position: relative;
  .gaugeResults {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    .eachResult {
      width: 48.5%;
      height: 40px;
      padding: 10px;
      align-items: center;
      background: #f2f6ff;
      margin-bottom: 15px;
      h2 {
        margin: 0;
        font-weight: 500;
        font-size: 19px;
        margin-top: 3px;
        margin-left: 30px;
        line-height: 18px;
        letter-spacing: -0.06em;
        color: #545454;
      }
      @media (max-width: 450px) {
        width: 100%;
      }
      border: 1px solid #2d4bf3;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      p {
        margin-top: 5px;
        cursor: pointer;
        opacity: 0.7;
        font-size: 20px;
      }
    }
  }
  .gaugeSuggest {
    background: #ffffff;
    border-radius: 5px;
    z-index: 20;
    width: 100%;
    position: absolute;
    padding: 10px;
    border: 1px solid #999;
    li {
      cursor: pointer;
      border-bottom: 1px solid #f3f3f3;
      padding: 5px 10px;
      margin: 0;
      transition: 0.4s;
      &:hover {
        background: #f3f3f3;
      }
    }
  }
`;
