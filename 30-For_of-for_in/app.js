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
    console.log("for que muestra edad");
    for (const persona of arrPersonas) {
        console.log(persona.edad);
    }
    separadores.sepLargo();
    let familia = {
        padre: 'juan',
        madre: 'maria',
        hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
    };
    let { padre, madre, hijos } = familia;
    console.log(padre);
    console.log(madre);
    for (const clave in hijos) {
        const valor = hijos[clave];
        console.log(valor);
    }
    for (const clave in familia) {
        const valor = familia[clave];
        if (clave === 'hijos' && Array.isArray(valor)) {
            console.log(`Los hijos son:`);
            for (const hijo of valor) {
                console.log(`- ${hijo}`);
            }
        }
        else {
            console.log(`${clave}: ${valor}`);
        }
    }
})();
//# sourceMappingURL=app.js.map