import * as separadores from './separadores.js';
//Objetos tipados
(() => {
    //para tipar un objeto en TS ponemos dos puntos(:) después del nombre del objeto y entre llaves la estructura del objeto.
    let miObjTipado = {
        name: 'Victor',
        surName: 'Maldonado Rodado',
        getFullName: function () {
            let fullName = this.name + ' ' + this.surName;
            return fullName;
        }
    };
    console.log(miObjTipado.getFullName());
    //ahora podemos redefinir el objeto y quitar la función getFullName ya que es opcional ?. Si quitamos la opción de que sea opcional TS nos dará un error. Quitar arriba la ? para verlo.
    separadores.sepCorto();
    miObjTipado = {
        name: 'Victor',
        surName: 'Maldonado Rodado',
    };
    console.log(miObjTipado);
    separadores.sepLargo();
    //creamos un objeto de tipo Person
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
