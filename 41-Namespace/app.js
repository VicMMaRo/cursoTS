import * as separadores from './separadores.js';
var mySpace;
(function (mySpace) {
    let variable = 5;
    mySpace.varaibleExportdada = 8;
    function nombrada() {
        console.log('Soy la función nombrada');
    }
    mySpace.funcionAnonima = () => {
        console.log('Soy una función anónima');
    };
    nombrada();
    console.log(variable);
})(mySpace || (mySpace = {}));
console.log(mySpace.varaibleExportdada);
mySpace.funcionAnonima();
separadores.sepLargo();
var Calculo;
(function (Calculo) {
    let numero = [];
    let solicitarNumero = () => {
        let a = Number(prompt('Primer número'));
        let b = Number(prompt('Segundo número'));
    };
    let numerosUsuarios = (num1, num2) => {
        numero.push(num1, num2);
    };
})(Calculo || (Calculo = {}));
var Calculo2;
(function (Calculo2) {
    let numeros = [];
    let solicitarNumeros = () => {
        let a = Number(prompt('Primer número'));
        let b = Number(prompt('Segundo número'));
        return { a, b };
    };
    let res = solicitarNumeros();
    let crearNumerosUsuario = (n1, n2) => {
        numeros.push(n1, n2);
        console.log('numeros en funcion', numeros);
    };
    Calculo2.mostrarNumeros = () => {
        console.log(numeros);
    };
    crearNumerosUsuario(res.a, res.b);
    console.log({ numeros });
})(Calculo2 || (Calculo2 = {}));
Calculo2.mostrarNumeros();
//# sourceMappingURL=app.js.map