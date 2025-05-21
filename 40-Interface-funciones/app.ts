import * as separadores from './separadores.js'
//Interfaces de funciones
(() => {

  //Craemos la interface
  //OJO: dentro de una interface no se puede usar la palabra function
  interface sumNumber {
    (num1: number, num2: number): number;
  }

  //creamos una variable y le asignamos como tipo la interfaz sumNumber
  let sumaNumeros: sumNumber;
  //cogemos la variable creada y le metemos como función flecha la función creada en la interfaz
  sumaNumeros = (num1: number, num2: number): number => { return num1 + num2; };
  //creamos una nueva variable res donde guardaremos el resutado que nos devuelve sumaNumeros
  let res = sumaNumeros(5, 10);
  console.log(res);

  //-------------------------------------------------------------------------
  separadores.sepLargo();
  console.log('ejemplo funcion nombrada');
  //Ejemplo de interface de una funcion nombrada. Esto lo veremos en codigos antiguos, mejor no usarlo y hacerlo anonimo
  interface RestNum {
    (num1: number, num2: number): number;
  }
  
  // Creamos la función resta
let restaNumeros: RestNum;
restaNumeros = function restar(a: number, b: number): number {
    return a - b;
};
res = restaNumeros(7,5);
console.log('La resta es: ',res);

  
})();
















