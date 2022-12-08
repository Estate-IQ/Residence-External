import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import GNavbar from "../../components/Navbar/ExternalNavigator.jsx";
import Mobile from "../../components/Navbar/ExternalNavbar";
import TopNav from "../../components/Navbar/ExternalNotify";

function ExternalActivityLog() {
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
      const {
        id,
        first_name,
        last_name,
        resident_id,
        account_type,
        // mobile,
        address,
        date,
        time,
        mode,
      } = event;

      return (
        <tr key={id}>
          <td>
            {first_name} {last_name}
          </td>
          {/* <td className="Residents-address">{mobile}</td> */}
          <td>PQT-34567</td>
          <td>{account_type}</td>
          <td className="defaultWidth">
            10B, Wiseman Crescent, Golden Gate Estate.
          </td>
          <td className="defaultforDate">
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
                <h3>Activity Log</h3>
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
                      placeholder="Search Name"
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
                            {/* <th>Mobile</th> */}
                            <th>Access Code</th>
                            <th>Account Type</th>
                            <th>Destination</th>
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
    margin-bottom: 10px;
  }
  .normal_tab {
    background: transparent;
  }
  h3 {
    margin: 0;

    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
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
    width: 190px;
    height: 34px;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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

export default ExternalActivityLog;
// DATA
const API = [
  {
    id: 1,
    first_name: "Tanitansy",
    last_name: "Hannant",
    mobile: "+351 644 503 6911",
    account_type: "Staff",
    mode: "Exit",
    date: "10-Dec-2021",
    time: "8:07 AM",
    resident_id: "#0987676",
  },
  {
    id: 2,
    first_name: "Tuck",
    last_name: "Guitt",
    mobile: "+86 928 261 8930",
    account_type: "Member",
    mode: "Entry",
    date: "12-Apr-2022",
    time: "4:23 AM",
    resident_id: "#0987676",
  },
  {
    id: 3,
    first_name: "Shanan",
    last_name: "Watkiss",
    mobile: "+86 749 926 7108",
    account_type: "Staff",
    mode: "Entry",
    date: "12-Dec-2021",
    time: "6:48 PM",
    resident_id: "#098765",
  },
  {
    id: 4,
    first_name: "Harriott",
    last_name: "Fortye",
    mobile: "+46 477 808 0963",
    account_type: "Member",
    mode: "Entry",
    date: "07-Oct-2022",
    time: "4:47 PM",
    resident_id: "#2345534",
  },
  {
    id: 5,
    first_name: "Shelagh",
    last_name: "Jewsbury",
    mobile: "+33 682 697 8332",
    account_type: "Member",
    mode: "Exit",
    date: "06-Jul-2022",
    time: "7:39 AM",
    resident_id: "#2345534",
  },
  {
    id: 6,
    first_name: "Kaila",
    last_name: "Palfreman",
    mobile: "+380 886 417 2114",
    account_type: "Visitor",
    mode: "Entry",
    date: "25-Dec-2021",
    time: "10:26 PM",
    resident_id: "#0987676",
  },
  {
    id: 7,
    first_name: "Ashbey",
    last_name: "Lehrer",
    mobile: "+375 827 345 6006",
    account_type: "Member",
    mode: "Exit",
    date: "30-Sep-2022",
    time: "12:54 AM",
    resident_id: "#0987676",
  },
  {
    id: 8,
    first_name: "Bessy",
    last_name: "Rae",
    mobile: "+62 905 349 1921",
    account_type: "Member",
    mode: "Entry",
    date: "13-Jul-2022",
    time: "5:12 PM",
    resident_id: "#098765",
  },
  {
    id: 9,
    first_name: "Lara",
    last_name: "Russan",
    mobile: "+49 804 321 3065",
    account_type: "Visitor",
    mode: "Entry",
    date: "28-Sep-2022",
    time: "10:03 PM",
    resident_id: "#0987676",
  },
  {
    id: 10,
    first_name: "Reider",
    last_name: "Wallbutton",
    mobile: "+63 704 834 2866",
    account_type: "Member",
    mode: "Exit",
    date: "30-Dec-2021",
    time: "5:15 AM",
    resident_id: "#2345534",
  },
  {
    id: 11,
    first_name: "Cordie",
    last_name: "Monard",
    mobile: "+86 496 269 5405",
    account_type: "Staff",
    mode: "Entry",
    date: "18-Aug-2022",
    time: "3:35 AM",
    resident_id: "#098765",
  },
  {
    id: 12,
    first_name: "Silvio",
    last_name: "Mulholland",
    mobile: "+86 744 270 8340",
    account_type: "Visitor",
    mode: "Exit",
    date: "17-Jan-2022",
    time: "3:23 PM",
    resident_id: "#098765",
  },
  {
    id: 13,
    first_name: "Danika",
    last_name: "Macvey",
    mobile: "+1 551 974 0781",
    account_type: "Visitor",
    mode: "Entry",
    date: "24-Jul-2022",
    time: "4:52 PM",
    resident_id: "#0987676",
  },
  {
    id: 14,
    first_name: "Erika",
    last_name: "Graveney",
    mobile: "+55 139 375 3699",
    account_type: "Staff",
    mode: "Entry",
    date: "28-Nov-2021",
    time: "7:33 PM",
    resident_id: "#2345534",
  },
  {
    id: 15,
    first_name: "Lorant",
    last_name: "Trembey",
    mobile: "+63 350 305 1724",
    account_type: "Visitor",
    mode: "Entry",
    date: "23-Nov-2021",
    time: "2:51 PM",
    resident_id: "#0987676",
  },
  {
    id: 16,
    first_name: "Sky",
    last_name: "Stapele",
    mobile: "+46 593 419 0145",
    account_type: "Visitor",
    mode: "Exit",
    date: "11-Jun-2022",
    time: "10:10 AM",
    resident_id: "#098765",
  },
  {
    id: 17,
    first_name: "Viv",
    last_name: "Clemenson",
    mobile: "+48 643 161 1115",
    account_type: "Staff",
    mode: "Entry",
    date: "20-Mar-2022",
    time: "8:28 AM",
    resident_id: "#2345534",
  },
  {
    id: 18,
    first_name: "Leonardo",
    last_name: "Pestor",
    mobile: "+1 103 520 8617",
    account_type: "Visitor",
    mode: "Exit",
    date: "19-Nov-2022",
    time: "11:28 PM",
    resident_id: "#2345534",
  },
  {
    id: 19,
    first_name: "Cobbie",
    last_name: "Bastable",
    mobile: "+976 852 742 9003",
    account_type: "Member",
    mode: "Exit",
    date: "09-Mar-2022",
    time: "2:28 AM",
    resident_id: "#098765",
  },
  {
    id: 20,
    first_name: "Winfield",
    last_name: "Dufour",
    mobile: "+33 493 572 1182",
    account_type: "Staff",
    mode: "Entry",
    date: "05-Aug-2022",
    time: "10:20 PM",
    resident_id: "#098765",
  },
  {
    id: 21,
    first_name: "Fred",
    last_name: "Parrington",
    mobile: "+212 441 281 6649",
    account_type: "Member",
    mode: "Entry",
    date: "28-Sep-2022",
    time: "5:18 PM",
    resident_id: "#098765",
  },
  {
    id: 22,
    first_name: "Mavra",
    last_name: "Killen",
    mobile: "+33 325 751 1293",
    account_type: "Staff",
    mode: "Exit",
    date: "23-Dec-2021",
    time: "12:41 AM",
    resident_id: "#2345534",
  },
  {
    id: 23,
    first_name: "Sholom",
    last_name: "MacFall",
    mobile: "+375 704 604 0455",
    account_type: "Staff",
    mode: "Exit",
    date: "21-Dec-2021",
    time: "2:40 AM",
    resident_id: "#0987676",
  },
  {
    id: 24,
    first_name: "Gus",
    last_name: "Blaney",
    mobile: "+52 979 539 9286",
    account_type: "Visitor",
    mode: "Exit",
    date: "26-Nov-2021",
    time: "10:45 PM",
    resident_id: "#0987676",
  },
  {
    id: 25,
    first_name: "Dulcie",
    last_name: "Hail",
    mobile: "+351 875 688 5397",
    account_type: "Staff",
    mode: "Exit",
    date: "25-Jul-2022",
    time: "10:30 PM",
    resident_id: "#098765",
  },
  {
    id: 26,
    first_name: "Cassondra",
    last_name: "Denk",
    mobile: "+86 256 655 6702",
    account_type: "Member",
    mode: "Exit",
    date: "03-Jul-2022",
    time: "12:51 AM",
    resident_id: "#0987676",
  },
  {
    id: 27,
    first_name: "Dianna",
    last_name: "Spratling",
    mobile: "+62 819 518 2069",
    account_type: "Member",
    mode: "Exit",
    date: "20-Mar-2022",
    time: "5:48 AM",
    resident_id: "#2345534",
  },
  {
    id: 28,
    first_name: "Laverna",
    last_name: "Addington",
    mobile: "+63 199 378 0757",
    account_type: "Member",
    mode: "Entry",
    date: "05-Jan-2022",
    time: "11:35 AM",
    resident_id: "#0987676",
  },
  {
    id: 29,
    first_name: "Hi",
    last_name: "Westney",
    mobile: "+62 644 106 5348",
    account_type: "Member",
    mode: "Entry",
    date: "10-Jun-2022",
    time: "1:26 PM",
    resident_id: "#0987676",
  },
  {
    id: 30,
    first_name: "Kristo",
    last_name: "Fassan",
    mobile: "+420 273 687 9470",
    account_type: "Member",
    mode: "Entry",
    date: "22-Jun-2022",
    time: "12:43 PM",
    resident_id: "#0987676",
  },
];
