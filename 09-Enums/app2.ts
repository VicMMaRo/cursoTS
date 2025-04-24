// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log("Enum ==============================");
  enum AudioLevel {
    min,
    medium,
    max
  }
  
  console.log({AudioLevel}, typeof AudioLevel, Object.keys(AudioLevel).length);
  
  let currentAudio = AudioLevel.min;
  console.log({currentAudio}, typeof currentAudio);

  // No tipado es mutable
  currentAudio = 55;
  console.log({currentAudio}, typeof currentAudio);

  // Tipado es "inmutable"
  currentAudio: AudioLevel = 99;
  console.log({currentAudio}, typeof currentAudio);

})();


(() => {
  console.log("Radio Dial ==============================");

  enum RadioDial {
    "Cadena 100" = 96.5,
    "Rock FM" = 104.7,
    "Los 40" = 99.4
  }

  console.log({RadioDial}, typeof RadioDial, Object.keys(RadioDial).length);

  /**
   * Es posible añadir un elemento al enumerador
   * en dos pasos (*** EN ESTE EJEMPLO ***):
   * 1) Añadiendo la clave alfanumerica con valor en números
   * 2) Añadiendo la clave numérica con valor alfanumérico
   * 
   * OJO: No se incrementa el length del enum
   */
  RadioDial["Manolo FM"] = 100;
  RadioDial[100] = "Manolo FM";

  /**
   * O bien en un solo paso
   * 
   * OJO: No se incrementa el length del enum
   */
  RadioDial[RadioDial["Pepe FM"] = 103] = "Pepe FM";
  console.log({RadioDial}, Object.keys(RadioDial).length);

})();
(() => {
  console.log("Objetos y Arrays ==============================");
  console.log("--- Objeto {}");
  let obj = {
    uno: "Nivel 1",
    dos: "Nivel 2",
    tres: "Nivel 3"
  }
  
  console.log({obj});
  
  console.log("--- Array con índices (clásico)");
  let arrIndices: string[] = ["Nivel 1", "Nivel 2", "Nivel 3"]
  console.log({arrIndices});
  console.log("arrIndices.length:", arrIndices.length);

  console.log(".forEach() ---");
  arrIndices.forEach(e => console.log({e}));

  console.log("for...of ---");
  for (const e of arrIndices) {
    console.log(e, typeof e)
  }

  console.log("for...in ---");
  for (const k in arrIndices) {
    console.log(k, typeof k)
  }

  console.log("--- Array asociativo (como en PHP)");
  /**
   * La longitud en este tipo de Arrays es 0
   */
  let arrAsociativo: string[] = [];
  
  arrAsociativo["uno"] = "Nivel 1";
  arrAsociativo["dos"] = "Nivel 2";
  arrAsociativo["tres"] = "Nivel 3";
  
  console.log({arrAsociativo});
  console.log("arrAsociativo.length:", arrAsociativo.length);

  console.log(".forEach() ---");
  arrIndices.forEach(e => console.log({e}));

  /**
   * Al ser un array asociativo NO se puede recorrer con 
   * for...of
   * 
   * Se recorre con for..in
   * 
   * Si no tiene longitud ¿puedes aplicar una solución con
   * un for clásico? leer respuesta al final del script. OJO!!!!!!
   */

  console.log("for...of ---");
  for (const e of arrAsociativo) {
    console.log(e, typeof e)
  }

  console.log("for...in ---");
  for (const k in arrAsociativo) {
    console.log(k, typeof k)
  }

  Object.keys(arrAsociativo).forEach(key => {
    console.log("usando keys de Object ",key, arrAsociativo[key]);
  });


})();

/** 
  Respuesta ejercicio:no puedes usar un for clásico porque técnicamente no es un array con elementos indexados numéricamente.  El length de un array solo cuenta propiedades con índices numéricos enteros (0, 1, 2...). Tus claves son strings ("uno", "dos"), por lo que no incrementan el length.

1. Lo que estás haciendo realmente cuando defines:
  let arrAsociativo: string[] = [];
  arrAsociativo["uno"] = "Nivel 1";

  Estás haciendo algo que técnicamente es posible en JavaScript pero no es una buena práctica:
    Estás creando un array normal (instancia de Array)
    Pero luego lo estás usando como un objeto (diccionario/mapeo) al asignar propiedades con claves string

2. Por qué for...of no muestra nada
  El bucle for...of itera sobre:
    Los valores del array
    Solo considera los elementos numéricamente indexados (índices numéricos)
    Ignora completamente las propiedades añadidas con claves string
    Como tu array está vacío (no has pusheado elementos con arrAsociativo.push() o asignado con índices numéricos), no muestra nada.

3. Por qué for...in sí muestra las claves
  El bucle for...in itera sobre:
    Todas las propiedades enumerables del objeto
    Incluye tanto índices numéricos como propiedades string
    Por eso ves las claves "uno", "dos", "tres"

4. Por qué el length es 0
  La propiedad length de un array:
    Solo cuenta los elementos con índices numéricos
    Ignora las propiedades con claves string
    Como no has añadido elementos con índices numéricos, length es 0

  Soluciones adecuadas

Opción 1: Usar un objeto (para datos asociativos)
  const objAsociativo: {[key: string]: string} = {};
  objAsociativo["uno"] = "Nivel 1";
  objAsociativo["dos"] = "Nivel 2";

  // Iteración correcta
  for (const key in objAsociativo) {
    console.log(key, objAsociativo[key]);
  }

Opción 2: Usar Map (mejor para este caso)
  const mapAsociativo = new Map<string, string>();
  mapAsociativo.set("uno", "Nivel 1");
  mapAsociativo.set("dos", "Nivel 2");

  // Iteración correcta
  for (const [key, value] of mapAsociativo) {
    console.log(key, value);
}

Opción 3: Si realmente necesitas un array (no recomendado para este caso)
  const arrNumerico: string[] = [];
  arrNumerico.push("Nivel 1"); // Índice 0
  arrNumerico.push("Nivel 2"); // Índice 1

  // Iteración correcta
  for (const item of arrNumerico) {
    console.log(item);
  }    
 */

/* Opción forzada con for:
  let arrAsociativo: string[] = [];
    arrAsociativo["uno"] = "Nivel 1";
    arrAsociativo["dos"] = "Nivel 2";
    arrAsociativo["tres"] = "Nivel 3";

    // Solución didáctica
    function getNonNumericKeys(obj: any): string[] {
      return Object.getOwnPropertyNames(obj).filter(
        key => isNaN(Number(key)) && key !== "length"
      );
    }

    const claves = getNonNumericKeys(arrAsociativo);

    // Ahora podemos usar for clásico
    for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      console.log(`Índice ${i}:`, clave, arrAsociativo[clave]);
    }

Explicación paso a paso:
    Object.getOwnPropertyNames(): Obtiene TODAS las propiedades del objeto (incluyendo las no enumerables)

    Filtrado:

        isNaN(Number(key)) descarta los índices numéricos

        Excluimos "length" que es propiedad nativa de arrays

    Resultado: Un array de strings con solo las claves no numéricas

    
Limitaciones de esta solución:
    No respeta el orden de inserción (los objetos JS no garantizan orden)

    Incluye todas las propiedades, incluso métodos si los agregaras

    Es frágil: Si añades propiedades al prototipo, aparecerán en la iteración

    Poco performante: Cada acceso requiere múltiples operaciones  
  
*/