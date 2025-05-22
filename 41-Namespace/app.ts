import * as separadores from './separadores.js'
//Namespace

  namespace mySpace {
    //Variables
    let variable:number = 5;
    export let varaibleExportdada:number = 8;

    //Funciones
    function nombrada() {
      console.log('Soy la función nombrada');
    }
    export let funcionAnonima = () => {
      console.log('Soy una función anónima');
    }

    //dentro del namespace podemos llamar sin problema a las funciones y variables
    nombrada();
    console.log(variable);
  }

  //llamamos desde fuera del namespace las nombradas y accedemos a ella
  console.log(mySpace.varaibleExportdada);
  mySpace.funcionAnonima();
  //mySpace.nombrada();//da error ya que no está exportada y la estamos llamando desde fuera del namespace
 
  separadores.sepLargo();
//otro ejemplo
namespace Calculo {
  let numero: number[] = [];

  let solicitarNumero = () => {
    let a:number = Number(prompt('Primer número'));
    let b:number = Number(prompt('Segundo número'));
  }

  let numerosUsuarios = (num1: number, num2: number) => {
    numero.push(num1, num2);
  }
}

// de JC para resolver. ya esta terminado
namespace Calculo2 {
  let numeros: number[] = [];

  let solicitarNumeros = () => {
    let a:number = Number(prompt('Primer número'));
    let b:number = Number(prompt('Segundo número'));
    return {a,b}  
  } 
  
  let res = solicitarNumeros();

  
  let crearNumerosUsuario = (n1: number, n2:number): void => {
    numeros.push(n1,n2)
    console.log('numeros en funcion', numeros);
  }

  export let mostrarNumeros = () => {
    console.log(numeros);
  }
  
  crearNumerosUsuario(res.a, res.b); 
  console.log({numeros}); 
}
//desde fuera llamamos a mostrarNumeros. El usuario solo verá eso, el resto queda encapsulado dentro
Calculo2.mostrarNumeros();













