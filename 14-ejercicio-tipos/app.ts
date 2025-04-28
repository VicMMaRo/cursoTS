//Ejercicio. Tipar todo lo que hay en cada seccion.
//OJO! dejo abajo del todo el ejercicio original sin resolver
(() => {

  // Tipos
  const batman:string = 'Bruce';
  const superman:string = 'Clark';

  const existe:boolean = false;

  // Tuplas
  const parejaHeroes:[string,string] = [batman,superman];
  const villano:[string | number | boolean] = ['Lex Lutor',5,true];

  // Arreglos
  const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

  //Enumeraciones
  enum fuerzas {
    acuaman = 0,
    flash = 5,
    superman = 100,
    batman = 1
  }

  //tipamos ahora las variables de tipo fuerzas
  const fuerzaFlash: fuerzas = fuerzas.flash;
  const fuerzaSuperman: fuerzas = fuerzas.superman;
  const fuerzaBatman: fuerzas = fuerzas.batman;
  const fuerzaAcuaman: fuerzas = fuerzas.acuaman;

  // Retorno de funciones
  function activar_batiseñal():string{
    return 'activada';
  }

  function pedir_ayuda():void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  //const largoDelPoder:number = poder.length;
  const largoDelPoder:number = String(poder).length;//al castearlo nos deja acceder a la propiedad length. Si no se castea no te lo muestra porque el tipo de dato es any, pero si funciona porque any es un string.
  console.log( {largoDelPoder} );


})()


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












