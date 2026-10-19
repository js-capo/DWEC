// VARIABLES GLOBALES
let operando1;
let operando2;
let operador;

// función captcha
const captcha = function() {
    // números aleatorios
    operando1 = Math.floor(Math.random() * 9) + 1;
    operando2 = Math.floor(Math.random() * 9) + 1;

    // operadores aleatorios (+, -, *)
    const operadores = ["+", "-", "*"];
    operador = operadores[Math.trunc(Math.random() * operadores.length)];

    // distrubuir los operandos y operadores en cada span correspondiente
    document.getElementById("op1").innerHTML = operando1;
    document.getElementById("op2").innerHTML = operando2;
    document.getElementById("oper").innerHTML = operador;
};

// ejecutar la función captcha
captcha();

// método de comprobbación de captcha
function comprobar() {
    const rdoUsuario = parseInt(document.getElementById("rdo").value);
    const rdoCorrecto = eval(`${operando1} ${operador} ${operando2}`);

    if (rdoUsuario === rdoCorrecto) {
        // habilitar el botón de enviar si el captcha es correcto
        document.getElementById("enviar").disabled = false;
        
        // limpiar el campo de captcha y 
        document.getElementById("captcha").innerHTML = "";
    } else {
        document.getElementById("enviar").disabled = true;
        document.getElementById("rdo").value = "";
        captcha(); // método para generar captcha
    }
}

// validación de usuario y contraseña
const validar = (user, pass) => {
    const usuarioValido = "julen";
    const passValida = "12345";

    if (user === usuarioValido && pass === passValida) {
        alert("Credenciales válidas.");
        
        document.getElementById("principal").innerHTML = `<h1>Bienvenido/a, ${user}</h1>`;
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
};