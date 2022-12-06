import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ScrollToTop from "../../components/ScrollToTop";
import ContactForm from "../../components/Website/ContactForm";

import Footer from "../../components/Website/Footer";
import SubscribeWaitList from "../../components/Website/SubscribeWaitList";
import TopNav from "../../components/Website/TopNav";
import { useState } from "react";

const Contact = () => {
  ScrollToTop();
  const [open, setOpen] = useState("houseForTwo");

  const HandleMenu = () => {
    open === "houseForTwo"
      ? setOpen("houseForTwo active")
      : setOpen("houseForTwo");
  };
  return (
    <ContactPage>
      {/* <TopNav /> */}
      <Navbar>
        <section className="navbar">
          <div className="webContainer">
            <div className="handleNavbar">
              <Link to="/">
                <img src={Images.logo} alt="" />
              </Link>
              <div className={open}>
                <ul className="navLinks">
                  <li className="callDrop">
                    <Link to="/about"> About</Link>
                    <ul className="dropdownCalled">
                      <Link to="/about">
                        <li>Who We are</li>
                      </Link>
                      <HashLink to="#Team" smooth>
                        <li>Our Team </li>
                      </HashLink>

                      {/* <li>Decisions and Directors</li> */}
                      {/* <li>Career</li> */}
                      {/* <li>Our Partners</li> */}
                    </ul>
                  </li>
                  <Link to="/" smooth>
                    <li>Benefits</li>
                  </Link>
                  <Link to="/" smooth>
                    <li>Features</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact Us</li>
                  </Link>
                </ul>

                <div className="scheduleDemo">
                  <button className="outlined-btn">Sign In</button>
                  <button className="scheduleButton">Schedule Demo</button>
                </div>
              </div>
              <div class="menu-wrap" onClick={HandleMenu}>
                <input type="checkbox" class="toggler" />
                <div class="hamburger">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Navbar>
      <ContactForm />
      <SubscribeWaitList />
      <Footer />
    </ContactPage>
  );
};

export default Contact;

let ContactPage = styled.section`
  button {
    transform: scale(1);
    transition: 0.4s;
    &:hover {
      transform: scale(0.96) !important;
    }
  }
`;

let Navbar = styled.section`
  .webContainer {
    max-width: 1210px;
    padding: 0 20px;
    margin: 0 auto;
    @media (max-width: 540px) {
      padding: 0 20px;
    }
  }
  .navbar {
    background: #ffffff;
    z-index: 99;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    width: 100%;
  }
  .navLinks {
    li {
      &:hover {
        color: #2d4bf3;
        font-weight: 500;
      }
    }
    .callDrop {
      position: relative;
      padding-bottom: 15px;

      &:hover {
        .dropdownCalled {
          display: block;
        }
      }
      .dropdownCalled {
        background: #ffffff;
        border: 1px solid #c0c0c0;
        border-radius: 5px;
        display: none;
        width: 230px;
        top: 40px;
        position: absolute;

        li {
          padding: 7px 10px;
          cursor: pointer;
          color: #333;
          &:hover {
            background: #f3f3f3;
            color: #2d4bf3;
          }
        }
      }
    }
  }
  .scheduleDemo {
    span {
      font-weight: 500;
      font-size: 16px;
      color: #2d4bf3;
    }
    .outlined-btn {
      border: 1px solid transparent;
      background-color: transparent;
      &:hover {
        background-color: TRANSPARENT;
        color: #2d4bf3;
      }
    }
    .scheduleButton {
      background: #2d4bf3;
      padding: 12px 18px;
      color: #fff;
      border: 2px solid #f3d645;
      border-radius: 6px;
    }
  }

  .handleNavbar {
    padding: 20px 0;
    padding-bottom: 15px;
    // height: 99px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 0;
    }
    img {
      width: 150px;
    }

    @media (max-width: 900px) {
      padding: 10px 0;

      .scheduleDemo {
        margin: 30px 0;
      }
      .houseForTwo.active {
        transform: translateX(0px);
      }
      .houseForTwo {
        right: 0;
        top: 82px;
        position: absolute;
        background: #f3f3f3;
        transform: translateX(900px);
        transition: 0.4s;
        width: 100%;
        li {
          margin: 0;
          padding: 10px 20px;
          border-bottom: 1px solid #e7e7e8;
        }
        .callDrop {
          padding-bottom: 10px;
        }
      }
    }
    @media (min-width: 900px) {
      .menu-wrap {
        display: none;
      }
      .houseForTwo {
        display: flex;
        justify-content: space-between;
        width: 70%;
      }
      .navLinks {
        display: flex;
        justify-content: space-between;
        width: 50%;
      }
    }
  }
`;