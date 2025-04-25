"use strict";
//Ejercicio. Tipar todo lo que hay en cada seccion.
//OJO! dejo abajo del todo el ejercicio original sin resolver
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["acuaman"] = 0] = "acuaman";
        fuerzas[fuerzas["flash"] = 5] = "flash";
        fuerzas[fuerzas["superman"] = 100] = "superman";
        fuerzas[fuerzas["batman"] = 1] = "batman";
    })(fuerzas || (fuerzas = {}));
    const fuerzaFlash = fuerzas.flash;
    const fuerzaSuperman = fuerzas.superman;
    const fuerzaBatman = fuerzas.batman;
    const fuerzaAcuaman = fuerzas.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    //const largoDelPoder:number = poder.length;
    const largoDelPoder = String(poder).length; //al castearlo nos deja acceder a la propiedad length. Si no se castea no te lo muestra porque el tipo de dato es any, pero si funciona porque any es un string.
    console.log({ largoDelPoder });
})();
/*
//ejercicio original sin resolver
(() => {

    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
  
    const existe = false;
  
    // Tuplas
    const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
  
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
 */
