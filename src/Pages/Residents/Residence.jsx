import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import GNavbar from "../../components/Navbar/ResidentNavigator";
import CreateResident from "../../components/CreateResident";
import Mobile from "../../components/Navbar/ResidentMobile";
import TopNav from "../../components/Navbar/ResidentNav";

function ResidencesView() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");

  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal

  const [selected, setSelected] = useState("Filter");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const handleChange = (event) => {
    // setIsChecked(event.target.checked);

    if (event.target.type === "checkbox") {
      let userEmail =
        event.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
          "td"
        )[1].textContent;
      if (event.target.checked) {
        console.log("Activate: ", userEmail);
      } else {
        // Deactivate account.
        console.log("Deactivate: ", userEmail);
      }
    }
  };

  const eventsPerPage = 9;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "") {
        return event;
      } else if (
        event.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        first_name,
        last_name,
        email,
        mobile,
        date,
        time,
        category,
        Type,
        Mode,
      } = event;
      return (
        <tr onClick={(e) => handleChange(e)} key={id}>
          <td>{first_name}</td>

          <td>{last_name}</td>

          <td>{email}</td>

          <td>{mobile}</td>
          <td>
            <div className="date-time">{date}</div>
            <div className="activity-time">{time}</div>
          </td>
          <td>{Type}</td>

          <td>
            <div className="date-time">
              <SwitchBtn>
                <input
                  value=""
                  style={{ margin: "20px" }}
                  type="checkbox"
                  id={id}
                  // checked={isChecked}
                />

                <label class="switch" htmlFor={id}></label>
              </SwitchBtn>
            </div>
          </td>
        </tr>
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <>
      <section className="change_ratio">
        <GNavbar residence="active_tab" />
        <Mobile />
        <CreateResident open={openModal} onClose={() => setOpenModal(false)} />
        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <div className="tabs">
                  <span
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={() => handleClick(1)}
                  >
                    <button onClick={(e) => setEvents(API)}>Household</button>
                  </span>

                  <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button onClick={() => filterEvents("Staff")}>Staff</button>
                  </span>
                </div>
                <div className="event-input">
                  <div class="search_set">
                    <img
                      src="https://www.svgrepo.com/show/13682/search.svg"
                      alt=""
                    />
                    <input
                      className="eventt"
                      type="text"
                      name="name"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    className="important-btn"
                    onClick={() => setOpenModal(true)}
                  >
                    Create Account
                  </button>
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableResidence>
                  <div>
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Date Joined</th>
                            <th>Ranking</th>
                            <th>OFF/ON</th>
                          </tr>
                        </thead>
                        <tbody> {displayEvents} </tbody>
                      </table>
                    </div>
                  </div>
                </TableResidence>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <TableResidence>
                  <div>
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Date Joined</th>
                            <th>Ranking</th>
                            <th>OFF/ON</th>
                          </tr>
                        </thead>
                        <tbody> {displayEvents} </tbody>
                      </table>
                    </div>
                  </div>
                </TableResidence>
              </div>
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ResidencesView;
const SwitchBtn = styled.div`
  .switch {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    background: #dfd9ea;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
  }
  input {
    display: none;
  }
  .switch::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: #fafafa;
    border-radius: 50%;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: rgba(45, 75, 243, 1);
  }
  input:checked + .switch::before {
    left: 27px;
    background: #fff;
  }
  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;
const TableResidence = styled.div`
  .activity_heading {
    font-family: "Satoshi";
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    color: #545454;
  }
  table {
    margin: 0 !important;
  }
  .panels {
    margin-top: 0 !important;
  }
  .activity_table {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    color: #545454;
  }
  .user-name {
    margin-left: 10px;
  }
  .team-members {
    margin-top: 40px;
    width: 65%;
  }
  // .date-time {
  //     width: 81px;
  //     height: 36px;
  //     font-family: 'DM Sans';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 16px;
  //     line-height: 18px;
  //     display: flex;
  //     align-items: center;
  //     color: #545454;
  // }
  .residence-address {
    width: 153px;
    height: 34px;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    /* or 17px */

    display: flex;
    align-items: center;

    /* Grey/2 */
    color: #545454;
  }

  .resume_data {
    margin: 15px;
    width: 32px;
    height: 18px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    letter-spacing: -0.06em;
  }

  .img-entry {
    margin: 5px;
  }
  .activity-time {
    font-weight: 700;
  }
`;
const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .event-input {
    max-width: 675px;
  }

  @media (min-width: 760px) {
    .search_set {
      margin-right: 10px;
    }
    display: flex;
    justify-content: space-between;
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin-left: 10px;
        width: auto !important;
      }
      button {
        margin-top: 0;
        height: 45px;
      }
      .event-select {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .event-input {
      .event-select {
        display: none;
      }
    }
  }
  .tabs {
    margin: 0;
    margin-bottom: 30px;
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;

      text-align: center;
      margin-right: 15px;
      border-bottom: 3px solid #c0c0c0;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 10px;
        //styleName: Web/Small Copy;

        font-size: 16px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .active {
      background: transparent;
      border-bottom: 3px solid #2d4bf3;
      button {
        color: #2d4bf3;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
`;

let Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  

  @media (max-width: 400px) {
    .eachAdminBlog {
      width: 100%;
    }
  }
  @media (min-width: 720px) {
    .perComponent {
      width: 48.5%;
    }
  }
  @media (min-width: 1200px) {
    .perComponent {
      width: 32.5%;
    }
  }
 
  }
