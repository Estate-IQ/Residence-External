import React, { useState } from "react";
import { Link } from "react-router-dom";

// import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import AccessMode from "./AccessMode";

const LatestAccess = () => {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");

  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");

  const eventsPerPage = 5;
  const pagesVisited = pageNumber * eventsPerPage;
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
      const { id, first_name, last_name, mobile, action } = event;

      return (
        <div className="listOfAccess">
          <div className="name_mobile" key={id}>
            <h4>
              {first_name} {last_name}
            </h4>
            <p>{mobile}</p>
          </div>
          <AccessMode selected={action} />
          {/* <AccessMode selected={action} setSelected={setSelected} /> */}
        </div>
      );
    });

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <Container className="latestAccess">
      <div className="header">
        <h5>Quick Access List</h5>
        {/* <Link to="/">See More </Link> */}
      </div>
      <div className="each_tempo">{displayEvents}</div>
    </Container>
  );
};

export default LatestAccess;

let Container = styled.section`
  background: #ffffff;
  padding: 15px;
  border: 2px solid #e1e1e1;
  border-radius: 5px;
  margin-bottom: 50px;
  .listOfAccess {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    padding: 15px 0 !important;
    .select_me {
      width: 150px;
      margin-top: 15px;
      .select-btn {
        height: 37px;
        padding: 0 15px !important;
        padding-right: 0 !important;
        span {
          left: 15px;
        }
      }
    }
  }
  .each_tempo {
    .name_mobile {
      h4 {
        font-weight: 600;
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    h5 {
      font-size: 20px;
      font-weight: 500;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      padding: 0;
      color: #2d4bf3;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

let API = [
  {
    id: 1,
    first_name: "Bertrando",
    last_name: "Dendon",
    mobile: "197-841-2214",
    action: "Revoke Access",
  },
  {
    id: 2,
    first_name: "Lorelle",
    last_name: "Werndley",
    mobile: "164-954-8742",
    action: "Revoke Access",
  },
  {
    id: 3,
    first_name: "Hercule",
    last_name: "Klimmek",
    mobile: "150-737-3345",
    action: "Revoke Access",
  },
  {
    id: 4,
    first_name: "Llywellyn",
    last_name: "Signorelli",
    mobile: "646-547-6640",
    action: "Revoke Access",
  },
  {
    id: 5,
    first_name: "Ardith",
    last_name: "Bowart",
    mobile: "791-343-5103",
    action: "Access Granted",
  },
  {
    id: 6,
    first_name: "Karol",
    last_name: "Whittenbury",
    mobile: "730-170-0766",
    action: "Access Granted",
  },
  {
    id: 7,
    first_name: "Annice",
    last_name: "Mompesson",
    mobile: "968-760-4317",
    action: "Access Granted",
  },
  {
    id: 8,
    first_name: "Jacques",
    last_name: "Guillet",
    mobile: "713-105-5452",
    action: "Access Granted",
  },
  {
    id: 9,
    first_name: "Ariella",
    last_name: "Graffham",
    mobile: "458-650-9338",
    action: "Access Granted",
  },
  {
    id: 10,
    first_name: "Erika",
    last_name: "Ruslinge",
    mobile: "676-160-8563",
    action: "Revoke Access",
  },
];
