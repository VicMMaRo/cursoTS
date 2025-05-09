"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
define("00-template/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("00-template/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
    })();
});
let saludo = "Hola, mundo desde let!";
const SALUDO = "Hola, mundo desde constante!";
console.log(saludo);
console.log(SALUDO);
let nombre = "Victor";
const K = 10;
let num = 50;
console.log(num = num + 4);
let a;
function func(texto) {
    console.log(texto);
}
console.log(func(10));
console.log(func("Hola"));
(() => {
    let myBoolean = true;
    console.log(myBoolean);
    myBoolean = (5 + 2) > 0;
    console.log(myBoolean);
    myBoolean = (5 + 2) < 0;
    console.log(myBoolean);
    myBoolean = ("1" == 1);
    console.log(myBoolean);
    myBoolean = ("1" === 1);
    console.log(myBoolean);
})();
let verdes;
let rojos = 10;
if (verdes > rojos)
    console.log("Verdes es mayor que rojos");
else if (verdes == rojos)
    console.log("verdes iguales a rojos");
else
    console.log("Los verdes son menos que los rojos");
(() => {
    var _a, _b, _c, _d;
    const K1 = "texto";
    const K2 = "texto 2";
    const k3 = "texto3";
    const K4 = "texto tipado";
    const K5 = "texto tipado 2";
    const k6 = "texto tipado 3";
    console.log(((_a = K4[20]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No existe la posición");
    console.log(((_b = K4[20]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || null);
    console.log(((_c = K4[20]) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || -1);
    console.log(((_d = K4[2]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) && "No existe la posición");
})();
function tipoDato(param) { return typeof param; }
function mostrarMensaje(data, res) { return `${data} es de tipo ${res}`; }
(() => {
    let data;
    let res;
    data = "tipo string";
    data = 12234;
    data = true;
    res = tipoDato(data);
    console.log(mostrarMensaje(data, res));
    console.log("casteo");
    data = 1234454656;
    let dataStr = String(data);
    console.log({ dataStr });
    console.log(dataStr.charAt(2));
    console.log("tratando con as");
    dataStr = data;
    console.log({ dataStr });
    console.log("tratando con <...>");
    dataStr = data;
    console.log({ dataStr });
})();
(() => {
    let things;
    things = [1, '2', null, undefined, true];
    console.log({ things });
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
    console.log({ numeros });
    let arrStrings = ["persona 1", "persona 2", "persona 3"];
    console.log('----');
    arrStrings.forEach(string => console.log(string.toUpperCase()));
})();
let things = [1, '2'];
let things = [true, false];
let numbers = [1, 2, '3'];
var numbers = [1, 2, '3'];
console.log(numbers.map(n => n * 2));
let mixedArray = ['texto', 42, true];
let numbers = [1, 2, 3];
let strings = ['a', 'b', 'c'];
console.log(numbers.reduce((a, b) => a + b));
console.log(strings.join('-'));
let users = ['Alice', 'Bob', 'Charlie'];
users.forEach(user => {
    console.log(user.toUpperCase());
});
let anything = ['text', 123, true];
anything.forEach(item => {
    console.log(item.toUpperCase());
});
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio, " tipo: ", typeof currentAudio);
})();
(() => {
    console.log("Objetos y arrays--------------------------");
    let obj = {
        uno: "Nivel 1",
        dos: "Nivel 2",
        tres: "Nivel 3"
    };
    console.log({ obj });
    let arrIndeces = ["Nivel 1", "Nivel 2", "Nivel 3"];
    console.log({ arrIndeces });
    let arrNombrado = [];
    arrNombrado[0] = "Nivel 1";
    console.log({ arrNombrado });
    arrNombrado["uno"] = "Nivel 1";
    arrNombrado["dos"] = "Nivel 2";
    arrNombrado["tres"] = "Nivel 3";
    console.log({ arrNombrado });
})();
(() => {
    console.log("Enum ==============================");
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log({ AudioLevel }, typeof AudioLevel, Object.keys(AudioLevel).length);
    let currentAudio = AudioLevel.min;
    console.log({ currentAudio }, typeof currentAudio);
    currentAudio = 55;
    console.log({ currentAudio }, typeof currentAudio);
    currentAudio: AudioLevel = 99;
    console.log({ currentAudio }, typeof currentAudio);
})();
(() => {
    console.log("Radio Dial ==============================");
    let RadioDial;
    (function (RadioDial) {
        RadioDial[RadioDial["Cadena 100"] = 96.5] = "Cadena 100";
        RadioDial[RadioDial["Rock FM"] = 104.7] = "Rock FM";
        RadioDial[RadioDial["Los 40"] = 99.4] = "Los 40";
    })(RadioDial || (RadioDial = {}));
    console.log({ RadioDial }, typeof RadioDial, Object.keys(RadioDial).length);
    RadioDial["Manolo FM"] = 100;
    RadioDial[100] = "Manolo FM";
    RadioDial[RadioDial["Pepe FM"] = 103] = "Pepe FM";
    console.log({ RadioDial }, Object.keys(RadioDial).length);
})();
(() => {
    console.log("Objetos y Arrays ==============================");
    console.log("--- Objeto {}");
    let obj = {
        uno: "Nivel 1",
        dos: "Nivel 2",
        tres: "Nivel 3"
    };
    console.log({ obj });
    console.log("--- Array con índices (clásico)");
    let arrIndices = ["Nivel 1", "Nivel 2", "Nivel 3"];
    console.log({ arrIndices });
    console.log("arrIndices.length:", arrIndices.length);
    console.log(".forEach() ---");
    arrIndices.forEach(e => console.log({ e }));
    console.log("for...of ---");
    for (const e of arrIndices) {
        console.log(e, typeof e);
    }
    console.log("for...in ---");
    for (const k in arrIndices) {
        console.log(k, typeof k);
    }
    console.log("--- Array asociativo (como en PHP)");
    let arrAsociativo = [];
    arrAsociativo["uno"] = "Nivel 1";
    arrAsociativo["dos"] = "Nivel 2";
    arrAsociativo["tres"] = "Nivel 3";
    console.log({ arrAsociativo });
    console.log("arrAsociativo.length:", arrAsociativo.length);
    console.log(".forEach() ---");
    arrIndices.forEach(e => console.log({ e }));
    console.log("for...of ---");
    for (const e of arrAsociativo) {
        console.log(e, typeof e);
    }
    console.log("for...in ---");
    for (const k in arrAsociativo) {
        console.log(k, typeof k);
    }
    Object.keys(arrAsociativo).forEach(key => {
        console.log("usando keys de Object ", key, arrAsociativo[key]);
    });
})();
var Dial;
(function (Dial) {
    Dial[Dial["rockFM"] = 90.5] = "rockFM";
    Dial[Dial["ondaCero"] = 87.45] = "ondaCero";
    Dial[Dial["serVigo"] = 100.1] = "serVigo";
    Dial[Dial["radioMaria"] = 66.666] = "radioMaria";
})(Dial || (Dial = {}));
define("10-import-export/app", ["require", "exports", "./separadores.js"], function (require, exports, separadores_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        (0, separadores_js_1.sepCorto)();
        (0, separadores_js_1.sepLargo)();
    })();
});
(() => {
    return;
})();
function noReturn() { return; }
let res = noReturn();
console.log(res, typeof res);
let func = () => { return; };
res = func();
console.log({ res }, typeof res);
(() => {
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    let res = error('error de código');
    console.log({ res }, typeof res);
})();
let tipo = (() => {
    let res;
    res = null;
    res = 9 / 0;
    res = "el perro del hortelano" / 4;
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
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["acuaman"] = 0] = "acuaman";
        fuerzas[fuerzas["flash"] = 5] = "flash";
        fuerzas[fuerzas["superman"] = 100] = "superman";
        fuerzas[fuerzas["batman"] = 1] = "batman";
    })(fuerzas || (fuerzas = {}));
    const fuerzaFlash = fuerzas.flash;
    const fuerzaSuperman = fuerzas.superman;
    const fuerzaBatman = fuerzas.batman;
    const fuerzaAcuaman = fuerzas.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = String(poder).length;
    console.log({ largoDelPoder });
})();
define("15-Funciones/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("15-Funciones/app", ["require", "exports", "15-Funciones/separadores"], function (require, exports, separadores) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    separadores = __importStar(separadores);
    (() => {
        console.log(separadores.sepLargo());
        const nombrePersona = "Victor";
        function returName() {
            return nombrePersona;
        }
        separadores.sepLargo();
        const consultarAyuda = () => {
            return "Consulta realizada";
        };
        console.log("TypeOf de consultar ayuda: ", typeof consultarAyuda);
        let res = consultarAyuda();
        console.log({ res }, typeof res);
    })();
});
define("16-functions-required-parameters/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepCorto = sepCorto;
    exports.sepLargo = sepLargo;
    function sepLargo() {
        console.log("===============================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("16-functions-required-parameters/app", ["require", "exports", "16-functions-required-parameters/separadores"], function (require, exports, sep) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    sep = __importStar(sep);
    sep.sepCorto();
    function isValidStringParam(param) {
        return param.length > 0 && param !== 'null';
    }
    const fullName = (firstName, lastName) => {
        let resEvalName = {
            boolFirstName: isValidStringParam(firstName),
            boolLastName: isValidStringParam(lastName),
        };
        console.log("resEvalName:", resEvalName);
        if (resEvalName.boolFirstName && resEvalName.boolLastName) {
            return `${firstName} ${lastName}`;
        }
        else {
            if (!resEvalName.boolFirstName && !resEvalName.boolLastName) {
                return 'No has proporcionado ni el nombre ni el apellido';
            }
            else if (!resEvalName.boolFirstName) {
                return 'No has proporcionado el nombre';
            }
            else if (!resEvalName.boolLastName) {
                return 'No has proporcionado el apellido';
            }
        }
        return 'No se han producido errores';
    };
    let firstName;
    let lastName;
    let cont;
    let res;
    do {
        firstName = String(prompt('Nombre:'));
        lastName = String(prompt('Apellido:'));
        res = fullName(firstName, lastName);
        console.log(res);
        cont = prompt('Desea continuar [s/n]');
    } while (cont === 's' || cont === 'S');
});
define("17-functions-optional-parameters/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepCorto = sepCorto;
    exports.sepLargo = sepLargo;
    function sepLargo() {
        console.log("===============================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("17-functions-optional-parameters/app", ["require", "exports", "17-functions-optional-parameters/separadores"], function (require, exports, sep) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    sep = __importStar(sep);
    let firstName;
    let lastName;
    let cont;
    let res;
    let strFirstName;
    let strLastName;
    sep.sepCorto();
    function isValidStringParam(param) {
        return param.length > 0 && param !== 'null';
    }
    function fullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
    function errorEvaluation(boolFirstName, boolLastName) {
        if (!boolFirstName && !boolLastName) {
            return "Falta nombre y apellidos";
        }
        else if (!boolFirstName) {
            return "Falta nombre";
        }
        else if (!boolLastName) {
            return "Falta apellidos";
        }
        return "No hay errores: Nombre y apellido válidos";
    }
    function showMessage(msg) {
        console.log(msg || "no Message");
    }
    do {
        firstName = prompt('Nombre:');
        lastName = prompt('Apellido:');
        strFirstName = String(firstName);
        strLastName = String(lastName);
        let resEvalName = {
            boolFirstName: isValidStringParam(strFirstName),
            boolLastName: isValidStringParam(strLastName),
        };
        console.log(resEvalName);
        if (resEvalName.boolFirstName && resEvalName.boolLastName) {
            res = fullName(strFirstName, strLastName);
        }
        else {
            res = errorEvaluation(resEvalName.boolFirstName, resEvalName.boolLastName);
        }
        showMessage(res);
        showMessage();
        cont = prompt('Desea continuar [s/n]');
    } while (cont === 's' || cont === 'S');
});
const paramType = (param) => {
    console.log("param:", param, "->", typeof param);
};
function showFormatMessage(param_obligatorio, param_opcional, param_porDefecto) {
    if (param_porDefecto) {
        console.log(`${param_obligatorio} ${param_opcional}`.toUpperCase());
    }
    else {
        console.log(`${param_obligatorio} ${param_opcional}`);
    }
}
function myFunction(param_obligatorio, param_opcional, param_porDefecto = false) {
    paramType(param_obligatorio);
    paramType(param_opcional);
    paramType(param_porDefecto);
    return { param_obligatorio, param_opcional, param_porDefecto };
}
let resF = myFunction("Hola!", "Carolina");
console.log(resF);
resF = myFunction("Hola!", "Carolina");
console.log(resF);
let { param_obligatorio, param_opcional, param_porDefecto } = resF;
console.log(param_obligatorio);
showFormatMessage(param_obligatorio, param_opcional, param_porDefecto);
define("18-functions-default-parameters/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepCorto = sepCorto;
    exports.sepLargo = sepLargo;
    function sepLargo() {
        console.log("===============================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
(() => {
    const createName = (name, ...rest) => {
        return `${name} ${rest.join(' ')}`;
    };
    const surname = (surname, ...rest) => {
        return `${surname} ${rest.join(' ')}`;
    };
    const fullName = (name, surname) => {
        return `${name} ${surname}`;
    };
    let name = createName("Victor", "Manuel", "Maldonado", "Rodado");
    console.log(name);
    let resSurName = surname("Perez", "De la Fuente", "Garcia", "Blanco");
    console.log(resSurName);
    let resFullName = fullName(name, resSurName);
    console.log(resFullName);
})();
define("19-Functions-rest/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("20-Functions-type/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("20-Functions-type/app", ["require", "exports", "20-Functions-type/separadores"], function (require, exports, separadores) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    separadores = __importStar(separadores);
    (() => {
        separadores.sepCorto();
        const addNumbers = (a, b) => a + b;
        const greet = (name) => `Hola ${name}`;
        const saveTheWorld = () => `El mundo ha sido salvado`;
        let myFunction;
        myFunction = addNumbers;
        console.log(myFunction(10, 8));
        myFunction = greet;
        console.log(myFunction('Victor'));
        myFunction = saveTheWorld;
        console.log(myFunction());
        separadores.sepLargo();
        let myFunction_addNumber;
        myFunction_addNumber = addNumbers;
        console.log(myFunction_addNumber(20, 45));
        let myFunction_geet;
        myFunction_geet = greet;
        console.log(myFunction_geet('Sofía'));
        let myFunction_saveTheWorld;
        myFunction_saveTheWorld = saveTheWorld;
        console.log(myFunction_saveTheWorld());
    })();
});
define("21-Object/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("21-Object/app", ["require", "exports", "21-Object/separadores"], function (require, exports, separadores) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    separadores = __importStar(separadores);
    (() => {
        let objJS = {
            texto: "Hola, soy un objeto en JavaScript",
            numero: 2,
            Boolean: true
        };
        let objTS = {
            texto: "Hola, soy un objeto en JavaScript",
            numero: 2,
            Boolean: true
        };
        separadores.sepLargo();
        let objAnonimo = {
            nombre: "Victor Manuel",
            apellidos: "Maldonado Rodado",
            getFullName: function () {
                let fullName = this.nombre + " " + this.apellidos;
                return fullName;
            }
        };
        console.log(objAnonimo.getFullName());
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
});
define("22-Object-tipado/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("22-Object-tipado/app", ["require", "exports", "22-Object-tipado/separadores"], function (require, exports, separadores) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    separadores = __importStar(separadores);
    (() => {
        let miObjTipado = {
            name: 'Victor',
            surName: 'Maldonado Rodado',
            getFullName: function () {
                let fullName = this.name + ' ' + this.surName;
                return fullName;
            }
        };
        console.log(miObjTipado.getFullName());
        separadores.sepCorto();
        miObjTipado = {
            name: 'Victor',
            surName: 'Maldonado Rodado',
        };
        console.log(miObjTipado);
        separadores.sepLargo();
        let person1 = {
            name: 'Sofia',
            surName: 'Cuntin Paz',
            age: 32,
            hasCar: true,
            carColor: 'red',
            getColor: function () {
                return this.carColor;
            }
        };
        console.log(person1);
        let colorCoche = person1.getColor();
        console.log(colorCoche);
    })();
});
define("23-types-multiples/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("23-types-multiples/app", ["require", "exports", "23-types-multiples/separadores"], function (require, exports, separadores) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    separadores = __importStar(separadores);
    (() => {
        let person = {
            name: 'Sofia',
            surName: 'Cuntin Paz',
            age: 32,
            hasCar: true,
            carColor: 'red',
            getColor: function () {
                return this.carColor;
            }
        };
        console.log(person);
        let colorCoche = person.getColor();
        console.log(colorCoche);
        separadores.sepLargo();
        let persona;
        persona = 'Sofia';
        console.log(persona, typeof persona);
        persona = 33;
        console.log(persona, typeof persona);
        persona = true;
        console.log(persona, typeof persona);
        persona = {
            name: "Victor Manuel",
            surName: "Maldonado Rodado",
            age: 37
        };
        console.log(persona, typeof persona);
    })();
});
define("24-ejercicio-tipado-types/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("24-ejercicio-tipado-types/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batimovil = {
            carroceria: "Negra",
            modelo: "6x6",
            antibalas: true,
            pasajeros: 4
        };
        const bumblebee = {
            carroceria: "Amarillo con negro",
            modelo: "4x2",
            antibalas: true,
            pasajeros: 4,
            disparar() {
                console.log("Disparando");
            }
        };
        const villanos = [{
                nombre: "Lex Luthor",
                edad: 54,
                mutante: false
            }, {
                nombre: "Erik Magnus Lehnsherr",
                edad: 49,
                mutante: true
            }, {
                nombre: "James Logan",
                edad: undefined,
                mutante: true
            }];
        const charles = {
            poder: "psiquico",
            estatura: 1.78
        };
        const apocalipsis = {
            lider: true,
            miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
        };
        let mystique;
        mystique = charles;
        console.log(mystique);
        mystique = apocalipsis;
        console.log(mystique);
    })();
});
define("25-tsConfig-y-debug/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("25-tsConfig-y-debug/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        console.log("Hola, estoy en la línea 24 del archivo ts. Si te fijas en el archivo js generado estoy en la linea 22");
    })();
});
define("26-node_module/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("26-node_module/module", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
    })();
});
define("XX-pruebas/separadores", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sepLargo = sepLargo;
    exports.sepCorto = sepCorto;
    function sepLargo() {
        console.log("===========================================");
    }
    function sepCorto() {
        console.log("=======");
    }
});
define("XX-pruebas/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let objJSAnonimousFunction = {
            nombre: "Juan Carlos",
            apellido: "Varela Iglesias",
            getFullName: function () {
                console.log('Dentro del método -> ', this.nombre, this.apellido);
                let fullName = this.nombre + ' ' + this.apellido;
                return fullName;
            }
        };
        let res = objJSAnonimousFunction.getFullName();
        console.log({ res });
        objJSAnonimousFunction = {
            nombre: "Pepe",
            apellido: "Osorio",
        };
        console.log({ objJSAnonimousFunction });
        let persona1 = {
            name: "Persona",
            familyName: "Uno",
            age: 25,
            hasCar: true,
            carColor: "rojo",
            getCarColor: function () {
                return this.carColor;
            }
        };
        console.log({ persona1 });
        res = persona1.getCarColor();
        console.log({ res });
        let persona2 = {
            name: "Persona",
            familyName: "Dos",
            age: 18,
            hasCar: false,
            getCarColor: function () {
                return this.hasCar ? this.carColor : "No tiene coche";
            }
        };
        console.log({ persona2 });
        res = persona2.getCarColor();
        console.log({ res });
    })();
    let persona = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        carColor: "",
        getCarColor: function () {
            return this.carColor;
        }
    };
    console.log({ persona });
    const res = persona.getCarColor();
    console.log({ res });
    let persona2 = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        getCarColor: function () {
            return this.carColor;
        }
    };
    console.log({ persona2 });
    const res2 = persona2.getCarColor();
    console.log({ res2 });
    let persona3 = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        getCarColor: function () {
            return this.hasCar ? this.carColor : "No tiene coche";
        }
    };
    console.log({ persona3 });
    const res3 = persona3.getCarColor();
    console.log({ res3 });
    let persona4 = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        getCarColor: function () {
            return this.carColor || "Sin color definido";
        }
    };
    console.log({ persona4 });
    const res4 = persona4.getCarColor();
    console.log({ res4 });
    let persona5 = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        getCarColor: function () {
            if (!this.hasCar) {
                return "Esta persona no tiene coche";
            }
            return this.carColor || "Color no especificado";
        }
    };
    console.log({ persona5 });
    const res5 = persona5.getCarColor();
    console.log({ res5 });
});
//# sourceMappingURL=main.js.map