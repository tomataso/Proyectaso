'use strict';

let btnGuardarProyecto;
let inputCodigo;
let inputFechaCreacion;
let inputNombreProyecto;
let inputDescripcion;
let inputEstado;
let inputFechaEntrega;
let selectProfesorLider;
let selectProfesorTecnico;
let selectCliente;


let fecha = ftnFechaHoy()[0];
let codigo = ftnGenerarCodigo(obtenerListaProyectos());
let listaProfesores = obtenerListaProfesores();
let listaClientes = obtenerListaClientes();


let gCodigo;
let gFechaCreacion;
let sNombre;    
let sDescripcion;
let gEstado;
let sFechaEntrega;
let optionProfLider;
let sProfLiderNombre;
let sPofLiderId;
let optionProfTecnico;
let sProfTecnicoNombre;
let sProfTecnicoId;
let bDesactivado;
let optionCliente;
let sClienteNombre;
let sClienteId;

function ProyectoRegistrarInit() {

let botonGuardar = document.querySelector('#btnGuardarProyecto');

if (botonGuardar != undefined) {
    botonGuardar.addEventListener('click' , obtenerDatosProyecto);
}


// btnGuardarProyecto.addEventListener('click',function(){
//     obtenerDatosProyecto();    
// });

btnGuardarProyecto = document.querySelector('#btnGuardar');
inputCodigo = document.querySelector('#codigoProyecto');
inputFechaCreacion = document.querySelector('#fechaProyecto');
inputNombreProyecto = document.querySelector('#nombreProyecto');
inputDescripcion = document.querySelector('#descripcionProyecto');
inputEstado = document.querySelector('#estadoProyecto');
inputFechaEntrega = document.querySelector('#fechaEntrega');
selectProfesorLider = document.querySelector('#profesorLider');
selectProfesorTecnico = document.querySelector('#profesorTecnico');
selectCliente = document.querySelector('#clienteProyecto');


window.onload = function(){
    let fecha = ftnFechaHoy()[0];
    let codigo = ftnGenerarCodigo(obtenerListaProyectos());
    let listaProfesores = obtenerListaProfesores();
    let listaClientes = obtenerListaClientes();

    ftnCamposAnnadidos(fecha,codigo);
    ftnCreadorDropProfesor(selectProfesorLider,listaProfesores);
    ftnCreadorDropProfesor(selectProfesorTecnico,listaProfesores);
    ftnCreadorDropCliente(selectCliente,listaClientes);
};

}


//loads------------------------------------------------------
// window.onload = function(){
//     let fecha = ftnFechaHoy()[0];
//     let codigo = ftnGenerarCodigo(obtenerListaProyectos());
//     let listaProfesores = obtenerListaProfesores();
//     let listaClientes = obtenerListaClientes();

//     ftnCamposAnnadidos(fecha,codigo);
//     ftnCreadorDropProfesor(selectProfesorLider,listaProfesores);
//     ftnCreadorDropProfesor(selectProfesorTecnico,listaProfesores);
//     ftnCreadorDropCliente(selectCliente,listaClientes);
// };

//funciones-------------------------------------------------
function obtenerDatosProyecto(){
    let infoProyecto =[];
    let bError = false;

    gCodigo = inputCodigo.value;
    gFechaCreacion = ftnFechaHoy()[1];
    sNombre = inputNombreProyecto.value;    
    sDescripcion = inputDescripcion.value;
    gEstado = inputEstado.value;
    sFechaEntrega = inputFechaEntrega.value;
    optionProfLider = selectProfesorLider.options.selectedIndex;
    sProfLiderNombre = selectProfesorLider.options[optionProfLider].innerHTML;
    sPofLiderId = selectProfesorLider.value;
    optionProfTecnico = selectProfesorTecnico.options.selectedIndex;
    sProfTecnicoNombre = selectProfesorTecnico.options[optionProfTecnico].innerHTML;
    sProfTecnicoId = selectProfesorTecnico.value;
    bDesactivado = false;
    optionCliente = selectCliente.options.selectedIndex;
    sClienteNombre = selectCliente.options[optionCliente].innerHTML;
    sClienteId = selectCliente.value;

    infoProyecto.push(gCodigo,gFechaCreacion,sNombre,sDescripcion,gEstado,sFechaEntrega,sPofLiderId,sProfLiderNombre,sProfTecnicoId,sProfTecnicoNombre,bDesactivado,sClienteId,sClienteNombre);
    
    bError = validarProyecto();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el proyecto',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el proyecto');
    }else{
        registrarProyecto(infoProyecto);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El proyecto se registró adecuadamente',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                obtenerPagina ('proyecto/proyecto_listar.html');
            }
        );
        limpiarFormulario();
    }

    return bError;
};

