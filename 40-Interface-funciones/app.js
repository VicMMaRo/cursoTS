import * as separadores from './separadores.js';
(() => {
    let sumaNumeros;
    sumaNumeros = (num1, num2) => { return num1 + num2; };
    let res = sumaNumeros(5, 10);
    console.log(res);
    separadores.sepLargo();
    console.log('ejemplo funcion nombrada');
    let restaNumeros;
    restaNumeros = function restar(a, b) {
        return a - b;
    };
    res = restaNumeros(7, 5);
    console.log('La resta es: ', res);
})();
//# sourceMappingURL=app.js.map