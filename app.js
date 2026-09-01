const rutas = {

    villahermosa: {
        nombre: "Coatzacoalcos → Villahermosa → Palenque",
        ubicaciones: [
            {
                nombre: "Colonia Congreso",
                km: "Minatitlán",
                foto: "fotos/fotoscolina-congreso-jpeg.jpeg",
                mapa: "https://www.google.com/maps/search/?api=1&query=Colonia+Congreso+Minatitlan+Veracruz"
            },
            {
                nombre: "Comedor Rubí",
                km: "Km 16+500",
                foto: "fotos/fotoscomedor-rubi-jpeg.jpeg",
                mapa: "https://maps.app.goo.gl/ye9161BWXoA9tGUh9"
            },
            {
                nombre: "Comedor Martita",
                km: "Ubicación confirmada",
                foto: "fotos/comedor-martita.png",
                mapa: "https://www.google.com/maps/search/?api=1&query=18.01492815397451,-94.52161136891334&zoom=16"
            },
            {
                
                nombre: "Puente Dovalí",
                km: "Ubicación confirmada",
                foto: "fotos/fotospuente-dovali-jpeg.jpeg",
                mapa: "https://www.google.com/maps/search/?api=1&query=18.013184426663045,-94.43801007617554&zoom=16"
            },
            {
                
                nombre: "Comedor San Judas Tadeo",
                km: "Ubicación confirmada",
                foto:"fotos/comedor-san-judas-tadeo.png",
                mapa: "https://www.google.com/maps/search/?api=1&query=17.998706670504518,-93.5066906919587&zoom=16"
            },
            {
                
                nombre: "Comedor Los Compadres",
                km: "Ubicación confirmada",
                foto: "fotos/comedor-compadres.png",
                 mapa: "https://www.google.com/maps/search/?api=1&query=17.999064418334925,-93.52388666257593&zoom=16"
            },
            {
            
            
                nombre: "Paradero Transporte MG",
                km: "Ubicación confirmada",
                foto: "fotos/paradero-MG.png",
                mapa: "https://www.google.com/maps/search/?api=1&query=17.999137541163307,-93.37121182025719&zoom=16"
            },
            {
                nombre: "Paradero Chatarrilandia",
                km: "Ubicación confirmada",
                foto: "fotos/chatarrilandia.png",
                mapa: "https://www.google.com/maps/search/?api=1&query=17.999748691810893,-93.35766034715824&zoom=16"
            },
            {
                nombre: "Puente Tulija",
                km: "Ubicación confirmada",
                foto: "fotos/puente tulija.png",
                mapa: "https://maps.app.goo.gl/QQthuC76P632U9cm9"
            },
            
        ]
    },

    cardenas: {
        nombre: "Coatzacoalcos → Cárdenas",
        ubicaciones: [
            {
                nombre: "Infra hasta Nissan",
                km: "Cárdenas, Tabasco",
                mapa: "https://www.google.com/maps/search/?api=1&query=Infra+Nissan+Cardenas+Tabasco"
            }
        ]
    },

    chiapadecorzo: {
        nombre: "Las Choapas → Chiapa de Corzo",
        ubicaciones: [
            {
                nombre: "Km 121 Carretera Malpaso",
                km: "Km 121",
                 mapa: "https://www.google.com/maps/search/?api=1&query=17.27750294939402,-93.57509776787508&zoom=16"
            },
            {
                nombre: "Comedor Km 170",
                km: "Km 170",
                foto: "fotos/fotoscomedor-km-170.jpeg.jpeg",
                mapa: "https://www.google.com/maps/search/?api=1&query=16.95513010374495,-93.47664457411481&zoom=16"
            },
            {
                nombre: "Tramo Carrizal",
                km: "Ubicación confirmada",
                mapa: "https://www.google.com/maps/search/?api=1&query=16.8962726678766,-93.43184021803434&zoom=16"
            },
            {
                nombre: "Comedor Km 176",
                km: "Km 176",
                 mapa: "https://www.google.com/maps/search/?api=1&query=16.906510064927332,-93.44253976575476&zoom=16"
            },
            {
                nombre: "Libramiento Tuxtla Gutiérrez",
                km: "Del retén de policías al entronque de Chiapa de Corzo",
                mapa: "https://www.google.com/maps/search/?api=1&query=16.65037391941935,-93.01263982161282&zoom=16"
            },
        ]
    }
        ,

    puebla: {
        nombre: "Puebla → Tepeaca",
        ubicaciones: [

            {
                nombre: "Esperanza, Puebla",
                km: "Ubicación confirmada",
                mapa: "https://www.google.com/maps/search/?api=1&query=18.862967506728936,-97.36873611744656&zoom=16"
            },

            {
                nombre: "Carretera Puebla → Orizaba",
                km: "Km 202",
                mapa: "https://www.google.com/maps/search/?api=1&query=18.830767838664414,-97.50668971030154&zoom=16"
            },

            {
                nombre: "Expensión saliendo de Planta Tepeaca",
                km: "Planta Tepeaca",
                mapa: "https://www.google.com/maps/search/?api=1&query=18.953832962202412,-97.93017280754296&zoom=16"
            }

        ]
    }
};


