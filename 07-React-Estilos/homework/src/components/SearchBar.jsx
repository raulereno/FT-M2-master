import axios from "axios";
import React, { useState } from "react";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export default function SearchBar({ buscar }) {
  // acá va tu código
  const [value, setValue] = useState("");
  const [ciudad, setCiudad] = useState([]);

  function click() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCiudad([...ciudad, response.data]);
        buscar(ciudad);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Ciudad...🔎"
        id="search"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <span></span>
      <button onClick={click}> Agregar </button>
    </div>
  );
}
