import * as separadores from './separadores.js'
//Desestructurar arreglos
(() => {

  type Arr = string[];

  const arreglo:Arr = ['La Coruña', 'Lugo', 'Ourense', 'Pontevedra'];
  console.log({arreglo});

  //desestructaramos. Tenemos que usar la notación de corchetes para indicar que estamos desestructurando un arreglo. Tienen que estar separados por comas posicionalmente. Si no queremos mostrar una de las posiciones la dejamos en blanco.
  let [,provLugo, , provPonte] = arreglo;
  console.log({provLugo,provPonte});


  separadores.sepLargo();
  //Ejercicio. Dado el siguiente objetoo desestrucura los hijos pares
  let familia = {
    padre: 'juan',
    madre: 'maria',
    hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
  }
  
  let {hijos: [,par1,,par2,,]} = familia;
  console.log(par1,par2);

})();
















