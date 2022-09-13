import React, { useState } from "react";
import Cards from "./Cards";

function Home({ cities, onClose }) {
  return (
    <div className="App">
      <h1>Home</h1>
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}

export default Home;
