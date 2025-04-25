//Void. Lo usamos para especificar cuando una función no retorna nada

/**
 * Función anónima autoejecutada
 * @param none 
 * @returns ¿a quien retorna?
 * 
 * @nota al ser una función anónima autoejecutable no se asigna a una varaiable y no podemos capturar el return
 */
(():void => {
  return;
})();

/**
 * Función tradicional
 * @param none
 * @returns void
 */
function noReturn(){ return; }
let res:any = noReturn();
console.log(res, typeof res);

/**
 * Función anónima asignada a una variable
 * @param none 
 * @returns void 
 */
let func = ():void => { return; }
res = func();
console.log({res}, typeof res);














