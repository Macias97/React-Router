import React from "react";
import "../styles/Technologies.scss";

const TechCard = (props) => {
  return (
    <div className="tech_card">
      <div className={`tech_img ${props.techClass}`}>{props.img}</div>
      <div className="tech_name">
        <h1>{props.techs.name}</h1>
      </div>
      <div className="tech_des">
        <h2>Incl.</h2>
        <ul>
          <li>
            {props.techs.description.map((els) => {
              return <li>- {els}</li>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechCard;
