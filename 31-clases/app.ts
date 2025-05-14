import * as separadores from './separadores.js'
//Clases en TS
(() => {

  //Clases

//creamos la clase
  class Person {
    public name:string = 'sin nombre';//podemos ponerle un valor por defecto tanto aqui como en el contructor. Ver surname en el constructor
    public surname:string ;

    //constructor
    //OJO: mejor ponerle en el constructor los valores por defecto ya que si lo ponemos en la definición de la propiedad pondrá el valor undefined.
    constructor(name:string, surname:string = 'sin apellido') {
      this.name = name;
      this.surname = surname;
    }

    //método saludar
    saludar():string{
      return `Hola, me llamo ${this.name} ${this.surname}`;
    }
  }

  //creamos una instancia de la clase person
  const persona = new Person('Juan', 'Perez');
  console.log(persona);
  const saludo = persona.saludar();
  console.log(saludo);
  const persona2 = new Person();
  console.log(persona2);

  //Herencia
  //creamos la clase que extiende de Person
   class Empleado extends Person {
    public puesto:string;

    //cuadno creamos el contrcutor tenemos que llamar al constructor del padre mediante super. Tenemos que pasarle en este caso los parámetros que recibe el constructor de la clase padre y el parámetro nuevo job
    constructor(name:string, surname:string, job:string){
      super(name, surname);
      this.puesto = job;
    } 
  }
  const empleoPersona = new Empleado('Sofia', 'Cuntin', 'Desarrollador');
  console.log(empleoPersona);
  //podemos usar el métedo heredado saludar
  console.log(empleoPersona.saludar());

  separadores.sepLargo();

  //Clase  vehículos
  class Vehiculo {
    public tipo: string;
    private tieneRuedas: boolean;

    //constructor
    //OJO: siempre que queramos poner parametros opcionales los ponemos mejor en el constructor. RECUERDA: cuando hay parámetos opcionales tenemos que ponerlo siempre el último.
    constructor( tipo: string, tieneRuedas?: boolean){
      this.tipo = tipo;
      this.tieneRuedas = true;
    }
  }

  //instancia de vehiculo
  const audi = new Vehiculo('Audi');
  console.log(audi);
 
  
  //Podemos poner las propiedades directamente en el constructor y ni declararlas antes. Ejemplo:
  separadores.sepLargo();

  class Vehiculo2 {
    //si la propiedad es estática si tenemos que definirla. 
    //OJO: para acceder a las propiedades ó métodos estáticos tenemos que poner el nombre de la clase antes de la propiedad o método no el nombre de la instancia. Lo probamos abajo *
    static eje: boolean = true;
    static tieneRuedas?: boolean = true;
    constructor(public tipo: string, public color: string){}
  }

  //ahora hacemos una nueva instancia
  const moto = new Vehiculo2('Moto', 'Rojo');
  console.log(moto);
  //
  // * ahora probamos a acceder a las propiedades estáticas. No hace falta instanciar un objeto de vehículo2
  const eje = Vehiculo2.eje;
  console.log(eje);//true
  const tieneRuedas = moto.tieneRuedas;
  console.log(tieneRuedas);//undefined ya que no podemos acceder una propiedad estática desde el objeto moto instanciado.

  //Ejercicio: dada la siguiente clase crear un método privado que transforme el input a ouput y otro para que lo muestre
  separadores.sepLargo();
  console.log('Ejercicio INPUT/OUPUT');

  class StringData {
    input: string;
    private output: string = '';

    constructor(input: string){
      this.input = input;
    }

    public mostrarInput(): void {
      console.log('mostrar input: ', this.input);
    }

    //aqui empieza la resolucion del ejercicio
    //metodo para mostrar el output
    private trasformaOutput(): void {
      //transformamos el input a mayusculas y se lo asignamos a output
      this.output = this.input.toUpperCase();
    }
    
    //mostramos el metedo provado anterior
    public mostrarOutput(): void {
      //llamamos al método transformaOuput con this porque es privado y tiene que llamarse desde el mismo objeto
      this.trasformaOutput();

      //despues hacemos un clg de this.output para mostrar el resultado
      console.log('Mostrar output: ', this.output);
    }

  }

  //instanciamos un objeto de la clase StringData y probamos los métodos.
  const texto = new StringData('Hola mundo');
  texto.mostrarInput();
  texto.mostrarOutput();

})();

//Otra version del ejercicio anterior para ver una función dentro de un método y poder usarlo. El método es metodoDescripcionEstatica(), está casi abajo.
class StringData {
    public input: string;
    private output: string = '';
    static descripcion = 'Clase que transforma un texto ... ';

    static mostrarDescripcion(): void {
      console.log('METODO ESTÁTICO → mostrarDescripcion() ', StringData.descripcion);
    }

    constructor(input:string) {
      this.input = input;
    }

    public mostrarInput(): void {
      console.log('mostrarInput:', this.input);
    }

    private transformar(): void {
      this.output = this.input.toUpperCase();
    }

    public mostrarOutput(): void {
      this.transformar();
      console.log('mostrarOutput:', this.output);
    }

    public metodoDescripcionEstatica():void {
      console.log('Estoy en el metodoDescripcionEstatica()');
      function mostrar() {
        console.log('Método funcionDescripcionEstatica() / función mostrar(): ', StringData.descripcion);
    }
    mostrar();//tenemos que autoinvocar la función para poder mostrarla ya que está encasuplada deltro del metodo metodoDescripcionEstatica() y no es accesible desde fuera
    }
  }
  const texto = new StringData('Hola de nuevo');
  texto.metodoDescripcionEstatica();











