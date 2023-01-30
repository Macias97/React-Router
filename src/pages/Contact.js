import React from "react";
import "../styles/Contact.scss";
import ContactForm from "../components/ContactForm";
import Media from "../components/Media";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <ContactForm />
        <Media />
      </div>
    </>
  );
};

export default Contact;
