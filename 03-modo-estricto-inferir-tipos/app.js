"use strict";
//Inferir el tipo de dato
//Si pasamos el ratón por encima nos va a decir que es string, pero sólo esta unferido.
let nombre = "Victor";
//Podemis indicar el tipo de dato que va a recibir la varaible.
const K = 10;
let num = 50;
//Si ponemos el ratón por encima de num podemos ver el tipo de dato esperado
console.log(num = num + 4);
//any: cuando no asignamos ningún dato nos va a decir que espera any al pasar el ratón por encima.
let a;
//fUNCIONES: si creamos una función y no indicamos el tipo de parámetro le podemos pasar cualquier tipo de dato: any.
function func(texto) {
    console.log(texto);
}
console.log(func(10));
console.log(func("Hola"));
