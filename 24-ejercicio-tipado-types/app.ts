import * as separadores from './separadores.js'
//
(() => {

  //creamos un type tipado para los vehículos
  type Vehiculo = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
  }

  // Objetos: le asignamos el type vehículo
const batimovil: Vehiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Vehiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

//creamos el tipo Villanos y se lo asignamos al array de objetos villanos
type Villanos = {
  nombre:string,
  edad: number | undefined,//mejor no usar undefined y usar null en su lugar. Que undefined siempre sea un valor devuelto por js y no por el programador
  mutante: boolean
}

const villanos: Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles = {
  poder: string,
  estatura: number
}

const charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis = {
  lider: boolean,
  miembros: string[]
}

const apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)

//tipamos la variable para que pueda ser de un tipo o del otro
let mystique: Charles | Apocalipsis;

mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(mystique);


})();
















