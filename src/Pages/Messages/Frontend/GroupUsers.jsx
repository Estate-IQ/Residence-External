import React, { useState } from "react";
import styled from "styled-components";

const GroupUsers = (props) => {
  // State to store the search query and selected option
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for the search input field
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = (event) => {
    // Update the URL with the selected option
    const newSearchQuery = `?option=${event.target.innerText}`;
    window.location.search = newSearchQuery;

    // Make a POST request to the API with the selected option
    fetch("/api/options", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ option: event.target.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the response from the API
        alert(data.message);
      });
  };
  //   // Event handler for the dropdown menu
  //   const handleSelect = (event) => {
  //     setSelectedOption(event.target.value);
  //     setSearchQuery(event.target.value); // Update searchQuery with the selected option
  //   };

  // Filter the options based on the search query and selected option
  const filteredOptions = props.options.filter((option) => {
    if (searchQuery && selectedOption) {
      return (
        option.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        option.type === selectedOption
      );
    } else if (searchQuery) {
      return option.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (selectedOption) {
      return option.type === selectedOption;
    }
    return true;
  });

  return (
    <SearchAllUsers>
      <input
        type="text"
        placeholder="Search Estate"
        value={searchQuery}
        onChange={handleSearch}
        className="searchInput"
      />

      <ul className="listContainer">
        {filteredOptions.map((option) => (
          <li key={option.id} className="eachList" onClick={handleClick}>
            <p className="usersName">{option.name}</p>

            <div className="separate">
              <p>{option.type}</p>
              <img src={option.image} alt={option.name} />
            </div>
          </li>
        ))}
      </ul>
    </SearchAllUsers>
  );
};

export default GroupUsers;

let SearchAllUsers = styled.section`
  img {
  }
  .listContainer {
    max-height: 500px;
    overflow: auto;
    margin-top: 15px;
  }
  .eachList {
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f2f6ff;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1);
    &:hover {
      transform: scale(0.98);
    }
    p {
      margin: 0;
    }
    .usersName {
      width: 40%;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      display: flex;
      align-items: center;
      letter-spacing: -0.06em;
      color: #545454;
    }
    .separate {
      //   width: 60%;
      display: flex;
      //   justify-content: space-between;
      align-items: center;
      p {
        font-weight: 500;
        font-size: 14px;

        color: #2d4bf3;
      }
      img {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: static;
      }
    }
  }
`;
