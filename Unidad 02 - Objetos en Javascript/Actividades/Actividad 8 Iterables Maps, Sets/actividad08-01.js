let numeros = [2, 3, 1, 1, 2, 3, 1, 5, 6];

let resultado = new Map();

let resultado2 = {};

for (const numero of numeros) {
    if (resultado.has(numero)) {
        resultado.set(numero, resultado.get(numero) + 1);
    }
    else {
        resultado.set(numero, 1);
    }
}

for (const numero of numeros) {
    if (resultado2[numero] != undefined) {
        resultado2[numero] = resultado2[numero] + 1;
    }
    else {
        resultado2[numero] = 1;
    }
}

console.log(`El resultado usando map es: `);
console.log(resultado);

console.log(`El resultado usando un objeto (diccionario) es: `);
console.log(resultado2);