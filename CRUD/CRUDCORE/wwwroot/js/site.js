// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Función para validar el nombre completo en tiempo real
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("employeeForm");

    // Nombre Completo
    const nombreCompletoInput = document.getElementById("nombreCompleto");
    const nombreCompletoError = document.getElementById("nombreCompletoError");

    nombreCompletoInput.addEventListener("input", function () {
        const regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        if (!regex.test(nombreCompletoInput.value)) {
            nombreCompletoError.textContent = "Formato incorrecto. Debe tener dos nombres.";
        } else {
            nombreCompletoError.textContent = "";
        }
    });

    // Correo
    const correoInput = document.getElementById("correo");
    const correoError = document.getElementById("correoError");

    correoInput.addEventListener("input", function () {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correoInput.value)) {
            correoError.textContent = "Formato incorrecto. Ingrese un correo válido.";
        } else {
            correoError.textContent = "";
        }
    });

    // Telefono
    const telefonoInput = document.getElementById("telefono");
    const telefonoError = document.getElementById("telefonoError");

    telefonoInput.addEventListener("input", function () {
        const regex = /^0[0-9]{9}$/;
        if (!regex.test(telefonoInput.value)) {
            telefonoError.textContent = "Formato incorrecto. Debe empezar con 0 y tener 10 dígitos.";
        } else {
            telefonoError.textContent = "";
        }
    });

    // Cedula
    const cedulaInput = document.getElementById("cedula");
    const cedulaError = document.getElementById("cedulaError");

    cedulaInput.addEventListener("input", function () {
        const regex = /^[0-9]{10}$/;
        if (!regex.test(cedulaInput.value)) {
            cedulaError.textContent = "Formato incorrecto. Debe tener 10 dígitos.";
        } else {
            cedulaError.textContent = "";
        }
    });

    // Direccion
    const direccionInput = document.getElementById("direccion");
    const direccionError = document.getElementById("direccionError");

    direccionInput.addEventListener("input", function () {
        const regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(direccionInput.value)) {
            direccionError.textContent = "Formato incorrecto. Solo se permiten letras.";
        } else {
            direccionError.textContent = "";
        }
    });
    form.addEventListener("input", function () {
        const nombreCompletoValido = /^[a-zA-Z]+\s[a-zA-Z]+$/.test(nombreCompletoInput.value);
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoInput.value);
        const telefonoValido = /^0[0-9]{9}$/.test(telefonoInput.value);
        const cedulaValida = /^[0-9]{10}$/.test(cedulaInput.value);
        const direccionValida = /^[a-zA-Z\s]+$/.test(direccionInput.value);

        const formularioValido =
            nombreCompletoValido &&
            correoValido &&
            telefonoValido &&
            cedulaValida &&
            direccionValida;

        submitButton.disabled = !formularioValido;
    });
});