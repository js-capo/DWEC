
/* guardamos los objetos de cada monumento en un array*/
let monumentos = [   
    {titulo:"El Edificio del Ayuntamiento", texto:"De pie al lado del bonito estuario, en la zona del Casco Viejo, el Ayuntamiento de Bilbao es un gran ayuntamiento, que data de la década de 1890. Con una gran fachada de estilo barroco y muchas características impresionantes, el interior es igualmente suntuoso y contiene una escalera imponente y una lujosa decoración. Por las mañanas se pueden realizar visitas guiadas al edificio.",foto:"https://commons.wikimedia.org/wiki/Special:FilePath/Ayuntamiento_Bilbao.jpg"},
    {titulo:"Puente Colgante", texto:"Catalogado como un sitio importante del patrimonio de la ciudad, el Puente de Vizcaya se encuentra en las afueras de Bilbao y es un gran puente de hierro con una plataforma mecánica en movimiento que transporta personas y vehículos a través del río.  Construido a finales del siglo XIX, el puente conecta las zonas de Getxo y Portugalete y cuenta con magníficas vistas desde los ascensores y visitas guiadas.",foto:"https://commons.wikimedia.org/wiki/Special:FilePath/Portugalete_Bridge.jpg"},
    {titulo:"Palacio de Chávarri", texto:"Es la sede oficial del Gobierno Civil de Vizcaya (conocido localmente como el Gobierno Civil de Vizcaya). Este importante edificio combina una serie de estilos y elementos arquitectónicos increibles. Inaugurado en 1890, el palacio fue construido originalmente para Bilbao por el empresario Víctor Chávarri y es uno de los hitos más destacados alrededor de la Plaza Moyua, con techos de doble pendiente, balcones y ventanas en todas las formas y tamaños.",foto:"https://commons.wikimedia.org/wiki/Special:FilePath/Chavarri_palace.jpg"},
    {titulo:"El Palacio de Ibaigane", texto:"Famoso por ser el hogar del Club Atlético de Bilbao, una sociedad fundada en el año 1900, el Palacio de Ibaigane está cerca de la Plaza Circular. Originalmente la gran residencia de Ramón de la Sota, un empresario vasco local, el palacio contiene muchos elementos de época y una gran sala de trofeos.",foto:"https://commons.wikimedia.org/wiki/Special:FilePath/Bilbao_-_Palacio_Ibaigane.jpg"},
    {titulo:"La Catedral de Santiago", texto:"Uno de los lugares más antiguos del Casco Viejo de Bilbao, la catedral de Santiago se remonta al siglo XVI y cuenta con una arquitectura de estilo gótico, con muchas de sus características sobresalientes. Instalada en la Plaza de Santiago, la Catedral ofrece misas durante toda la semana, con un interior espacioso muy histórico.",foto:"https://commons.wikimedia.org/wiki/Special:FilePath/Catedral_de_Santiago_(Bilbao)._Portada_principal.jpg"},
]

//const divCards = document.getElementById("cards");
const divCards = document.querySelector("#cards");
let html = "";

/*Nos recorremos los monumentos y por cada uno vamos guardando el HTML que representará su tarjeta  
y se lo asignamos en la linea 29, una vez procesado el bucle*/
monumentos.forEach( m => {
    html += 
    `<div class="card mb-5">
      <img src="${m.foto}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.titulo}</h5>
        <p class="card-text">${m.texto}</p>
        <button class="btn btn-small btn-danger borrar">Borrar</button>
      </div>
    </div>`
});
/* Con esta asignación ya tenemos todas las tarjetas dentro del contenedor "#cards"*/
/* necesitamos poner innerHTML para que interprete el código HTML */
divCards.innerHTML = html;

/* ACTIVIDAD 12 */
// Obtener los elementos mediante sus identificadores usando querySelector
const btnOscuro = document.querySelector("#btnOscuro");
const btnClaro = document.querySelector("#btnClaro");

btnOscuro.addEventListener("click", function() {
  // establecer classList del body como "dark"
  document.body.classList = "dark";
});

btnClaro.addEventListener("click", function() {
  // establecer classList del body como vacio (sin clases)
  document.body.classList = "";
});

// obtener todos los botones que contengan una clase css "borrar"
const botonesBorrar = document.querySelectorAll(".borrar");

// recorrer todos los botones borrar
for (const btnBorrar of botonesBorrar) {
  btnBorrar.addEventListener("click", function(ev) {
    // ev.target me da el elemento sobre el que se ha clicado.
    // viendo la estructura html, tengo que borrar el padre de su padre
    const elementoClicado = ev.target;
    const padre = elementoClicado.parentElement;
    const padreDelPadre = padre.parentElement;
    
    // eliminar tarjeta
    padreDelPadre.remove();
  });
}