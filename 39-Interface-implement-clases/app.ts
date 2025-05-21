import * as separadores from './separadores.js'
//Implementar clases con una interface
(() => {

  //Creamos la interface persona. Vamos a poner delante una I para identificar que es suna interface
  interface IPersona {
    //Recuerda: podemos poner ";" o "," para separar las propiedades. Si elegimos "," la ultima propiedad no necesita ",". Si elegis ";" la ultima propiedad si necesita ;.
    nombre: string;
    apellidos: string;
    profesion: string;
  }

  //Hacemos la clase persona que extienda de la interface
  class Persona implements IPersona {
    /* 
    OJO: mirar repositorio profesor para ver esto bien
    nombre: string;
    apellidos: string;
    profesion: string; */

    //constructor
    constructor(public nombre: string, public apellidos: string, public profesion: string){}

    public getPersona(): string {
      return `Nombre: ${this.nombre} Apellidos:`;
    }
    public getJob(): void {
      console.log(`La profesion de ${this.nombre} es: ${this.profesion}`);
    }
  }

  //instanciamos un objeto de la clase persona
  const victor = new Persona('Victor', 'Maldonado Rodado', 'Desarrollador');
  victor.getJob();
  let persona = victor.getPersona();
  console.log(persona);
  console.log(victor);

  //------------------------------------------------------------------------------------
  //Mismo ejemplo pero haciendo una interface para los metodos
  separadores.sepLargo();
  console.log('Segundo ejemplo');
  //Creamos la interface persona. Vamos a poner delante una I para identificar que es suna interface
  interface IPersona2 {
    //Recuerda: podemos poner ";" o "," para separar las propiedades. Si elegimos "," la ultima propiedad no necesita ",". Si elegis ";" la ultima propiedad si necesita ;.
    nombre: string;
    apellidos: string;
    profesion: string;
  }
  //creamos la interface para el metodo
  interface IMetodo {
    getPersona(): string;
    getJob(): void
  }

  //Hacemos la clase persona que extienda de la interface
  class Persona2 implements IPersona2, IMetodo {
   
    //constructor
    constructor(public nombre: string, public apellidos: string, public profesion: string){}

    public getPersona(): string {
      return `Nombre: ${this.nombre} Apellidos:`;
    }
    public getJob(): void {
      console.log(`La profesion de ${this.nombre} es: ${this.profesion}`);
    }
  }

  //instanciamos un objeto de la clase persona
  const sofia = new Persona('Sofia', 'Cuntin Paz ', 'Patronista');
  sofia.getJob();
  let persona2 = sofia.getPersona();
  console.log(persona2);
  console.log(sofia);
})();
















