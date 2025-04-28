import * as separadores from './separadores.js';
//import { sepLargo } from '../10-import-export/separadores';
//Funciones
(() => {
    console.log(separadores.sepLargo()); //Está en el scope superior de la función
    const nombrePersona = "Victor";
    function returName() {
        return nombrePersona;
    }
    separadores.sepLargo();
    const consultarAyuda = () => {
        return "Consulta realizada";
    };
    console.log("TypeOf de consultar ayuda: ", typeof consultarAyuda); //da function ya que tenemos guardada una función esa variable
    //ejecutamos la función guardando el resultado en una variable
    let res = consultarAyuda();
    console.log({ res }, typeof res); //el tipo serña string
})();
