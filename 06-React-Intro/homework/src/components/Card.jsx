import React from "react";

export default function Card({ city }) {
  // acá va tu código
  let conversor = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };
  return (
    <div className="contenedorCiudad">
      <button>╳</button>
      <p>{city.name}</p>
      <div>
        <span className="min">
          Min:<span>{conversor(city.main.temp_min) + "°"}</span>
        </span>
        <span className="max">
          Max: <span>{conversor(city.main.temp_max) + "°"}</span>
        </span>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
}
