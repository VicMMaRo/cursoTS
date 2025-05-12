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
for(const persona of arrPersonas){
  console.log({persona.edad});//
}

separadores.sepLargo();
//For in con arreglos
 let familia = {
    padre: 'juan',
    madre: 'maria',
    hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
  }

  for(const clave in familia){
    console.log({clave});
  }
})();
