// BOTONES DE RUTA

const botones = document.querySelectorAll(".card button");

botones[0].addEventListener("click", () => mostrarRuta("villahermosa"));
botones[1].addEventListener("click", () => mostrarRuta("cardenas"));
botones[2].addEventListener("click", () => mostrarRuta("chiapadecorzo"));
botones[3].addEventListener("click", () => mostrarRuta("puebla"));


// MOSTRAR RUTA

function mostrarRuta(id, guardarHistorial = true) {
        if (guardarHistorial) {
        history.pushState(
            { vista: "ruta", id: id },
            "",
            "#ruta-" + id
        );
    }

    const ruta = rutas[id];

    let contenido = `

        <div class="ruta-detalle">

            <button onclick="history.back()" class="btn-regresar">
    ← Regresar
</button>

            <div class="ruta-encabezado">

                <h2>
                    🚛 ${ruta.nombre}
                </h2>

                <p>
                    ${ruta.ubicaciones.length} ubicaciones de paro NO permitido
                </p>

            </div>

            <div class="ubicaciones">
    `;

    ruta.ubicaciones.forEach((ubicacion, indice) => {

        contenido += `

            <div class="ubicacion">

                <div class="ubicacion-icono">
                    🚫
                </div>

                <h3>
                    ${ubicacion.nombre}
                </h3>

                <p>
                    📍 ${ubicacion.km}
                </p>

                <div class="estado">
                    PARO NO PERMITIDO
                </div>

                <button onclick="verUbicacion('${id}', ${indice})">
                    Ver ubicación
                </button>

            </div>

        `;

    });

    contenido += `

            </div>

        </div>

    `;

    document.querySelector("main").innerHTML = contenido;
}


// VER UBICACIÓN
function verUbicacion(rutaId, indice, guardarHistorial = true) {
        if (guardarHistorial) {
        history.pushState(
            {
                vista: "ubicacion",
                rutaId: rutaId,
                indice: indice
            },
            "",
            "#ubicacion-" + rutaId + "-" + indice
        );
    }

    const ubicacion = rutas[rutaId].ubicaciones[indice];

    document.querySelector("main").innerHTML = `

        <div class="detalle">

            <button onclick="history.back()" class="btn-regresar">
    ← Regresar
</button>
            <div class="detalle-card">

                <div class="icono-ubicacion">
                    🚫
                </div>

                <h2>${ubicacion.nombre}</h2>

                <h3>${ubicacion.km}</h3>

                <div class="foto-real">

                    <img
                        src="${ubicacion.foto}"
                        alt="Fotografía de ${ubicacion.nombre}"
                        onclick="abrirFoto('${ubicacion.foto}', '${ubicacion.nombre}')"
                    >

                </div>

                <p class="texto-foto">
                    👆 Toca la fotografía para verla completa
                </p>

                <div class="estado-detalle">
                    🚫 PARO NO PERMITIDO
                </div>

                <button
                    class="btn-maps"
                    onclick="window.open('${ubicacion.mapa}', '_blank')">

                    🗺️ Abrir en Google Maps

                </button>

            </div>

        </div>

    `;
}
// ==============================
// MAPA GENERAL
// ==============================

