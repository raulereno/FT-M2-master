import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props);
  return (
    <div className="contenedorCiudades">
      {props.cities.map((e) => {
        return <Card city={e} key={e.id} />;
      })}
    </div>
  );
}
