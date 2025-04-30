// import { sepCorto, sepLargo } from "./separadores.js";

const paramType = (param:any):void => {
  console.log("param:", param, "->", typeof param);
}

/**
 * 
 * @param param_obligatorio 
 * @param param_opcional Se justifica el tipo undefined YA QUE ES OPCIONAL !!!
 * @param param_porDefecto 
 */
function showFormatMessage(
  param_obligatorio: string, 
  param_opcional: (string | undefined), 
  param_porDefecto: boolean){
  
  if (param_porDefecto) {
    console.log(`${param_obligatorio} ${param_opcional}`.toUpperCase())
  } else {
    console.log(`${param_obligatorio} ${param_opcional}`)
  }
}

function myFunction(
  param_obligatorio: string, 
  param_opcional?: (string | undefined), 
  param_porDefecto: boolean = false
) {
  
  paramType(param_obligatorio);
  paramType(param_opcional);
  paramType(param_porDefecto);

  return {param_obligatorio, param_opcional, param_porDefecto}

}

// let resF = myFunction("Hola!", true); // Por el tipado en TS el parametro
                                         // opcional no acepta un boolean...
                                         //
                                         // JS se rie de Janeiro y lo asigna
                                         // a este parámetro 


let resF = myFunction("Hola!", "Carolina");
console.log(resF);

resF = myFunction("Hola!", "Carolina");
console.log(resF);

let {param_obligatorio, param_opcional, param_porDefecto} = resF;

console.log(param_obligatorio);

showFormatMessage(param_obligatorio, param_opcional, param_porDefecto)