
document.addEventListener("DOMContentLoaded", function () {

    const lupa = document.querySelector('.encabezado img[alt="Buscar"]');

    if (!lupa) {
        return;
    }

    const panel = document.createElement("div");

    panel.className = "buscador-global";

    panel.innerHTML = `
        <form>
            <input type="search" placeholder="Buscar producto..." required>
            <button type="submit">Buscar</button>
        </form>
    `;

    document.body.appendChild(panel);

    lupa.style.cursor = "pointer";

    lupa.addEventListener("click", function () {

        panel.classList.toggle("abierto");

        if (panel.classList.contains("abierto")) {
            panel.querySelector("input").focus();
        }

    });

    panel.querySelector("form").addEventListener("submit", function (evento) {

        evento.preventDefault();

        const texto = panel.querySelector("input").value.trim();

        if (texto !== "") {
            window.location.href = "catalogo.html?buscar=" + encodeURIComponent(texto);
        }

    });

});
