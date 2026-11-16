let operando1, operando2, operador;
let captcha = function(){
    operando1 = parseInt(Math.random()*10) + 1;
    operando2 = parseInt(Math.random()*10) + 1;
    operador = "+-*"[parseInt(Math.random()*3)];
    /* Pinta en el HTML los dos operandos y el operador en la capa del HTML*/
    document.getElementById("op1").innerHTML = operando1;
    document.getElementById("op2").innerHTML = operando2;
    document.getElementById("oper").innerHTML = operador;
}

captcha();

function comprobar(){
    /* recoge lo que se ha escrito en la caja y lo intenta convertir a entero*/
    const rdoUsuario = parseInt(document.getElementById("rdo").value);
    /* con eval lo que se hace es evaluar el código javascript */
    const rdo = eval(`${operando1} ${operador} ${operando2}` );
    // Si acierta el captcha habilita el botón de enviar y elimina el html del div con id "captcha"
    if (rdoUsuario === rdo){
        document.getElementById("enviar").disabled = false;
        document.getElementById("captcha").innerHTML = "";
    } else {
        document.getElementById("rdo").value = "";
        captcha();
    }
}

const validar = (usuario,password) => {
    if (usuario == 'luis' && password == '12345'){
        alert("Bienvenido!");
        document.getElementById("principal").innerHTML = `<h1>Bienvenido ${usuario}</h1>`;
    } else {
        document.getElementById("captcha").innerHTML = 
        /* En caso de error te saca un mensaje de error dentro de un div con un formato determinado*/
        `<div class="alert alert-danger" >
        Usuario / password erróneos
        </div>`;
        document.getElementById("pwd").value = "";
    }
}