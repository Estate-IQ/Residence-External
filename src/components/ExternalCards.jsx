import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SVGs } from "../assets/svg/SVGs";

let Card = styled.div`
  .mark {
    img {
      margin-bottom: 20px;
    }
    .num {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const Overview_card = () => {
  const PerOverview = (props) => {
    return (
      <Card className="grid-row per_overview">
        <Link to={props.link} className="mark">
          <img src={props.img} alt="" />
          <div className="num">
            <p>{props.type}</p>
            <h3>{props.count}</h3>
          </div>
        </Link>
      </Card>
    );
  };
  return (
    <div className="fourcard_grid all_overview">
      <PerOverview img={SVGs.Resident} type="Granted" count="4" />
      <PerOverview img={SVGs.Resident} type="Declined" count="26" />
      <PerOverview img={SVGs.Resident} type="On-Hold" count="90" />
      <PerOverview img={SVGs.Resident} type="Expected" count="9" />
    </div>
  );
};

export default Overview_card;
