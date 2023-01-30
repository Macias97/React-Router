import React from "react";
import "../styles/About.scss";
import Card from "../components/Card";
import Orient from "../assets/marsz.jpg";
import Coding from "../assets/skills.jpg";

const About = () => {
  return (
    <>
      <div className="about_container">
        <Card imgSrc={Orient} txt={"Bio"} path={"about/bio"} />
        <Card
          imgSrc={Coding}
          txt={"Technologies"}
          path={"about/technologies"}
        />
      </div>
    </>
  );
};

export default About;
