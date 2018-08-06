'use strict';

let inputNombreCliente;
let inputCedulaCliente;
let inputProvincia;
let inputCanton;
let inputDistrito;
let inputPrimerNombre;
let inputPrimerApellido;
let inputTelefonoCliente;
let inputCorreo;
let inputUbicacion;
let desactivar;
let inputId;
let idPersonaSeleccionada;


ClienteRegistrarInit();
// ClienteMostrarInit();

// function ClienteMostrarInit(){
// // let botonGuardarCliente = document.querySelector('#btnGuardarCliente');
// let botonActualizarCliente = document.querySelector('#btnActualizarCliente'); // * * * agregar este * * *
// let inputFiltro = document.querySelector('#txtFiltro');

// if (botonActualizarCliente != undefined) {
//     botonActualizarCliente.hidden = true;
// }

// if (botonActualizarCliente != undefined) {
//     botonActualizarCliente.addEventListener('click' , obtenerDatosEditar);
// }

// if (inputFiltro != undefined) {
//     inputFiltro.addEventListener('keyup' , filtrarListaEstud);
// }

// inputNombreCliente = document.querySelector('#txtNombre');
// inputCedulaCliente = document.querySelector('#txtCedula');
// inputProvincia = document.querySelector('#txtProvincia');
// inputCanton = document.querySelector('#txtCanton');
// inputDistrito = document.querySelector('#txtDistrito');
// inputPrimerNombre = document.querySelector('#txtPrimerNombre');
// inputPrimerApellido = document.querySelector('#txtPrimerApellido');
// inputTelefonoCliente = document.querySelector('#txtTelefono');
// inputCorreo = document.querySelector('#txtCorreo');
// // inputUbicacion = marker.getPosition().lat() + ',' + marker.getPosition().lng();
// desactivar = false;
// inputId = document.querySelector('#txtId');

// }


function ClienteRegistrarInit () {
let botonRegistrar = document.querySelector('#btnRegistrarCliente');
let inputFiltro = document.querySelector('#inputBuscarCliente');


if (botonRegistrar != undefined) {
    botonRegistrar.addEventListener('click' , obtenerDatosCliente);
}

if (inputFiltro != undefined) {
    inputFiltro.addEventListener('keyup' , FiltrarListaClientes);
}


inputNombreCliente = document.querySelector('#txtNombre');
inputCedulaCliente = document.querySelector('#txtCedula');
inputProvincia = document.querySelector('#txtProvincia');
inputCanton = document.querySelector('#txtCanton');
inputDistrito = document.querySelector('#txtDistrito');
inputPrimerNombre = document.querySelector('#txtPrimerNombre');
inputPrimerApellido = document.querySelector('#txtPrimerApellido');
inputTelefonoCliente = document.querySelector('#txtTelefono');
inputCorreo = document.querySelector('#txtCorreo');
// inputUbicacion = marker.getPosition().lat() + ',' + marker.getPosition().lng();
desactivar = false;
inputId = document.querySelector('#txtId');
}


