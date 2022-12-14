import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import { SVGs } from "../assets/svg/SVGs";
import email from "../assets/svg/email_a.svg";
import call from "../assets/svg/call_a.svg";
import { Images } from "../assets/images/Images";
import GNavbar from "./Navbar/S-Navigator";
import Mobile from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/SuperAdminNav";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Invoices from "./AdminTransactionInvoice";

const Profile = () => {
  // SEARCH INPUT
  // const [searchInput, setSearchInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [invoice, setInvoice] = useState(false);

  const handleClick = () => {
    // If the user is currently active, deactivate them
    if (isActive) {
      deactivateUser();
    } else {
      // Otherwise, activate them
      activateUser();
    }

    // Update the state to reflect the change
    setIsActive(!isActive);
  };
  function activateUser() {
    // TODO: Implement this function to activate the user in the database
  }

  function deactivateUser() {
    // TODO: Implement this function to deactivate the user in the database
  }
  return (
    <>
      <section className="change_ratio">
        <GNavbar estate="active_tab" />
        <Mobile />
        <section className="selected_tab">
          {/* ========
        WITH SEARCHBOX
        =========== */}
          <TopNav />
          <Invoices open={invoice} onClose={() => setInvoice(false)} />
          {/* Dashboard - container */}
          <div className="dashboard_container">
            <BreadCrumb
              previous="Estate"
              prevlink="/superadmin/estate"
              current="Estate Info"
            />
            <div className="group_profile">
              {/* 1 */}
              <div className="Cap_estate_name">
                <div className="group_profile_header">
                  <img src={Images.blog2} alt="" />
                  <div className="estate_name">
                    <h1>Golden Gate Estate</h1>
                    <p className="estate_id">E1Q402</p>
                    <div className="packages_name">
                      <button>Deluxe Package</button>
                      <h4>10 days Left</h4>
                    </div>
                    <div className="location_before">
                      <p>
                        Plot 33, Abubakar Tafawa Balewa Way Central Business
                        District, Cadastral Zone,, Abuja,
                      </p>
                    </div>

                    <div className="activity_log">
                      <Link to="/superadmin/activitylog">Activity Log</Link>
                      {/* <Link to="#" onClick={() => setInvoice(true)}>
                        Invoice
                      </Link> */}
                    </div>
                  </div>
                </div>

                <div className="contact_info">
                  <h4>Contact Info</h4>
                  <h5>Email</h5>
                  <p>Goldengatestate@gmail.com</p>
                </div>

                <div className="resident_data">
                  <div className="per">
                    <h4>Resident Data</h4>
                    <p>1000</p>

                    <h3 className="active">Active: 43</h3>
                    <h3 className="in-active">Inactive: 71</h3>
                  </div>
                  <div className="per">
                    <h4>Domestic Staff</h4>
                    <p>40</p>

                    <h3 className="active">Active: 43</h3>
                    <h3 className="in-active">Inactive: 71</h3>
                  </div>
                  <div className="per">
                    <h4>Security</h4>
                    <p>1000</p>

                    <h3 className="active">Active: 43</h3>
                    <h3 className="in-active">Inactive: 71</h3>
                  </div>
                  <div className="per">
                    <h4>Vendors</h4>
                    <p>1000</p>

                    <h3 className="active">Active: 43</h3>
                    <h3 className="in-active">Inactive: 71</h3>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="c_del">
                <div className="admins_list">
                  <div className="admins_list_header">
                    <h2>Admin</h2>
                    {/* MAP ON THIS */}
                    <div className="per_admin">
                      {/* 1 */}
                      <div className="name_pic">
                        <img src={Images.img3} alt="admin" />
                        <div className="n_email">
                          <div className="ad_name">
                            <h4>Alo Tosin</h4>
                            <p>Admin</p>
                          </div>
                          <p>msodq2018@gmail.com</p>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="call_text">
                        <a href="mailto:msodq2018@gmail.com">
                          <img src={email} alt="" className="mail_none" />
                        </a>
                        <a href="tel:+2348023542997">
                          <img src={call} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="per_admin">
                      {/* 1 */}
                      <div className="name_pic">
                        <img src={Images.img5} alt="admin" />
                        <div className="n_email">
                          <div className="ad_name">
                            <h4>Oladoye Makinde</h4>
                            <p>Admin</p>
                          </div>
                          <p>msodq2018@gmail.com</p>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="call_text">
                        <a href="mailto:msodq2018@gmail.com">
                          <img src={email} alt="" className="mail_none" />
                        </a>
                        <a href="tel:+2348023542997">
                          <img src={call} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <StyledButton
                  onClick={handleClick}
                  color={isActive ? "crimson" : "white"}
                  border={isActive ? "2px solid crimson" : "2px solid green"}
                  background={isActive ? "white" : "green"}
                >
                  {isActive ? "Deactivated" : "Activated"}
                </StyledButton>
                <p>
                  <b>Note:</b> Kindly note that upon deactivating,the estate is
                  not going to function anymore.
                </p>
                {/* <button className="outlined-btn">Deactivate Account</button> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;

const StyledButton = styled.button`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  padding: 8px 12px;
  transition: all 0.2s;
`;