const mapa = L.map('mapa').setView([17.8, -94.8], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);
// ==============================
// // ==============================
// UBICACIONES CONFIRMADAS
// ==============================

const ubicacionesMapa = [

    {
        nombre: "Colonia Congreso",
        referencia: "Minatitlán",
        tipo: "Zona de paro NO permitido",
        lat: 18.02250235169018,
        lng: -94.54099631029226,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.02250235169018,-94.54099631029226&zoom=16"
    },

    {
        nombre: "Comedor Rubí",
        referencia: "Km 16+500",
        tipo: "Sitio de paro NO permitido",
        lat: 18.0225558,
        lng: -94.5413082,
        mapa: "https://maps.app.goo.gl/ye9161BWXoA9tGUh9"
    },

    {
        nombre: "Comedor Martita",
        referencia: "Ubicación confirmada",
        tipo: "Sitio de paro NO permitido",
        lat: 18.01492815397451,
        lng: -94.52161136891334,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.01492815397451,-94.52161136891334&zoom=16"
    },

    {
        nombre: "Puente Dovalí",
        referencia: "Ubicación confirmada",
        tipo: "Zona de paro NO permitido",
        lat: 18.013184426663045,
        lng: -94.43801007617554,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.013184426663045,-94.43801007617554&zoom=16"
    },

    {
        nombre: "Comedor Los Compadres",
        referencia: "Ubicación confirmada",
        tipo: "Sitio de paro NO permitido",
        lat: 17.999064418334925,
        lng: -93.52388666257593,
        mapa: "https://www.google.com/maps/search/?api=1&query=17.999064418334925,-93.52388666257593&zoom=16"
    },

    {
        nombre: "Comedor San Judas Tadeo",
        referencia: "Ubicación confirmada",
        tipo: "Sitio de paro NO permitido",
        lat: 17.998706670504518,
        lng: -93.5066906919587,
        mapa: "https://www.google.com/maps/search/?api=1&query=17.998706670504518,-93.5066906919587&zoom=16"
    },

    {
        nombre: "Paradero Transporte MG",
        referencia: "Ubicación confirmada",
        tipo: "Sitio de paro NO permitido",
        lat: 17.999137541163307,
        lng: -93.37121182025719,
        mapa: "https://www.google.com/maps/search/?api=1&query=17.999137541163307,-93.37121182025719&zoom=16"
    },

    {
        nombre: "Paradero Chatarrilandia",
        referencia: "Ubicación confirmada",
        tipo: "Sitio de paro NO permitido",
        lat: 17.999748691810893,
        lng: -93.35766034715824,
        mapa: "https://www.google.com/maps/search/?api=1&query=17.999748691810893,-93.35766034715824&zoom=16"
    },

    {
        nombre: "Km 121 Carretera Malpaso",
        referencia: "Km 121",
        tipo: "Zona de paro NO permitido",
        lat: 17.27750294939402,
        lng: -93.57509776787508,
        mapa: "https://www.google.com/maps/search/?api=1&query=17.27750294939402,-93.57509776787508&zoom=16"
    },

    {
        nombre: "Comedor Km 170",
        referencia: "Km 170",
        tipo: "Sitio de paro NO permitido",
        lat: 16.95513010374495,
        lng: -93.47664457411481,
        mapa: "https://www.google.com/maps/search/?api=1&query=16.95513010374495,-93.47664457411481&zoom=16"
    },

    {
        nombre: "Comedor Km 176",
        referencia: "Km 176",
        tipo: "Sitio de paro NO permitido",
        lat: 16.906510064927332,
        lng: -93.44253976575476,
        mapa: "https://www.google.com/maps/search/?api=1&query=16.906510064927332,-93.44253976575476&zoom=16"
    },

    {
        nombre: "Tramo Carrizal",
        referencia: "Carrizal",
        tipo: "Zona de paro NO permitido",
        lat: 16.8962726678766,
        lng: -93.43184021803434,
        mapa: "https://www.google.com/maps/search/?api=1&query=16.8962726678766,-93.43184021803434&zoom=16"
    },

    {
        nombre: "Libramiento Tuxtla Gutiérrez",
        referencia: "Del retén de policías al entronque de Chiapa de Corzo",
        tipo: "Zona de paro NO permitido",
        lat: 16.65037391941935,
        lng: -93.01263982161282,
        mapa: "https://www.google.com/maps/search/?api=1&query=16.65037391941935,-93.01263982161282&zoom=16"
    },

    {
        nombre: "Esperanza, Puebla",
        referencia: "Ubicación confirmada",
        tipo: "Zona de paro NO permitido",
        lat: 18.862967506728936,
        lng: -97.36873611744656,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.862967506728936,-97.36873611744656&zoom=16"
    },

    {
        nombre: "Carretera Puebla → Orizaba",
        referencia: "Km 202",
        tipo: "Zona de paro NO permitido",
        lat: 18.830767838664414,
        lng: -97.50668971030154,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.830767838664414,-97.50668971030154&zoom=16"
    },

    {
        nombre: "Expensión saliendo de Planta Tepeaca",
        referencia: "Planta Tepeaca",
        tipo: "Zona de paro NO permitido",
        lat: 18.953832962202412,
        lng: -97.93017280754296,
        mapa: "https://www.google.com/maps/search/?api=1&query=18.953832962202412,-97.93017280754296&zoom=16"
    }
    ,

    {
    nombre: "Puente Tulija",
    referencia: "Ubicación confirmada",
    tipo: "Zona de paro NO permitido",
    lat: 17.673320,
    lng: -92.413769,
    mapa: "https://www.google.com/maps/search/?api=1&query=17.673320,-92.413769&zoom=16"
    }
    
];

