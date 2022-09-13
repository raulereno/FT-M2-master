import React, { useState } from "react";
import Home from "../components/Home";
import axios from "axios";
import Nav from "../components/Nav";
import { Route, useParams } from "react-router-dom";
import About from "../components/About";
import Ciudad from "../components/Ciudad";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

const App = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
      )
      .then((response) => {
        setCities([...cities, response.data]);
      })
      .catch((error) => {
        console.log(error);
        alert("Ciudad no encontrada");
      });
  }

  let onCity = (id) => {
    let city = cities.filter((city) => city.id === parseInt(id));

    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  };
  return (
    <>
      <Nav onSearch={onSearch} />
      <Route exact path={"/"}>
        <Home cities={cities} onClose={onClose} />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route
        path={"/ciudad/:id"}
        render={({ match }) => <Ciudad city={onCity(match.params.id)} />}
      />
    </>
  );
};

export default App;
