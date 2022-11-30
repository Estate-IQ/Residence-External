import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";
import { SVGs } from "../../assets/svg/SVGs";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  position: relative;
  height: 100%;
  flex-flow: row nowrap;
  z-index: 10;
  li {
    padding: 14px 20px;
    color: #2c333a !important;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #e1e1e1;
    line-height: 22px;
    letter-spacing: 0em;
    margin: 0;
  }
  li:hover {
    padding: 14px 20px;
    background: #f2f6ff;
  }

  @media (max-width: 480px) {
    max-width: auto !important;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 78px;
    right: 0;
    height: 100vh;
    max-width: 400px;
    width: 100%;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div
        className="class_relative"
        style={{ position: "relative", height: "95%" }}
      >
        <div className="search_profile">
          <div className="violet">
            <div className="user_mode">
              <img
                src="https://media.istockphoto.com/id/1433066048/photo/potrait-of-friendly-man-in-white-t-shirt.jpg?s=612x612&w=0&k=20&c=Gen_thq8JlUntKXsRIAaTfyi85A9w19xqB7RU3lZq3M="
                alt=""
              />
              <div>
                <h3>Noah Olatoye</h3>
                <p>Security</p>
              </div>
            </div>
          </div>

          {/* <input type="text" placeholder="Search" /> */}
        </div>
        <Link to="/">
          <li className="before_list over_view">Overview</li>
        </Link>
        <Link to="/superadmin-estate">
          <li className="before_list est">Estates</li>
        </Link>
        <Link to="" style={{ opacity: "0.4" }}>
          <li className="before_list msg">Messages</li>
        </Link>

        <Link to="/superadmin-complaint">
          <li className="before_list comp">Complaints</li>
        </Link>

        <div className="loging_out">
          <Link to="/get-started">
            <li className="before_list log_out">Logout</li>
          </Link>
        </div>
      </div>
    </Ul>
  );
};

export default RightNav;
