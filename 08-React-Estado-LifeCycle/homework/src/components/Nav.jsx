import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import style from "./_Nav.module.scss";

function Nav({ onSearch }) {
  return (
    <>
      <div className={style.nav}>
        <div>
          <img src={Logo} alt="" />
          <h1>Henry - Weather App</h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}

export default Nav;
