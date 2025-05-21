import * as separadores from './separadores.js'
//Interfaces complejas
(() => {
  //Interfaces. Podemos crear otras interfaces para asignarlas dentro de la interface principal. Tenemos el ejemplo de la interface Person donde tiene dentro addres y teléfono donde le asignamos las 2 interfaces creadas justo debajo
  interface Person  {
    name: string;
    surname: string;
    age?: number;
    nacionalidad?: string[];
    addres: Direccion;
    telefono?: Phone[] | undefined;
  }

  interface Direccion {
    street?: string;
    number?: string;
    city?: string;
  }

  interface Phone {
    type: string;
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
      { type: 'movil', number: '666943560', coInt: 34}
    ]
  }

  const sofia: Person = {
    name: 'Sofia',
    surname: 'Cuntin Paz',
    addres: {
      street: 'Calle 3',
      number: '18'
    }
  }

  console.log(victor.telefono[0].number);//nos da el teléfono de la posició 0
  //console.log(sofia.telefono[0].number);//nos da error al leer ya que no existe la propiedad telefono en el objeto sofia

  separadores.sepLargo();
  console.log('Ejercicio interface producto');

  //interface producto
  interface Producto {
    id: number;
    name: string;
    description: string; 
    proveedor: Proveedor[];
    shops: Shops[];
  }
  //interface proveedor y shops
  interface Proveedor {
    id_proveedor: number;
    name: string;
  }
  interface Shops {
    codigo: number;
    city:City[];
  }
  interface City {
    street: string;
    number: number;
  }

  //creamos un objeto que implemente la interface producto
  let macarrones: Producto = {
    id: 1,
    name: 'macarrones',
    description: 'pasta de huevo casera',
    proveedor: [
      {
        id_proveedor: 1,
        name: 'gallo'
      },
      {
        id_proveedor: 2,
        name: 'hacendaño'
      }
    ],
    shops: [
      {
        codigo: 1,
        city: [
          {
            street: 'calle 2',
            number: 4
          },
          {
            street: 'calle 3',
            number: 5
          }
        ]
      }
    ]
  }

  console.log({macarrones});

})();
















