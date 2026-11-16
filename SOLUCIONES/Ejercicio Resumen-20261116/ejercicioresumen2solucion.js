/* Arrays */
const numeros = [];
for (let i = 0; i < 20; i++) {
    const aleatorio = 1 + parseInt(Math.random()*50);
    numeros.push(aleatorio);
}

console.log(`El array de numeros del que partimos es: ${numeros}`);

// utilizar metodos de array como filter, reduce, map

// 1. encontrar el primer numero con dos cifras
const primerNumeroConDosCifras = numeros.find(function(n) {
    if (n.toString().length == 2) {
        return n;
    }
});

console.log(`primero numero con dos cifras es: ${primerNumeroConDosCifras}`);

// 2. sacar los numeros multiplos de tres
const multiplosDeTres = numeros.filter(function(n) {
    return n % 3 == 0
});

console.log(`los numeros multiplos de tres son: ${multiplosDeTres}`);

// 3. sacar la suma de todos los elementos del array que sean mayor que 10;
const sumaMayoresQueDiez = numeros.reduce(function(acumulador, n) {
    if (n > 10) {
        acumulador = acumulador + n;
    }

    return acumulador;
}, 0);

console.log(`la suma de los numeros mayores que diez da: ${sumaMayoresQueDiez}`);


// 4. obtener un array en el que cada elemento sea el numero elevado a 2
const elevados = numeros.map((n) => Math.pow(n, 2));

console.log(`los numeros elevados a dos son: ${elevados}`);

// 5. copiar el array de numeros a otro array, y ordenar este segundo array de manera descendente
const ordenados = [];
for (const n of numeros) {
    ordenados.push(n);
}
// const ordenados = numeros.slice(); esto seria otra manera mas corta de copiar el array

ordenados.sort((a, b) => b - a);
console.log(`el array ordenado de forma descendente es ${ordenados}`);

/* Set */
const palabras = ["hola", "adios", "buenos dias", "hola"];
console.log(`Las palabras de las que partimos son: ${palabras}`);

// 6. Obtener las palabras sin duplicados.
const palabrasSinDuplicados = new Set(palabras);
console.log('Las palabras sin duplicados son: ');

// imprimir las palabras sin duplicados con un for
for (const p of palabrasSinDuplicados) {
    console.log(p);
}
