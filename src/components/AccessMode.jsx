import React, { useState } from "react";

const AccessMode = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Access Granted", "Revoke Access"];

  const changeStatus = () => {};
  return (
    <div
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
        id={selected === "Access Granted" ? "greenBg" : "redBg"}
        onClick={(e) => setIsActive(!isActive)}
      >
        <input type="text" readOnly class="checked_value" />
        <span className="default_status">{selected}</span>
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
                ).id =
                  e.target.textContent === "Access Granted"
                    ? "greenBg"
                    : "redBg";
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccessMode;
