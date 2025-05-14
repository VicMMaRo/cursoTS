   let familia = {
        padre: 'juan',
        madre: 'maria',
        hijos: ['victor', 'lucas', 'pedro', 'sara', 'laura'],
    };

    //desestructurando el objeto
    let { padre, madre, hijos } = familia;

    console.log(padre);
    console.log(madre);

    for (const clave in hijos) {
        const valor = hijos[clave];
        console.log(valor);
    }

    //recorriendo el objeto con un bucle anidado para mostrar los valores de los hijos
    console.log('-------------------------------------------------------------------');

    console.log('ejemplo combinado for in y for of');
    for (const clave in familia) {
        const valor = familia[clave];
        if (clave === 'hijos' && Array.isArray(valor)) {
            console.log(`Los hijos son:`);
            for (const hijo of valor) {
                console.log(`- ${hijo}`);
            }
        }
        else {
            console.log(`${clave}: ${valor}`);
        }
    }

    console.log('ejemplo usando los dos con for in');
    for (const clave in familia) {
    const valor = familia[clave];
    if (clave === 'hijos' && Array.isArray(valor)) {
        console.log(`Los hijos son:`);
        for (const indice in valor) {  // Cambiado a for...in
            console.log(`- ${valor[indice]}`);  // Accedemos al valor usando el índice
        }
    }
    else {
        console.log(`${clave}: ${valor}`);
    }
}

/*
Diferencias clave en este contexto:
Sintaxis:

for...of te da directamente el valor (hijo)

for...in te da el índice/clave, por lo que debes acceder al valor con valor[indice]

Rendimiento:

for...of es generalmente más rápido para arrays

for...in es más lento porque debe verificar todas las propiedades enumerables

Seguridad:

for...in puede iterar sobre propiedades heredadas si el prototipo del array ha sido modificado

for...of solo itera sobre los valores propios del array

¿Cuál es mejor en este caso?
Mejor opción: Mantener for...of (versión original) porque:

Es más legible (acceso directo al valor)

Es más seguro (no afectado por modificaciones al prototipo)

Es más idiomático para iterar arrays

Cuándo usar for...in en arrays:

Cuando necesites específicamente los índices, no solo los valores

Cuando estés trabajando con objetos array-like que no son verdaderos arrays
 */