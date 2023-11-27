document.addEventListener("DOMContentLoaded", function() {
    var textoAnimado = document.getElementById("texto-animado");
    
    textoAnimado.addEventListener("transitionend", function() {
        textoAnimado.classList.add("animacion-fija");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var tituloEscritura = document.getElementById("titulo-escritura");
    var textoOriginal = tituloEscritura.innerText;
    var textoAnimado = "";
    
    for (var i = 0; i < textoOriginal.length; i++) {
        // Añade cada letra con un pequeño retraso
        setTimeout(function(letra, index) {
            textoAnimado += letra;
            tituloEscritura.innerText = textoAnimado;
        }, i * 300, textoOriginal[i], i);
    }
});

