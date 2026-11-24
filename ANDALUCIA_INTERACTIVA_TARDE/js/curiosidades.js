// ANDALUCÍA INTERACTIVA · TARDE · EQUIPO 4
// El HTML, CSS, datos.js y navegacion.js ya están preparados.
// Usad las etiquetas, clases y atributos indicados en estos comentarios.
// No modifiquéis los archivos de los demás equipos.
// Los eventos deben utilizar funciones manejadoras independientes.
// No se permite innerHTML, appendChild ni document.write.

// EQUIPO 4 — CURIOSIDADES DE ANDALUCÍA
// HTML: #cu-tarjetas. Estilos disponibles: curiosity, step, oculto y abierta.
// Los cuatro textos ya están facilitados: debéis crear las tarjetas con el DOM.

const curiosidades = [
    {titulo: "La Alhambra", texto: "Sus patios y jardines son parte esencial del conjunto palatino nazarí."},
    {titulo: "La Giralda", texto: "Su torre fue originalmente un alminar y después se convirtió en campanario."},
    {titulo: "Mezquita-Catedral", texto: "Sus célebres arcos alternan dovelas claras y rojizas."},
    {titulo: "Plaza de España", texto: "Se construyó para la Exposición Iberoamericana de 1929."}
];

// PASO 1. Localizad #cu-tarjetas y recorred las cuatro curiosidades.
// PASO 2. Cread por cada una un <article class="curiosity"> con:
//         <span class="step">, <h5>, <p> y <button> «Descubrir».
//         El <span> mostrará el número de la curiosidad.
// PASO 3. El <p> de la explicación debe comenzar con la clase "oculto".
// PASO 4. Programad el evento del botón que habéis creado en cada tarjeta.
// PASO 5. Insertad los elementos de cada tarjeta en #cu-tarjetas.

function cambiarCuriosidad(event) {
    // PASO 6. Localizad la tarjeta del botón pulsado y SU párrafo.
    // PASO 7. Mostrad u ocultad solo ese párrafo cambiando "oculto".
    //         Añadid o quitad la clase "abierta"
    //         únicamente en su tarjeta.
    // PASO 8. Alternad el texto del botón entre «Descubrir» y «Ocultar».
}

// COMPROBAD: cuatro tarjetas; todas cerradas al principio; cada una se
//            abre y cierra sin afectar a las otras tres.
