import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";

function App() {
  const [data, setData] = useState();

  console.log(data);
  return (
    <div className="App">
      <div>
        <SearchBar buscar={setData} />
      </div>
      <hr />
      <div>{data ? <Cards cities={data} /> : ""}</div>
    </div>
  );
}

export default App;
