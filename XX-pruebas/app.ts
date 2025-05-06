import * as separadores from './separadores.js'
//
import { sepCorto, sepLargo } from "./separadores.js";

(() => {


/**
 * Definición y tipado de la función SIN CONTROLAR el número de 
 * argumentos ni el tipo de dato que retorna
 */
// let objJSAnonimousFunction: {nombre:string, apellido: string, getFullName?: any} = {

/**
 * Definición y tipado de la función controlando el número de 
 * argumentos y el tipo de dato que retorna
 */
let objJSAnonimousFunction: {nombre:string, apellido: string, getFullName?: () => string} = {
  nombre: "Juan Carlos",
  apellido: "Varela Iglesias",

  getFullName: function():string {
      console.log('Dentro del método -> ',this.nombre, this.apellido);
      let fullName:string = this.nombre + ' ' + this.apellido;
      return fullName;
  }
}

/**
 * Como programador debes estar consciente al 100% de lo que haces.
 * 
 * Al ser OPCIONAL getFullName() es posible que retorne UNDEFINED...
 * Pero TÚ sabes que ESTA función nunca lo hará porque has definido
 * las propiedades "nombre" y "apellido" con sus respectivos valores.
 * 
 * Siendo opcional esta función se puede redefinir el objeto tal
 * como se muestra a continuación
 */
let res:any = objJSAnonimousFunction.getFullName();
console.log({res});


// Redefinición del objeto sin la función getFullName()

objJSAnonimousFunction = {
  nombre: "Pepe",
  apellido: "Osorio",
}

console.log({objJSAnonimousFunction});


/**
 * Creación de un TIPO
 * 
 * Puedes utilizar indistintamente ";" o "," para 
 * separar propiedades
 */

type Person = {
  name: string;
  familyName: string,
  age: number,
  hasCar: boolean;
  carColor?: string,
  getCarColor?: () => (string);
  }


let persona1 = {
  name: "Persona",
  familyName: "Uno",
  age: 25,
  hasCar: true,
  carColor: "rojo",
  getCarColor: function () {
    return this.carColor;
  }
}

console.log({persona1});
res = persona1.getCarColor()
console.log({res});


let persona2 = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  getCarColor: function () {
    return this.hasCar ? this.carColor : "No tiene coche";
  }
}

console.log({persona2});
res = persona2.getCarColor()
console.log({res});
})();

//Diferentes respuestas para solucionar el problema
//1º Definir la propiedad carColor
let persona = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  carColor: "", // Definir la propiedad aunque esté vacía
  getCarColor: function () {
    return this.carColor;
  }
}

console.log({persona});
const res = persona.getCarColor();
console.log({res});

//2º Usar tipos en TypeScript y una interface
interface Persona {
  name: string;
  familyName: string;
  age: number;
  hasCar: boolean;
  carColor?: string; // Propiedad opcional
  getCarColor: () => string | null;
}

let persona2: Persona = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  getCarColor: function () {
    return this.carColor;
  }
}

console.log({persona2});
const res2 = persona2.getCarColor();
console.log({res2});

//3º Verificar si existe la propiedad
let persona3 = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  getCarColor: function () {
    return this.hasCar ? this.carColor : "No tiene coche";
  }
}

console.log({persona3});
const res3 = persona3.getCarColor();
console.log({res3});

//4º Valor por defecto
let persona4 = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  getCarColor: function () {
    return this.carColor || "Sin color definido";
  }
}

console.log({persona4});
const res4 = persona4.getCarColor();
console.log({res4});

//5º Modificar la lógica según hasCar
let persona5 = {
  name: "Persona",
  familyName: "Dos",
  age: 18,
  hasCar: false,
  getCarColor: function () {
    if (!this.hasCar) {
      return "Esta persona no tiene coche";
    }
    return this.carColor || "Color no especificado";
  }
}

console.log({persona5});
const res5 = persona5.getCarColor();
console.log({res5});









