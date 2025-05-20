import * as separadores from './separadores.js';
(() => {
    class PersonaAbstracta {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    class PersonaCiudad extends PersonaAbstracta {
        constructor(nombre, edad, ciudad) {
            super(nombre, edad);
            this.ciudad = ciudad;
        }
    }
    const victor = new PersonaCiudad('Victor', 37, 'Madrid');
    console.log(victor);
})();
separadores.sepLargo();
class Vehiculo {
    constructor(marca, modelo, color, year) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.year = year;
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, color, year, matricula, puertas) {
        super(marca, modelo, color, year);
        this.matricula = matricula;
        this.puertas = puertas;
    }
}
const renault = new Coche('renault', 'megane', 'azul', 2015, '1234-abc', 5);
console.log(renault);
class Moto extends Vehiculo {
    constructor(marca, modelo, color, year, matricula, ruedas) {
        super(marca, modelo, color, year);
        this.matricula = matricula;
        this.ruedas = ruedas;
    }
}
const moto = new Moto('Ducati', 'Pepinazo', 'rojo', 2024, '1221-xcv', 2);
console.log(moto);
function mostrarMarcaModelo(tipo) {
}
//# sourceMappingURL=app2.js.map