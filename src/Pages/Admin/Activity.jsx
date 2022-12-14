import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import GNavbar from "../../components/Navbar/A-Navigator";
import Mobile from "../../components/Navbar/AdminMobile";
import TopNav from "../../components/Navbar/AdminNav";

function AdminActivityLog() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");
  const [resident, setResident] = useState("Add New");
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");

  const [selected, setSelected] = useState("Filter");
  const [entry, setEntry] = useState("Mode");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  const handleOnchange = (val) => setvalue(val);
  // const [ API, setData ] = useState(API)
  const eventsPerPage = 9;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };
  const filterMode = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.mode === catItem;
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
      const { id, first_name, last_name, email, address, date, time, mode } =
        event;

      return (
        <tr>
          <td>
            <div className="img-avatar">
              <div className="user-name">
                {last_name} {first_name}
              </div>
            </div>
          </td>

          <td>{email}</td>
          <td>{address}</td>
          <td>
            <div className="date-time">{date}</div>
            <div className="activity-time">{time}</div>
          </td>
          <td className="resume_data">
            <p className={mode === "Entry" ? "entry" : "exit"}>{mode}</p>
          </td>
        </tr>
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };
  const Mode = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["Entry", "Exit"];
    return (
      <div className="select_me filter_drop">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 9L12.5 15L18.5 9"
              stroke="#545454"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {isActive && (
          <div className="select_content">
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Entry");
                setIsActive(false);
              }}
            >
              <p onClick={() => filterMode("Entry")}>Entry</p>
            </div>
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Exit");
                setIsActive(false);
              }}
            >
              <p onClick={() => filterMode("Exit")}>Exit</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <section className="change_ratio">
        <GNavbar activity="active_tab" />
        <Mobile />

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
                    <button onClick={(e) => setEvents(API)}>All</button>
                  </span>

                  <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button onClick={() => filterEvents("Resident")}>
                      Residents
                    </button>
                  </span>
                  <span
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                  >
                    <button onClick={() => filterEvents("Visitor")}>
                      Visitors
                    </button>
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

                  <FilterBy selected={selected} setSelected={setSelected} />
                  <Mode selected={entry} setSelected={setEntry} />
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableFrame>
                  <div className="scrollable_table">
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>Residents Name</th>
                            <th>Email</th>
                            <th>Residents Address</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{displayEvents}</tbody>
                      </table>
                    </div>
                  </div>
                </TableFrame>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <TableFrame>
                  <div className="scrollable_table">
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>Residents Name</th>
                            <th>Email</th>
                            <th>Residents Address</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{displayEvents}</tbody>
                      </table>
                    </div>
                  </div>
                </TableFrame>
              </div>
              <div className={`panel ${checkActive(3, "active")}`}>
                <TableFrame>
                  <div className="scrollable_table">
                    <div className="activity_table">
                      <table>
                        <thead>
                          <tr>
                            <th>Residents Name</th>
                            <th>Email</th>
                            <th>Residents Address</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{displayEvents}</tbody>
                      </table>
                    </div>
                  </div>
                </TableFrame>
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
  @media (max-width: 420px) {
    .search_set,
    button {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .search_set {
      width: 220px;
    }
    .outlined {
      width: 180px !important;
    }
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin: 0 10px;
        width: 135px;
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
      padding: 5px 20px;
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

const FilterBy = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me filter_drop">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 9L12.5 15L18.5 9"
            stroke="#545454"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          {/* <h5>Duration</h5> */}
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
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

const TableFrame = styled.div`
  @media (max-width: 900px) {
    .scroll {
      min-width: 950px;
      width: 100%;
    }
  }
  .activity_table {
    /* Grey/2 */
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
  .Residents-address {
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

export default AdminActivityLog;
// DATA
const API = [
  {
    id: 1,
    first_name: "Lesli",
    last_name: "Kocher",
    email: "lkocher0@rambler.ru",
    address: "827 Pine View Street",
    date: "06-Jul-2022",
    time: "6:59 AM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 2,
    first_name: "Katleen",
    last_name: "Stranger",
    email: "kstranger1@ask.com",
    address: "711 Carioca Terrace",
    date: "14-Oct-2022",
    time: "2:38 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 3,
    first_name: "Shirlee",
    last_name: "Shelf",
    email: "sshelf2@ihg.com",
    address: "07 Donald Pass",
    date: "05-Jun-2022",
    time: "7:16 PM",
    mode: "Entry",
    category: "Resident",
  },
  {
    id: 4,
    first_name: "Sabine",
    last_name: "Danelet",
    email: "sdanelet3@illinois.edu",
    address: "71472 Banding Trail",
    date: "10-Mar-2022",
    time: "12:01 PM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 5,
    first_name: "Saunder",
    last_name: "Gallally",
    email: "sgallally4@latimes.com",
    address: "7919 Orin Plaza",
    date: "21-May-2022",
    time: "7:56 AM",
    mode: "Exit",
    category: "Resident",
  },
  {
    id: 6,
    first_name: "Angeline",
    last_name: "Petow",
    email: "apetow5@spiegel.de",
    address: "148 Golden Leaf Hill",
    date: "14-Oct-2022",
    time: "4:47 PM",
    mode: "Exit",
    category: "Resident",
  },
  {
    id: 7,
    first_name: "Leone",
    last_name: "Donnett",
    email: "ldonnett6@multiply.com",
    address: "77 Clove Pass",
    date: "27-Aug-2022",
    time: "7:10 PM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 8,
    first_name: "Luce",
    last_name: "Danbury",
    email: "ldanbury7@hhs.gov",
    address: "780 Randy Park",
    date: "02-Feb-2022",
    time: "2:02 PM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 9,
    first_name: "Aldridge",
    last_name: "Paliser",
    email: "apaliser8@nyu.edu",
    address: "4285 Bartillon Court",
    date: "25-Sep-2022",
    time: "12:33 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 10,
    first_name: "Gerick",
    last_name: "Roalfe",
    email: "groalfe9@oracle.com",
    address: "818 Almo Plaza",
    date: "05-May-2022",
    time: "3:06 PM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 11,
    first_name: "Levi",
    last_name: "Matts",
    email: "lmattsa@hud.gov",
    address: "8 Kingsford Place",
    date: "14-May-2022",
    time: "6:05 PM",
    mode: "Exit",
    category: "Resident",
  },
  {
    id: 12,
    first_name: "Niall",
    last_name: "Greenleaf",
    email: "ngreenleafb@aol.com",
    address: "0412 Hermina Hill",
    date: "19-Jan-2022",
    time: "6:06 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 13,
    first_name: "Seymour",
    last_name: "Ledgard",
    email: "sledgardc@dagondesign.com",
    address: "1158 Badeau Terrace",
    date: "01-Dec-2021",
    time: "7:52 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 14,
    first_name: "Fredric",
    last_name: "Larret",
    email: "flarretd@devhub.com",
    address: "1418 Jackson Trail",
    date: "28-Sep-2022",
    time: "12:50 AM",
    mode: "Exit",
    category: "Resident",
  },
  {
    id: 15,
    first_name: "Della",
    last_name: "Tommen",
    email: "dtommene@ft.com",
    address: "53 Bowman Junction",
    date: "29-Mar-2022",
    time: "12:59 AM",
    mode: "Entry",
    category: "Resident",
  },
  {
    id: 16,
    first_name: "Jane",
    last_name: "Houldin",
    email: "jhouldinf@123-reg.co.uk",
    address: "80728 Lakewood Gardens Park",
    date: "03-Mar-2022",
    time: "11:43 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 17,
    first_name: "Ursala",
    last_name: "Jacobsz",
    email: "ujacobszg@nationalgeographic.com",
    address: "28 Westend Alley",
    date: "07-Aug-2022",
    time: "12:47 PM",
    mode: "Entry",
    category: "Resident",
  },
  {
    id: 18,
    first_name: "Chanda",
    last_name: "Luebbert",
    email: "cluebberth@sun.com",
    address: "8 1st Pass",
    date: "25-Aug-2022",
    time: "1:21 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 19,
    first_name: "Mata",
    last_name: "Orgel",
    email: "morgeli@boston.com",
    address: "34861 Washington Trail",
    date: "04-Jun-2022",
    time: "6:08 PM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 20,
    first_name: "Garrott",
    last_name: "Minthorpe",
    email: "gminthorpej@dot.gov",
    address: "579 Sycamore Avenue",
    date: "13-May-2022",
    time: "6:58 PM",
    mode: "Entry",
    category: "Resident",
  },
  {
    id: 21,
    first_name: "Roseanne",
    last_name: "Veazey",
    email: "rveazeyk@yelp.com",
    address: "14515 Nevada Circle",
    date: "17-Mar-2022",
    time: "2:53 PM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 22,
    first_name: "Cloris",
    last_name: "Barnwall",
    email: "cbarnwalll@hhs.gov",
    address: "4635 Eagan Terrace",
    date: "10-Jul-2022",
    time: "5:44 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 23,
    first_name: "Kit",
    last_name: "Stanney",
    email: "kstanneym@bing.com",
    address: "4 Melody Drive",
    date: "28-Oct-2022",
    time: "6:45 AM",
    mode: "Entry",
    category: "Resident",
  },
  {
    id: 24,
    first_name: "Fraser",
    last_name: "Di Boldi",
    email: "fdiboldin@php.net",
    address: "58 Tomscot Circle",
    date: "30-Dec-2021",
    time: "3:52 PM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 25,
    first_name: "Jeffie",
    last_name: "O'Sherin",
    email: "josherino@opera.com",
    address: "622 Vernon Lane",
    date: "21-Nov-2021",
    time: "2:55 PM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 26,
    first_name: "Wilfrid",
    last_name: "Cathery",
    email: "wcatheryp@nytimes.com",
    address: "866 Esker Pass",
    date: "10-Jan-2022",
    time: "6:39 AM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 27,
    first_name: "Leona",
    last_name: "Sherer",
    email: "lshererq@cbslocal.com",
    address: "2132 Tomscot Junction",
    date: "03-May-2022",
    time: "6:30 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 28,
    first_name: "Corinne",
    last_name: "Ambage",
    email: "cambager@census.gov",
    address: "41848 Arrowood Pass",
    date: "25-Sep-2022",
    time: "7:23 AM",
    mode: "Entry",
    category: "Visitor",
  },
  {
    id: 29,
    first_name: "Richmound",
    last_name: "Haime",
    email: "rhaimes@foxnews.com",
    address: "140 Dennis Pass",
    date: "31-Jan-2022",
    time: "1:39 AM",
    mode: "Exit",
    category: "Visitor",
  },
  {
    id: 30,
    first_name: "Nessy",
    last_name: "Shrubshall",
    email: "nshrubshallt@ning.com",
    address: "309 Rusk Pass",
    date: "02-Sep-2022",
    time: "1:31 PM",
    mode: "Entry",
    category: "Resident",
  },
];
