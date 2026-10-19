let numeros = [1,2,3,1,5,4,6,2,3];

let conjuntoNumeros = new Set(numeros);

let otroConjunto = new Set();
for(const numero of numeros) {
    otroConjunto.add(numero);
}

console.log(numeros);
console.log(conjuntoNumeros);
console.log(otroConjunto);

