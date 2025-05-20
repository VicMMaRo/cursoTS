import * as separadores from './separadores.js'
//Constructores privados
(() => {

  class FullName {
    //podemos definir las propiedades directamente en el constructor. Incluso poner si son public, protected, etc. 
    //IMPORTANTE: si pdefinimos las propiedades publicas en el constructor y lo dejamos vacio cuando instanciemos un objeto nuevo y le pasemos los vargumentos estos alcanzaran a las propiedades publicas del constructor sin necesidad de usar el this ni nada. Prueba con instancia victor abajo
    constructor(public name: string, public surname: string) {
      
    }
  }

  //Prueba instancia de victor para ver que las propiedades publicas del constructor se pueden acceder sin usar this
  const victor = new FullName('Victor', 'Maldonado Rodado');
  console.log(victor); // salida: FullName {name: 'Victor', surname: 'Maldonado Rodado'}

  //Ahora vamos a ver si el constructor es privado
  class FullName2 {
    //Al ponerlo privado ya no podemos instanciarlo como en el ejemplo anterior ya que al ser privado solo podemos llamarlo desde dentro de la clase
    //para solucionarlo creamos una variable instance que tendrá que ser de tipo FullName2
    static instance: FullName2;

    private constructor(public name: string, public surname: string) {
      
    }

    //para poder instanciar la clase debemos crear un método que nos devolvera algo del tipo de la clase, en este caso la clase es FullName2. Tendrá que ser static o publica para poder acceder desde fuera de la clase cada vez que queramos hacer una instancia de ella
    //vamos a usar el patrón singelton que dice que solo debe haber una instancia de una clase en todo el programa, para ello vamos comprobar con un if si existe la propiedad instance, y si existe no vuelve a instanciar
    static callFullName(name: string, surname: string): FullName2 {
      if (!FullName2.instance) {
        FullName2.instance = new FullName2(name, surname);
      }else {
        console.log('La instancia de fullName2 ya está creada');
      }  
      return FullName2.instance;
    }

    //podemos crear otro método static para poder cambiar el nombre.
    //con el this.name no funciona porque el this hace referencia a la clase y no a la instancia de la clase. Tendremos que usar el nombre de la clase con el nombre de la variable static instance a la que le hemos asignado la instancia de la clase y desues accedera name para cambiarselo.
    static changeName(name: string): void {
      FullName2.instance.name = name;
      //this.name = name;
    }
  }

  //Prueba instancia de sofia para ver que ahora falla la llamada al new ya que el cosntructor es privado. Descomentar para verlo
  //const sofia = new FullName2('Victor', 'Maldonado Rodado');

  let sofia = FullName2.callFullName('Sofia', 'Cuntin Paz');
  console.log('Primera instancia',sofia); 
  const manolo = FullName2.callFullName('Manolo', 'Rodado De la Fuente');
  console.log('segunda instancia',manolo);// como antes ya se creó la instancia de sofia no se crea una nueva. Solo se devuelve la misma instancia que ya se creó antes.

  FullName2.changeName('Manolo');
  console.log('Nombre cambiado',sofia); //

})();
















