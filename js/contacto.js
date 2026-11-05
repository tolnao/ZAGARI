
const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const resultado = document.getElementById("resultadoFormulario");

    if (nombre === "") {
        resultado.textContent = "Por favor, escribe tu nombre.";
        resultado.style.color = "red";
        return;
    }

    if (correo === "") {
        resultado.textContent = "Por favor, escribe tu correo electrónico.";
        resultado.style.color = "red";
        return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        resultado.textContent = "Ingresa un correo electrónico válido.";
        resultado.style.color = "red";
        return;
    }

    if (mensaje === "") {
        resultado.textContent = "Por favor, escribe tu mensaje.";
        resultado.style.color = "red";
        return;
    }


    resultado.textContent = "¡Gracias por tu mensaje! En ZAGARI agradecemos que te pongas en contacto con nosotros.";
    resultado.style.color = "green";

    formulario.reset();


});
