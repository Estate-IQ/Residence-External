import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SVGs } from "../../assets/svg/SVGs";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <PageFooter>
      <section className="webContainer handleFooter">
        <ul>
          <h5>Website</h5>
          <Link to="/about">
            <li>About Us </li>
          </Link>
          <Link>
            <li>Features</li>
          </Link>
          <Link>
            <li>Benefits </li>
          </Link>
          <Link to="/contact">
            <li>Contact Us </li>
          </Link>
        </ul>
        <ul className="Contact">
          <h5>Contact</h5>

          <Link>
            <li>(234) 909 040 9121</li>
          </Link>
          <Link>
            <li>WhatsApp</li>
          </Link>
          <a href="mailto: estateiqnigeria@gmail.com">
            <li>Email</li>
          </a>
          <a>
            <li>
              21, Olori Muyibat Oyefusi Street, Lekki Phase 1, Lagos, Nigeria.
            </li>
          </a>
        </ul>
        <ul>
          <h5>Social Media</h5>
          <a href="https://www.facebook.com/Estateiq-108416158522886">
            <li className="fbook">Facebook</li>
          </a>
          <a href="https://www.instagram.com/estateiq_ng/">
            <li className="fInstagram">Instagram</li>
          </a>
          <a href="https://twitter.com/estateiq_ng">
            <li className="ftwiiter">Twitter</li>
          </a>
        </ul>
        <ul className="downloadUsing">
          <h5>Download App</h5>
          <div className="califa">
            <HashLink to="/#Subscribe">
              <li>
                <img src={SVGs.AppStore} alt="" />
              </li>
            </HashLink>
            <HashLink to="/#Subscribe">
              <li>
                <img src={SVGs.GooglePlay} alt="" />
              </li>
            </HashLink>
          </div>
        </ul>
      </section>

      <div className="copyright">
        <span>
          Copyright (c) {getCurrentYear()} EstateIQ - All rights reserved
        </span>
      </div>
    </PageFooter>
  );
};

export default Footer;

let PageFooter = styled.section`
  background: #1737e6;
  margin-top: 100px;
  .Contact {
    width: 20%;
  }
  .copyright {
    margin-top: 70px;
    text-align: center;
    border-top: 1px solid blue;
    container {
      padding: 0 !important;
    }
    padding: 20px 0;
    span {
      color: #fff;
    }
  }
  @media (max-width: 540px) {
    .handleFooter {
      ul {
        max-width: 400px;
        width: 100%;
      }
    }
  }

  .webContainer {
    max-width: 1210px;
    padding: 0 20px;
    margin: 0 auto;
    @media (max-width: 540px) {
      padding: 0 20px;
    }
  }
  .califa {
    display: flex;
    img {
      margin: 0 5px;
    }
  }
  .downloadUsing {
    li {
      paddding: 0;
      margin: 0;
    }
  }

  .handleFooter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ul {
      padding: 25px 0;

      li {
        color: white;
      }
      img {
        width: 150px;
      }
    }
    h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #eacb30;
    }
  }
`;
