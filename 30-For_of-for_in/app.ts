import * as separadores from './separadores.js'
//
(() => {
//For of con arreglos
type Persona = {
  nombre: string,
  edad: number
}

type MyArr = Persona[];//le indicamos que va a ser un arreglo de tipo Persona


//ahora creamos 3 personas
let persona1:Persona = {
  nombre: 'Juan',
  edad: 30
}
let persona2:Persona = {
  nombre: 'Victor',
  edad: 37
}
let persona3:Persona = {
  nombre: 'Sofia',
  edad: 33
}

//creamos un arreglo de tipo MyArr y le pasamos las 3 personas creadas
let arrPersonas:MyArr = [persona1, persona2, persona3];
console.log({arrPersonas});
//ahora lo recoremos con un for of para mostrar las personas
console.log("for que muestra edad");
for(const persona of arrPersonas){
  console.log(persona.edad);
}

separadores.sepLargo();
//For in con arreglos
 let familia = {
    padre: 'juan',
    madre: 'maria',
    hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
  }

  //creamos variables con let para desestructurar
  let {padre, madre, hijos} = familia;

  console.log(padre);
  console.log(madre);

  //iteramos con un for in sobre el array hijos para sacar los valores de cada posición
  for(const clave in hijos){
    const valor = hijos[clave];
    console.log(valor);
  }

  //para casa hacerlo con un bucle anidado
  //un ejemplo encontrado con ia
  for (const clave in familia) {
    const valor = familia[clave as keyof typeof familia];
    
    if (clave === 'hijos' && Array.isArray(valor)) {
        // Si la propiedad es 'hijos' y es un array, lo recorremos
        console.log(`Los hijos son:`);
        for (const hijo of valor) {
            console.log(`- ${hijo}`);
        }
    } else {
        // Para otras propiedades (padre, madre)
        console.log(`${clave}: ${valor}`);
    }
}
})();
















