import React from "react";
import "../styles/Bio.scss";
import BioTable from "../components/BioTable";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Bio = () => {
  return (
    <div className="bio_section">
      <div className="bio_photo"></div>
      <BioTable
        name={"Maciej"}
        surname={"Swiatczynski"}
        age={25}
        school={"Gdynia Maritime University"}
      />
      <Link to="/about">
        <BsFillArrowLeftSquareFill />
      </Link>
    </div>
  );
};

export default Bio;
