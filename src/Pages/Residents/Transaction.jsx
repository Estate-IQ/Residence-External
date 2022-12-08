import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import { SVGs } from "../../assets/svg/SVGs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import GNavbar from "../../components/Navbar/ResidentNavigator";
import AllUtilities from "../../components/SetUtilityView";
import Mobile from "../../components/Navbar/ResidentMobile";
import TopNav from "../../components/Navbar/ResidentNav";

function AdminTransaction() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");
  const [edit, setEditCollection] = useState(false); // state for Modal
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const handleOnchange = (val) => setvalue(val);
  // const [ API, setData ] = useState(API)
  const eventsPerPage = 8;
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
        event.purpose.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        transaction_id,
        bank,
        status,
        date,
        time,
        account,
        amount,
        purpose,
      } = event;

      return (
        <tr>
          <td>
            <div className="img-avatar">
              <div className="user-name">{transaction_id}</div>
            </div>
          </td>

          <td>{bank}</td>

          <td>
            <div className="date-time">{account}</div>
          </td>

          <td>
            <div className="transaction-account">{amount}</div>
          </td>
          <td>
            <div className="transaction-purpose">{purpose}</div>
          </td>
          <td>
            <div className="date-time">{date}</div>
            <div className="activity-time">{time}</div>
          </td>

          <td>
            <div id={status === "Success" ? "greenBgC" : "redBgC"}>
              {status}
            </div>
          </td>

          <td className="action_data">
            <div className="img-action">
              <a href="">
                <img src={SVGs.TransactionResidentsSvg} />
              </a>
              <div className="action-preview">Preview</div>
            </div>
          </td>
        </tr>
      );
    });

  // display items from 1 - 6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <>
      <section className="change_ratio">
        <GNavbar transaction="active_tab" />
        <Mobile />
        <AllUtilities open={edit} onClose={() => setEditCollection(false)} />

        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <h6></h6>
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
                      placeholder="Search Purpose"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    className="important-btn"
                    onClick={() => setEditCollection(true)}
                  >
                    Utility
                  </button>
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
                            <th>Trasaction ID</th>
                            <th>Bank</th>
                            <th>Account</th>
                            <th>Amount</th>
                            <th>Purpose</th>
                            <th>Date and Time</th>
                            <th>Status</th>
                            <th className="ddk">Action</th>
                          </tr>
                        </thead>
                        <tbody> {displayEvents} </tbody>
                      </table>
                    </div>
                  </div>
                </TableFrame>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminTransaction;

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
        margin-left: 10px;
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
const TableFrame = styled.div`
  .activity_heading {
    font-family: "Satoshi";

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;
    color: #545454;
  }
  .ddk {
    min-width: 143px;
  }
  .activity_table {
    font-family: "Satoshi";

    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #545454;
  }
  .user-name {
    margin-left: 10px;
    font-weight: 700;
  }
  .team-members {
    margin-top: 40px;
    width: 65%;
  }

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
  .transaction-account {
    font-weight: 700;
  }

  .transaction-purpose {
    font-weight: 700;
  }

  .action_data {
    margin: 20px 0;
    width: 32px;
    height: 10px;
    font-size: 16px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  .img-action {
    margin: 20px 0;
    display: flex;
    align-itens: center;
    justify-content: space-between;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    padding: 8px;
    color: #2d4bf3;
    cursor: pointer;
  }

  .img-action a {
    margin-right: 8px;
    cursor: pointer;
  }
  .activity-time {
    font-weight: 700;
  }
`;

// DATA
const API = [
  {
    id: 1,
    bank: "First Bank",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "9:09 AM",
    date: "4/4/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 2,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "10:59 AM",
    date: "7/7/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 3,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "4:09 AM",
    date: "5/24/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 4,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "9:44 PM",
    date: "7/16/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 5,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:55 AM",
    date: "12/7/2021",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 6,
    bank: "GTB",
    account: 1234567890,
    amount: "N20,0000.00",
    purpose: "Service Change",
    time: "10:57 PM",
    date: "8/31/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 7,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "4:06 PM",
    date: "12/27/2021",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 8,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:32 PM",
    date: "5/4/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 9,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "12:32 PM",
    date: "12/18/2021",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 10,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:08 PM",
    date: "8/9/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 11,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "3:58 AM",
    date: "9/7/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 12,
    bank: "First Bank",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "4:11 AM",
    date: "4/29/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 13,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "4:04 AM",
    date: "2/15/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 14,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "7:21 PM",
    date: "6/13/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 15,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "10:04 AM",
    date: "12/17/2021",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 16,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:09 AM",
    date: "2/7/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 17,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "8:23 PM",
    date: "3/16/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 18,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "1:39 PM",
    date: "1/20/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 19,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:08 AM",
    date: "8/1/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 20,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "2:23 PM",
    date: "4/28/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 21,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "1:39 AM",
    date: "12/14/2021",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 22,
    bank: "First Bank",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "1:11 PM",
    date: "3/10/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 23,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "12:10 PM",
    date: "5/18/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 24,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "5:05 PM",
    date: "9/29/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 25,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "3:35 AM",
    date: "9/26/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 26,
    bank: "Access",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "8:01 AM",
    date: "12/9/2021",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 27,
    bank: "Zenith",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "3:53 PM",
    date: "10/21/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 28,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "10:37 PM",
    date: "12/31/2021",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Pending",
  },
  {
    id: 29,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "5:11 AM",
    date: "5/13/2022",
    status: "Success",
    transaction_id: "#1234567890",
    category: "Resolved",
  },
  {
    id: 30,
    bank: "GTB",
    account: 1234567890,
    amount: "N200,000.00",
    purpose: "Service Change",
    time: "6:00 AM",
    date: "9/7/2022",
    status: "Pending",
    transaction_id: "#1234567890",
    category: "Pending",
  },
];
