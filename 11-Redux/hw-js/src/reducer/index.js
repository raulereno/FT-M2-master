const {
  INCREMENTO,
  DECREMENTO,
  INCREMENTOINPAR,
  INCREMENTOASYNC,
} = require("../action-types");

const initialState = {
  contador: 0,
};

let inpar = (num) => {
  if (num % 2 === 1) {
    return num + 2;
  } else {
    return num + 1;
  }
};
// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return { ...state, contador: state.contador + 1 };
    case DECREMENTO:
      return { ...state, contador: state.contador - 1 };
    case INCREMENTOINPAR:
      return { ...state, contador: inpar(state.contador) };
    case INCREMENTOASYNC:
      return { ...state, contador: state.contador + 1 };
    default:
      return { ...state };
  }
}

module.exports = contador;
