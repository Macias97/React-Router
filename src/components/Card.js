import React from "react";
import "../styles/Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card_container">
        <Link to={`/${props.path}`} className="column col-xs-6" id="caption">
          <span className="text">
            <h1>{props.txt}</h1>
          </span>
          <img src={props.imgSrc} alt="foto" />
        </Link>
      </div>
    </>
  );
};

export default Card;
