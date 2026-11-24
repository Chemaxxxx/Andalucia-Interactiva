// ANDALUCÍA INTERACTIVA · TARDE · EQUIPO 6
// El HTML, CSS, datos.js y navegacion.js ya están preparados.
// Usad las etiquetas, clases y atributos indicados en estos comentarios.
// No modifiquéis los archivos de los demás equipos.
// Los eventos deben utilizar funciones manejadoras independientes.
// No se permite innerHTML, appendChild ni document.write.

// EQUIPO 6 — MI RUTA TURÍSTICA
// HTML: #ru-select, #ru-anadir, #ru-lista y #ru-total.
// Clases CSS: route-item, grow, small-remove y empty-state.
// En este ejercicio la ruta NO se almacena en localStorage.

// PASO 1. Preparad un array vacío para guardar identificadores de visitas.
// PASO 2. Rellenad #ru-select con ocho elementos <option>, uno por
//         cada uno de los OCHO primeros monumentos.
// PASO 3. Programad el evento del botón «Añadir visita».

function anadirRuta() {
    // PASO 4. Averiguad el identificador seleccionado.
    // PASO 5. Añadidlo solo si todavía no está incluido en la ruta.
    // PASO 6. Actualizad visualmente la lista y el total.
}

function eliminarRuta(event) {
    // PASO 7. Averiguad qué identificador corresponde al botón pulsado.
    // PASO 8. Quitadlo del array y volved a construir la ruta.
}

function mostrarRuta() {
    // PASO 9. Vaciad #ru-lista y preparad un acumulador de minutos.
    // PASO 10. Por cada visita del array, cread un <div class="route-item"> con:
    //          <img> (src y alt), <div class="grow"> con <h5> y <p>,
    //          y <button class="small-remove"> con texto «Eliminar».
    //          El botón llevará el atributo "data-id" con el identificador.
    //          El botón debe identificar la visita y tener su evento.
    // PASO 11. Sumad las duraciones de todas las visitas.
    // PASO 12. Actualizad #ru-total: «N visitas · H h M min».
    // PASO 13. Si está vacía, cread un <p class="empty-state">.
}

// PASO 14. Mostrad el estado inicial (ruta vacía).
// COMPROBAD: dos visitas, intento duplicado, eliminación y total de cero.
