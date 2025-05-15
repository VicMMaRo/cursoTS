import * as separadores from './separadores.js'
//Getter y Setter
/* En JavaScript, los get y set son métodos especiales que te permiten definir cómo se accede (get) o modifica (set) una propiedad de un objeto o clase, como si fueran propiedades normales.
get: se ejecuta automáticamente cuando lees una propiedad.

set: se ejecuta automáticamente cuando asignas un valor a una propiedad.

Internamente, no estás accediendo a un valor directo, sino llamando a una función que se comporta como una propiedad
 */(() => {

  class Vehiculo {
    public marca: string;
    public modelo: string;
    public matricula: string;
    public automatico: boolean;

    //constructor
    constructor(marca: string, modelo: string, matricula: string, automatico: boolean) {
      this.marca = marca;
      this.modelo = modelo;
      this.matricula = matricula;
      this.automatico = automatico;
    }

    //getter y setter. Hacemos de ejemplo solo los de marca y modelo
    get getMarca(): string {
      return this.marca;
    }
    get getModelo(): string {
      return this.modelo;;
    }

    set setMarca(marca: string){
      this.marca = marca;
    }
    set setModelo(modelo: string){
      this.modelo = modelo;
    }
  }

  //probamos los getters y setters
  const renault = new Vehiculo('Renault', 'Clio', '1234-gvb', true);
  console.log({renault});

  renault.setMarca = 'Fiat';
  console.log(renault.getMarca);//OJO: los get y set son métodos pero se usan como si fuera una propiedad. Por seso llamamos a renault.getMarca y NO a renault.getMarca().
  renault.setModelo = 'Punto';
  console.log(renault.getModelo);

})();
















