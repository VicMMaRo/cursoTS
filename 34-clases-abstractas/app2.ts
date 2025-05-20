import * as separadores from './separadores.js'
//Clases abstractas
(() => {

  abstract class PersonaAbstracta {
    constructor(public nombre: string, public edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }

  class PersonaCiudad extends PersonaAbstracta {
    public ciudad: string;
    constructor(nombre: string, edad: number, ciudad: string) {
      super(nombre, edad);
      this.ciudad = ciudad;
    }
  }

  const victor = new PersonaCiudad('Victor', 37, 'Madrid');
  console.log(victor);

})();

//Ejercicio
separadores.sepLargo();
//hacer una clase abstracta para un coche con las propiedades que veamos. Hacer otra clase nueva que extienda de ella y añadirle dos propiedades mas.
abstract class Vehiculo {
  protected marca: string;
  protected modelo: string;
  protected color: string;
  protected year: number;

  constructor(marca: string, modelo: string, color: string, year: number){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.year = year;
  }
}

//clase tipoVehiculo
class Coche extends Vehiculo {
  protected matricula: string;
  protected puertas: number;
  
  //cuando creamos el constructor de una clase que extiende o hereda de otra simpre tenemos que llamar primero al constructor del padre mediante super. Tambien tenemos que pasarle al constructor los valores que le vamos a pasar al constructor del padre
  constructor(marca: string, modelo: string, color: string, year: number, matricula: string, puertas: number){
    super(marca, modelo, color, year);
    this.matricula = matricula;
    this.puertas = puertas;
  }
}

const renault = new Coche('renault', 'megane', 'azul', 2015, '1234-abc',5);
console.log(renault);

//ahora creamos otra clase nueva moto que tb extienda de vehiculo
class Moto extends Vehiculo {
  protected matricula: string;
  protected ruedas: number;


  //constructor
  constructor(marca: string, modelo: string, color: string, year: number, matricula: string, ruedas: number ){
    super(marca, modelo, color, year);
    this.matricula = matricula;
    this.ruedas = ruedas;
  }
}

const moto = new Moto('Ducati', 'Pepinazo', 'rojo', 2024, '1221-xcv', 2);
console.log(moto);

//podemos hacer una funcion dond recibimos como argumento un objeto. Despues podemos acceder a sus propiedades pero en lugar de nombrar el objeto mas la propiedad se nombre el nombre del argumento mas la propiedad.
//A esta funcion podemos pasarle la instancia de un objeto hijo y tendrá acceso a las propiedades del padre
function mostrarMarcaModelo (tipo: Vehiculo){
  //terminar en casa con el ejercicio hecho por JC en el capitulo de clases abtractas.
}