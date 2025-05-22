import * as separadores from './separadores.js'
//
(() => {

  function genericFunction<T> (arg: T):T {
  return arg;
}



let res = genericFunction<string>('fff');
console.log(res);
res = genericFunction<number>(70);//revisar esta parte. Aunque TS da error JS se lo traga
console.log(res);

let res2 = genericFunction<number>(80);
console.log(res2);



})();
















