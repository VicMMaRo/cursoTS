import * as separadores from './separadores.js';
(() => {
    const arreglo = ['La Coruña', 'Lugo', 'Ourense', 'Pontevedra'];
    console.log({ arreglo });
    let [, provLugo, , provPonte] = arreglo;
    console.log({ provLugo, provPonte });
    separadores.sepLargo();
    let familia = {
        padre: 'juan',
        madre: 'maria',
        hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
    };
    let { hijos: [, par1, , par2, ,] } = familia;
    console.log(par1, par2);
})();
//# sourceMappingURL=app.js.map