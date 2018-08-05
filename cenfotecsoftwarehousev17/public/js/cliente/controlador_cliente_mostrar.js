// 'use strict';

// let inputNombreCliente;
// let inputCedulaCliente;
// let inputProvincia;
// let inputCanton;
// let inputDistrito;
// let inputPrimerNombre;
// let inputPrimerApellido;
// let inputTelefonoCliente;
// let inputCorreo;
// let inputUbicacion;
// let desactivar;
// let btnGuardarCliente;
// let btnEditarCliente;



// // quitar esta funcion 
// ClienteMostrarInit();


// function ClienteMostrarInit () {


// inputNombreCliente = document.querySelector('#txtNombre');
// inputCedulaCliente = document.querySelector('#txtCedula');
// inputProvincia = document.querySelector('#txtProvincia');
// inputCanton = document.querySelector('#txtCanton');
// inputDistrito = document.querySelector('#txtDistrito');
// inputPrimerNombre = document.querySelector('#txtPrimerNombre');
// inputPrimerApellido = document.querySelector('#txtPrimerApellido');
// inputTelefonoCliente = document.querySelector('#txtTelefono');
// inputCorreo = document.querySelector('#txtCorreo');
// btnGuardarCliente = document.querySelector('#btnGuardarCliente');
// btnEditarCliente = document.querySelector('#btnEditarCliente');
// // inputUbicacion = marker.getPosition().lat() + ',' + marker.getPosition().lng();

// };


// //listeners---------------------------------------------------

// btnEditarCliente.addEventListener('click',function(){

//     btnEditarCliente.classList.add('esconder');
//     btnGuardarCliente.classList.remove('esconder');
//     // ftnHabilitarEdicion();
// });

// btnGuardarCliente.addEventListener('click',function(){


// });

// //loads------------------------------------------------------
// window.onload = function(){

//     let idCliente = obtenerIdCliente();
//     let clientes = obtenerListaClientes();
   
//     ftnMostrarCliente(idCliente,clientes);
//     ftnDeshabilitarCampos();
// };

// function ftnDeshabilitarCampos(){
//     inputNombreCliente.setAttribute('disabled',true);
//     inputCedulaCliente.setAttribute('disabled',true);
//     inputProvincia.setAttribute('disabled',true);
//     inputCanton.setAttribute('disabled',true);
//     inputDistrito.setAttribute('disabled',true);
//     inputPrimerNombre.setAttribute('disabled',true);
//     inputPrimerApellido.setAttribute('disabled',true);
//     inputTelefonoCliente.setAttribute('disabled',true);
//     inputCorreo.setAttribute('disabled',true);
//     btnGuardarCliente.setAttribute('disabled',true);
//     btnEditarCliente.setAttribute('disabled',true);

// };


// function obtenerIdCliente() {
//     let paginaUrl = window.location.href;
//     let locacion = paginaUrl.lastIndexOf("?") + 3;
//     let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
//     return id;
//  }; 


// function ftnMostrarCliente (idCliente,clientes){

//     let clienteSeleccionado = null;
  

//     clientes.forEach(element => {
//         if (element._id == idCliente) {
//             clienteSeleccionado = element;
//         }
//     });

//     inputNombreCliente.value = clienteSeleccionado.Nombre;
//     inputCedulaCliente.value = clienteSeleccionado.Cedula;
//     inputProvincia.value = clienteSeleccionado.Provincia;
//     inputCanton.value = clienteSeleccionado.Canton;
//     inputDistrito.value = clienteSeleccionado.Distrito;
//     inputPrimerNombre.value = clienteSeleccionado.PrimerNombre;
//     inputPrimerApellido.value = clienteSeleccionado.PrimerApellido;
//     inputTelefonoCliente = clienteSeleccionado.Telefono;
//     inputCorreo.value = clienteSeleccionado.Correo;
//     inputUbicacion.value = clienteSeleccionado.Ubicacion;
   
   
// };

