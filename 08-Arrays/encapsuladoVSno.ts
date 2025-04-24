//Diferencias entre cídigo encapsulado en IIFE(Immediately Invoked Function Expression) y no encapsulado

/* Diferencias clave:
    Ámbito (Scope):
        Primer código: Las variables están en el ámbito global
        Segundo código: Las variables están confinadas al ámbito de la función IIFE

    Contaminación del ámbito global:
        Primer código: Puede contaminar el espacio de nombres global
        Segundo código: Previene la contaminación del espacio global

    Ejecución:
        Primer código: Se ejecuta directamente
        Segundo código: Se auto-ejecuta al ser definido
 */

//Ejemplo 1: Contaminación del ámbito global
// Código 1 (sin IIFE)
let things = [1, '2'];
// En otra parte del código:
let things = [true, false]; // Error: Duplicate identifier 'things'
// Código 2 (con IIFE)
// No hay conflicto porque 'things' está dentro del ámbito de la IIFE


//Ejemplo 2: Tipado en TypeScript vs ejecución en JavaScript
// TypeScript marcará error pero JavaScript lo ejecutará
let numbers: number[] = [1, 2, '3']; // Error TS: Type 'string' is not assignable to type 'number'
// Al compilar a JS:
var numbers = [1, 2, '3']; // Esto es válido en JS
console.log(numbers.map(n => n * 2)); // [2, 4, NaN] - Comportamiento inesperado

//Ejemplo 3: Mejor práctica con arrays tipados
// MAL: Array con múltiples tipos (anti-patrón)
let mixedArray: (string | number | boolean)[] = ['texto', 42, true];
// BIEN: Array con tipo específico
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
// Operaciones seguras
console.log(numbers.reduce((a, b) => a + b)); // 6
console.log(strings.join('-')); // "a-b-c"

//Ejemplo 4: Métodos de array con tipado fuerteEjemplo 4: Métodos de array con tipado fuerte
let users: string[] = ['Alice', 'Bob', 'Charlie'];
// TypeScript provee autocompletado y verificación
users.forEach(user => {
  console.log(user.toUpperCase()); // Método seguro porque sabemos que es string
  // console.log(user.toFixed(2)); // Error TS: Property 'toFixed' does not exist on type 'string'
});
// Comparación con array any
let anything: any[] = ['text', 123, true];
anything.forEach(item => {
  console.log(item.toUpperCase()); // Runtime error cuando item es number o boolean
});