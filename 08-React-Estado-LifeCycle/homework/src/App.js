import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import axios from "axios";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export default function App() {
  const [cities, setCities] = useState([]);
  //Para eliminar una ciudad tengo que crear la funcion onClose aqui
  console.log(cities);
  const onSearch = (ciudad) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCities([...cities, response.data]);
      });
  };

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Cards cities={cities} />
    </div>
  );
}
