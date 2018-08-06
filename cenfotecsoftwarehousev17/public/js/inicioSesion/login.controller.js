'use strict';
let botonIngresarUsuario;
let botonSalirUsuario;
let botonEstudiante;
let botonVistaRegistrarEstudiante;
let botonVistaEstudiante;
let botonCliente;
let botonProfesor;
let botonProyectos;


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
    // para estudiantes
    botonEstudiante = document.querySelector('#btnEstudiantes');
    botonVistaRegistrarEstudiante = document.querySelector('#btnVistaRegistrarEstudiante');
    botonVistaEstudiante = document.querySelector('#btnVistaEstudiante');
    // para clientes
    botonCliente = document.querySelector('#btnCliente');
    botonProfesor = document.querySelector('#btnProfesor');    
    botonProyectos = document.querySelector('#btnProyectos');    
    
    

}

function getCredencialesUsuario() {
    let correo = document.querySelector("#txtCorreoInicio").value;
    let contrasenna = document.querySelector("#txtContrasennaInicio").value;

    document.querySelector("#btnInicioSesion").classList.add("ocultar");

    let valido = validarCredenciales(correo, contrasenna);

    if (valido) {
        swal({
            type : 'success',
            title : 'Bienvenido',
            text: 'Acceso permitido',
            confirmButtonText : 'Entendido'});
        console.log("Acceso permitido");
        redireccionarUsuario();
    } else {
        swal({
            type : 'warning',
            title : 'Acceso denegado',
            text: 'Por favor revise el usuario y/o la clave que digitó',
            confirmButtonText : 'Entendido'
        });
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
            botonVistaEstudiante.classList.remove('ocultar');
            botonVistaRegistrarEstudiante.classList.remove('ocultar'); 
            botonCliente.classList.remove('ocultar');
            botonProfesor.classList.remove('ocultar');
            botonProyectos.classList.remove('ocultar');
            break;
        case 1:
            // acciones de profesor
            obtenerPagina('profesor/profesor_listar.html'),
            // botonIngresarUsuario.classList.add('ocultar');  
            // botonSalirUsuario.classList.remove('ocultar'); 
            botonEstudiante.classList.add('ocultar');
            botonVistaRegistrarEstudiante.classList.add('ocultar'); 
            botonCliente.classList.add('ocultar');
            botonProfesor.classList.remove('ocultar');
            botonProyectos.classList.add('ocultar');
            botonVistaEstudiante.classList.add('ocultar');
            break;
        case 2:
        // acciones de cliente
        obtenerPagina('cliente/cliente_listar.html'),
            // botonIngresarUsuario.classList.add('ocultar');  
            // botonSalirUsuario.classList.remove('ocultar'); 
            botonEstudiante.classList.add('ocultar');
            botonVistaRegistrarEstudiante.classList.add('ocultar'); 
            botonCliente.classList.remove('ocultar');
            botonProfesor.classList.add('ocultar');
            botonProyectos.classList.add('ocultar');
            botonVistaEstudiante.classList.add('ocultar');
            
            break;  
        case 3:            
        // acciones de estudiante
        // obtenerPagina('estudiante/indexTablaEstud.html'),
        obtenerPagina('estudiante/vistaEstud.html'),

        // botonIngresarUsuario.classList.add('ocultar');  
        // botonSalirUsuario.classList.remove('ocultar'); 
        botonEstudiante.classList.remove('ocultar');
        botonVistaRegistrarEstudiante.classList.remove('ocultar'); 
        botonCliente.classList.add('ocultar');
        botonProfesor.classList.add('ocultar');
        botonProyectos.classList.add('ocultar');
        botonVistaEstudiante.classList.remove('ocultar');


            
            break;                                       
        default:
            break;
    }
}




