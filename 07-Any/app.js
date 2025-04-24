"use strict";
//Any
function tipoDato(param) { return typeof param; }
function mostrarMensaje(data, res) { return `${data} es de tipo ${res}`; }
(() => {
    let data;
    let res;
    //para casa
    //probar con un array, un objeto y symbol
    //comentar los datas para ir probando el resultado con los diferentes valores
    data = "tipo string";
    data = 12234;
    data = true;
    res = tipoDato(data);
    console.log(mostrarMensaje(data, res));
    //En ts tambien podemos castear
    console.log("casteo");
    data = 1234454656;
    let dataStr = String(data);
    console.log({ dataStr }); //aqui imprimirá una string
    console.log(dataStr.charAt(2)); //ahora podemos usar métodos propios de string
    //podemos hacer que lo trate como un string, number, etc con as. En este caso no lo castea, solo lo trata como tal
    console.log("tratando con as");
    dataStr = data;
    //console.log(dataStr.charAt(2));//aqui da fallo porque no es string
    console.log({ dataStr }); //aquí imprimirá un number. Con as lo trata como un string pero no lo cambia
    //tambien podemos usar la notacion <...> pero esta tampoco convierte
    console.log("tratando con <...>");
    dataStr = data;
    console.log({ dataStr }); //aquí imprimirá un number. Con <> lo trata como un string pero no lo cambia 
})();
