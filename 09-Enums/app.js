"use strict";
//Enums. En js no existen pero los podemos simular
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        //si no asignamos ningún valor a cada enum va a coger el valor como si fuera un array: min = 0, medium = 1 y max = 2
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    //creamos variable y le asignamos un dato del enumerador de AudioLevel
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
    //Investigar por que crea un array asocitivo y el tamaño del array es 0. array asociativo?. Mirar tabmien
    arrNombrado["uno"] = "Nivel 1";
    arrNombrado["dos"] = "Nivel 2";
    arrNombrado["tres"] = "Nivel 3";
    console.log({ arrNombrado });
})();
