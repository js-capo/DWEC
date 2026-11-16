// Dado un array de numeros repetidos convertirlo a un Set (un set no contiene repetidos)
let numeros = [1,2,3,1,5,4,6,2,3];

let conjuntoNumeros = new Set(numeros); // funciona porque estamos usando new Set([iterable]); De esta primera 
//forma crea el set sin repetidos directamente, sin necesidad de recorrerlo el array original

let otroConjunto = new Set();
for(const numero of numeros) {
    // al tratarse de un set, cuando intenta hacer un add de un elemento que ya previamente
    // hemos añadido, no se vuelve a agregar.
    otroConjunto.add(numero);
}

console.log(numeros);
console.log(conjuntoNumeros);
console.log(otroConjunto);

