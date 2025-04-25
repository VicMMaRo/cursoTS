"use strict";
//Void. Lo usamos para especificar cuando una función no retorna nada
/**
 * Función anónima autoejecutada
 * @param none
 * @returns ¿a quien retorna?
 *
 * @nota al ser una función anónima autoejecutable no se asigna a una varaiable y no podemos capturar el return
 */
(() => {
    return;
})();
/**
 * Función tradicional
 * @param none
 * @returns void
 */
function noReturn() { return; }
let res = noReturn();
console.log(res, typeof res);
/**
 * Función anónima asignada a una variable
 * @param none
 * @returns void
 */
let func = () => { return; };
res = func();
console.log({ res }, typeof res);
