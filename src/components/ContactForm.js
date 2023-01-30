import "../styles/Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_203ever",
        "template_4p2plqa",
        form.current,
        "Oo_IfcnigycVis6h3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    window.alert("Message succesfully sent!");
  };

  return (
    <div className="contact_form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name_input">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="user_name" required></input>
        </div>
        <div className="mail_input">
          <label htmlFor="mail">E-mail</label>
          <input id="mail" type="email" name="user_email" required></input>
        </div>
        <div className="message_input">
          <textarea
            placeholder=" Send me a message..."
            rows="10"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