// ==============================
// CREAR MARCADORES
// ==============================

ubicacionesMapa.forEach((ubicacion) => {

   const iconoRojo = L.divIcon({
    className: 'marcador-rojo',
    html: '🚫',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
});

const marcador = L.marker([
    ubicacion.lat,
    ubicacion.lng
], {
    icon: iconoRojo
}).addTo(mapa);

    marcador.bindPopup(`

        <div style="min-width:220px">

            <h3 style="margin-bottom:8px;">
                🚫 ${ubicacion.nombre}
            </h3>

            <p>
                <strong>${ubicacion.referencia}</strong>
            </p>

            <p>
                ${ubicacion.tipo}
            </p>

            <br>

            <button
                onclick="window.open('${ubicacion.mapa}', '_blank')"
                style="
                    background:#003b75;
                    color:white;
                    border:none;
                    padding:10px 15px;
                    border-radius:8px;
                    cursor:pointer;
                    font-weight:bold;
                "
            >
                🗺️ Abrir Google Maps
            </button>

        </div>

    `);

});


// ==============================
// AJUSTAR MAPA A LOS 4 PUNTOS
// ==============================

const puntos = ubicacionesMapa.map(ubicacion => [
    ubicacion.lat,
    ubicacion.lng
]);

mapa.fitBounds(puntos, {
    padding: [30, 30]
});
// ==============================
// VISOR DE FOTOGRAFÍA
// ==============================

function abrirFoto(rutaFoto, nombre) {

    const visor = document.createElement("div");

    visor.className = "visor-foto";

    visor.innerHTML = `

        <button class="cerrar-foto" onclick="cerrarFoto()">
            ✕
        </button>

        <img
            src="${rutaFoto}"
            alt="Fotografía de ${nombre}"
        >

        <div class="nombre-foto">
            ${nombre}
        </div>

    `;

    document.body.appendChild(visor);
}


function cerrarFoto() {

    const visor = document.querySelector(".visor-foto");

    if (visor) {
        visor.remove();
    }

}
// ==============================
// NAVEGACIÓN CON BOTÓN ATRÁS
// ==============================

window.addEventListener("popstate", function (evento) {

    const estado = evento.state;

    // Si volvemos a una ruta
    if (estado && estado.vista === "ruta") {

        mostrarRuta(estado.id, false);

        return;
    }

    // Si volvemos a una ubicación
    if (estado && estado.vista === "ubicacion") {

        verUbicacion(
            estado.rutaId,
            estado.indice,
            false
        );

        return;
    }

    // Si regresamos al inicio
    location.reload();

});
// ==============================
// CONTADOR DE UBICACIONES
// ==============================

