import React from "react";
import Card from "./Card.jsx";
import style from "./_Cards.module.scss";

export default function Cards({ cities, onClose }) {
  console.log(cities);
  if (cities) {
    return (
      <div className={style.cards}>
        {cities.map((c) => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
