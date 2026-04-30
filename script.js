const formulario = document.getElementById('formulario');
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    validarFormulario();
});

function validarFormulario(){
    const nombre = document.getElementById('nom').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();
    const apellido = document.getElementById('ape').value.trim();

    if(!validarDatos(apellido)){
        mostrarError("Apellido inválido: use solo letras.");
        return;
    }
    if(!validarDatos(nombre)){
        mostrarError("Nombre inválido: use solo letras.");
        return;
    }
    if(!validarSoloNumeros(edad)){
        mostrarError("Edad inválida: ingrese solo números.");
        return;
    }
    if(!validarDNI(dni)){
        mostrarError("DNI inválido: debe tener 8 números.");
        return;
    }
    if(!validarEmail(email)){
        mostrarError("Email inválido: formato no reconocido.");
        return;
    }

    mostrarExito("¡Registro completado con éxito!");
    formulario.reset();

}

function validarDatos(texto){
    const soloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
    return soloLetras.test(texto);

}

function validarDNI(texto){
    const soloNumeros = /^[0-9]+$/;
    return soloNumeros.test(texto)  && texto.length === 8;
}

function validarSoloNumeros(texto){
    const soloNumeros = /^[0-9]+$/;
    return soloNumeros.test(texto) && texto.length > 0;
}

function validarEmail(texto){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(texto);
}

function mostrarError(mensajeError){
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = mensajeError;
    mensaje.style.color = "red";
    mensaje.style.display = "block";   
}

function mostrarExito(mensajeExito){
    let elementoMensaje = document.getElementById("mensaje");
    elementoMensaje.textContent = mensajeExito;
    elementoMensaje.style.color = "green";
}