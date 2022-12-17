import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";

const SubscribeWaitList = () => {
  return (
    <section className="webContainer" id="Subscribe">
      <WaitList
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="gg_submit">
          <h3>
            Join the waitlist to <span>enjoy</span> our mobile app{" "}
          </h3>

          <div className="newpage">
            <input type="text" placeholder="Email Address" />
            <button type="submit" className="important-btn">
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="appS">
          <img src={Images.App} alt="" />
        </div>
      </WaitList>
    </section>
  );
};

export default SubscribeWaitList;

let WaitList = styled.form`
  margin-top: 80px;
  background: #1737e6;
  border-radius: 20px;
  .gg_submit {
    padding: 50px;
    @media (max-width: 600px) {
      padding: 30px;
    }
  }
  button {
    width: 100%;
  }
  @media (max-width: 800px) {
    .appS {
      display: none;
    }
  }
  @media (min-width: 800px) {
    display: flex;

    .appS {
      width: 48%;
      height: 400px;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
    .gg_submit {
      width: 50%;
      h3 {
        max-width: 360px;
      }
    }
  }
  @media (min-width: 600px) {
    .newpage {
      display: flex;
      input {
        width: 60%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: 40%;
        margin: 0;
      }
    }
  }
  h3 {
    font-size: 38px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    span {
      color: rgba(234, 203, 48, 1);
      font-size: 38px;
      font-weight: 700;
      line-height: 49px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
