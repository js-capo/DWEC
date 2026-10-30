const OPENWEATHER_API_KEY = '2305cd81ad9127e93f21187a6e7f479b';

const bilbao = {
    latitud: 43.26271,
    longitud: -2.92528
};

const forecastContainer = document.getElementById('forecast');
const cityName = document.getElementById('city-name');

async function obtenerDatos(url) {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error al consultar la API: ${respuesta.status}`);
    }

    return await respuesta.json();
}

function formatearFechaHora(timestamp, zonaHoraria) {
    const fecha = new Date((timestamp + zonaHoraria) * 1000);
    const dosDigitos = (valor) => String(valor).padStart(2, '0');

    return `${fecha.getUTCFullYear()}-${dosDigitos(fecha.getUTCMonth() + 1)}-${dosDigitos(fecha.getUTCDate())} ${dosDigitos(fecha.getUTCHours())}:${dosDigitos(fecha.getUTCMinutes())}:${dosDigitos(fecha.getUTCSeconds())}`;
}

function construirTarjeta(datos, zonaHoraria) {
    const descripcion = datos.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${datos.weather[0].icon}.png`;

    return `
        <article class="weather-card">
            <p class="weather-date"><strong>Fecha/Hora:</strong> ${formatearFechaHora(datos.dt, zonaHoraria)}</p>
            <p class="weather-description">${descripcion}</p>
            <img class="weather-icon" src="${iconUrl}" alt="${descripcion}">
            <p class="weather-temperature"><strong>Grados:</strong> ${Math.round(datos.main.temp)} °C</p>
            <p class="weather-humidity"><strong>Humedad:</strong> ${datos.main.humidity} %</p>
        </article>
    `;
}

function construirPronostico(actual, datosPronostico) {
    const zonaHoraria = datosPronostico.city.timezone;
    const tarjetaActual = construirTarjeta(actual, zonaHoraria);
    const tarjetasPronostico = datosPronostico.list
        .map((prediccion) => construirTarjeta(prediccion, zonaHoraria))
        .join('');

    return tarjetaActual + tarjetasPronostico;
}

async function cargarTiempo() {
    const urlActual = `https://api.openweathermap.org/data/2.5/weather?lat=${bilbao.latitud}&lon=${bilbao.longitud}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;
    const urlPronostico = `https://api.openweathermap.org/data/2.5/forecast?lat=${bilbao.latitud}&lon=${bilbao.longitud}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;

    try {
        const [datosActuales, datosPronostico] = await Promise.all([
            obtenerDatos(urlActual),
            obtenerDatos(urlPronostico)
        ]);

        cityName.textContent = datosActuales.name;
        forecastContainer.innerHTML = construirPronostico(datosActuales, datosPronostico);
    } catch (error) {
        forecastContainer.innerHTML = `<p role="alert">No se pudo cargar la información meteorológica: ${error.message}</p>`;
    }
}

cargarTiempo();
