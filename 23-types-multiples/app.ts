import * as separadores from './separadores.js'
//types con multiples valores
(() => {

  //creamos el type
  type Person = {
    name: string,
    surName: string,
    age: number,
    hasCar?: boolean,
    carColor?: (string|null),//retorna string si tiene color de coche ó null si no lo tiene
    getColor?: () => (string|null)//indica que la función retorna un string ó un null
  }
  
  //creamos un objeto de tipo Person
  let person: Person = {
    name: 'Sofia',
    surName: 'Cuntin Paz',
    age: 32,
    hasCar: true,
    carColor: 'red',
    getColor: function () {
      return this.carColor; }
  }

  console.log(person);
  let colorCoche = person.getColor();
  console.log(colorCoche);

  separadores.sepLargo();
  //creamos variable y le asignamos diferentes tipos, entre ellos el type Person
  let persona:(string | number | boolean | Person);
  //probamos con diferentes tipos:
  //string
  persona = 'Sofia';
  console.log(persona, typeof persona);

  //number
  persona = 33;
  console.log(persona, typeof persona);

  //boolean
  persona = true;
  console.log(persona, typeof persona);

  //Person
  persona = {
    name: "Victor Manuel",
    surName: "Maldonado Rodado",
    age: 37
  }
  console.log(persona, typeof persona);//nos dará que es de tipo Object ya que los types no dejan de ser objetos en js


})();
















