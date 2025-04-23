//Number

/**
 * Al no especificar el tipo de verdes:
 * 'verdes' is possibly 'undefined'.ts(18048)
 * let verdes: undefined
 */
let verdes;//aqui saldria verdes mayor que rojo
let rojos:number = 10;

//verdes = "10"; //daria igual porque con el == hace la conversión a 10. Si ponemos el estricto === ya no es igual
//verdes = "hola"

if(verdes > rojos)
  console.log("Verdes es mayor que rojos");
else if(verdes == rojos)
  console.log("verdes iguales a rojos");
else
  console.log("Los verdes son menos que los rojos");
















