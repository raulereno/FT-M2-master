import React from "react";
import style from "./Card.module.scss";

export default function Card(props) {
  // acá va tu código
  console.log(props);
  return (
    props.name != undefined && (
      <div className={`${style.card}`}>
        <button onClick={props.onClose}>❌</button>
        <p>{props.name}</p>
        <div>
          <span>Min: {props.min}°</span>
          <span>Max: {props.max}°</span>
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt=""
          />
        </div>
      </div>
    )
  );
}
