import * as separadores from './separadores.js'
//Desestructurar objetos
(() => {

  type Persona = {
    nombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    estatura: number,
    peso: number,
    escribe: boolean
  }

  const persona: Persona = {
    nombre: 'Victor',
    segundoNombre: 'Manuel',
    primerApellido: 'Maldonado',
    segundoApellido: 'Rodado',
    estatura: 1.83,
    peso: 70,
    escribe: true
  }

  console.log(persona);

  separadores.sepLargo();
  //creamos las variables con let, en este caso entre {} porque es un objeto. Le asignamos el objeto persona y va a tomar sus valores correspondientes
  let { nombre, estatura, escribe} = persona;
  console.log(nombre);
  console.log(estatura);
  console.log(escribe);

  separadores.sepLargo();
  //podemos hacer una función flecha asignada a una variable y asignarle los valores mediante notación de punto
  const showPersona = ({segundoNombre, peso} = persona) => {
    console.log(segundoNombre);
    console.log(peso);
    console.log(nombre);//ver por que sale si no está pasado como argumento
  }  

  showPersona();
  //OJO, terminarlo en casa con el repo del profesor!!!!!!!!!!!!!!!
})();
















