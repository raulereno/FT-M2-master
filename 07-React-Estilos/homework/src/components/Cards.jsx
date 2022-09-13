import React, { useState } from "react";
import Card from "./Card";
import style from "./Cards.module.scss";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={`${style.cards}`}>
      {cities?.map((city) => {
        return (
          <Card
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => {
              alert(city.name);
            }}
            key={city.id}
          />
        );
      })}
    </div>
  );
}
