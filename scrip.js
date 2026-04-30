const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    validarDatos();
});

function validarDatos(){
    const nombre = document.getElementById('nom').value;
    const apellido = document.getElementById('ape').value;
    const DNI = document.getElementById('dni').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
}