"use strict";
//Null y Undefined
let tipo = (() => {
    let res;
    res = null;
    res = 9 / 0;
    res = "el perro del hortelano" / 4;
    // console.log({res}, typeof res);
    if (typeof res === "number") {
        switch (res) {
            case Infinity:
            case -Infinity:
            case NaN:
                return { res: res, tipo: typeof res };
            default:
                return;
        }
    }
});
let resTipo;
resTipo = tipo();
console.log({ resTipo }, typeof resTipo);
