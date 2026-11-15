async function inicializar() {
  const criptomonedas = await obtenerCriptomonedas();
  rellenarTablaCriptomonedas(criptomonedas);
  establecerOnClickBotones();
}

async function obtenerCriptomonedas() {
  const respuestaCriptomonedas = await fetch("https://api.coinlore.net/api/tickers/");
  const datos = await respuestaCriptomonedas.json();
  return datos.data;
}

async function obtenerDetalleCriptomoneda(idCriptomoneda) {
  const respuestaDetalleCriptomoneda = await fetch(`https://api.coinlore.net/api/ticker/?id=${idCriptomoneda}`);
  const detalles = await respuestaDetalleCriptomoneda.json();
  return detalles[0];
}

function rellenarTablaCriptomonedas(datosCriptomonedas) {
  const tbodyCriptomonedas = document.getElementById("tbodyCriptomonedas");

  for(const datoCriptomoneda of datosCriptomonedas) {
    const tr = document.createElement("tr");

    const tdSimbolo = document.createElement("td");
    const pSimbolo = document.createElement("p");
    pSimbolo.innerText = datoCriptomoneda.symbol;
    tdSimbolo.appendChild(pSimbolo);

    const tdNombre = document.createElement("td");
    const pNombre = document.createElement("p");
    pNombre.innerText = datoCriptomoneda.name;
    tdNombre.appendChild(pNombre);

    const tdId = document.createElement("td");
    const pId = document.createElement("p");
    pId.innerText = datoCriptomoneda.id;
    tdId.appendChild(pId);

    const tdBotones = document.createElement("td");
    const btnMostrarDetalle = document.createElement("button");
    btnMostrarDetalle.innerText = "Mostrar Detalle";
    btnMostrarDetalle.classList = "btn btn-primary";
    tdBotones.appendChild(btnMostrarDetalle);

    tr.appendChild(tdSimbolo);
    tr.appendChild(tdNombre);
    tr.appendChild(tdId);
    tr.appendChild(tdBotones);

    tbodyCriptomonedas.appendChild(tr);
  }
}

function establecerOnClickBotones() {
  const tbodyCriptomonedas = document.getElementById("tbodyCriptomonedas");
  const trs = tbodyCriptomonedas.querySelectorAll("tr");

  for(const tr of trs) {
    const tds = tr.querySelectorAll("td");
    const idCriptomoneda = tds[2].innerText;
    const btnMostrar = tds[3].querySelector("button");
    btnMostrar.addEventListener("click", async function() {
      const detalleCriptomoneda = await obtenerDetalleCriptomoneda(idCriptomoneda);
      const tarjeta = crearTarjetaDetalleCriptomoneda(detalleCriptomoneda);
      pintarTarjetaDetalleCriptomoneda(tarjeta);
    })
  }
}

function crearTarjetaDetalleCriptomoneda(detalleCriptomoneda) {
  const divCard = document.createElement("div");
  divCard.classList = "card my-2 p-5";
  divCard.style = "width: 90%";

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = detalleCriptomoneda.name;

  const divCardBody = document.createElement("div");
  divCardBody.classList = "card-body";

  const cardText = document.createElement("ul");
  cardText.classList = "text-left";

  const liNumRanking = document.createElement("li");
  liNumRanking.innerText = `Ranking global: ${detalleCriptomoneda.rank}`;
  cardText.appendChild(liNumRanking);

  const liPrecioActualDolares = document.createElement("li");
  liPrecioActualDolares.innerText = `Precio actual en dólares (USD): $${detalleCriptomoneda.price_usd}`;
  cardText.appendChild(liPrecioActualDolares);

  const liCambio24h = document.createElement("li");
  liCambio24h.innerText = `Cambio en 24h: ${detalleCriptomoneda.percent_change_24h}%`;
  cardText.appendChild(liCambio24h);

  divCardBody.appendChild(cardTitle);
  divCardBody.appendChild(cardText);

  divCard.appendChild(divCardBody);
  return divCard;
}

function pintarTarjetaDetalleCriptomoneda(tarjeta) {
  const contenedorDetalleCriptomoneda = document.getElementById("contenedorTarjetaCriptomoneda");

  while (contenedorDetalleCriptomoneda.hasChildNodes()) {
    contenedorDetalleCriptomoneda.removeChild(contenedorDetalleCriptomoneda.firstChild);
  }

  contenedorDetalleCriptomoneda.appendChild(tarjeta);
}