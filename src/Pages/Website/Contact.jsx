import React from "react";
import styled from "styled-components";
import ContactForm from "../../components/Website/ContactForm";

import Footer from "../../components/Website/Footer";
import SubscribeWaitList from "../../components/Website/SubscribeWaitList";
import TopNav from "../../components/Website/TopNav";

const Contact = () => {
  return (
    <ContactPage>
      <TopNav />
      <ContactForm />
      <SubscribeWaitList />
      <Footer />
    </ContactPage>
  );
};

export default Contact;

let ContactPage = styled.section`
  button {
    transform: scale(1);
    transition: 0.4s;
    &:hover {
      transform: scale(0.96) !important;
    }
  }
`;
