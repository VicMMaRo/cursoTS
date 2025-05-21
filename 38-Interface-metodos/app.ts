import * as separadores from './separadores.js'
//Métodos en iterfaces
(() => {

   interface Person  {
    name: string;
    surname: string;
    age?: number;
    nacionalidad?: string[];
    addres: Direccion;
    telefono?: Phone[] | undefined;
    
    //podemos definir los métodos de dos formas diferentes:
    //como propiedad no puede usar dos puntos (:) para el tipo de dato que devuelve
    //getCantidadContactos?: () => number | undefined;

    //como método no puedes usar () => para el tipo de dato que devuelve
    getCantidadContactos?(): number | undefined;
  }

  interface Direccion {
    street?: string;
    number?: string;
    city?: string;
  }

  interface Phone {
    type?: string;
    number: string;
    coInt: number;
  }
  
  //Ejemplo de uso
  const victor: Person = {
    name: 'Victor',
    surname: 'Maldonado Rodado',
    age: 37,
    nacionalidad: ['Español'],
    addres: {
      street: 'Calle 1',
      number: '16',
      city: 'Redondela'
    },
    telefono: [
      { type: 'home', number: '987654321', coInt: 34 },
      { number: '666943560', coInt: 34},
    ],
    getCantidadContactos: () => { return victor.telefono.length }
  }

  const sofia: Person = {
    name: 'Sofia',
    surname: 'Cuntin Paz',
    addres: {
      street: 'Calle 3',
      number: '18'
    }
  }

  console.log(victor.telefono[0].number);

  //llamamos al metodo
  console.log('Cantidad contactos: ', victor.getCantidadContactos()); ;

})();
















