import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to={"/"}>
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Henry - Weather App
        </span>
      </NavLink>
      <NavLink to={"/about"} isActive={""}>
        About
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
