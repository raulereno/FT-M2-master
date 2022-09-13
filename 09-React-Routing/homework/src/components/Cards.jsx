import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose, cityIn }) {
  return (
    <div className="cards">
      {cities.map((city) => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => onClose(city.id)}
          id={city.id}
        />
      ))}
    </div>
  );
}
