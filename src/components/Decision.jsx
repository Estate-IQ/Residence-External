import React, { useState } from "react";
import styled from "styled-components";

const Decision = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Accept", "Decline"];

  const changeStatus = () => {};
  return (
    <SelectMe
      className="select_me"
      onClick={(e) => {
        if (e.target.classList.contains("select_items")) {
          // alert(e.target.textContent);
          e.target.parentElement.parentElement.querySelector(
            ".checked_value"
          ).value = e.target.textContent;

          // Remove default status
          e.target.parentElement.parentElement.querySelector(
            ".default_status"
          ).textContent = "";
        }
      }}
    >
      <div
        className="select-btn"
        id={selected === "Accept" ? "greenBg" : "redBg"}
        onClick={(e) => setIsActive(!isActive)}
      >
        <input type="text" readOnly class="checked_value" />
        <span className="default_status">{selected}</span>

        <img
          src="https://www.svgrepo.com/show/356209/chevron-down.svg"
          className="arrowDown"
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                // setSelected(option);
                setIsActive(false);
                e.target.parentElement.parentElement.querySelector(
                  ".select-btn"
                ).id = e.target.textContent === "Accept" ? "greenBg" : "redBg";
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </SelectMe>
  );
};

export default Decision;

let SelectMe = styled.div`
  width: 150px;
  .select-btn {
    background: blue;
  }
`;