function validarProyecto(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;

    //Validación nombre del proyecto
    if(inputNombreProyecto.value == '' && (regexSoloLetras.test(inputNombreProyecto.value)==false) ){
        inputNombreProyecto.classList.add('error-input');
        bError = true;
    }else{
        inputNombreProyecto.classList.remove('error-input');
    }
    //Validación de descripcion del proyectos
    if(inputDescripcion.value == '' && (regexLetrasNumeros.test(inputDescripcion.value)==false)){
        inputDescripcion.classList.add('error-input');
        bError = true;
    }else{
        inputDescripcion.classList.remove('error-input');
    }

        //Validación fecha de entrega del proyecto
    if(inputFechaEntrega.value == ''){
        inputFechaEntrega.classList.add('error-input');
        bError = true;
    }else{
        inputFechaEntrega.classList.remove('error-input');
    }

        //Validación profesor líder del proyecto
    if(selectProfesorLider.value == ''){
        selectProfesorLider.classList.add('error-input');
        bError = true;
    }else{
        selectProfesorLider.classList.remove('error-input');
    }

        //Validación profesor técnico del proyecto
    if(selectProfesorTecnico.value == ''){
        selectProfesorTecnico.classList.add('error-input');
        bError = true;
    }else{
        selectProfesorTecnico.classList.remove('error-input');
    }

       //Validación cliente del proyecto
       if(selectCliente.value == ''){
        selectCliente.classList.add('error-input');
        bError = true;
    }else{
        selectCliente.classList.remove('error-input');
    }
  
    return bError;
};

function limpiarFormulario(){
    inputNombreProyecto.value = '';    
    inputDescripcion.value = '';
    inputFechaEntrega.value = '';
};


function ftnCreadorDropProfesor(pElemento,pListaDatos){

    for (let i = 0; i < pListaDatos.length; i++) {
        
        let id = pListaDatos[i]['_id'];
        let nombre = pListaDatos[i]['Nombre'];
        let apellido = pListaDatos[i]['Apellido'];
        let optionElement = document.createElement("option")
        let nodeTexto = document.createTextNode( nombre + " " + apellido);

        optionElement.appendChild(nodeTexto);
        optionElement.setAttribute('value',id);
        pElemento.appendChild(optionElement);
        
    }
};

function ftnCreadorDropCliente(pElemento,pListaDatos){

    for (let i = 0; i < pListaDatos.length; i++) {
        
        let id = pListaDatos[i]['_id'];
        let nombre = pListaDatos[i]['Nombre'];
        let optionElement = document.createElement("option")
        let nodeTexto = document.createTextNode(nombre);

        optionElement.appendChild(nodeTexto);
        optionElement.setAttribute('value',id);
        pElemento.appendChild(optionElement);
        
    }
};

function ftnCamposAnnadidos (pFecha,pCodigo){

    inputFechaCreacion.value = pFecha;
    inputFechaCreacion.setAttribute('disabled',true);

    inputCodigo.value = pCodigo;
    inputCodigo.setAttribute('disabled',true);

    inputEstado.value = "aceptado";
    inputEstado.setAttribute('disabled',true);
};