const contadorUbicaciones = document.getElementById("contador-ubicaciones");

if (contadorUbicaciones) {
    contadorUbicaciones.textContent =
        ubicacionesMapa.length + " confirmadas";
}
/// ==============================
// REGISTRO DE OPERADOR
// ==============================

const URL_REGISTRO =
    "https://script.google.com/macros/s/AKfycbyEvQ5F1EI8o0l7hPW4__2QzZAC9hnoyOdVnFkWH98Bnm_6Xs77R1pGtFMetDicFwM/exec";

const TIEMPO_SESION = 10* 60 * 1000;

const registroOperador = document.getElementById("registro-operador");
const botonEntrar = document.getElementById("btn-entrar");

let temporizadorSesion = null;


// ==============================
// PROGRAMAR EXPIRACIÓN
// ==============================

function programarExpiracion(tiempoRestante) {

    // Cancelar temporizador anterior si existe
    if (temporizadorSesion) {
        clearTimeout(temporizadorSesion);
    }

    temporizadorSesion = setTimeout(() => {

        // Termina la sesión
        sessionStorage.removeItem("rutaSeguraInicio");

        // Mostrar nuevamente el registro
        if (registroOperador) {
            registroOperador.style.display = "flex";
        }

        // Limpiar los campos
        const nombre = document.getElementById("nombre-operador");
        const idEmpleado = document.getElementById("id-empleado");

        if (nombre) nombre.value = "";
        if (idEmpleado) idEmpleado.value = "";

        // Restaurar botón
        if (botonEntrar) {
            botonEntrar.disabled = false;
            botonEntrar.textContent = "ENTRAR";
        }

    }, tiempoRestante);
}


// ==============================
// REVISAR SESIÓN
// ==============================

function revisarSesion() {

    const inicioSesion = sessionStorage.getItem("rutaSeguraInicio");

    // No existe sesión
    if (!inicioSesion) {

        registroOperador.style.display = "flex";

        return;
    }

    const tiempoTranscurrido =
        Date.now() - Number(inicioSesion);

    // La sesión todavía está activa
    if (tiempoTranscurrido < TIEMPO_SESION) {

        registroOperador.style.display = "none";

        // Programar solamente el tiempo que falta
        const tiempoRestante =
            TIEMPO_SESION - tiempoTranscurrido;

        programarExpiracion(tiempoRestante);

    } else {

        // La sesión ya expiró
        sessionStorage.removeItem("rutaSeguraInicio");

        registroOperador.style.display = "flex";

    }
}


// Revisar sesión al abrir la aplicación
revisarSesion();


// ==============================
// BOTÓN ENTRAR
// ==============================

if (botonEntrar) {

    botonEntrar.addEventListener("click", async function () {

        const nombre = document
            .getElementById("nombre-operador")
            .value
            .trim();

        const idEmpleado = document
            .getElementById("id-empleado")
            .value
            .trim();

        // Validar campos
        if (nombre === "" || idEmpleado === "") {

            alert("Por favor ingresa tu nombre y tu ID de empleado.");

            return;
        }

        botonEntrar.disabled = true;
        botonEntrar.textContent = "REGISTRANDO...";


        try {

            // Registrar en Google Sheets
            await fetch(URL_REGISTRO, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify({
                    operador: nombre,
                    idEmpleado: idEmpleado
                })
            });


            // ==============================
            // INICIAR NUEVA SESIÓN
            // ==============================

            const ahora = Date.now();

            sessionStorage.setItem(
                "rutaSeguraInicio",
                ahora.toString()
            );

            // Ocultar registro
            registroOperador.style.display = "none";

            // Programar los 15 minutos
            programarExpiracion(TIEMPO_SESION);

            // Restaurar botón
            botonEntrar.disabled = false;
            botonEntrar.textContent = "ENTRAR";


        } catch (error) {

            console.error(error);

            alert("No se pudo registrar la consulta.");

            botonEntrar.disabled = false;
            botonEntrar.textContent = "ENTRAR";
        }

    });

}
// ==============================
// BUSCADOR DE RUTAS Y PAROS
// ==============================

