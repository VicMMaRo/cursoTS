//OJO!!! este import me da error, arreglar.
//import * as separadores from './separadores.js'


//...rest
(() => {
  
  const createName = (name:string, ...rest:any):string => {
    return `${name} ${rest.join(' ')}`;
  };

  const surname = (surname:string, ...rest:any):string => {
    return `${surname} ${rest.join(' ')}`;
  };

  const fullName = (name:string, surname:string):string => {
    return `${name} ${surname}`;
  }

  //creamos nombre. Llamamos  ala función y pasamos nombre
  let name = createName("Victor" ,"Manuel" ,"Maldonado" ,"Rodado");
  console.log(name);

  let resSurName = surname("Perez" ,"De la Fuente" ,"Garcia" ,"Blanco");
  console.log(resSurName);

  let resFullName = fullName(name, resSurName);
  console.log(resFullName);

})();
