function obtenerDatosCliente(){
    let infoCliente =[];
    let bError = false;

    let sNombreCliente = inputNombreCliente.value;
    let sCedula = Number(inputCedulaCliente.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefono = Number(inputTelefonoCliente.value);
    let sCorreo = inputCorreo.value;
    let sUbicacion = marker.getPosition().lat() + ',' + marker.getPosition().lng();

    infoCliente.push(sNombreCliente, sCedula, sProvincia, sCanton, sDistrito, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, sUbicacion, desactivar);
    
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



function obtenerDatosEditar(){

    let infoCliente =[];
    let bError = false;

    let sNombreCliente = inputNombreCliente.value;
    let sCedula = Number(inputCedulaCliente.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefono = Number(inputTelefonoCliente.value);
    let sCorreo = inputCorreo.value;
    let sUbicacion = marker.getPosition().lat() + ',' + marker.getPosition().lng();
    let _id = inputId.value;

    // infoCliente.push(_id, sNombreCliente, sCedula, sProvincia, sCanton, sDistrito, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, sUbicacion, desactivar);
    
    //bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        actualizarPersona(infoCliente);
        // console.log(); //console.log(imagenUrl);
        editarCliente(idPersonaSeleccionada, sNombreCliente, sCedula, sProvincia, sCanton, sDistrito, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, sUbicacion, desactivar);

        if (resultado == true){
            swal({
                type : 'success',
                title : 'Registro exitoso',
                text: 'El usuario se registró adecuadamente',
                confirmButtonText : 'Entendido'
            })
            .then(
                function(){
                    obtenerPagina ('cliente/cliente_listar.html');
                    //window.location.href = "../../html/estudiante/indexTablaEstud.html"
                }
            );
    
           }
        listaClientes = obtenerListaClientes();
        imprimirListaClientes();
        limpiarFormulario();
        botonActualizar.hidden = true;
        botonRegistrar.hidden = false;
    }
    
};

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
    inputPrimerNombre.value = '';
    inputPrimerApellido.value = '';
    inputTelefonoCliente.value = '';
    inputCorreo.value = '';
    inputUbicacion.value ='';
}

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
        let cConfiguracion = fila.insertCell();

            

        cNombre.innerHTML = listaClientes[i]['Nombre'];
        cPrimerNombre.innerHTML = listaClientes[i]['PrimerNombre'];
        cPrimerApellido.innerHTML = listaClientes[i]['PrimerApellido'];
        cTelefono.innerHTML = listaClientes[i]['Telefono'];
        cCorreo.innerHTML = listaClientes[i]['Correo'];
        // btns.appendChild(btnVer);
        // // btns.appendChild(btnAsignarEstudiantes);
        // btns.appendChild(btnEliminar);

        //Íconos para editar
        let aModificar = document.createElement('a'); // * * * agregar todos estos * * *
        aModificar.classList.add('fas');
        aModificar.classList.add('fa-eye');
        aModificar.dataset._id =  listaClientes[i]['_id'];

        let aBorrar = document.createElement('a');
        aBorrar.classList.add('fas');
        aBorrar.classList.add('fa-trash');
        aBorrar.dataset._id =  listaClientes[i]['_id'];

        aModificar.addEventListener('click', buscar_por_id); //funcion buscar_por_idß
        aBorrar.addEventListener('click', ftnEliminarCliente);

        cConfiguracion.appendChild(aModificar);
        cConfiguracion.appendChild(aBorrar);

    }

};

function llenarDatosFormulario(){ //**** V I S T O *****  es la de buscar_por_id
        
    let botonRegistrar = document.querySelector('#btnRegistrarCliente');
    let botonActualizarCliente = document.querySelector('#btnActualizarCliente');
   
    idPersonaSeleccionada = this.dataset._id;

    let usuario = obtenerPersonaPorId(idPersonaSeleccionada);

    if (botonRegistrar != undefined) {
        botonRegistrar.hidden = true;
    }

    if (botonActualizarCliente != undefined) {
        botonActualizarCliente.hidden = false;
    }

    //Blinding    
    let _id =  this.dataset._id;// se obtiene el id del usuario seleccionado
    let usuario = obtenerPersonaPorId(_id); // * * * funcion obtenerPersonaPorId se debe crear en el servicio, porque va a ser la petición 
//if usuario is not null
// ajax obtenerPaginaRegistro
    // obtenerPagina ('estudiante/indexRegEstud.html');
    obtenerPagina ('cliente/cliente_mostrar.html');
    
    setTimeout(function (){

        inputNombreCliente.value =  usuario['NombreCliente'];;
        inputCedulaCliente.value =  usuario['CedulaCliente'];;
        inputProvincia.value =  usuario['Provincia'];;
        inputCanton.value =  usuario['Canton'];;
        inputDistrito.value =  usuario['Distrito'];;
        inputPrimerNombre.value =  usuario['PrimerNombre'];;
        inputPrimerApellido.value =  usuario['PrimerApellido'];;
        inputTelefonoCliente.value =  usuario['TelefonoCliente'];;
        inputCorreo.value =  usuario['Correo'];;
        inputUbicacion.value =  usuario['Ubicacion'];;
        
            
        // imagen.src = usuario['foto']; //es un elemento tipo img, por eso es con src y no con value
        inputId.value =  usuario['_id'];
      
      }, 100);
    
};

function borrarPersona(){ 
    let id = this.dataset._id;
    borrarPersonaPorId(id);
    listaClientes = obtenerListaClientes();
    imprimirListaClientes();

}

function buscar_por_id(){
    let _id = this.dataset._id;
    // let usuario = obtenerPersonaPorId(_id);

    // // console.log(usuario);
}







