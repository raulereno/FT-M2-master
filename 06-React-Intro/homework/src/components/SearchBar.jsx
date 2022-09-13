import React from "react";

export default function SearchBar(props) {
  // acá va tu código

  return (
    <div>
      <input type="text" placeholder="Ciudad..." id={"buscarCiudad"} />
      <button
        onClick={() => {
          props.onSearch(document.getElementById("buscarCiudad").value);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
