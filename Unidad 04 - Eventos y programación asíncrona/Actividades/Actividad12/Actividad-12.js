const monumentos = [
    {
        titulo: "El Edificio del Ayuntamiento",
        cuerpo: "De pie al lado del bonito estuario, en la zona del Casco Viejo, el Ayuntamiento de Bilbao es un gran ayuntamiento, que data de la década de 1890. Con una gran fachada de estilo barroco y muchas características impresionantes, el interior es igualmente suntuoso y contiene una escalera imponente y una lujosa decoración. Por las mañanas se pueden realizar visitas guiadas al edificio.",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Bilbao_-_Ayuntamiento_24.jpg/330px-Bilbao_-_Ayuntamiento_24.jpg"
    },
    {
        titulo: "Palacio de Chávarri",
        cuerpo: "Es la sede oficial del Gobierno Civil de Vizcaya. Este importante edificio combina una serie de estilos y elementos arquitectónicos increíbles. Inaugurado en 1890, el palacio fue construido originalmente para Bilbao por el empresario Victor Chávarri y es uno de los hitos más destacados alrededor de la Plaza Moyua.",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Txabarri_jauregia%2C_Bilbo._Euskal_Herria.jpg/330px-Txabarri_jauregia%2C_Bilbo._Euskal_Herria.jpg"
    },
    {
        titulo: "La Catedral de Santiago",
        cuerpo: "Uno de los lugares más antiguos del Casco Viejo de Bilbao, la catedral de Santiago se remonta al siglo XVI y cuenta con una arquitectura de estilo gótico, con muchas de sus características sobresalientes.",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Bilbao_-_Catedral_de_Santiago_51.JPG/330px-Bilbao_-_Catedral_de_Santiago_51.JPG"
    },
    {
        titulo: "Puente Colgante",
        cuerpo: "Catalogado como un sitio importante del patrimonio de la ciudad, el Puente de Vizcaya se encuentra en las afueras de Bilbao y es un gran puente de hierro con una plataforma mecánica en movimiento que transporta personas y vehículos a través del río.",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Zubia_jun.jpg/330px-Zubia_jun.jpg"
    },
    {
        titulo: "El Palacio de Ibaigane",
        cuerpo: "Famoso por ser el hogar del Club Atlético de Bilbao, el Palacio de Ibaigane está cerca de la Plaza Circular. Originalmente la gran residencia de Ramón de la Sota, el palacio contiene muchos elementos de época y una gran sala de trofeos.",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Palacio_de_Ibaigane.jpg/250px-Palacio_de_Ibaigane.jpg"
    }
];

const contenedor = document.getElementById("cards");
const botonOscuro = document.getElementById("botonOscuro");
const botonClaro = document.getElementById("botonClaro");

function renderizarMonumentos() {
    contenedor.innerHTML = monumentos
        .map((monumento) => `
            <article class="card mb-4">
                <img src="${monumento.foto}" class="card-img-top" alt="${monumento.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${monumento.titulo}</h5>
                    <p class="card-text">${monumento.cuerpo}</p>
                    <button class="btn btn-sm btn-danger borrar">Borrar</button>
                </div>
            </article>
        `)
        .join("");

    document.querySelectorAll(".borrar").forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const tarjeta = event.target.closest(".card");
            if (tarjeta) {
                tarjeta.remove();
            }
        });
    });
}

botonOscuro.addEventListener("click", () => {
    document.body.classList.add("dark");
});

botonClaro.addEventListener("click", () => {
    document.body.classList.remove("dark");
});

renderizarMonumentos();
