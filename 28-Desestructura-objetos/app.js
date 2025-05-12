import * as separadores from './separadores.js';
(() => {
    const persona = {
        nombre: 'Victor',
        segundoNombre: 'Manuel',
        primerApellido: 'Maldonado',
        segundoApellido: 'Rodado',
        estatura: 1.83,
        peso: 70,
        escribe: true
    };
    console.log(persona);
    separadores.sepLargo();
    let { nombre, estatura, escribe } = persona;
    console.log(nombre);
    console.log(estatura);
    console.log(escribe);
    separadores.sepLargo();
    const showPersona = ({ segundoNombre, peso } = persona) => {
        console.log(segundoNombre);
        console.log(peso);
        console.log(nombre);
    };
    showPersona();
})();
//# sourceMappingURL=app.js.map