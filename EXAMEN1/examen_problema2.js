var URL_LISTADO_PRODUCTOS = "https://dummyjson.com/products?limit=20";
var URL_DETALLE_PRODUCTOS = "https://dummyjson.com/products/";

async function inicializar() {
    const tbody = document.getElementById("tbodyProductos");

    try {
        const respuesta = await fetch(URL_LISTADO_PRODUCTOS);
        const resultado = await obtenerJson(respuesta, "Error al obtener el listado");

        if (!resultado || !Array.isArray(resultado.products)) {
            throw new Error("La respuesta de la API no contiene una lista de productos válida");
        }

        tbody.replaceChildren();
        resultado.products.forEach((producto) => {
            const fila = document.createElement("tr");

            const celdaImagen = document.createElement("td");
            const imagen = document.createElement("img");
            imagen.src = producto.thumbnail || (Array.isArray(producto.images) ? producto.images[0] : "");
            imagen.alt = producto.title || "Producto";
            imagen.loading = "lazy";
            imagen.style.maxWidth = "60px";
            celdaImagen.appendChild(imagen);
            fila.appendChild(celdaImagen);

            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = producto.title ?? "";
            fila.appendChild(celdaNombre);

            const celdaCategoria = document.createElement("td");
            celdaCategoria.textContent = producto.category ?? "";
            fila.appendChild(celdaCategoria);

            const celdaId = document.createElement("td");
            celdaId.textContent = producto.id ?? "";
            fila.appendChild(celdaId);

            const celdaAcciones = document.createElement("td");
            const botonDetalle = document.createElement("button");
            botonDetalle.type = "button";
            botonDetalle.className = "btn btn-primary btn-sm";
            botonDetalle.textContent = "Mostrar Detalle";
            botonDetalle.addEventListener("click", () => mostrarDetalle(producto.id));
            celdaAcciones.appendChild(botonDetalle);
            fila.appendChild(celdaAcciones);

            tbody.appendChild(fila);
        });
    } catch (error) {
        tbody.replaceChildren();
        const filaError = document.createElement("tr");
        const celdaError = document.createElement("td");
        celdaError.colSpan = 5;
        celdaError.textContent = `No se pudo cargar el listado de productos: ${error.message}`;
        filaError.appendChild(celdaError);
        tbody.appendChild(filaError);
    }
}

async function mostrarDetalle(id) {
    const contenedor = document.getElementById("contenedorTarjetaProducto");

    try {
        const respuesta = await fetch(`${URL_DETALLE_PRODUCTOS}${encodeURIComponent(id)}`);
        const producto = await obtenerJson(respuesta, "Error al obtener el detalle");

        if (!producto || typeof producto !== "object") {
            throw new Error("La API no ha devuelto el detalle de este producto");
        }

        const tarjeta = document.createElement("div");
        tarjeta.className = "card text-left";

        const titulo = document.createElement("div");
        titulo.className = "card-header";
        titulo.textContent = `${producto.title || "Producto"} (${producto.brand || "Sin marca"})`;
        tarjeta.appendChild(titulo);

        const contenido = document.createElement("div");
        contenido.className = "card-body";

        const imagenProducto = document.createElement("img");
        imagenProducto.src = producto.thumbnail || (Array.isArray(producto.images) ? producto.images[0] : "");
        imagenProducto.alt = producto.title || "Producto";
        imagenProducto.className = "card-img-top";
        contenido.appendChild(imagenProducto);

        const datos = [
            ["Categoría", producto.category],
            ["Precio", formatearPrecio(producto.price)],
            ["Descuento", formatearPorcentaje(producto.discountPercentage)],
            ["Valoración", `${Number(producto.rating ?? 0).toFixed(2)} / 5`],
            ["Stock", producto.stock]
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
        contenedor.textContent = `No se pudo cargar el detalle del producto: ${error.message}`;
    }
}

async function obtenerJson(respuesta, mensajeError) {
    if (!respuesta.ok) {
        throw new Error(`${mensajeError} (${respuesta.status})`);
    }

    const texto = await respuesta.text();

    try {
        return JSON.parse(texto);
    } catch {
        throw new Error("La respuesta de la API no contiene JSON válido");
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