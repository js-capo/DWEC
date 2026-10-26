const OPENWEATHER_API_KEY = '2305cd81ad9127e93f21187a6e7f479b';

const bilbao = {
    latitud: 43.26271,
    longitud: -2.92528
};

const tiempoActual = document.getElementById('tiempo-actual');
const forecastContainer = document.getElementById('forecast');

async function obtenerDatos(url) {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error al consultar la API: ${respuesta.status}`);
    }

    return await respuesta.json();
}

function construirCardActual(datos) {
    const iconUrl = `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`;

    return `
        <div class="weather-card p-4">
            <div class="row align-items-center">
                <div class="col-md-3 text-center">
                    <img src="${iconUrl}" alt="${datos.weather[0].description}" class="icon-weather">
                </div>
                <div class="col-md-9">
                    <h2 class="h3 mb-1">${datos.name}</h2>
                    <p class="mb-2 text-muted">${datos.weather[0].description}</p>
                    <h3 class="display-4 mb-0">${Math.round(datos.main.temp)}°C</h3>
                    <div class="mt-3 row">
                        <div class="col-sm-4">
                            <strong>Sensación:</strong> ${Math.round(datos.main.feels_like)}°C
                        </div>
                        <div class="col-sm-4">
                            <strong>Humedad:</strong> ${datos.main.humidity}%
                        </div>
                        <div class="col-sm-4">
                            <strong>Viento:</strong> ${Math.round(datos.wind.speed)} m/s
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function construirPronostico(lista) {
    const dias = new Map();

    lista.forEach((prediccion) => {
        const fecha = new Date(prediccion.dt * 1000);
        const clave = fecha.toISOString().slice(0, 10);

        if (!dias.has(clave)) {
            dias.set(clave, prediccion);
        }
    });

    const datos = [...dias.values()].slice(0, 5);

    return datos.map((prediccion) => {
        const fecha = new Date(prediccion.dt * 1000);
        const iconUrl = `https://openweathermap.org/img/wn/${prediccion.weather[0].icon}.png`;

        return `
            <div class="col-md-6 col-lg-2">
                <div class="forecast-card p-3 text-center h-100">
                    <div class="fw-bold mb-2">${fecha.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}</div>
                    <img src="${iconUrl}" alt="${prediccion.weather[0].description}" class="mb-2">
                    <div class="mb-1"><strong>${Math.round(prediccion.main.temp_max)}°C</strong></div>
                    <div class="text-muted">${Math.round(prediccion.main.temp_min)}°C</div>
                    <small class="text-muted">${prediccion.weather[0].description}</small>
                </div>
            </div>
        `;
    }).join('');
}

async function cargarTiempo() {
    const urlActual = `https://api.openweathermap.org/data/2.5/weather?lat=${bilbao.latitud}&lon=${bilbao.longitud}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;
    const urlPronostico = `https://api.openweathermap.org/data/2.5/forecast?lat=${bilbao.latitud}&lon=${bilbao.longitud}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;

    try {
        const [datosActuales, datosPronostico] = await Promise.all([
            obtenerDatos(urlActual),
            obtenerDatos(urlPronostico)
        ]);

        tiempoActual.innerHTML = construirCardActual(datosActuales);
        forecastContainer.innerHTML = construirPronostico(datosPronostico.list);
    } catch (error) {
        tiempoActual.innerHTML = `
            <div class="alert alert-danger">
                No se pudo cargar la información meteorológica: ${error.message}
            </div>
        `;
    }
}

cargarTiempo();
