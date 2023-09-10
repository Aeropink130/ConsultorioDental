// Este script cambia el color de fondo de pantalla a gris cuando no se está en el tope superior
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        // La página ya no está en la parte superior, aplica los estilos aquí
        document.body.style.backgroundColor = 'lightgray'; // Cambia el fondo
    } else {
        // La página está en la parte superior, puedes eliminar o restaurar estilos aquí
        document.body.style.backgroundColor = 'white'; // Restaura el fondo a su estado original
    }
});