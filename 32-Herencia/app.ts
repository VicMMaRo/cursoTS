import * as separadores from './separadores.js'
//Herencia
(() => {
  class Person {
    //parámetros creados directamente en el constructor. De esta manera no hace falta poner los this.name = name..., lo hace sólo ts.
    constructor ( public name: string = 'no name', public surname: string = 'no surname',public nickname: string = 'no nickname') {
      console.log('Ejecutado constructor');
    }

    //setters. 
    public setName (name: string) {
      this.name = name;
    }
    
    public setSurname (surname: string){
      this.surname = surname;
    }

    public setNickname (nickname: string){
      this.nickname = nickname;
    }

    //método para devolver nombre completo
    private getFullName(): string {
      return `${this.name} ${this.surname}`;
    }
  }

  const victor = new Person('Victor', 'Manuel');
  console.log(victor);

  //clase con herencia
  class Ingeniero extends Person {
    public ingenieria: string;
    static isEnginer: boolean = true; //static solo se puede acceder a través de la clase

    constructor(name: string, surname: string, nickname: string, ingenieria: string) {
      super(name, surname, nickname);
      this.ingenieria = ingenieria;
    }
  }

  const sofia = new Ingeniero('Sofia', 'Cuntin', 'Sofrita' ,'Electrónica');//OJO, mirar como hacer para que pase los parametros en orden y no me coja electronica como nikcname
  console.log(sofia);
  const sofia2 = new Ingeniero();//aqui pondra los valores por defecto
  console.log(sofia2);

  //probamos el setter desde la clase victor creada antes
  victor.setName('Victor Manuel');
  victor.setNickname('Jaleito');
  console.log(victor);
  

})();
















