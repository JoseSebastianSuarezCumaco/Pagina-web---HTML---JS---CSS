function mostrarSeccion(id) {


    const secciones = document.querySelectorAll(".contenido");
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion("estructurales");
});

document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("formulario");

    if(formulario){
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Formulario enviado correctamente");
        });
    }

});
