import * as separadores from './separadores.js'
//Archivo tsconfig
(() => {
  /*
  Generación inicial del tsconfig.json
  Usando el compilador de TypeScript (tsc):

  bash
  npx tsc --init
  o si tienes TypeScript instalado globalmente:

  bash
  tsc --init
  Resultado: Esto creará un archivo tsconfig.json con todas las opciones posibles (comentadas) y valores por defecto.
  
  IMPORTANTE: hacer un backup del archivo tsconfig.json antes de hacer cambios.
  */

  //DEPURACIÓN
  //Hacer coincidir las líneas del archivo ts con las del archivo js que te genera el tsc -w en la consola, OJO ne la consola nada más.
  /**
   * para ello vamos al archivo tsconfig.json descomentamos la linea "sourceMap": true. Ahora nos genera un archivo js.map donde ahora si podemos ver las líneas del archivo ts
   */
  console.log("Hola, estoy en la línea 24 del archivo ts. Si te fijas en el archivo js generado estoy en la linea 22");
})();















