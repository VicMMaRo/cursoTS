//Clases

//creamos la clase
  class Person {
    name;
    surname;

    //constructor
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }

  //creamos una instancia de la clase person
  const persona = new Person('Juan', 'Perez');
  console.log(persona);

  //Herencia
  //creamos la clase que extiende de Person
  class Empleado extends Person {
    puesto;

    //cuadno creamos el contrcutor tenemos que llamar al constructor del padre mediante super. Tenemos que pasarle en este caso los parámetros que recibe el constructor de la clase padre y el parámetro nuevo job
    constructor(name, surname, job){
      super(name, surname);
      this.puesto = job;
    } 
  }
  const empleoPersona = new Empleado('Juan', 'Perez', 'Desarrollador');
  console.log(empleoPersona);

//Ejericio
//Crea una clase padre animal, tres clases hijas aereo, terrestre y acuático

//creamos la clase animal y le ponemos los atributos que consideremos y su constructor
class Animal {
  name;
  color;
  age;

  //podemos asignar valores por defecto, para ello ponemos despues del parámetro el valor por defecto que quersmod
  constructor(name = 'sin definir', color = 'sin definir', age = 0) {
    this.name = name;
    this.color = color;
    this.age = age;

  }
  //creamos un metodo que devuelva el nombre
  mostrarNombre(){
    return this.name;
  }
}
//probamos el constructor creando dos animales, uno con argumentos y otro sin argumentos
const animal1 = new Animal('perro', 'negro', 5);
console.log(animal1);
const animal2 = new Animal();
console.log(animal2);

//Clase terrestre que extiende de animal
class AnimalTerrestre extends Animal {
  puedeCaminar;
  numPatas;
  tienePelo;

  //creamos el constructor
  constructor (name, color, age, puedeCaminar = true, numPatas = 4, pelo = true) {
    super(name, color, age);
    this.puedeCaminar = puedeCaminar;
    this.numPatas = numPatas;
    this.tienePelo = pelo;
  }
}
//creamos un objeto de la clase animal terrestre
const animalTerrestre = new AnimalTerrestre('gato', 'blanco',1, true,4,true);
console.log(animalTerrestre);

//Clase aereo que extiende de animal
class AnimalAereo extends Animal {
  puedeVolar;
  cantidadAlas;

  //constructor
  constructor (name, color, age, wings = 2) {
    super(name, color, age);
    this.cantidadAlas = wings;
    this.puedeVolar = true;
  }
}
//instanciamos un ave
const loro = new AnimalAereo('loro', 'verde', 5, 2);
console.log(loro);

//Clase acuático que extiende de animal
class AnimalAcuatico extends Animal {
  puedeNadar;
  tieneEscamas;

  //constructor
  constructor (name, color, age, puedeNadar = true, tieneEscamas = true) {
    super(name, color, age);
    this.puedeNadar = puedeNadar;
    this.tieneEscamas = tieneEscamas;
  }

  //creamos su propio método
  tengoEscamas(){
    if(this.tieneEscamas)
        console.log("tengo escamas");
    else  
        console.log("no tengo escamas");  
  }
}
//instanciamos un pez de la clase animal
const animalAcuatico = new AnimalAcuatico('tiburon blanco', 'gris', 2, true, false);
console.log(animalAcuatico);
//prueba del método heredado del padre
console.log('soy un/a: ', animalAcuatico.mostrarNombre()); 
//prueba de su método
console.log(animalAcuatico.tengoEscamas());