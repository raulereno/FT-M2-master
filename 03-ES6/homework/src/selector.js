var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  startEl.map((e) => {
    if (matchFunc(e)) {
      resultSet.push(e);
    }
  });
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  for (let i = 1; i < selector.length; i++) {
    console.log(selector[i]);
    if (selector[0] === "#") return "id";
    else if (selector[0] === ".") return "class";
    else if (selector[i] === ".") return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = (elemento) => {
    if (selectorType === "id") {
    } else if (selectorType === "class") {
    } else if (selectorType === "tag.class") {
    } else if (selectorType === "tag") {
    }
  };
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

$("#div");
