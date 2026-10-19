let cadena = prompt(`Introduzca una cadena`);

function mostrarInvertido() {
    let pos = cadena.length - 1;
    let cadenaFinal = cadena.charAt(pos);

    while (pos > -1) {
        --pos;
        cadenaFinal += cadena.charAt(pos);
    }
    return cadenaFinal;
}

function primero() {
    let pos = 0;
    let charFinal = cadena.charAt(pos);
    return charFinal;
}

function ultimo() {
    let pos = cadena.length -1;
    let charFinal = cadena.charAt(pos);
    return charFinal;
}

function versales() {
  if (cadena === null || cadena === undefined) {
    throw new Error("La cadena es null o undefined");
  }

  let limpia = cadena.trim();

  let palabras = limpia.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    let p = palabras[i];

    if (p.length > 0) {
      // Primera letra en mayúscula + resto en minúsculas
      let primera = p.charAt(0).toUpperCase();
      let resto = p.substring(1).toLowerCase();

      palabras[i] = primera.concat(resto);
    }
  }

  return palabras.join(" ");
}

function removeAcentos() {
    let cadenaFinal = "";

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);
        // Verificamos si es una vocal acentuada y la sustituimos
        if (caracter === "á") {
            cadenaFinal = cadenaFinal.concat("a");

        } else if (caracter === "é") {
            cadenaFinal = cadenaFinal.concat("e");

        } else if (caracter === "í") {
            cadenaFinal = cadenaFinal.concat("i");
            
        } else if (caracter === "ó") {
            cadenaFinal = cadenaFinal.concat("o");

        } else if (caracter === "ú") {
            cadenaFinal = cadenaFinal.concat("u");

        } else if (caracter === "Á") {
            cadenaFinal = cadenaFinal.concat("A");

        } else if (caracter === "É") {
            cadenaFinal = cadenaFinal.concat("E");

        } else if (caracter === "Í") {
            cadenaFinal = cadenaFinal.concat("I");

        } else if (caracter === "Ó") {
            cadenaFinal = cadenaFinal.concat("O");

        } else if (caracter === "Ú") {
            cadenaFinal = cadenaFinal.concat("U");

        } else {
            cadenaFinal = cadenaFinal.concat(caracter);
        }
    }

    return cadenaFinal;
}

function cadenaSucesiva() {
    let resultado = "";
    let pos = 0;
    let cadenaFinal = cadena;
    
    while (pos < cadenaFinal.length) {
        resultado += cadenaFinal;
        
        cadenaFinal = cadenaFinal.substring(pos + 1);
    }
    
    return resultado;
}

console.log(`Cadena : ` + cadena);
console.log(`Cadena Invertida : ` + mostrarInvertido());
console.log(`Primera Letra : ` + primero());
console.log(`Última Letra : ` + ultimo());
console.log(`Cadena Versales : ` + versales());
console.log(`Cadena sin Acentos : ` + removeAcentos());
console.log(`Cadena sucesivamente más pequeña : ` + cadenaSucesiva());