//Enums. En js no existen pero los podemos simular
(() => {

enum AudioLevel{
  //si no asignamos ningún valor a cada enum va a coger el valor como si fuera un array: min = 0, medium = 1 y max = 2
  min,//Al hacer la conversión a js y simularlo, ya que no js no tiene enum, lo que va a hacer es esto:AudioLevel[AudioLevel["min"] = 0] = "min";. Esto coge la propiedad min y le cambia el nombre a 0 y despues de le asigna el valor "min"
  medium,
  max
}
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
  }
  console.log({obj});
  
  let arrIndeces:string[] = ["Nivel 1","Nivel 2","Nivel 3"];
  console.log({arrIndeces});
  
  let arrNombrado: string[] = [];

  arrNombrado[0] = "Nivel 1"
  console.log({arrNombrado});
  
  //Investigar por que crea un array asocitivo y el tamaño del array es 0. array asociativo?. Mirar tabmien
  arrNombrado["uno"] = "Nivel 1";
  arrNombrado["dos"] = "Nivel 2";
  arrNombrado["tres"] = "Nivel 3";
  console.log({arrNombrado});
})();