`;

const Complaint = styled.div`
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  .handleFlow {
    height: 150px;
    overflow: auto;
    margin: 20px 0;
  }
  button {
    padding: 3px 10px;
    font-weight: 500;
    color: #545454;
    border: 1px solid #545454;
    margin: 0 !important;
    cursor: help;
    &:hover {
      color: #545454;

      background-color: #ffffff;
    }
  }
  .top_level {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 700;

      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
    .select_me {
      max-width: 120px;
      width: 100%;
      .select_content {
        top: 40px;
      }
      .select-btn {
        height: 35px;
        cursor: pointer;
        img {
          width: 15px;
          right: 10px;
        }
        span {
          left: 10px;
        }
      }
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #999999;
  }
  .name_position {
    margin-top: 15px;
    display: flex;

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      object-fit: cover;
      border-radius: 50%;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      margin-top: 7px;
      span {
        font-weight: 700;
        color: #2d4bf3;
        font-size: 14px;
        margin-left: 10px;
        line-height: 13px;
        letter-spacing: -0.06em;
      }
    }
  }
`;

let API = [
  {
    id: 1,
    first_name: "Kermit",
    last_name: "Dumbell",
    email: "kdumbell0@odnoklassniki.ru",
    mobile: "932-919-0610",
    date: "21-Jul-2022",
    time: "9:35 AM",
    category: "Household",
    Type: "Gate Man",
    mode: "Deactivated",
  },
  {
    id: 2,
    first_name: "August",
    last_name: "Rentelll",
    email: "arentelll1@bluehost.com",
    mobile: "761-231-0683",
    date: "12-May-2022",
    time: "4:20 PM",
    category: "Household",
    Type: "CareTaker",
    mode: "Activated",
  },
  {
    id: 3,
    first_name: "Tova",
    last_name: "Hefford",
    email: "thefford2@seesaa.net",
    mobile: "669-420-7251",
    date: "15-May-2022",
    time: "4:12 AM",
    category: "Household",
    Type: "Secretary",
    mode: "Activated",
  },
  {
    id: 4,
    first_name: "Evita",
    last_name: "Wride",
    email: "ewride3@imdb.com",
    mobile: "722-724-0545",
    date: "28-Apr-2022",
    time: "7:38 PM",
    category: "Staff",
    Type: "Resident",
    mode: "Activated",
  },
  {
    id: 5,
    first_name: "Ulberto",
    last_name: "Ropartz",
    email: "uropartz4@scribd.com",
    mobile: "423-606-8427",
    date: "30-Jan-2022",
    time: "2:45 AM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 6,
    first_name: "Benito",
    last_name: "Cornbill",
    email: "bcornbill5@scribd.com",
    mobile: "903-986-5175",
    date: "12-Mar-2022",
    time: "6:35 AM",
    category: "Household",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 7,
    first_name: "Toinette",
    last_name: "Sandle",
    email: "tsandle6@sakura.ne.jp",
    mobile: "231-585-0019",
    date: "16-Dec-2021",
    time: "8:59 AM",
    category: "Staff",
    Type: "PRO",
    mode: "Activated",
  },
  {
    id: 8,
    first_name: "Barde",
    last_name: "Spillett",
    email: "bspillett7@usa.gov",
    mobile: "100-611-6564",
    date: "08-Jul-2022",
    time: "9:08 AM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 9,
    first_name: "Susy",
    last_name: "Shepeard",
    email: "sshepeard8@usda.gov",
    mobile: "653-402-6314",
    date: "19-Jan-2022",
    time: "11:55 AM",
    category: "Household",
    Type: "CareTaker",
    mode: "Deactivated",
  },
  {
    id: 10,
    first_name: "Jenine",
    last_name: "Akhurst",
    email: "jakhurst9@youtube.com",
    mobile: "101-600-6059",
    date: "03-Dec-2021",
    time: "4:03 PM",
    category: "Household",
    Type: "Resident",
    mode: "Activated",
  },
  {
    id: 11,
    first_name: "Avery",
    last_name: "Beckley",
    email: "abeckleya@walmart.com",
    mobile: "114-301-6696",
    date: "25-Feb-2022",
    time: "9:44 PM",
    category: "Staff",
    Type: "Resident",
    mode: "Deactivated",
  },
  {
    id: 12,
    first_name: "Pris",
    last_name: "Clingoe",
    email: "pclingoeb@ibm.com",
    mobile: "761-337-7962",
    date: "11-Sep-2022",
    time: "7:27 PM",
    category: "Household",
    Type: "Secretary",
    mode: "Activated",
  },
  {
    id: 13,
    first_name: "Alano",
    last_name: "O'Donegan",
    email: "aodoneganc@elpais.com",
    mobile: "822-177-6888",
    date: "02-Sep-2022",
    time: "8:04 PM",
    category: "Household",
    Type: "CareTaker",
    mode: "Activated",
  },
  {
    id: 14,
    first_name: "Terese",
    last_name: "Woolforde",
    email: "twoolforded@cbc.ca",
    mobile: "537-144-7757",
    date: "21-Jul-2022",
    time: "10:52 PM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Deactivated",
  },
  {
    id: 15,
    first_name: "Ewell",
    last_name: "Ragsdale",
    email: "eragsdalee@networkadvertising.org",
    mobile: "335-468-0059",
    date: "01-Jun-2022",
    time: "12:01 PM",
    category: "Household",
    Type: "Resident",
    mode: "Activated",
  },
  {
    id: 16,
    first_name: "Mason",
    last_name: "Palfreman",
    email: "mpalfremanf@usgs.gov",
    mobile: "109-311-4400",
    date: "16-Jun-2022",
    time: "4:52 PM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 17,
    first_name: "Selestina",
    last_name: "Threadgold",
    email: "sthreadgoldg@spotify.com",
    mobile: "360-641-6510",
    date: "16-Jun-2022",
    time: "9:58 AM",
    category: "Household",
    Type: "Resident",
    mode: "Deactivated",
  },
  {
    id: 18,
    first_name: "Ilse",
    last_name: "Brookshaw",
    email: "ibrookshawh@about.me",
    mobile: "384-290-7528",
    date: "23-Jun-2022",
    time: "2:22 AM",
    category: "Household",
    Type: "Gate Man",
    mode: "Deactivated",
  },
  {
    id: 19,
    first_name: "Winny",
    last_name: "Breitler",
    email: "wbreitleri@last.fm",
    mobile: "937-386-4584",
    date: "07-Jan-2022",
    time: "7:33 AM",
    category: "Staff",
    Type: "Secretary",
    mode: "Deactivated",
  },
  {
    id: 20,
    first_name: "Sileas",
    last_name: "Duckhouse",
    email: "sduckhousej@forbes.com",
    mobile: "908-217-4492",
    date: "05-Dec-2021",
    time: "12:48 AM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 21,
    first_name: "Isac",
    last_name: "Estabrook",
    email: "iestabrookk@ehow.com",
    mobile: "372-780-5264",
    date: "28-Mar-2022",
    time: "1:26 AM",
    category: "Staff",
    Type: "CareTaker",
    mode: "Activated",
  },
  {
    id: 22,
    first_name: "Annadiane",
    last_name: "Ughetti",
    email: "aughettil@cisco.com",
    mobile: "884-159-8450",
    date: "17-Dec-2021",
    time: "3:36 AM",
    category: "Household",
    Type: "CareTaker",
    mode: "Deactivated",
  },
  {
    id: 23,
    first_name: "Carmon",
    last_name: "Lemasney",
    email: "clemasneym@economist.com",
    mobile: "204-339-1393",
    date: "28-Jul-2022",
    time: "5:55 AM",
    category: "Staff",
    Type: "CareTaker",
    mode: "Deactivated",
  },
  {
    id: 24,
    first_name: "Cosimo",
    last_name: "Doran",
    email: "cdorann@goo.gl",
    mobile: "673-772-9894",
    date: "26-Mar-2022",
    time: "3:06 AM",
    category: "Staff",
    Type: "Gate Man",
    mode: "Deactivated",
  },
  {
    id: 25,
    first_name: "Marysa",
    last_name: "Glassard",
    email: "mglassardo@lycos.com",
    mobile: "468-758-5081",
    date: "18-Nov-2022",
    time: "3:57 AM",
    category: "Household",
    Type: "PRO",
    mode: "Activated",
  },
  {
    id: 26,
    first_name: "Davey",
    last_name: "Trahear",
    email: "dtrahearp@google.co.uk",
    mobile: "743-216-0270",
    date: "06-Jun-2022",
    time: "7:06 PM",
    category: "Household",
    Type: "Secretary",
    mode: "Deactivated",
  },
  {
    id: 27,
    first_name: "Lucy",
    last_name: "Litster",
    email: "llitsterq@squidoo.com",
    mobile: "465-425-3299",
    date: "23-Dec-2021",
    time: "10:40 PM",
    category: "Household",
    Type: "PRO",
    mode: "Deactivated",
  },
  {
    id: 28,
    first_name: "Lanae",
    last_name: "Murrell",
    email: "lmurrellr@accuweather.com",
    mobile: "969-672-4235",
    date: "16-Aug-2022",
    time: "9:39 AM",
    category: "Household",
    Type: "Gate Man",
    mode: "Activated",
  },
  {
    id: 29,
    first_name: "Erwin",
    last_name: "McNeil",
    email: "emcneils@edublogs.org",
    mobile: "366-286-2460",
    date: "29-May-2022",
    time: "2:33 PM",
    category: "Household",
    Type: "CareTaker",
    mode: "Activated",
  },
  {
    id: 30,
    first_name: "Jillene",
    last_name: "Hargreave",
    email: "jhargreavet@hp.com",
    mobile: "658-694-0426",
    date: "28-Dec-2021",
    time: "2:51 PM",
    category: "Staff",
    Type: "CareTaker",
    mode: "Deactivated",
  },
];
