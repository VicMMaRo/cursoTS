import * as separadores from './separadores.js'
//Clases abtractas
(() => {
//Ejercicio: crea una aplicación que calcule gastos de trasporte terrestres y marítimos para la peninsula iberica. Tenemos que llevar una mercancia del punto A al punto B. Cabe la posibildad de que la mercancia que quieras transportar pueda ser por medio terrestre, medio marítimo o mixto. Un solo transporte terrestre puede llevar un máximo de 5 toneladas. La aplicación nos tiene que decir cuanto va a costar ese transporte.

//Ejercicio 2: crear un array de objetos que contenga al menos 3 articulos, se da muestra de como debe de ser. Hacer un método para calcular la ganancia y otro para calcular la oferta. La oferta entrará en vigor cuando las existencias superen los 500 kilos. Hacer tres clases que hereden de forma lineal y ver si la tercera clase que va a herederar de la segunda hereda tambien los metodos de la primera clase
const productos = [
  {
    nombre: 'patata',
    precioCompra: 0.5,
    precioVenta: 1.2,
    oferta:0,
    existencias: 1000
  },
  {
    nombre: 'tomate',
    precioCompra: 0.6,
    precioVenta: 1.4,
    oferta:0,
    existencias: 400
  },
  {
    nombre: 'manzana',
    precioCompra: 0.8,
    precioVenta: 2,
    oferta:0,
    existencias: 1500
  }
];

//Clase padre
class Producto {
  nombre: string;
  precioCompra: number;
  precioVenta:number; //minimo un 20% mas caro que el precio de compra
  oferta: number;
  existencias: number;

  //constructor
  constructor(nombre: string, precioCompra: number, precioVenta: number, oferta: number, existencias: number) {
    this.nombre = nombre;
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.oferta = oferta;
    this.existencias = existencias;
  }

  //Método para calcular la ganancia
  calcularGanancia(): number {
    //calculamos precio de venta menos el precio de compra y lo multiplicamos por las existencias
    return (this.precioVenta - this.precioCompra) * this.existencias;
  }

}//fin clase padre procucto

//clase producto hijo
class ProductoHijo extends Producto {
  //constructor
  constructor(nombre: string, precioCompra: number, precioVenta: number, oferta: number, existencias: number){
    super(nombre, precioCompra, precioVenta, oferta, existencias);
  }

  //Método para calcular el valor de la oferta si las existencias superan los 500 kg
  calcularOferta(): void {
    //comprobamos si las existencias son mayor a 500 kg. Si es mayor asignamos a oferta el valor del precio de venta menos el 10% que será nuestro criterio para hacer ofertas.
    if (this.existencias > 500) {
      this.oferta = this.precioVenta * 0.9;//multiplicamos por 0.9 para obtener el 10% menos del precio de venta
    }
  }
}//fin clase producto hijo

//clase producto nieto
class ProductoNieto extends ProductoHijo {
  //constructor
  constructor(nombre: string, precioCompra: number, precioVenta: number, oferta: number, existencias: number){
    super(nombre, precioCompra, precioVenta, oferta, existencias);
  }
}//fin clase productoNieto  

//pruebas de la clase productoNieto para ver si hereda todos los métodos
//creamos objeto productoNieto
const productoNieto = new ProductoNieto("Platano", 1.50, 2.00,0,1200);
console.log(productoNieto);
//calculamos ganancias y las mostramos por consola
let ganancia = productoNieto.calcularGanancia();
console.log(ganancia);
//calculamos oferta y la mostramos por consola y se la reasignamos al obeto
productoNieto.calcularOferta();
console.log('El precio de oferta es',productoNieto.oferta);
console.log(productoNieto);

//guardamos el nuevo objeto creado en el array productos
productos.push(productoNieto);
console.log(productos);
  /*
   nombre: 'manzana',
    precioCompra: 0.8,
    precioVenta: 2,
    oferta:0,
    existencias: 1500
   */

separadores.sepLargo();    
console.log('Ejercicio calculadora');
//hacer tres clases: padre sumar, hija restar, nieta multiplicar, nieto dividir, heredan todas en cascada. Recibimos en la primera clase los numeros, los pasamos a un getter que devuelva un array con los dos numeros para despues usarlos en las siguientes clases. repetir el proceso en todas las clases

class sumar {
  //propiedades protected para que las hereden las clases hijas
  protected num1: number;
  protected num2: number;

  //constructor de la clase
  constructor(num1:number, num2:number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  //getter para pasar un array con los valores
  protected get numeros(): number[] {
    return [this.num1, this.num2];
  }

  //metodo para sumar
  protected sumar():number {
    return this.num1 + this.num2;
  }
}
})();
















