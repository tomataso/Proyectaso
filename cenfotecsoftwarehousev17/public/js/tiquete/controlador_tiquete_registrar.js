'use strict'

// eliminar cuando hagamos la integracion
sessionStorage.setItem("UsuarioAutenticado", JSON.stringify({"_id":"5b4d44b967e4930c585faefd","Nombre":"maria","Cedula":"456123","Provincia":"San Jose","Distrito":"San Jose","Canton":"montes de oca","Ubicacion":"san pedro","PrimerNombre":"Juan Carlos","PrimerApellido":"González","Telefono":"88668921","Correo":"123456","Desactivado":false,"Contrasenna":"mZcE0","TipoUsuario":2,}));

let botonRegistrar = document.querySelector('#btnRegistrarTiquete');

botonRegistrar.addEventListener('click' , obtenerDatos);
DatalistProyectosDelUsuario();

let inputCedula = document.querySelector('#txtCedula');
let inputcodigo_tiquete = document.querySelector('#txtcodigo_tiquete');
let inputcodigo_proyecto = document.querySelector('#txtcodigo_proyecto');
let inputdescripcion = document.querySelector('#txtdescripcion');
let inputfecha = document.querySelector('#txtfecha');




function DatalistProyectosDelUsuario () {
    let listaProyectos = obtenerListaProyectos();

    listaProyectos = filtrarProyectosPorUsuario(getUsuarioAutenticado()._id, listaProyectos)
    
    for (let i = 0; i < listaProyectos.length; i++) {


        let option = document.createElement("option");
        option.text = listaProyectos[i]['nombre'];
        option.value = listaProyectos[i]['nombre'];
        let select = document.querySelector("#sltProyectos");
        select.add(option);
   
    }  

    console.log(listaProyectos);
    
}

function filtrarProyectosPorUsuario(idUsuario, listaProyectos){
    let listaProyectosDeUsuario = [];
    for (let i = 0; i < listaProyectos.length; i++) {
       if (listaProyectos[i]['clienteProyecto'][0].idCliente == idUsuario) {
            listaProyectosDeUsuario.push(listaProyectos[i]);
       }        
    }
    return listaProyectosDeUsuario;

}


function obtenerDatos(){
    let infoTiquete =[];
    let bError = false;

    let sCedula = inputCedula.value;
    let scodigo_tiquete = inputcodigo_tiquete.value;
    let scodigo_proyecto = inputcodigo_proyecto.value;
    let ssltProyectos = sltProyectos.value;
    let sdescripcion = inputdescripcion.value;
    let sfecha = inputfecha.value;
    let simagen = imagenUrl;

    let sUsuarioId = getUsuarioAutenticado()._id;
    // let sUsuarioId = getUsuarioAutenticado();

    infoTiquete.push(sCedula, scodigo_tiquete, scodigo_proyecto, ssltProyectos, sdescripcion, sfecha, simagen, sUsuarioId);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el tiquete',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el tiquete');
    }else{
        registrarTiquete(infoTiquete);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El tiquete se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }
    
}

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;


    //Validación de la CedulaJuridica
    if(inputCedula.value == ''){
        inputCedula.classList.add('error-input');
        bError = true;
    }else{
        inputCedula.classList.remove('error-input');
    }

    //Validación del Codigo tiquete
    if(inputcodigo_tiquete.value == '' || (regexSoloNumeros.test(inputcodigo_tiquete.value)==false) ){
        inputcodigo_tiquete.classList.add('error-input');
        bError = true;
    }else{
        inputcodigo_tiquete.classList.remove('error-input');
    }
    
    //Validación del codigo proyecto
    if(inputcodigo_proyecto.value == '' ){
        inputcodigo_proyecto.classList.add('error-input');
        bError = true;
    }else{
        inputcodigo_proyecto.classList.remove('error-input');
    }

     //Validación de la descripcion
     if(inputdescripcion.value == ''){
        inputdescripcion.classList.add('error-input');
        bError = true;
    }else{
        inputdescripcion.classList.remove('error-input');
    }

     //Validación de la fecha
     if(inputfecha.value == ''){
        inputfecha.classList.add('error-input');
        bError = true;
    }else{
        inputfecha.classList.remove('error-input');
    }



    
    return bError;
}

function limpiarFormulario(){
    inputCedula.value = '';    
    inputcodigo_tiquete.value = '';
    inputcodigo_proyecto.value = '';
    sltProyectos.value = '';
    inputdescripcion.value = '';
    inputfecha.value = '';
    document.querySelector('#txtImagen').src = "";
}