// import { sepCorto, sepLargo } from "./separadores.js";

import * as sep from './separadores.js'

sep.sepCorto();

function isValidStringParam(param:string): boolean {
  // if (param.length > 0) {
  //   return true;
  // } else {
  //   return false;
  // }

    
  /**
   * Alternativa IMPLICITA al if .. else 
   * 
   * return param.length > 0;
   */

  return param.length > 0 && param !== 'null'; // true | false
}

const fullName = (firstName: string, lastName: string):string => {
  let resEvalName = {
    boolFirstName: isValidStringParam(firstName),
    boolLastName: isValidStringParam(lastName),
  }

  console.log("resEvalName:", resEvalName);

  if (resEvalName.boolFirstName && resEvalName.boolLastName) {
    return `${firstName} ${lastName}`
  } else {
      if (!resEvalName.boolFirstName && !resEvalName.boolLastName) {
        return 'No has proporcionado ni el nombre ni el apellido'
      } else  if (!resEvalName.boolFirstName) {
        return 'No has proporcionado el nombre'
      } else if (!resEvalName.boolLastName) {
        return 'No has proporcionado el apellido'
      }
    }
   
    return 'No se han producido errores'
}

let firstName: (string | null);
let lastName: (string | null);
let cont: (string | null);
let res:string;
do {
  firstName = String(prompt('Nombre:'));
  lastName = String(prompt('Apellido:'));

  res = fullName(firstName, lastName);
  console.log(res);

  cont = prompt('Desea continuar [s/n]')

} while (cont === 's' || cont === 'S');




/**
 * Alternativa para evaluar los parámetros vacíos arrojando
 * un error y deteniendo la aplicación
 * 
 * if (!firstName || !lastName) {
 *   throw new Error('No has proporcionado nombre y/o apellidos')
 * } 
 */
 