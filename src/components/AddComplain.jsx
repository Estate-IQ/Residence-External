import React, { useState } from "react";
import styled from "styled-components";
import ComplainReason from "./ComplainReason";

class AddComplain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      C_password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      residentType: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }
  handleSearch = (event) => {
    console.log(event);
    this.setState({
      state: event,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, estateName, firstName, password, state, residentType } =
      this.state;
    // alert(`Your registration detail: \n
    // Email: ${email} \n
    // Username: ${firstName} \n
    // Username:  ${state} \n
    // Password: ${password}\n
    // `);

    console.log(residentType);
    // Swal.fire({
    //   title: `A mail has been sent to <h4>${email}</h4> for verification `,
    //   icon: "success",
    //   showConfirmButton: true,
    //   showCloseButton: true,
    // });

    // useNavigate("/profile", { replace: true });

    // .then(function () {
    //   window.location = "/Test/profile";
    // });
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.handleSubmit}
          // method="post"
          // action="/profile"
          className="new_estates_form fade-in-bck"
        >
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            estateEmail={this.state.estateEmail}
            residentType={this.state.residentType}
            estate_ads={this.state.estate_ads}
            estateName={this.state.estateName}
          />
        </form>
      </React.Fragment>
    );
  }
}

function Step2(props) {
  const [selected, setSelected] = useState("Complain Reason");
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt single_form">
          <h1>Your Complain</h1>
        </div>

        <input
          type="text"
          id="title"
          value={props.title}
          onChange={props.handleChange}
          name="title"
          placeholder="Complaint Title"
        />
        <RevokeAccess>
          <h2>Receiver</h2>
          <div className="each_access">
            <div class="cntr">
              <label for="cbx" class="label-cbx">
                <input
                  id="cbx"
                  name="cbx"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                  checked
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Estate Admin</span>
            </div>
          </div>
          <div className="each_access">
            <div class="cntr">
              <label for="util" class="label-cbx">
                <input
                  id="util"
                  name="util"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Estate Exco</span>
            </div>
          </div>
          <div className="each_access">
            <div class="cntr">
              <label for="emergency" class="label-cbx">
                <input
                  id="emergency"
                  name="emergency"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Caretaker</span>
            </div>
          </div>
        </RevokeAccess>
        <ComplainReason selected={selected} setSelected={setSelected} />
        <textarea name="" id="" placeholder="Inpute complaint here"></textarea>
      </div>
      <button className="btn btn-success btn-block">Log Complain</button>
    </div>
  );
}

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <AddComplain />
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default Modal;

const SearchField = (props) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    props.handleSearch(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="">
      <div className="custom_search">
        <div className="search-inner">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search Utility"
          />
          {/* <button onClick={() => onSearch(value)}> Search </button> */}
        </div>
        <div className="search_result">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item)}
                className="drop_items"
                key={item}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

let RevokeAccess = styled.div`
  margin-bottom: 25px;
  margin-bottom: 25px;
  h2 {
    font-size: 20px;
    color: #2d4bf3;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 10px;
  }
  .cntr {
    margin-top: 10px;
  }
`;
// let data = useFetch("https://jsonplaceholder.typicode.com/posts");

// fetch(data)
//   .then((response) => {
//     return response.json();
//   })
//   .then((d) => {
//     this.setState({ clouds: d });
//     console.log("state", this.state.clouds);
//   })
//   .catch((error) => console.log(error));
let data = ["Gym", "Power", "Security"];
