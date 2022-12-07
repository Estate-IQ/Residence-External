import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import FilterBy from "./FilterBy";

const TableFrame = styled.div`
  @media (min-width: 1200px) {
    table {
      min-width: 1300px;
    }
    .scrollable_table {
      overflow: auto;
    }
  }

  .emergency_table {
    margin: 20px;
  }
  .url_data {
    min-width: 150px;
    a {
      color: #2d4bf3;
      font-weight: 300;
      margin-right: 15px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .date-time {
    width: 81px;
    height: 36px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #545454;
  }

  .emergency-action {
    display: flex;
    min-width: 100px !important;
    align-items: center;
    justify-content: space-between;
  }

  .del {
    font-weight: 400;
    font-size: 16px;
    color: #ff6969;
    cursor: pointer;
  }
  .edit {
    font-weight: 400;
    font-size: 16px;
    color: #2d4bf3;
    cursor: pointer;
  }

  table td {
    min-width: 60px;
  }

  .emergency-time {
    font-weight: 700;
  }
`;

function UtilityTableFunction() {
  const [selected, setSelected] = useState("Filter");
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
  const eventsPerPage = 5;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
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
      const { id, row, Frequency, utility, due_date, acount, amount } = event;

      return (
        <tr key={id}>
          <td>
            <div>{row}.</div>
          </td>

          <td className="emergency-row">{utility}</td>
          <td>{Frequency}</td>
          <td>{due_date}</td>
          <td>{acount}</td>
          <td>{acount}</td>
          <td>{amount}</td>

          <td className="url_data">
            <a href="">Buy Here</a>
            <a href="">3rd Party Purchase</a>
          </td>
        </tr>
      );
    });

  return (
    <>
      <section className="change_ratio">
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
                <button onClick={() => filterEvents("Paid")}>Paid</button>
              </span>
              <span
                className={`tab ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}
              >
                <button onClick={() => filterEvents("Due")}>Due</button>
              </span>
            </div>
            <div className="event-input">
              <FilterBy selected={selected} setSelected={setSelected} />
            </div>
          </HandleSearchAndTab>
        </div>

        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <TableFrame>
              <div className="scrollable_table">
                <div className="emergency_table">
                  <table>
                    <thead>
                      <tr className="emergency-table-row">
                        <th></th>
                        <th>Utility Name</th>
                        <th>Frequency</th>
                        <th>Paid Date</th>
                        <th>Account Number</th>
                        <th>Bank Name</th>
                        <th>Amount</th>
                        <th>Action</th>
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
          <div className={`panel ${checkActive(2, "active")}`}>
            <TableFrame>
              <div className="scrollable_table">
                <div className="emergency_table">
                  <table>
                    <thead>
                      <tr className="emergency-table-row">
                        <th></th>
                        <th>Utility Name</th>
                        <th>Frequency</th>
                        <th>Paid Date</th>
                        <th>Account Number</th>
                        <th>Bank Name</th>
                        <th>Amount</th>
                        <th>Action</th>
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
          <div className={`panel ${checkActive(3, "active")}`}>
            <TableFrame>
              <div className="scrollable_table">
                <div className="emergency_table">
                  <table>
                    <thead>
                      <tr className="emergency-table-row">
                        <th></th>
                        <th>Utility Name</th>
                        <th>Frequency</th>
                        <th>Paid Date</th>
                        <th>Account Number</th>
                        <th>Bank Name</th>
                        <th>Amount</th>
                        <th>Action</th>
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
      </section>
    </>
  );
}

export default UtilityTableFunction;

const HandleSearchAndTab = styled.section`
  margin: 0 30px;
  margin-top: 20px;
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
let API = [
  {
    id: 1,
    row: 1,
    utility: "",
    due_date: "13-Aug-2022",
    acount: "2832524702",
    amount: "$496322.53",
    bank: "GTB",
    Frequency: "Monthly",
    category: "Due",
  },
  {
    id: 2,
    row: 2,
    utility: "Waste",
    due_date: "12-Dec-2021",
    acount: "8261274055",
    amount: "$215367.82",
    bank: "EcoBank",
    Frequency: "Daily",
    category: "Due",
  },
  {
    id: 3,
    row: 3,
    utility: "Gas Fill",
    due_date: "09-Mar-2022",
    acount: "4701629642",
    amount: "$67243.63",
    bank: "EcoBank",
    Frequency: "Monthly",
    category: "Due",
  },
  {
    id: 4,
    row: 4,
    utility: "Gas Fill",
    due_date: "24-Sep-2022",
    acount: "6392134816",
    amount: "$160291.39",
    bank: "Sterling",
    Frequency: "Monthly",
    category: "Paid",
  },
  {
    id: 5,
    row: 5,
    utility: "Security",
    due_date: "09-Sep-2022",
    acount: "0850509653",
    amount: "$305519.28",
    bank: "Access",
    Frequency: "Daily",
    category: "Paid",
  },
  {
    id: 6,
    row: 6,
    utility: "Security",
    due_date: "19-Nov-2022",
    acount: "8956710899",
    amount: "$306515.54",
    bank: "Sterling",
    Frequency: "Often",
    category: "Paid",
  },
  {
    id: 7,
    row: 7,
    utility: "",
    due_date: "05-Dec-2021",
    acount: "8301241470",
    amount: "$499685.38",
    bank: "Access",
    Frequency: "Yearly",
    category: "Due",
  },
  {
    id: 8,
    row: 8,
    utility: "Collection Name",
    due_date: "04-Aug-2022",
    acount: "4804428429",
    amount: "$267417.36",
    bank: "Sterling",
    Frequency: "Daily",
    category: "Paid",
  },
  {
    id: 9,
    row: 9,
    utility: "Waste",
    due_date: "01-Dec-2021",
    acount: "4774715298",
    amount: "$141247.89",
    bank: "Union Bank",
    Frequency: "Monthly",
    category: "Due",
  },
  {
    id: 10,
    row: 10,
    utility: "Collection Name",
    due_date: "01-Sep-2022",
    acount: "4692964006",
    amount: "$222957.99",
    bank: "First Bank",
    Frequency: "Seldom",
    category: "Due",
  },
  {
    id: 11,
    row: 11,
    utility: "Collection Name",
    due_date: "08-Aug-2022",
    acount: "2063889899",
    amount: "$202073.03",
    bank: "First Bank",
    Frequency: "Once",
    category: "Paid",
  },
  {
    id: 12,
    row: 12,
    utility: "Waste",
    due_date: "01-Oct-2022",
    acount: "6486934212",
    amount: "$355815.04",
    bank: "GTB",
    Frequency: "Often",
    category: "Due",
  },
  {
    id: 13,
    row: 13,
    utility: "Gas Fill",
    due_date: "24-May-2022",
    acount: "2425852387",
    amount: "$320700.51",
    bank: "EcoBank",
    Frequency: "Yearly",
    category: "Paid",
  },
  {
    id: 14,
    row: 14,
    utility: "Collection Name",
    due_date: "07-Mar-2022",
    acount: "5628070505",
    amount: "$397163.77",
    bank: "Access",
    Frequency: "Once",
    category: "Paid",
  },
  {
    id: 15,
    row: 15,
    utility: "Collection Name",
    due_date: "29-Jan-2022",
    acount: "6246729932",
    amount: "$88922.44",
    bank: "GTB",
    Frequency: "Monthly",
    category: "Due",
  },
  {
    id: 16,
    row: 16,
    utility: "",
    due_date: "19-Mar-2022",
    acount: "7855227504",
    amount: "$292024.79",
    bank: "Union Bank",
    Frequency: "Often",
    category: "Paid",
  },
  {
    id: 17,
    row: 17,
    utility: "Waste",
    due_date: "30-Aug-2022",
    acount: "8543203570",
    amount: "$498054.82",
    bank: "Access",
    Frequency: "Monthly",
    category: "Due",
  },
  {
    id: 18,
    row: 18,
    utility: "Gas Fill",
    due_date: "11-May-2022",
    acount: "3728234273",
    amount: "$125183.47",
    bank: "First Bank",
    Frequency: "Never",
    category: "Due",
  },
  {
    id: 19,
    row: 19,
    utility: "",
    due_date: "12-Oct-2022",
    acount: "0234312793",
    amount: "$284749.77",
    bank: "GTB",
    Frequency: "Once",
    category: "Paid",
  },
  {
    id: 20,
    row: 20,
    utility: "Security",
    due_date: "07-Sep-2022",
    acount: "7365398957",
    amount: "$471298.14",
    bank: "Sterling",
    Frequency: "Never",
    category: "Due",
  },
  {
    id: 21,
    row: 21,
    utility: "Collection Name",
    due_date: "07-Jun-2022",
    acount: "8424965825",
    amount: "$489946.10",
    bank: "Access",
    Frequency: "Once",
    category: "Paid",
  },
  {
    id: 22,
    row: 22,
    utility: "",
    due_date: "01-Apr-2022",
    acount: "4560870152",
    amount: "$164241.22",
    bank: "EcoBank",
    Frequency: "Yearly",
    category: "Paid",
  },
  {
    id: 23,
    row: 23,
    utility: "",
    due_date: "19-Jul-2022",
    acount: "8940958403",
    amount: "$88444.06",
    bank: "Union Bank",
    Frequency: "Once",
    category: "Paid",
  },
  {
    id: 24,
    row: 24,
    utility: "Collection Name",
    due_date: "17-Jun-2022",
    acount: "4312718377",
    amount: "$339651.17",
    bank: "Sterling",
    Frequency: "Daily",
    category: "Due",
  },
  {
    id: 25,
    row: 25,
    utility: "Security",
    due_date: "09-Dec-2021",
    acount: "5815012785",
    amount: "$398169.68",
    bank: "First Bank",
    Frequency: "Yearly",
    category: "Due",
  },
  {
    id: 26,
    row: 26,
    utility: "Collection Name",
    due_date: "11-Apr-2022",
    acount: "0857922424",
    amount: "$359941.30",
    bank: "GTB",
    Frequency: "Never",
    category: "Paid",
  },
  {
    id: 27,
    row: 27,
    utility: "Waste",
    due_date: "20-Oct-2022",
    acount: "0815674414",
    amount: "$66615.34",
    bank: "Sterling",
    Frequency: "Often",
    category: "Paid",
  },
  {
    id: 28,
    row: 28,
    utility: "Security",
    due_date: "16-Mar-2022",
    acount: "5529461557",
    amount: "$286690.05",
    bank: "GTB",
    Frequency: "Weekly",
    category: "Due",
  },
  {
    id: 29,
    row: 29,
    utility: "Gas Fill",
    due_date: "29-Jan-2022",
    acount: "3104577072",
    amount: "$436303.24",
    bank: "GTB",
    Frequency: "Daily",
    category: "Paid",
  },
  {
    id: 30,
    row: 30,
    utility: "Gas Fill",
    due_date: "16-Mar-2022",
    acount: "7399238790",
    amount: "$350250.10",
    bank: "EcoBank",
    Frequency: "Seldom",
    category: "Due",
  },
];
