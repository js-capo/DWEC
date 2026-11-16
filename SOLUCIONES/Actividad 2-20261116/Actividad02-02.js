let valor=+prompt("Introduzca un valor entero");
const datos = "0123456789ABCDEF";
if (isNaN(valor)){
    alert("El valor introducido no es correcto");
} else {
    let hexadecimal = "";
    valor = parseInt(valor);
    while (valor>15){
        const resto = valor%16;
        valor = parseInt(valor / 16);
        /* al acceder a datos[resto], estoy cogiendo el caracter adecuado hexadecimal, y lo guardo en hex */
        hex = datos[resto];
        // concateno a hex por delante con lo que ya tenia en hexadecimal.
        hexadecimal = hex + hexadecimal;
        /*switch (resto){
            case 10:
                hex='A';
                break;
            case 11:
                hex='B';
                break;
            case 12:
                hex='C';
                break;
            case 13:
                hex='D';
                break;
            case 14:
                hex='E';
                break;
            case 15:
                hex='F';
                break;
            default:
                hex = resto;
                break;
        }*/
        //console.log(hexadecimal);
    }
    /* cuando el resto es menor de 16 nos salimos del bucle y cogemos de la cadena datos 
    la posición de valor, porque ya no se puede ir dividiendo entre 16*/
    hex = datos[valor];
    hexadecimal = hex + hexadecimal;
    console.log(hexadecimal);
}