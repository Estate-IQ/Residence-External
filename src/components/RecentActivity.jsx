import React, { useState } from "react";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import FilterBy from "./FilterBy";

const RecentActivity = () => {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("Filter");
  const eventsPerPage = 5;
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
      const { id, first_name, last_name, block, type, status } = event;

      return (
        <tr className="transaction-row" key={id}>
          <td>
            {first_name} {last_name}
          </td>
          <td>{block}</td>

          <td>{type}</td>
          <td className="defaultWidth">
            10B, Wiseman Crescent, Golden Gate Estate.
          </td>
          <td className="transaction-date">Accept</td>
          <td>
            <p className={status === "Accept" ? "greenBorder" : "redBorder"}>
              {status}
            </p>
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
    <Container>
      <section className="dinko">
        <HandleSearchAndTab>
          <h4>Access List</h4>
          <div className="event-input">
            <div class="search_set">
              <img src="https://www.svgrepo.com/show/13682/search.svg" alt="" />
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
          </div>
        </HandleSearchAndTab>
      </section>
      <TableFrame className="scrollable_table">
        <div className="scroll">
          <table>
            <thead>
              <tr className="transaction-heading">
                <th>Name</th>
                <th>Zone/Block</th>
                <th>Access Type</th>
                <th>Destination</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{displayEvents}</tbody>
          </table>
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
      </TableFrame>
    </Container>
  );
};

export default RecentActivity;
const Container = styled.div`
  .dinko {
    margin-top: 45px;
  }
`;
const TableFrame = styled.div`
  .transaction-heading {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;

    /* Grey/1 */

    color: #111111;
  }
  .greenBorder {
    color: #2d4bf3;
    padding: 5px 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    border: 2px solid #2d4bf3;
  }
  .redBorder {
    color: #ff0000;
    padding: 5px 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    border: 2px solid #ff0000;
  }
  .data-zone {
    display: flex;
    align-items: center;
  }
  .zone-name {
    margin-left: 10px;
  }
  .transaction-container {
    margin-top: 40px;
  }

  .transaction-date {
    font-weight: bold;
  }

  .transaction-row {
    width: 100px;
    height: 18px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #545454;
  }
  .cntr {
    margin-left: 15px;
  }
`;

const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  button {
    padding: 10px 12px !important;
    height: auto !important;
    font-weight: 400;
    border: 1px solid #2d4bf3 !important;
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

const API = [
  {
    id: 1,
    first_name: "Emmy",
    last_name: "Olyet",
    block: "02 Carpenter Avenue",
    type: "Security",
    status: "Accept",
  },
  {
    id: 2,
    first_name: "Atalanta",
    last_name: "Koubu",
    block: "1 Fisk Point",
    type: "Vendors",
    status: "Decline",
  },
  {
    id: 3,
    first_name: "Scarlet",
    last_name: "Blampey",
    block: "01387 Hoepker Park",
    type: "Residents",
    status: "Decline",
  },
  {
    id: 4,
    first_name: "Ardelle",
    last_name: "Larkworthy",
    block: "319 Oneill Plaza",
    type: "Residents",
    status: "Decline",
  },
  {
    id: 5,
    first_name: "Helge",
    last_name: "Lush",
    block: "9 Algoma Terrace",
    type: "Residents",
    status: "Accept",
  },
  {
    id: 6,
    first_name: "Forster",
    last_name: "Du Fray",
    block: "9 Londonderry Junction",
    type: "Security",
    status: "Decline",
  },
  {
    id: 7,
    first_name: "Mickie",
    last_name: "Gadeaux",
    block: "4159 Chinook Center",
    type: "Residents",
    status: "Decline",
  },
  {
    id: 8,
    first_name: "Alphonse",
    last_name: "Albinson",
    block: "4938 Grim Point",
    type: "Vendors",
    status: "Decline",
  },
  {
    id: 9,
    first_name: "Ann",
    last_name: "Offner",
    block: "120 Homewood Parkway",
    type: "Security",
    status: "Decline",
  },
  {
    id: 10,
    first_name: "Jeramie",
    last_name: "Stubbley",
    block: "105 Susan Alley",
    type: "Security",
    status: "Accept",
  },
  {
    id: 11,
    first_name: "Kerrin",
    last_name: "Everleigh",
    block: "396 Hollow Ridge Park",
    type: "Security",
    status: "Decline",
  },
  {
    id: 12,
    first_name: "Neda",
    last_name: "Rixon",
    block: "5320 Logan Center",
    type: "Security",
    status: "Decline",
  },
  {
    id: 13,
    first_name: "Inge",
    last_name: "Lockyer",
    block: "429 Forster Alley",
    type: "Security",
    status: "Accept",
  },
  {
    id: 14,
    first_name: "Giuseppe",
    last_name: "Renshall",
    block: "4232 International Street",
    type: "Security",
    status: "Accept",
  },
  {
    id: 15,
    first_name: "Elvis",
    last_name: "Gerald",
    block: "59026 Straubel Pass",
    type: "Vendors",
    status: "Decline",
  },
];
