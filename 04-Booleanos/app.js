"use strict";
//Nota: es usual encapsular dentro de funciones anónimas, como en este ejemplo, para que las variables queden dentro del ámbito de la función y no sean accesibles desde el ámbito global
(() => {
    let myBoolean = true;
    console.log(myBoolean); //true
    myBoolean = (5 + 2) > 0; // 5 + 2 es mayor que cero
    console.log(myBoolean); //true
    myBoolean = (5 + 2) < 0; //5 + 2 no es menor que cero
    console.log(myBoolean); //false
    myBoolean = ("1" == 1); //comparación relajada da true
    console.log(myBoolean); //true
    myBoolean = ("1" === 1); //comparación estricta da false
    console.log(myBoolean); //false
})();
