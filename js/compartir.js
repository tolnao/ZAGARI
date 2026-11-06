
const botonCompartir = document.querySelector(".boton-compartir");

botonCompartir.addEventListener("click", async function() {

    const nombre = document.querySelector(".informacion-producto h2").textContent.trim();
    const enlace = window.location.href;

    if (window.location.protocol === "file:") {
        alert("Para compartir este producto, primero debes publicar la página en internet.");
        return;
    }

    if (navigator.share) {

        try {
            await navigator.share({
                title: nombre + " | ZAGARI",
                text: "Mira este producto de ZAGARI: " + nombre,
                url: enlace
            });
        } catch (error) {
            if (error.name !== "AbortError") {
                alert("No se pudo compartir el producto.");
            }
        }

    } else {

        try {
            await navigator.clipboard.writeText(enlace);
            alert("¡Enlace del producto copiado!");
        } catch (error) {
            prompt("Copia el enlace del producto:", enlace);
        }

    }

});
