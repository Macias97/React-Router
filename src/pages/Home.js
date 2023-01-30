import React from "react";
import "../styles/Home.scss";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home_container">
      <div className="header">
        <h1> Hi, I'm Maciej</h1>
        <h2>And I am React student.</h2>
      </div>
      <div className="git">
        <a href="https://github.com/Macias97">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
