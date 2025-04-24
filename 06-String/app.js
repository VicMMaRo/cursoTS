"use strict";
//String
(() => {
    var _a, _b, _c, _d;
    //inferencia de tipo
    const K1 = "texto";
    const K2 = "texto 2";
    const k3 = "texto3";
    //tipado explícito
    const K4 = "texto tipado";
    const K5 = "texto tipado 2";
    const k6 = "texto tipado 3";
    //va a da error porque es undefined, en la psoción 20 del string no hay nada
    //console.log(K4[20].toUpperCase());
    //para tratar este undefined podemos usar el operador ? "operador de propiedad opcional"
    console.log(((_a = K4[20]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No existe la posición");
    console.log(((_b = K4[20]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || null);
    console.log(((_c = K4[20]) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || -1);
    //aqui saldrá "no existe la posición" ya que con el y(&&) sigue la regla y aplica el último true. En este caso las dos opciones son true, ya que la posición dos existe y el string es true tb
    console.log(((_d = K4[2]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) && "No existe la posición");
})();
