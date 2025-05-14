import * as separadores from './separadores.js';
(() => {
    class Person {
        constructor(name, surname = 'sin apellido') {
            this.name = 'sin nombre';
            this.name = name;
            this.surname = surname;
        }
        saludar() {
            return `Hola, me llamo ${this.name} ${this.surname}`;
        }
    }
    const persona = new Person('Juan', 'Perez');
    console.log(persona);
    const saludo = persona.saludar();
    console.log(saludo);
    const persona2 = new Person();
    console.log(persona2);
    class Empleado extends Person {
        constructor(name, surname, job) {
            super(name, surname);
            this.puesto = job;
        }
    }
    const empleoPersona = new Empleado('Sofia', 'Cuntin', 'Desarrollador');
    console.log(empleoPersona);
    console.log(empleoPersona.saludar());
    separadores.sepLargo();
    class Vehiculo {
        constructor(tipo, tieneRuedas) {
            this.tipo = tipo;
            this.tieneRuedas = true;
        }
    }
    const audi = new Vehiculo('Audi');
    console.log(audi);
    separadores.sepLargo();
    class Vehiculo2 {
        constructor(tipo, color) {
            this.tipo = tipo;
            this.color = color;
        }
    }
    Vehiculo2.eje = true;
    Vehiculo2.tieneRuedas = true;
    const moto = new Vehiculo2('Moto', 'Rojo');
    console.log(moto);
    const eje = Vehiculo2.eje;
    console.log(eje);
    const tieneRuedas = moto.tieneRuedas;
    console.log(tieneRuedas);
    separadores.sepLargo();
    console.log('Ejercicio INPUT/OUPUT');
    class StringData {
        constructor(input) {
            this.output = '';
            this.input = input;
        }
        mostrarInput() {
            console.log('mostrar input: ', this.input);
        }
        trasformaOutput() {
            this.output = this.input.toUpperCase();
        }
        mostrarOutput() {
            this.trasformaOutput();
            console.log('Mostrar output: ', this.output);
        }
    }
    const texto = new StringData('Hola mundo');
    texto.mostrarInput();
    texto.mostrarOutput();
})();
class StringData {
    static mostrarDescripcion() {
        console.log('METODO ESTÁTICO → mostrarDescripcion() ', StringData.descripcion);
    }
    constructor(input) {
        this.output = '';
        this.input = input;
    }
    mostrarInput() {
        console.log('mostrarInput:', this.input);
    }
    transformar() {
        this.output = this.input.toUpperCase();
    }
    mostrarOutput() {
        this.transformar();
        console.log('mostrarOutput:', this.output);
    }
    metodoDescripcionEstatica() {
        console.log('Estoy en el metodoDescripcionEstatica()');
        function mostrar() {
            console.log('Método funcionDescripcionEstatica() / función mostrar(): ', StringData.descripcion);
        }
        mostrar();
    }
}
StringData.descripcion = 'Clase que transforma un texto ... ';
const texto = new StringData('Hola de nuevo');
texto.metodoDescripcionEstatica();
//# sourceMappingURL=app.js.map