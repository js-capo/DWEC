var URL_LISTADO_CRIPTOMONEDAS = "https://r.jina.ai/https://api.coinlore.net/api/tickers";
var URL_DETALLE_CRIPTOMONEDA = "https://r.jina.ai/https://api.coinlore.net/api/ticker/?id=";

async function inicializar() {
    const tbody = document.getElementById("tbodyCriptomonedas");

    try {
        const respuesta = await fetch(URL_LISTADO_CRIPTOMONEDAS);
        const resultado = await obtenerJson(respuesta, "Error al obtener el listado");
        if (!Array.isArray(resultado.data)) {
            throw new Error("La respuesta de la API no contiene una lista de criptomonedas valida");
        }

        tbody.replaceChildren();
        resultado.data.forEach((criptomoneda) => {
            const fila = document.createElement("tr");

            for (const propiedad of ["symbol", "name", "id"]) {
                const celda = document.createElement("td");
                celda.textContent = criptomoneda[propiedad] ?? "";
                fila.appendChild(celda);
            }

            const celdaAcciones = document.createElement("td");
            const botonDetalle = document.createElement("button");
            botonDetalle.type = "button";
            botonDetalle.className = "btn btn-primary btn-sm";
            botonDetalle.textContent = "Mostrar Detalle";
            botonDetalle.addEventListener("click", () => mostrarDetalle(criptomoneda.id));
            celdaAcciones.appendChild(botonDetalle);
            fila.appendChild(celdaAcciones);
            tbody.appendChild(fila);
        });
    } catch (error) {
        tbody.replaceChildren();
        const filaError = document.createElement("tr");
        const celdaError = document.createElement("td");
        celdaError.colSpan = 4;
        celdaError.textContent = `No se pudo cargar el listado de criptomonedas: ${error.message}`;
        filaError.appendChild(celdaError);
        tbody.appendChild(filaError);
    }
}

async function mostrarDetalle(id) {
    const contenedor = document.getElementById("contenedorTarjetaCriptomoneda");

    try {
        const respuesta = await fetch(`${URL_DETALLE_CRIPTOMONEDA}${encodeURIComponent(id)}`);
        const resultado = await obtenerJson(respuesta, "Error al obtener el detalle");
        if (!Array.isArray(resultado) || resultado.length === 0) {
            throw new Error("La API no ha devuelto el detalle de esta criptomoneda");
        }

        const criptomoneda = resultado[0];
        const tarjeta = document.createElement("div");
        tarjeta.className = "card text-left";

        const titulo = document.createElement("div");
        titulo.className = "card-header";
        titulo.textContent = `${criptomoneda.name} (${criptomoneda.symbol})`;
        tarjeta.appendChild(titulo);

        const contenido = document.createElement("div");
        contenido.className = "card-body";

        const datos = [
            ["Ranking global", criptomoneda.rank],
            ["Precio actual (USD)", formatearPrecio(criptomoneda.price_usd)],
            ["Cambio en las ultimas 24 horas", formatearPorcentaje(criptomoneda.percent_change_24h)]
        ];

        datos.forEach(([etiqueta, valor]) => {
            const parrafo = document.createElement("p");
            parrafo.className = "card-text";
            parrafo.textContent = `${etiqueta}: ${valor}`;
            contenido.appendChild(parrafo);
        });

        tarjeta.appendChild(contenido);
        contenedor.replaceChildren(tarjeta);
    } catch (error) {
        contenedor.textContent = `No se pudo cargar el detalle de la criptomoneda: ${error.message}`;
    }
}

async function obtenerJson(respuesta, mensajeError) {
    if (!respuesta.ok) {
        throw new Error(`${mensajeError} (${respuesta.status})`);
    }

    let texto = await respuesta.text();
    const marcador = "Markdown Content:\n";
    const inicioContenido = texto.indexOf(marcador);
    if (inicioContenido !== -1) {
        texto = texto.slice(inicioContenido + marcador.length).trim();
    }

    try {
        return JSON.parse(texto);
    } catch {
        throw new Error("La respuesta de la API no contiene JSON valido");
    }
}

function formatearPrecio(precio) {
    const valor = Number(precio);
    return Number.isFinite(valor)
        ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valor)
        : precio;
}

function formatearPorcentaje(porcentaje) {
    const valor = Number(porcentaje);
    return Number.isFinite(valor) ? `${valor.toFixed(2)}%` : porcentaje;
}
