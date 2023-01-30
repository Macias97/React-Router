import React from "react";
import "../styles/Contact.scss";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";

const MediaForm = () => {
  return (
    <div className="media">
      <div className="fb space">
        <a href="https://www.facebook.com/maciej.swiatczynski">
          <BsFacebook />
        </a>
        <span>\ Maciej.Swiatczynski</span>
      </div>
      <div className="phone space">
        <a href="#">
          <BsTelephoneFill />
        </a>
        <span>\ 513 638 145</span>
      </div>
    </div>
  );
};

export default MediaForm;
