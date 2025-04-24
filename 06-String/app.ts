//String
(() => {
  //inferencia de tipo
  const K1 = "texto";
  const K2 = "texto 2";
  const k3 = "texto3";

  //tipado explícito
  const K4:string = "texto tipado";
  const K5:string = "texto tipado 2";
  const k6:string = "texto tipado 3";

  //va a da error porque es undefined, en la psoción 20 del string no hay nada
  //console.log(K4[20].toUpperCase());
  //para tratar este undefined podemos usar el operador ? "operador de propiedad opcional"
  console.log(K4[20]?.toUpperCase() || "No existe la posición");
  console.log(K4[20]?.toUpperCase() || null);
  console.log(K4[20]?.toUpperCase() || -1);

  //aqui saldrá "no existe la posición" ya que con el y(&&) sigue la regla y aplica el último true. En este caso las dos opciones son true, ya que la posición dos existe y el string es true tb
  console.log(K4[2]?.toUpperCase() && "No existe la posición");
})();















