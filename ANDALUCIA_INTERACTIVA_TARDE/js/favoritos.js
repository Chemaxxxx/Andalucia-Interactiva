// ANDALUCÍA INTERACTIVA · TARDE · EQUIPO 5
// El HTML, CSS, datos.js y navegacion.js ya están preparados.
// Usad las etiquetas, clases y atributos indicados en estos comentarios.
// No modifiquéis los archivos de los demás equipos.
// Los eventos deben utilizar funciones manejadoras independientes.
// No se permite innerHTML, appendChild ni document.write.

// EQUIPO 5 — MIS FAVORITOS (localStorage)
// HTML: #fa-select, #fa-anadir, #fa-contador y #fa-lista.
// Clases CSS: saved-item, grow, small-remove y empty-state.
// Guardad SOLO identificadores en el array de favoritos.
// IMPORTANTE: utilizad la clave exacta "am3_favoritos".

// PASO 1. Preparad el desplegable con los OCHO primeros monumentos.
//         Cread un <option> por monumento en #fa-select.
//         Cada opción mostrará un nombre y tendrá un identificador como valor.
// PASO 2. Preparad el array de favoritos. Recuperad el dato guardado:
//         si la clave no existe, empezad con un array vacío; si existe,
//         recuperad el array a partir del texto JSON.
// PASO 3. Programad el evento del botón «Añadir favorito».

function anadirFavorito() {
    // PASO 4. Averiguad el identificador seleccionado (es un número).
    // PASO 5. Añadidlo al array SOLO si aún no está incluido.
    // PASO 6. Guardad el array actualizado y redibujad los favoritos.
}

function eliminarFavorito(event) {
    // PASO 7. Identificad el monumento del botón «Quitar» pulsado.
    // PASO 8. Eliminad ese identificador del array, guardad y actualizad la vista.
}

function guardarFavoritos() {
    // PASO 9. Actualizad localStorage con el array convertido a texto JSON.
}

function mostrarFavoritos() {
    // PASO 10. Vaciad #fa-lista y actualizad el número de #fa-contador.
    // PASO 11. Si no hay favoritos, cread un <p class="empty-state">.
    // PASO 12. Para cada identificador guardado, localizad el monumento y
    //          cread un <div class="saved-item"> con:
    //          <img> (src y alt), <div class="grow"> con <h5> y <p>,
    //          y <button class="small-remove"> con texto «Quitar».
    //          El botón debe llevar atributo "data-id" con el id del favorito.
    // PASO 13. Programad en cada botón «Quitar» un evento que permita
    //          identificar el monumento mediante su "data-id".
}

// PASO 14. Dibujad el estado inicial después de recuperar el almacenamiento.
// COMPROBAD: añadir dos, evitar duplicados, quitar uno y recargar la página.
