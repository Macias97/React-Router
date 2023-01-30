import React from "react";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "undefined")}
            end
          >
            <AiOutlineHome className="icons" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "undefined")}
          >
            <FaRegUser className="icons" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "undefined")}
          >
            <FaRegEnvelope className="icons" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
