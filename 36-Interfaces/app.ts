import * as separadores from './separadores.js'
//Interfaces
(() => {
  
  //OJO, esta interface es en un objeto literal, por eso está todo definido como las propiedades de un objeto literal (propiedad: tipo de retorno). Si es un método tiene que ser una función flecha (ver el método getFullName creado mas abajo).
  interface Persona {
    //propiedades de la clase
    name: string;
    secondName: string | boolean; //si es booleano es porque no tiene segundo nombre.
    surname: string;
    age: number;
    sexo: string;	

    //métodos de la clase
    //al definir los métodos o hacer la firma del método ponemos el nombre del metodo, 2 putnos (:), los parentesis () para indicarle que es una función y la flecha con el tipo de dato que devuelve, string en este caso. OJO, este ejemplo seria para definir una función flecha
    getFullName: () => string;

  }

})();
















