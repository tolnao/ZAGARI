
const buscador = document.querySelector(".buscador input");

const productos = document.querySelectorAll(".producto");

const botonesFiltro = document.querySelectorAll(".filtro");

let categoriaActual = "todos";

function mostrarProductos() {
    const texto = buscador.value.toLowerCase().trim();

    productos.forEach(function (producto) {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();

        const categoria = producto.dataset.categoria;

        const coincideNombre = nombre.includes(texto);

        const coincideCategoria = categoriaActual === "todos" || categoria === categoriaActual;

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
