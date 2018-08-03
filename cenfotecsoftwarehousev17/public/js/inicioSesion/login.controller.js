'use strict';
let botonIngresarUsuario;
let botonSalirUsuario;
let botonEstudiante;
let botonCliente;
let botonProfesor;
let botonProyectos;
let botonTiquete;

function inicioSesionInit () {

    let botonIngresarUsuario = document.querySelector('#btnInicioSesion');

    if (botonIngresarUsuario != undefined) {
        botonIngresarUsuario.addEventListener('click' , getCredencialesUsuario);
        console.log(botonIngresarUsuario);
    }
    // let botonIngresarUsuario = document.querySelector("#btnInicioSesion");
    // console.log(botonIngresarUsuario);
    // botonIngresarUsuario.addEventListener("click", getCredencialesUsuario); 
    
    botonIngresarUsuario =  document.querySelector('#btnIngresar');
    botonSalirUsuario = document.querySelector('#btnSalir');
    botonEstudiante = document.querySelector('#btnEstudiantes');
    botonCliente = document.querySelector('#btnCliente');
    botonProfesor = document.querySelector('#btnProfesor');
    botonProyectos = document.querySelector('#btnProyectos');
    botonTiquete = document.querySelector('#btnTiquetes');

}

function getCredencialesUsuario() {
    let correo = document.querySelector("#txtCorreoInicio").value;
    let contrasenna = document.querySelector("#txtContrasennaInicio").value;

    document.querySelector("#btnInicioSesion").classList.add("ocultar");

    let valido = validarCredenciales(correo, contrasenna);

    if (valido) {
        console.log("Acceso permitido");
        redireccionarUsuario();
    } else {
        console.log("Acceso denegado");
        document.querySelector("#btnInicioSesion").classList.remove("ocultar");
    }
}

function validarCredenciales(correo, contrasenna) {
    let valido = autenticarCredenciales(correo, contrasenna);
    return valido;
}

function cerrarSesión() {
    removerCredenciales();
    window.location = "";
}

function redireccionarUsuario() {
    let usuarioAutenticado = getUsuarioAutenticado();

    switch (usuarioAutenticado.TipoUsuario) {
        case 0:
            // acciones de administrador            
            obtenerPagina('proyecto/proyecto_listar.html'), //seguramente lo tengo que cambiar por la vista del administrador 
            // botonIngresarUsuario.classList.add('ocultar');  
            // botonSalirUsuario.classList.remove('ocultar'); 
            botonEstudiante.classList.remove('ocultar');
            botonCliente.classList.remove('ocultar');
            botonProfesor.classList.remove('ocultar');
            botonProyectos.classList.remove('ocultar');
            botonTiquete.classList.add('ocultar');
            break;
        case 1:
            // acciones de profesor
            obtenerPagina('profesor/profesor_listar.html'),
            // botonIngresarUsuario.classList.add('ocultar');  
            // botonSalirUsuario.classList.remove('ocultar'); 
            botonEstudiante.classList.add('ocultar');
            botonCliente.classList.add('ocultar');
            botonProfesor.classList.remove('ocultar');
            botonProyectos.classList.add('ocultar');
            botonTiquete.classList.add('ocultar');
            break;
        case 2:
        // acciones de cliente
        obtenerPagina('cliente/cliente_listar.html'),
            // botonIngresarUsuario.classList.add('ocultar');  
            // botonSalirUsuario.classList.remove('ocultar'); 
            botonEstudiante.classList.add('ocultar');
            botonCliente.classList.remove('ocultar');
            botonProfesor.classList.add('ocultar');
            botonProyectos.classList.add('ocultar');
            botonTiquete.classList.remove('ocultar');
            
            break;  
        case 3:            
        // acciones de estudiante
        obtenerPagina('estudiante/indexTablaEstud.html'),
        // botonIngresarUsuario.classList.add('ocultar');  
        // botonSalirUsuario.classList.remove('ocultar'); 
        botonEstudiante.classList.remove('ocultar');
        botonCliente.classList.add('ocultar');
        botonProfesor.classList.add('ocultar');
        botonProyectos.classList.add('ocultar');
        botonTiquete.classList.add('ocultar');


            
            break;                                       
        default:
            break;
    }
}




