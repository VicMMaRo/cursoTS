"use strict";
//Never
//En TypeScript, el tipo never representa un valor que nunca ocurre o una función que nunca termina normalmente ó termina con un error
//la usamos para que ejerza de punto de control resaltando un error no controlado por nosotros. El código se detendrá
(() => {
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    let res = error('error de código');
    console.log({ res }, typeof res); //no captura nada ya que con never para la ejecución del código y termina
})();
