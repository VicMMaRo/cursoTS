// import { sepCorto, sepLargo } from "./separadores.js";
import * as sep from './separadores.js';
let firstName;
let lastName;
let cont;
let res;
let strFirstName;
let strLastName;
sep.sepCorto();
function isValidStringParam(param) {
    return param.length > 0 && param !== 'null'; // true | false
}
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
function errorEvaluation(boolFirstName, boolLastName) {
    if (!boolFirstName && !boolLastName) {
        return "Falta nombre y apellidos";
    }
    else if (!boolFirstName) {
        return "Falta nombre";
    }
    else if (!boolLastName) {
        return "Falta apellidos";
    }
    return "No hay errores: Nombre y apellido válidos";
}
function showMessage(msg) {
    console.log(msg || "no Message"); // <= opcional :))))
}
do {
    firstName = prompt('Nombre:');
    lastName = prompt('Apellido:');
    strFirstName = String(firstName);
    strLastName = String(lastName);
    // Construimos objeto con validación
    let resEvalName = {
        boolFirstName: isValidStringParam(strFirstName),
        boolLastName: isValidStringParam(strLastName),
    };
    console.log(resEvalName);
    if (resEvalName.boolFirstName && resEvalName.boolLastName) {
        res = fullName(strFirstName, strLastName);
    }
    else {
        // throw new Error("Cuñao!, esto ha petao!!!");
        res = errorEvaluation(resEvalName.boolFirstName, resEvalName.boolLastName);
    }
    showMessage(res);
    showMessage(); // <= Llamada sin argumentos 
    //    (parámetro opcional en la función)
    cont = prompt('Desea continuar [s/n]');
} while (cont === 's' || cont === 'S');
