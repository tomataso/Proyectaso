'use strict';

let inputNombre;
let inputApellido;
let inputDireccion;
let inputTelefono;
let inputEmail;
let inputCedula;
let inputCarrera;
let inputMaterias;
let inputEmergNombre;
let inputEmergApellido;
let inputEmergTelefono;

function EstudiantesInit () {
    // moverContenedorPricipal();

    //   // para que el contenedor principal se mueva según se muevan las barras del menú
    // let contenedorPrincipal = document.querySelector('#contenedorPrincipal');

    // if (contenedorPrincipal != undefined) {
    //     contenedorPrincipal.classList.remove('CPpositionOn');
    //     contenedorPrincipal.classList.add('CPpositionOff');
    // }

    let botonRegEstud = document.querySelector('#btnRegEstud');

    if (botonRegEstud != undefined) {
        botonRegEstud.addEventListener('click' , obtenerDatosEstudiante);
    }
    
    let inputFiltro = document.querySelector('#txtFiltro');
    
    
    if (inputFiltro != undefined) {
        inputFiltro.addEventListener('keyup' , filtrarListaEstud);
    }

     inputNombre = document.querySelector('#txtNombre');
     inputApellido = document.querySelector('#txtApellido');
     inputDireccion = document.querySelector('#txtDireccion');
     inputTelefono = document.querySelector('#txtTelefono');
     inputEmail = document.querySelector('#txtEmail');
     inputCedula = document.querySelector('#txtCedula');
     inputCarrera = document.querySelector('#txtCarrera');
     inputMaterias = document.querySelector('#txtMateriasAprob');
     inputEmergNombre = document.querySelector('#txtContactEmergNombre');
     inputEmergApellido = document.querySelector('#txtContactEmergApellido');
     inputEmergTelefono = document.querySelector('#txtContactEmergTelefono');
}

function obtenerDatosEstudiante(){
    
    let infoEstud =[];
    let bError = false;

    let sNombre = inputNombre.value;    
    let sApellido = inputApellido .value;
    let sDireccion = inputDireccion.value; 
    let sTelefono = Number(inputTelefono.value);
    let sEmail = inputEmail.value;
    let sCedula = Number(inputCedula.value); 
    let sCarrera = inputCarrera.value; 
    let sMaterias = inputMaterias.value; 
    let sEmergNombre = inputEmergNombre.value; 
    let sEmergApellido = inputEmergApellido.value; 
    let sEmergTelefono = Number(inputEmergTelefono.value); 

    infoEstud.push(sNombre, sApellido, sDireccion, sTelefono, sEmail, sCedula, sCarrera, sMaterias, sEmergNombre, sEmergApellido, sEmergTelefono);
    
    bError = validarEstudiante();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        let resultado = registrarEstud(infoEstud);
       if (resultado == true){
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        })
        .then(
            function(){
                obtenerPagina ('estudiante/indexTablaEstud.html');
                //window.location.href = "../../html/estudiante/indexTablaEstud.html"
            }
        );

       }

        limpiarFormulario();
    }
    
};

function imprimirListaEstud(){
    let listaEstud = obtenerListaEstud();

    let tbody = document.querySelector('#tblEstud tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstud.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cEmail = fila.insertCell();
        let cCedula = fila.insertCell();


        cNombre.innerHTML = listaEstud[i].Nombre;
        cApellido.innerHTML = listaEstud[i].Apellido;
        cTelefono.innerHTML = listaEstud[i].Telefono;
        cEmail.innerHTML = listaEstud[i].Correo;
        cCedula.innerHTML = listaEstud[i].Cedula;
    }

};

function filtrarListaEstud(){
    let filtro = $("#txtFiltro").val();
    let listaEstud = obtenerListaEstud();
    filtro = filtro.toLowerCase();

    let listaFiltrada = [];

    for(let i = 0; i < listaEstud.length; i++){
        let nombreCompleto = listaEstud[i].Nombre.toLowerCase() + " " + listaEstud[i].Apellido.toLowerCase();

        if(nombreCompleto.includes(filtro)){
            listaFiltrada.push(listaEstud[i]);
        }
    }

    let tbody = document.querySelector('#tblEstud tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaFiltrada.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cEmail = fila.insertCell();
        let cCedula = fila.insertCell();


        cNombre.innerHTML = listaFiltrada[i].Nombre;
        cApellido.innerHTML = listaFiltrada[i].Apellido;
        cTelefono.innerHTML = listaFiltrada[i].Telefono;
        cEmail.innerHTML = listaFiltrada[i].Correo;
        cCedula.innerHTML = listaFiltrada[i].Cedula;
    }

};

function validarEstudiante(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Primer nombre 
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error-input');
        bError = true;
    }else{
        inputNombre.classList.remove('error-input');
    }
    //Validación del Primer Apellido 
    if(inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value)==false) ){
        inputApellido.classList.add('error-input');
        bError = true;
    }else{
        inputApellido.classList.remove('error-input');
    }
    //Validación del correo
    if(inputEmail.value == ''){
        inputEmail.classList.add('error-input');
        bError = true;
    }else{
        inputEmail.classList.remove('error-input');
    }
    //Validación del teléfono
    if(inputTelefono.value == ''){
        inputTelefono.classList.add('error-input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error-input');
    }
    //Validación del Cédula
    if(inputCedula.value == ''){
        inputCedula.classList.add('error-input');
        bError = true;
    }else{
        inputCedula.classList.remove('error-input');
    }

     //Validación del Primer nombre de emergencia
     if(inputEmergNombre.value == '' || (regexSoloLetras.test(inputEmergNombre.value)==false) ){
        inputEmergNombre.classList.add('error-input');
        bError = true;
    }else{
        inputEmergNombre.classList.remove('error-input');
    }
    //Validación del teléfono de emergencia
    if(inputEmergTelefono.value == ''){
        inputEmergTelefono.classList.add('error-input');
        bError = true;
    }else{
        inputEmergTelefono.classList.remove('error-input');
    }
     //Validación de direccion-----------------------------
     if(inputDireccion.value == ''){
        inputDireccion.classList.add('error-input');
        bError = true;
    }else{
        inputDireccion.classList.remove('error-input');
    }

       //Validación de carreras-----------------------------
       if(inputCarrera.value == ''){
        inputCarrera.classList.add('error-input');
        bError = true;
    }else{
        inputCarrera.classList.remove('error-input');
    }

    //Validación de cursos-----------------------------
    if(inputMaterias.value == ''){
        inputMaterias.classList.add('error-input');
        bError = true;
    }else{
        inputMaterias.classList.remove('error-input');
    }

    //Validación de apellido emergencias-----------------------------
    if(inputEmergApellido.value == ''){
        inputEmergApellido.classList.add('error-input');
        bError = true;
    }else{
        inputEmergApellido.classList.remove('error-input');
    }
    
    return bError;
};

function limpiarFormulario(){
    
        inputNombre.value = '';
        inputApellido.value = '';
        inputDireccion.value = '';
        inputTelefono.value = '';
        inputEmail.value = '';
        inputCedula.value = '';
        inputCarrera.value = '';
        inputMaterias.value = '';
        inputEmergNombre.value = '';
        inputEmergApellido.value = '';
        inputEmergTelefono.value = '';   
    }     