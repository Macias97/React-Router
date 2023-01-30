import React from "react";
import TechCard from "../components/TechCard";
import "../styles/Technologies.scss";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Techs = [
  {
    name: "JavaScript",
    description: ["Arrays", "Objects", "Variables", "DOM", "Async/Await"],
  },
  {
    name: "HTML&CSS",
    description: [
      "Attributes",
      "Selectors",
      "Tags",
      "Forms",
      "Pseudoclasses",
      "SCSS",
    ],
  },
  {
    name: "React",
    description: ["Components", "Props", "States", "Router", "Hooks"],
  },
  { name: "Node", description: ["Express", "NPM"] },
];

const Technologies = () => {
  return (
    <>
      <div className="tech_section">
        <TechCard
          techs={Techs[0]}
          techClass={"JScript"}
          img={<SiJavascript />}
        />
        <TechCard techs={Techs[1]} techClass={"HtmlCss"} img={<SiHtml5 />} />
        <TechCard techs={Techs[2]} techClass={"React"} img={<FaReact />} />
        <TechCard techs={Techs[3]} techClass={"Node"} img={<FaNode />} />

        <Link to="/about">
          <BsFillArrowLeftSquareFill />
        </Link>
      </div>
    </>
  );
};

export default Technologies;
