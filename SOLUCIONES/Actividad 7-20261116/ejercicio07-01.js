// 1. Paso previo. Generar array de 50 numeros
const numeros = [];
for(let i = 1; i <= 50; i++) {
    numeros.push(i);
}

console.log(`El array de numeros generados es: ${numeros}`);

// 2. Obtener un array que nos devuelva en cada posicion el doble de su valor en dicha posicion (usar map)
const dobles = numeros.map(n => n * 2);
console.log(`Dobles: ${dobles}`);

// 3. Obtener un array solo con los numeros pares (usar filter)
const pares = numeros.filter(n => n % 2 == 0);
console.log(`Pares: ${pares}`);

// 4. Obtener el array pero ordenado de mayor a menor (no vale usar .reverse, aplicar usando sort)
// Clono el array, ya que sort modifica el array sobre el que actua ( y no interesa modificar el array original )
const decrecientes = Array.from(numeros);
// ordenas
// Alternativa 1 usando funcion flecha
decrecientes.sort( (n1, n2) => -(n1 - n2) );

// Alternativa usando funcion normal
/*
decrecientes.sort(function (n1, n2) {
    if (n1 < n2) {
        return 1;
    }
    else if (n1 > n2) {
        return -1;
    }
    else return 0;
});
*/
console.log(`Ordenados Decreciente: ${decrecientes}`);
// imprimimos el array original para verificar que al actuar sobre la copia, solo ha ordenado la copia.
console.log(`El array de numeros original: ${numeros}`);


// 6. Dado este array de objetos
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Antonio", edad: 45 },
    { nombre: "Jose", edad: 15 },
    { nombre: "Diego", edad: 27 },
    { nombre: "Ana", edad: 18 },
    { nombre: "Maria", edad: 19 }
];

// 6.A Obtener un array con los nombres de las personas (usar map)
// Salida esperada [ "Juan", "Antonio", "Jose", "Diego", "Ana", "Maria" ]
let nombres = personas.map( p => p.nombre );
console.log(`Nombres: ${nombres}`);
// 6.B Obtener las personas mayores de edad (usando filter)
let mayoresDeEdad = personas.filter( p => p.edad > 18);
console.log(`Mayores de edad:`);
mayoresDeEdad.forEach(function(elemento) {
    console.log(elemento);
})

// 6.C Ordenar personas por edad (usando sort) de mas jovenes a mas mayores
personas.sort( (p1, p2) => p1.edad - p2.edad );
console.log(`Personas despues de ordenar por edad:`);

personas.forEach(function(elemento) {
    console.log(elemento);
});

