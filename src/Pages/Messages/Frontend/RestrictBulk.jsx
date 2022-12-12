import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GroupUsers from "./GroupUsers";
import Search from "./SearchUser";

const AddNewChat = ({ open, onClose }) => {
  const [direct, setDirect] = useState(true);
  const [group, setGroup] = useState(false);
  if (!open) return null;
  return (
    <HandleOverlayGray onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <h3>New Message</h3>
        <div className="chooseSingle">
          {/* <button
            className="outlined-btn"
            onClick={() => {
              setDirect(true);
              setGroup(false);
            }}
          >
            Direct Message
          </button>
          <button
            className="outlined-btn"
            onClick={() => {
              setGroup(true);
              setDirect(false);
            }}
          >
            Bulk Message
          </button> */}
        </div>
        <Search options={options} />
        {/* // {direct &&  />} */}
        {/* // {group && <GroupUsers options={bulk} />} */}
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </HandleOverlayGray>
  );
};

export default AddNewChat;

const options = [
  {
    id: 1,
    name: "Nicolais Flores",
    type: "Security",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "Tobie Storton",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "Dominga Mee",
    type: "Residence",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "Bevvy Bernucci",
    type: "Security",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    name: "Claiborn Daley",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    name: "Winona Celier",
    type: "Security",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 7,
    name: "Freddie Scarbarrow",
    type: "Residence",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8,
    name: "Shirlene Maskill",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 9,
    name: "Sidonia Crombie",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 10,
    name: "Thom McMorland",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
const bulk = [
  {
    id: 1,
    name: "Nicolais Flores",
    type: "Security",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "Tobie Storton",
    type: "Vendors",
    image:
      "https://images.unsplash.com/photo-1670672943501-a8d7b1cbfd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

let HandleOverlayGray = styled.section`
  padding-bottom: 50px;
  .chooseSingle {
    text-align: right;
    button {
      padding: 4px 8px;
      margin-left: 10px;
    }
  }
  .modalContainer {
    margin-bottom: 50px;
    h3 {
      margin-top: 10px;
      margin-bottom: 30px;
      font-weight: 500;
    }
    background: #fff;
    margin-top: 60px;
    max-width: 510px;
    padding: 20px;
  }
`;
