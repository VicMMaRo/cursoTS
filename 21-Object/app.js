import * as separadores from './separadores.js';
//Objetos en JS vs TS
(() => {
    //Objeto en js
    let objJS = {
        texto: "Hola, soy un objeto en JavaScript",
        numero: 2,
        Boolean: true
    };
    //Objeto en TS
    let objTS = {
        texto: "Hola, soy un objeto en JavaScript",
        numero: 2,
        Boolean: true
    };
    separadores.sepLargo();
    //Ejericio: direncias entre crear un método dentro de un objeto normal, anónimo o con una función flecha.
    //con función anónima
    let objAnonimo = {
        nombre: "Victor Manuel",
        apellidos: "Maldonado Rodado",
        getFullName: function () {
            let fullName = this.nombre + " " + this.apellidos;
            return fullName;
        }
    };
    console.log(objAnonimo.getFullName());
    //con arrow function
    separadores.sepLargo();
    let objArrow = {
        nombre: "Sofia",
        apellidos: "Cuntin Paz",
        getFullName: () => {
            let fullName = objArrow.nombre + " " + objArrow.apellidos;
            return fullName;
        }
    };
    console.log(objArrow.getFullName());
})();
