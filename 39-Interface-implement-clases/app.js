import * as separadores from './separadores.js';
(() => {
    class Persona {
        constructor(nombre, apellidos, profesion) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.profesion = profesion;
        }
        getPersona() {
            return `Nombre: ${this.nombre} Apellidos:`;
        }
        getJob() {
            console.log(`La profesion de ${this.nombre} es: ${this.profesion}`);
        }
    }
    const victor = new Persona('Victor', 'Maldonado Rodado', 'Desarrollador');
    victor.getJob();
    let persona = victor.getPersona();
    console.log(persona);
    console.log(victor);
    separadores.sepLargo();
    console.log('Segundo ejemplo');
    class Persona2 {
        constructor(nombre, apellidos, profesion) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.profesion = profesion;
        }
        getPersona() {
            return `Nombre: ${this.nombre} Apellidos:`;
        }
        getJob() {
            console.log(`La profesion de ${this.nombre} es: ${this.profesion}`);
        }
    }
    const sofia = new Persona('Sofia', 'Cuntin Paz ', 'Patronista');
    sofia.getJob();
    let persona2 = sofia.getPersona();
    console.log(persona2);
    console.log(sofia);
})();
//# sourceMappingURL=app.js.map