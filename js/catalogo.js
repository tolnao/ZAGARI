
document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.querySelector(".buscador input");
    const productos = document.querySelectorAll(".producto");
    const botonesFiltro = document.querySelectorAll(".filtro");

    if (!buscador) {
        return;
    }

    let categoriaActual = "todos";

    function mostrarProductos() {

        const texto = buscador.value.toLowerCase().trim();

        productos.forEach(function (producto) {

            const nombre = producto.querySelector("h3").textContent.toLowerCase();

            const categoria = producto.dataset.categoria;

            const coincideNombre = nombre.includes(texto);

            const coincideCategoria =
                categoriaActual === "todos" ||
                categoria === categoriaActual;

            if (coincideNombre && coincideCategoria) {
                producto.style.display = "";
            } else {
                producto.style.display = "none";
            }

        });

    }

    buscador.addEventListener("input", mostrarProductos);

    botonesFiltro.forEach(function (boton) {

        boton.addEventListener("click", function () {

            categoriaActual = boton.dataset.categoria;

            botonesFiltro.forEach(function (b) {
                b.classList.remove("activo-filtro");
            });

            boton.classList.add("activo-filtro");

            mostrarProductos();

        });

    });

    const parametros = new URLSearchParams(window.location.search);

    const busquedaGlobal = parametros.get("buscar");
    const categoriaInicial = parametros.get("categoria");

    if (categoriaInicial && ["bolsas", "carteras", "belleza"].includes(categoriaInicial)) {
        categoriaActual = categoriaInicial;
    }

    if (busquedaGlobal !== null) {
        buscador.value = busquedaGlobal;
        categoriaActual = "todos";
    }

    botonesFiltro.forEach(function (boton) {
        boton.classList.toggle(
            "activo-filtro",
            boton.dataset.categoria === categoriaActual
        );
    });

    mostrarProductos();

    if (busquedaGlobal) {
        buscador.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

});

