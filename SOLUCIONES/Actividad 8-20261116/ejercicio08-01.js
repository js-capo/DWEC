// sacar numero de ocurrencias para cada numero en un array 
// con numeros repetidos
// La clave será el número en sí y el valor será el número de ocurrencias que aparece
let numeros = [2, 3, 1, 1, 2, 3, 1, 5, 6];

let resultado = new Map();

let resultado2 = {};

// Usando map
for (const numero of numeros) {
    if (resultado.has(numero)) {
        // actualizar, sumar una ocurrencia
        resultado.set(numero, resultado.get(numero) + 1);
    }
    else {
        // es la primera vez que veo el numero en la lista y 
        // tengo que meter la clave al map con valor 1.
        resultado.set(numero, 1);
    }
}

// Usando objeto o diccionario
for (const numero of numeros) {
    /* En este if si existe la ocurrencia nos dá diferente de undefined*/
    if (resultado2[numero] != undefined) {  // Si no existe la ocurrencia dá undefined y se iría al else
        /* Actualiza, sumar una ocurrencia*/
        resultado2[numero] = resultado2[numero] + 1;
    }
    else {
        // es la primera vez que veo el numero en la lista y tengo que meter la clave al map con valor 1.
        resultado2[numero] = 1;
    }
}

console.log(`El resultado usando map es: `);
console.log(resultado);

console.log(`El resultado usando un objeto (diccionario) es: `);
console.log(resultado2);

// Deberia salir algo tal que asi
/*
2: 2
3: 2
1: 3
5: 1
6: 1
*/