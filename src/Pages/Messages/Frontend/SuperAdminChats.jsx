import React from "react";
import styled from "styled-components";
import GNavbar from "../../../components/Navbar/S-Navigator";
import SearchUser from "./SearchUser";
import AdminMobile from "../../../components/Navbar/Navbar";
import TopNav from "../../../components/Navbar/SuperAdminNav";
import Search from "./SearchUser";
import { useState } from "react";
import AddNewChat from "./AddNewChat";

const FrontChat = () => {
  const [openModal, setOpenModal] = useState(false); // state for Modal
  const EachUser = () => {
    return (
      <div className="eachUser">
        <div className="imgCase">
          <img
            src="https://media.istockphoto.com/id/1363871275/photo/studio-portrait-of-a-confident-african-american-woman.jpg?b=1&s=170667a&w=0&k=20&c=dgPchvJO2oQm25Fc0prUkU9aovtux7iKVtW_cC_55-s="
            alt=""
          />
        </div>

        <div className="nameText">
          <h3>Angelina Jolie</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus modi dolor similique ipsa. Provident accusantium ad
            esse itaque dignissimos, exercitationem rem eius quo quia voluptatum
            et. Voluptatibus quo deserunt tenetur.
          </p>
          <span>just now</span>
        </div>
      </div>
    );
  };

  return (
    <BuildChat>
      <section className="change_ratio">
        <GNavbar message="active_tab" />
        <AdminMobile />
        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="topLevel">
              <div className="unreads">
                <h3> Inbox</h3>
                <p>12 unread Messages</p>
              </div>

              <button
                className="important-btn"
                onClick={() => setOpenModal(true)}
              >
                New Messages
              </button>
              <AddNewChat
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>
            <div className="construction">
              <section className="handleUserList">
                <section className="usersList">
                  <EachUser />
                  <EachUser />
                  <EachUser />
                  <EachUser />
                </section>
              </section>

              {/* CHATTING PITCH */}
              <section className="chatField">
                <div className="selected_user">
                  <div>
                    <div className="imgCase">
                      <img
                        src="https://media.istockphoto.com/id/1363871275/photo/studio-portrait-of-a-confident-african-american-woman.jpg?b=1&s=170667a&w=0&k=20&c=dgPchvJO2oQm25Fc0prUkU9aovtux7iKVtW_cC_55-s="
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="textCase">
                    <h3>
                      Angelina Jolie <span>Super Admin</span>
                    </h3>
                    <p>Golden Gate Estate</p>
                  </div>
                </div>
                <section className="bothMsg">
                  {/* Messages Received */}
                  <div className="messages">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores blanditiis id amet rem eveniet iusto dolorem
                      magni laboriosam suscipit consequatur repudiandae et quas
                      quis magnam aperiam nulla, error fugit tempore.
                    </p>
                  </div>
                  {/* Messages Sent */}
                  <div className="received">
                    <div className="messages">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam libero suscipit, quod fuga rerum molestias
                        rem facilis vitae ea id molestiae repellat consequatur
                        harum magni, velit non? Aperiam, expedita excepturi.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="addMessage">
                  <div className="typeFace">
                    <span
                      contentEditable="true"
                      role="textbox"
                      title="Type a message"
                      data-placeholder="Type a message"
                    ></span>

                    <button className="important-btn">Send</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </BuildChat>
  );
};

export default FrontChat;

let BuildChat = styled.section`
  [contenteditable] {
    padding: 12px;
    background: #eee;
  }

  [data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: #888;
    font-style: italic;
  }
  .construction {
    // display: flex;
    margin-top: 30px;
    margin-bottom: 50px;
    @media (min-width: 1020px) {
      //   max-height: 90vh;
      display: flex;
      justify-content: space-between;
      .handleUserList {
        width: 28%;
      }
      .chatField {
        width: 70%;
      }
    }
    img {
      object-fit: cover;
    }
  }
  .bothMsg {
    padding: 10px;
    .messages {
      max-width: 300px;
      p {
        margin: 0;
        background: #f3f3f3;
        padding: 10px;
        min-width: 5px;

        margin: 10px;
        margin-bottom: 20px;
        border-radius: 0px 20px 20px 20px;
      }
    }
    .received {
      text-align: right !important;
      position: relative;
      margin-bottom: 20px;
      .messages {
        position: absolute;
        right: 0;
        top: 0;
        p {
          color: white;

          background: #2d4bf3;
          border-radius: 20px 20px 0px 20px;
        }
      }
    }
  }
  .chatField {
    border: 1px solid #c0c0c0;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    position: relative;
    .addMessage {
      //   height: 50px;
      position: relative;
      bottom: 0;
      width: 100%;
      .typeFace {
        display: flex;
        position: relative;
        // background: pink;
      }
      span {
        // max-width: 100%;
        border: 1px solid #f3f3f3;
        width: 80%;
        outline: 0;
        margin: 10px;
        background: #f6f6f6;
        border: 1px solid #e1e1e1;
        border-radius: 5px;
        min-height: 45px;
        height: 100%;
        padding: 5px 15px;
      }
      button {
        width: 20%;
        padding: 0;
        margin: 10px;
        height: 45px;
        // position: absolute;
        // right: 10px;
        // bottom: 10px;
      }
    }
    .bothMsg {
      height: 55vh;
      //   background: #f1f1f1;
      overflow: auto;
      @media (min-width: 1380px) {
        height: 65vh;
      }
    }
    .selected_user {
      background: #f2f6ff;
      padding: 15px 20px;
      display: flex;
      //   justify-content: space-between;
      .imgCase {
        img {
          margin-right: 15px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
    .textCase {
      h3 {
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: -0.06em;
        color: #111111;
        margin-bottom: 0;
        span {
          font-weight: 700;
          font-size: 12px;
          margin-left: 15px;
          margin-top: 10px;
          line-height: 13px;
          display: flex;
          align-items: center;
          letter-spacing: -0.06em;
          color: #2d4bf3;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        letter-spacing: -0.06em;

        color: #686868;
      }
    }
  }
  .usersList {
    padding: 20px;
    background: #fff;
    border: 1px solid #c0c0c0;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    overflow: -moz-scrollbars-vertical;
    overflow: auto;
    height: 80vh;
  }
  .topLevel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: 450px) {
      button {
        // margin-top: 0;
      }
    }
    @media (max-width: 450px) {
      button {
        width: 100%;
      }
    }
  }
  .unreads {
    h3 {
      margin-bottom: 5px;
      font-weight: bold;
    }
    p {
      color: #5376e5;
    }
  }
  .usersList {
    // @media (min-width: 1200px) {
    //   width: 30%;
    // }
    .eachUser {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      cursor: pointer;
      border-bottom: 1px solid #e1e1e1;
      transition: 0.4s;
      transform: scale(1);
      &:hover {
        transform: scale(0.98);
        background: #f2f6ff;
      }
      .imgCase {
        width: 20%;
      }
      .nameText {
        width: 75%;
      }
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        // margin-right: 20px;
      }
      h3,
      p {
        margin-bottom: 10px;
      }
      p {
        height: 50px;
        overflow: hidden;
      }
      h3 {
        font-weight: 700;
        font-size: 22px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.06em;

        color: #171717;
      }
      span {
        color: #5376e5;
      }
    }
  }
`;
