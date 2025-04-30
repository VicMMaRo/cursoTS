import * as separadores from './separadores.js'
//
(() => {
separadores.sepCorto();

const addNumbers = (a:number, b:number):number => a + b;

const greet = (name:string):string => `Hola ${name}`;

const saveTheWorld = ():string => `El mundo ha sido salvado`;

//creamos la variable y la tipamos de tipo function
let myFunction:Function;

//en este caso nos va a marcar error porque estamos asignando un number y espera una función. Ojo, JS se lo va a tragar ya que no es un lenguaje tipado. Descomentar para verlo
//myFunction = 10;

//las siguientes no da error ya que le estamos asigando las funciones creadas. Despues en clg llamamos a la variable con los parámetros necesarios. Vemos los tres casos:
myFunction = addNumbers;
console.log(myFunction(10,8));

myFunction = greet;
console.log(myFunction('Victor'));

myFunction = saveTheWorld;
console.log(myFunction());

//funciones tipadas estrictamente. Debe contemplar tanto el tipo de datos como el tipo de dato de retorno. 
separadores.sepLargo();

//para tipar la varaible de tipo función ponemos justo despues de crear el nombre de la variable los dos puntos (:) y añadimos el tipo de parámetro que recibe. Después ponemos el => para indicar que es una función que devuelve el tipo de parámetro que le indiquemos, en este caso number.
let myFunction_addNumber:(num1:number, num2:number) => number;
myFunction_addNumber = addNumbers;
console.log(myFunction_addNumber(20,45));
//Este nos marcaria fallo ya que greet retorna un string. Descomentar para velo
//myFunction_addNumber = greet;

let myFunction_geet: (name:string) => string;
myFunction_geet = greet;
console.log(myFunction_geet('Sofía'));

let myFunction_saveTheWorld:(x?:void) => string;
myFunction_saveTheWorld = saveTheWorld;
console.log(myFunction_saveTheWorld());
})();
















