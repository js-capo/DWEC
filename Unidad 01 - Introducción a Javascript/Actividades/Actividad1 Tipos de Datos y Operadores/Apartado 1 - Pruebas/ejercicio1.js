function ej1() {
    return 4 + 3 * "2" % 2;
}

function ej2() {
    return 12 + "2" + 2;
}

function ej3() {
    return 12 + + "2" + 2;
}

function ej4() {
    return 12 + 2 + "2";
}

function ej5() {
    return 12 && true || undefined;
}

function ej6() {
    return 12 || true && undefined;
}

function ej7() {
    return "Hola" ** 2;
}

function ej8() {
    return ("")?"uno":"";
}

function ej9() {
    return undefined >= null;
}

function ej10() {
    return "12" == 12;
}

function ej11() {
    return "12" === 12;
}

function ej12() {
    return +"12" === 12;
}

function ej13() {
    return !!"true" !== true;
}

function ej14() {
    return 12>0 && null || "Hola" || undefined;
}

function ej15() {
    return 12>0 || null && "Hola" && undefined;
}

var var1 = 10;

function ej1Plus() {
    return ++var1 ** 2;
}

function ej2Plus() {
    return var1++ + ++var1;
}

// Pasar los datos a la consola

console.log("EJERCICIO 1 --> " + ej1());
console.log("EJERCICIO 2 --> " + ej2());
console.log("EJERCICIO 3 --> " + ej3());
console.log("EJERCICIO 4 --> " + ej4());
console.log("EJERCICIO 5 --> " + ej5());
console.log("EJERCICIO 6 --> " + ej6());
console.log("EJERCICIO 7 --> " + ej7());
console.log("EJERCICIO 8 --> " + ej8());
console.log("EJERCICIO 9 --> " + ej9());
console.log("EJERCICIO 10 --> " + ej10());
console.log("EJERCICIO 11 --> " + ej11());
console.log("EJERCICIO 12 --> " + ej12());
console.log("EJERCICIO 13 --> " + ej13());
console.log("EJERCICIO 14 --> " + ej14());
console.log("EJERCICIO 15 --> " + ej15());
console.log("Ejercicios Aparte");
console.log("EJERCICIO 1 PLUS --> " + ej1Plus());
var1 = 10;
console.log("EJERCICIO 2 PLUS --> " + ej2Plus());