
const claveFavoritos = "favoritosZagari";

function obtenerFavoritos() {
    const guardados = localStorage.getItem(claveFavoritos);

    if (guardados === null) {
        return [];
    }

    return JSON.parse(guardados);
}

function guardarFavoritos(favoritos) {
    localStorage.setItem(claveFavoritos, JSON.stringify(favoritos));
}

function alternarFavorito(producto) {

    const favoritos = obtenerFavoritos();

    const indice = favoritos.findIndex(function(favorito) {
        return favorito.id === producto.id;
    });

    if (indice === -1) {

        favoritos.push(producto);
        guardarFavoritos(favoritos);

        return true;

    } else {

        favoritos.splice(indice, 1);
        guardarFavoritos(favoritos);

        return false;

    }

}

function esFavorito(idProducto) {

    const favoritos = obtenerFavoritos();

    return favoritos.some(function(producto) {
        return producto.id === idProducto;
    });

}

