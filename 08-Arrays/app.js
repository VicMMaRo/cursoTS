"use strict";
//Arrays
(() => {
    //podemos especificar todos los tipos de datos que podemos meter en nuestro array. Esto no es una buena práctica, mejor hacerlos
    let things;
    things = [1, '2', null, undefined, true];
    console.log({ things });
    //Mejor crear con un sólo tipo de dato. Si ponemos un string u otro tipo de dato al hacer la transición a js se lo va a comer ya que js no tiene tipado, aunque ts nos va a marcar un error. OJO CON ESO!!! descomentar uno y comentar el otro para verlo
    //let numeros:number[] = [1,2,3,4,5,6,7,8,9,10];
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
})();
//Ejercicio para casa. coger el archivo ts y hacerlo sin la funcion ejecutable y preguntar a IA por ambos codigos y sus diferencias. Decirle que haga una bateria de pruebas con ejemplos sencillos.
//otro ejercicio: preguntar a la IA como hacemos una importación en typescritp
