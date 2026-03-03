// Funcion para mostrar secciones dinamicamente
function mostrarSeccion(id) {

    // Oculta todas las secciones
    const secciones = document.querySelectorAll(".contenido");
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    // Muestra solo la seleccionada
    document.getElementById(id).style.display = "block";
}


// Mostrar primera seccion al cargar
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion("estructurales");
});


// Validacion basica formulario
document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("formulario");

    if(formulario){
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Formulario enviado correctamente");
        });
    }

});