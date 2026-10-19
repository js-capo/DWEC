var fin = 0;
let cont = 3; // Contador de intentos

do {

    const op1 = Math.trunc(1 + Math.random()*10);
    const op2 = Math.trunc(1 + Math.random()*10);
    const oper = Math.trunc(1 + Math.random()*3);

    // MÉTODO 1

    //const pregunta = op1 + " +-*"[oper] + op2; // Los corchetes indican que posición de la cadena dada se quiere (1. " " \\ 2. "+" \\ 3. "-" \\ 4. "*")

    // MÉTODO 2: CON SWITCH

    let operador;

    switch (oper) {
    case 1:
        operador = "+";
        break;
    case 2:
        operador = "-";
        break;
    case 3:
        operador = "*";
        break;
    default:
        operador = "+"; // Por si da 0
    }

    const pregunta = op1 + operador + op2;

    const respUsuario = +prompt(pregunta); // Se pregunta la operación al usuario.

    const ok = eval(pregunta) === respUsuario; // Evalúa que el resultado sea CORRECTO

    if (ok) {

        alert(`OK`);
        fin = 1;

    } else {

        cont--; // Restamos un intento
        if (cont > 0) {

        alert(`NO OK: Le quedan ${cont} intentos`);

        } else {

        alert(`Verificación captcha fallida; se quedó sin intentos`);
        fin = 1;

        }

    }

} while (fin == 0)
