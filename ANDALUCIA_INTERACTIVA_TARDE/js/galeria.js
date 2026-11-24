// ANDALUCÍA INTERACTIVA · TARDE · EQUIPO 3
// El HTML, CSS, datos.js y navegacion.js ya están preparados.
// Usad las etiquetas, clases y atributos indicados en estos comentarios.
// No modifiquéis los archivos de los demás equipos.
// Los eventos deben utilizar funciones manejadoras independientes.
// No se permite innerHTML, appendChild ni document.write.

// EQUIPO 3 — GALERÍA INTERACTIVA
// HTML preparado: #ga-miniaturas, #ga-principal, #ga-titulo,
// #ga-descripcion, #ga-anterior y #ga-siguiente.
// Clase CSS para las miniaturas: thumb. Selección actual: seleccionada.

// PASO 1. Trabajad con los SEIS primeros monumentos del array.
// PASO 2. Preparad una variable que indique qué imagen se está mostrando.
// PASO 3. Cread seis <button class="thumb">, cada uno con un <img>
//         dentro, e insertadlos en #ga-miniaturas. Las imágenes deben
//         llevar src y alt correspondientes al monumento.
//         Cada botón debe llevar el atributo "data-indice" con la posición
//         (0, 1, 2, 3, 4 o 5) de la miniatura que representa.
// PASO 4. Programad los eventos de las seis miniaturas y los botones de navegación.

function pulsarMiniatura(event) {
    // PASO 5. Averiguad qué miniatura se ha pulsado y cambiad el índice actual.
    //         Después, actualizad el contenido de la galería.
}

function galeriaAnterior() {
    // PASO 6. Retroceded una posición; desde la primera se pasa a la última.
    //         Actualizad después la fotografía y la selección visual.
}

function galeriaSiguiente() {
    // PASO 7. Avanzad una posición; desde la última se pasa a la primera.
    //         Actualizad después la fotografía y la selección visual.
}

function actualizarGaleria() {
    // PASO 8. Modificad los atributos "src" y "alt" de #ga-principal;
    //         actualizad el texto de #ga-titulo y
    //         el texto con localidad y provincia.
    // PASO 9. Quitad la clase "seleccionada" a todos los botones "thumb"
    //         y añadidla
    //         solamente a la miniatura correspondiente a la imagen actual.
}

// PASO 10. Mostrad inicialmente el primer monumento y marcad su miniatura.
// COMPROBAD: miniaturas, anterior, siguiente y vuelta circular en ambos extremos.
