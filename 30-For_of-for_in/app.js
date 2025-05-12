import * as separadores from './separadores.js';
(() => {
    let persona1 = {
        nombre: 'Juan',
        edad: 30
    };
    let persona2 = {
        nombre: 'Victor',
        edad: 37
    };
    let persona3 = {
        nombre: 'Sofia',
        edad: 33
    };
    let arrPersonas = [persona1, persona2, persona3];
    console.log({ arrPersonas });
    for (const persona of arrPersonas) {
        console.log({ persona, : .edad });
    }
    separadores.sepLargo();
    let familia = {
        padre: 'juan',
        madre: 'maria',
        hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
    };
    for (const clave in familia) {
        console.log({ clave });
    }
})();
//# sourceMappingURL=app.js.map