// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { SVGs } from "../../../assets/svg/SVGs";
// import Search from "../../../components/SearchMultiple";

// const MasterForm = (props) => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [title, setTitle] = useState("");
//     const [fileName, setFileName] = useState("");
//     const [description, setDescription] = useState("");
//     const [ad_email, setAdEmail] = useState("");
//     const [ad_web, setAdWeb] = useState("");
//     const [mobile, setMobile] = useState("");

//     const handleChange = (event) => {
//       const { name, value } = event.target;
//       if (name === "title") setTitle(value);
//       if (name === "fileName") setFileName(value);
//       if (name === "description") setDescription(value);
//       if (name === "ad_email") setAdEmail(value);
//       if (name === "ad_web") setAdWeb(value);
//       if (name === "mobile") setMobile(value);
//     };

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       Swal.fire({
//         title: `<div>You just placed an advert that you called <h4> ${title}</h4> </div>`,
//         icon: "success",
//         showConfirmButton: true,
//         showCloseButton: true,
//       });
//     };

//     const _next = () => {
//       setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1);
//     };

// const _prev = () => {
//     setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
//     };
