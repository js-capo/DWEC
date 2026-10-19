const efectivo = {
    saldo: 0,

    ingresar(cantidad) {
        if (isNaN(cantidad) || cantidad <= 0) {
            // Para que devuelva mensajes que se vean
            mensaje.textContent = "El valor introducido no es válido.";
            return;
        }
        this.saldo += cantidad;
        // Para que devuelva mensajes que se vean
        mensaje.textContent = `Has ingresado ${cantidad}€.`;
    },

    gastar(cantidad) {
        if (isNaN(cantidad) || cantidad <= 0) {
            // Para que devuelva mensajes que se vean
            mensaje.textContent = "El valor introducido no es válido.";
            return;
        }
        if (cantidad > this.saldo) {
            // Para que devuelva mensajes que se vean
            mensaje.textContent = `No hay saldo suficiente para un gasto de ${cantidad}€`;
            return;
        }
        this.saldo -= cantidad;
        // Para que devuelva mensajes que se vean
        mensaje.textContent = `Has gastado ${cantidad}€.`;
    }
};

// Capturar los elementos
const inputCantidad = document.getElementById("cantidad");
const btnIngresar   = document.getElementById("btnIngresar");
const btnGastar     = document.getElementById("btnGastar");
const mostrarSaldo  = document.getElementById("saldo");
const mensaje       = document.getElementById("mensaje");

// Función de refresco: Método mostrar()
function actualizarSaldo() {
    mostrarSaldo.textContent = `Saldo : ${efectivo.saldo} €`;
}

// Los listeners: manejadores de eventos
btnIngresar.addEventListener("click", () => {
    const cantidad = Number(inputCantidad.value);
    efectivo.ingresar(cantidad);
    inputCantidad.value = "";
    actualizarSaldo();
});

btnGastar.addEventListener("click", () => {
    const cantidad = Number(inputCantidad.value);
    efectivo.gastar(cantidad);
    inputCantidad.value = "";
    actualizarSaldo();
});

