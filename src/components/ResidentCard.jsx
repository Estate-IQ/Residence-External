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
      <PerOverview img={SVGs.Resident} type="Members" count="62" />
      <PerOverview
        img={SVGs.overview_svg}
        type="Domestic Staff"
        count="14"
        link="/superadmin/estate"
      />
      <PerOverview
        img={SVGs.complains}
        type="Complaints"
        count="2"
        link="/superadmin/complaint"
      />
      <PerOverview img={SVGs.vendor} type="Temp Access" count="9" />
    </div>
  );
};

export default Overview_card;
