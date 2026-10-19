// objeto efectivo --> tiene TODO dentro
const efectivo = {
    // propiedad saldo
    saldo: 0,

    // método para ingresar
    ingresar(cantidad) {
        // por si el usuario introduce valores no válidos
        if (isNaN(cantidad) || cantidad <= 0) {
            console.log(`El valor introducido no es válido, inténtelo de nuevo.`);
        } else {
            this.saldo += cantidad;
            console.log(`Has ingresado ${cantidad}.`);
            console.log(`Saldo actual: ${this.saldo}`);
        }

    },

    // método para gastar
    gastar(cantidad) {
        // por si el usuario introduce valores mayores que el saldo
        if (cantidad > this.saldo) {
            console.log(`No hay saldo suficiente para un gasto de ${cantidad}€`);
            return;

        } else if (isNaN(cantidad) || cantidad <= 0) {
            console.log(`El valor introducido no es válido, inténtelo de nuevo.`);

        } else {
            this.saldo -= cantidad;
            console.log(`Has gastado ${cantidad}.`);
            console.log(`Saldo actual: ${this.saldo}`);

        }

    }

};

// Saldo inicial
efectivo.saldo = Number(prompt("Introduzca el saldo inicial"));
console.log(`Efectivo inicial: ${efectivo.saldo}€`);

// Bucle
let opcion;

do {
    opcion = prompt("¿Qué deseas hacer? (ingresar / gastar)");

    if (opcion === null || opcion === "") break;   // salir del bucle

    const cantidad = Number(prompt("Introduzca la cantidad"));

    if (opcion.toLowerCase() === "ingresar") {
        efectivo.ingresar(cantidad);

    } else if (opcion.toLowerCase() === "gastar") {
        efectivo.gastar(cantidad);

    } else {
        console.log("Opción no reconocida.");

    }

} while (true);

