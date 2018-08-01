'use strict';

let inputNombreCliente;
let inputCedulaCliente;
let inputProvincia;
let inputCanton;
let inputDistrito;
let inputUbicacion;
let inputPrimerNombre;
let inputPrimerApellido;
let inputTelefonoCliente;
let inputCorreo;
let desactivar;

function ClienteRegistrarInit () {
let botonRegistrar = document.querySelector('#btnRegistrarCliente');

if (botonRegistrar != undefined) {
    botonRegistrar.addEventListener('click' , obtenerDatosCliente);
}

inputNombreCliente = document.querySelector('#txtNombre');
inputCedulaCliente = document.querySelector('#txtCedula');
inputProvincia = document.querySelector('#txtProvincia');
inputCanton = document.querySelector('#txtCanton');
inputDistrito = document.querySelector('#txtDistrito');
inputUbicacion = document.querySelector('#txtUbicacion');
inputPrimerNombre = document.querySelector('#txtPrimerNombre');
inputPrimerApellido = document.querySelector('#txtPrimerApellido');
inputTelefonoCliente = document.querySelector('#txtTelefono');
inputCorreo = document.querySelector('#txtCorreo');
desactivar = false;
}
//funciones Obtener datos, filtar lista clientes, imprimir lista clientes, limpiar formulario
function obtenerDatosCliente(){
    let infoCliente =[];
    let bError = false;

    let sNombreCliente = inputNombreCliente.value;
    let sCedula = Number(inputCedulaCliente.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sUbicacion = inputUbicacion.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefono = Number(inputTelefonoCliente.value);
    let sCorreo = inputCorreo.value;

    infoCliente.push(sNombreCliente, sCedula, sProvincia, sCanton, sDistrito, sUbicacion, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, desactivar);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el usuario');
    }else{
        registrarCliente(infoCliente);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El cliente se registró adecuadamente',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                obtenerPagina ('cliente/cliente_listar.html');
                // window.location.href = "../../html/cliente/cliente_listar.html"
            }
        );
        limpiarFormulario();
    }
    
}

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación del NombreEmpresa
    if(inputNombreCliente.value == '' || (regexSoloLetras.test(inputNombreCliente.value)==false) ){
        inputNombreCliente.classList.add('error-input');
        bError = true;
    }else{
        inputNombreCliente.classList.remove('error-input');
    }
    //Validación de la CedulaJuridica
    if(inputCedulaCliente.value == ''){
        inputCedulaCliente.classList.add('error-input');
        bError = true;
    }else{
        inputCedulaCliente.classList.remove('error-input');
    }
     //Validación de la Distrito
     if(inputDistrito.value == ''){
        inputDistrito.classList.add('error-input');
        bError = true;
    }else{
        inputDistrito.classList.remove('error-input');
    }
     //Validación de la Provincia
     if(inputProvincia.value == ''){
        inputProvincia.classList.add('error-input');
        bError = true;
    }else{
        inputProvincia.classList.remove('error-input');
    }
     //Validación de la Canton
     if(inputCanton.value == ''){
        inputCanton.classList.add('error-input');
        bError = true;
    }else{
        inputCanton.classList.remove('error-input');
    }
    //Validación de la Ubicacion
    if(inputUbicacion.value == ''){
        inputUbicacion.classList.add('error-input');
        bError = true;
    }else{
        inputUbicacion.classList.remove('error-input');
    }
    //Validación del NombreContacto
    if(inputPrimerNombre.value == '' ){
        inputPrimerNombre.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error-input');
    }
    //Validación del ApellidoCOntacto
    if(inputPrimerApellido.value == '' ){
        inputPrimerApellido.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error-input');
    }

    //Validación de la TelefonoContacto
    if(inputTelefonoCliente.value == '' || (regexSoloNumeros.test(inputTelefonoCliente.value) == false) ){
        inputTelefonoCliente.classList.add('error-input');
        bError = true;
    }else{
        inputTelefonoCliente.classList.remove('error-input');
    }

    //Validación de la CorreoContacto
    if(inputCorreo.value == '' ){
        inputCorreo.classList.add('error-input');
        bError = true;
    }else{
        inputCorreo.classList.remove('error-input');
    }

    return bError;
}

function limpiarFormulario(){
    inputNombreCliente.value = '';    
    inputCedulaCliente.value = '';
    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputUbicacion.value ='';
    inputPrimerNombre.value = '';
    inputPrimerApellido.value = '';
    inputTelefonoCliente.value = '';
    inputCorreo.value = '';
}

//filtrar de gabriel
function FiltrarListaClientes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasClientes = tblCliente.getElementsByTagName('tbody');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasClientes.length; i++) {    
        datosFila = filasClientes[i];
        datos = datosFila.getElementsByTagName('tbody');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};

function imprimirListaClientes() {
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#tblCliente tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cPrimerNombre = fila.insertCell();
        let cPrimerApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cCorreo = fila.insertCell();

        cNombre.innerHTML = listaClientes[i]['Nombre'];
        cPrimerNombre.innerHTML = listaClientes[i]['PrimerNombre'];
        cPrimerApellido.innerHTML = listaClientes[i]['PrimerApellido'];
        cTelefono.innerHTML = listaClientes[i]['Telefono'];
        cCorreo.innerHTML = listaClientes[i]['Correo'];

    }

};