const buscador = document.getElementById("buscador");
const tarjetasRuta = document.querySelectorAll(".rutas .card");

if (buscador) {

    buscador.addEventListener("input", function () {

        const texto = buscador.value
            .toLowerCase()
            .trim();

        // ==============================
        // BUSCADOR VACÍO
        // ==============================

        if (texto === "") {

            tarjetasRuta.forEach(function (tarjeta) {
                tarjeta.style.display = "";
            });

            const resultadosParos =
                document.getElementById("resultados-paros");

            if (resultadosParos) {
                resultadosParos.remove();
            }

            return;
        }


        // ==============================
        // FILTRAR RUTAS
        // ==============================

        tarjetasRuta.forEach(function (tarjeta) {

            const contenido = tarjeta.textContent
                .toLowerCase();

            if (contenido.includes(texto)) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }

        });


        // ==============================
        // BUSCAR PAROS
        // ==============================

        const resultados = [];

        Object.keys(rutas).forEach(function (rutaId) {

            const ruta = rutas[rutaId];

            ruta.ubicaciones.forEach(function (ubicacion, indice) {

                const nombre =
                    ubicacion.nombre
                        ? ubicacion.nombre.toLowerCase()
                        : "";

                const referencia =
                    ubicacion.km
                        ? ubicacion.km.toLowerCase()
                        : "";

                if (
                    nombre.includes(texto) ||
                    referencia.includes(texto)
                ) {

                    resultados.push({
                        rutaId: rutaId,
                        indice: indice,
                        nombre: ubicacion.nombre,
                        referencia: ubicacion.km,
                        rutaNombre: ruta.nombre
                    });

                }

            });

        });


        // ==============================
        // ELIMINAR RESULTADOS ANTERIORES
        // ==============================

        const anteriores =
            document.getElementById("resultados-paros");

        if (anteriores) {
            anteriores.remove();
        }


        // Si no encontró paros, no hacemos nada
        if (resultados.length === 0) {
            return;
        }


        // ==============================
        // CREAR CONTENEDOR
        // ==============================

        const contenedor =
            document.createElement("div");

        contenedor.id = "resultados-paros";

        contenedor.style.marginTop = "20px";


        // Título

        contenedor.innerHTML = `

            <h3 style="
                margin-bottom:15px;
                padding-left:5px;
            ">
                🚫 Paros encontrados
            </h3>

        `;


        // ==============================
        // CREAR RESULTADOS
        // ==============================

        resultados.forEach(function (resultado) {

            const tarjeta =
                document.createElement("div");

            tarjeta.style.background = "white";
            tarjeta.style.borderRadius = "15px";
            tarjeta.style.padding = "18px";
            tarjeta.style.marginBottom = "12px";
            tarjeta.style.boxShadow =
                "0 3px 10px rgba(0,0,0,0.12)";
            tarjeta.style.cursor = "pointer";


            tarjeta.innerHTML = `

                <div style="
                    font-size:25px;
                    margin-bottom:8px;
                ">
                    🚫
                </div>

                <strong style="
                    font-size:17px;
                ">
                    ${resultado.nombre}
                </strong>

                <p style="
                    margin:6px 0;
                    color:#666;
                ">
                    📍 ${resultado.referencia}
                </p>

                <small style="
                    color:#003b75;
                    font-weight:bold;
                ">
                    ${resultado.rutaNombre}
                </small>

                <p style="
                    margin-top:10px;
                    color:#003b75;
                    font-weight:bold;
                ">
                    Ver ubicación →
                </p>

            `;


            // Al tocar el resultado
            tarjeta.addEventListener("click", function () {

                verUbicacion(
                    resultado.rutaId,
                    resultado.indice
                );

            });


            contenedor.appendChild(tarjeta);

        });


        // ==============================
        // INSERTAR RESULTADOS
        // ==============================

        const seccionRutas =
            document.querySelector(".rutas");

        if (seccionRutas) {

            seccionRutas.after(contenedor);

        }

    });

}
