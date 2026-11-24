// ANDALUCÍA INTERACTIVA · TARDE · EQUIPO 1
// El HTML, CSS, datos.js y navegacion.js ya están preparados.
// Usad las etiquetas, clases y atributos indicados en estos comentarios.
// No modifiquéis los archivos de los demás equipos.
// Los eventos deben utilizar funciones manejadoras independientes.
// No se permite innerHTML, appendChild ni document.write.

// EQUIPO 1 — EXPLORADOR DE MONUMENTOS
// Trabajad exclusivamente en este archivo. 
// Datos disponibles: array monumentos (de js/datos.js).
// HTML preparado: #ex-provincia, #ex-tamano, #ex-contador y #ex-resultados.
// Estilos disponibles: card, card-text, compactas y empty-state.

// PASO 1. Preparad los SEIS primeros monumentos que aparecerán en el explorador.
const monumentos = [
    {"id": 1, "nombre": "La Alhambra", "provincia": "Granada", "localidad": "Granada", "categoria": "Palacio", "epoca": "Edad Media", "descripcion": "Ciudad palatina nazarí famosa por sus patios, jardines, torres y decoración geométrica.", "duracion": 180, "imagen": "img/monumento-01.webp"},
    {"id": 2, "nombre": "Generalife", "provincia": "Granada", "localidad": "Granada", "categoria": "Jardín", "epoca": "Edad Media", "descripcion": "Antigua residencia de recreo con jardines históricos y acequias.", "duracion": 90, "imagen": "img/monumento-02.webp"},
    {"id": 3, "nombre": "Capilla Real de Granada", "provincia": "Granada", "localidad": "Granada", "categoria": "Templo", "epoca": "Edad Moderna", "descripcion": "Edificio vinculado a los Reyes Católicos y destacado por su arquitectura gótica.", "duracion": 55, "imagen": "img/monumento-03.webp"},
    {"id": 4, "nombre": "La Giralda", "provincia": "Sevilla", "localidad": "Sevilla", "categoria": "Torre", "epoca": "Edad Media", "descripcion": "Antiguo alminar transformado en campanario de la Catedral de Sevilla.", "duracion": 60, "imagen": "img/monumento-04.webp"},
    {"id": 5, "nombre": "Real Alcázar de Sevilla", "provincia": "Sevilla", "localidad": "Sevilla", "categoria": "Palacio", "epoca": "Edad Media", "descripcion": "Conjunto palaciego con arquitectura mudéjar, patios y jardines.", "duracion": 120, "imagen": "img/monumento-05.webp"},
    {"id": 6, "nombre": "Plaza de España", "provincia": "Sevilla", "localidad": "Sevilla", "categoria": "Plaza", "epoca": "Siglo XX", "descripcion": "Espacio monumental construido para la Exposición Iberoamericana de 1929.", "duracion": 60, "imagen": "img/monumento-06.webp"},
];
// PASO 2. Localizad el desplegable, el botón, el contador y el contenedor de resultados.

let desplegable = document.querySelector("#ex-provincia");
let botonCompacto = document.querySelector("#ex-tamano");
let contador = document.querySelector("#ex-contador");


// PASO 3. Programad los eventos: cambio de provincia y pulsación del botón de tamaño.
desplegable.addEventListener("click", mostrarExplorador)
botonCompacto.addEventListener("click", cambiarTamano);


function mostrarExplorador() {
    // PASO 4. Eliminad del contenedor los resultados de una búsqueda anterior.
    let contenedor = document.querySelector(".controls");
    let imagenes = contenedor.querySelectorAll("img");

    for (const imagen of imagenes) {
        imagen.remove();
    }

    
    // PASO 5. Consultad la provincia elegida. «Todas» debe mostrar los seis.
    // PASO 6. Recorred los monumentos elegidos y cread UNA tarjeta por coincidencia:
    //         ESTRUCTURA: <article class="card"> con <img> y <div class="card-text">.
    //         En ese div cread <h5> para el nombre y <p> para la provincia.
    //         La imagen debe llevar src con la ruta del monumento y alt con su nombre.
    //         Insertad los elementos en sus padres y la tarjeta en #ex-resultados.
    // PASO 7. Actualizad #ex-contador con el número real de tarjetas mostradas.
    // PASO 8. Si no hay coincidencias, cread un aviso de clase empty-state.
}

function cambiarTamano() {
    // PASO 9. Al pulsar #ex-tamano, añadid o quitad la clase "compactas"
    //         del contenedor #ex-resultados (no de las tarjetas individuales).
    // PASO 10. Cambiad el texto del botón entre «Vista compacta» y «Vista normal».
}

// PASO 11. Ejecutad la función que dibuja el catálogo al abrir la página.
// COMPROBAD: seis tarjetas inicialmente; filtro «Todas»; provincia sin resultados;
//            botón de tamaño que puede pulsarse repetidas veces.
