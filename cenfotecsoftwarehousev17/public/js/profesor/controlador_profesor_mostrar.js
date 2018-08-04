'use strict';

const btnEditarProyecto = document.querySelector('#btnEditar');
const btnGuardarProyecto = document.querySelector('#btnGuardar');

const btnVerGradoAcademico = document.querySelector('#btnVerGradoAcademico');
const btnVerCursosImpartidos = document.querySelector('#btnVerCursosImpartidos');


const inputNombreProfesor = document.querySelector('#txtNombreProfesor');
const inputApellidoProfesor = document.querySelector('#txtApellidoProfesor');
const inputCedulaProfesor = document.querySelector('#txtCedulaProfesor');
const inputTelefonoProfesor = document.querySelector('#txtTelefonoProfesor');
const inputCorreoProfesor = document.querySelector('#txtCorreoProfesor');

const inputProvinciaProfesor = document.querySelector('#txtProvinciaProfesor');
const inputCantonProfesor = document.querySelector('#txtCantonProfesor');
const inputDistritoProfesor = document.querySelector('#txtDistritoProfesor');
const inputDireccionExactaProfesor = document.querySelector('#txtDireccionExactaProfesor');

const inputAExperienciaProfesor = document.querySelector('#txtAexperiencia');
const inputTipoProfesor = document.querySelector('#txtTipoProfesor');
const inputContrasennaProfesor = document.querySelector('#txtContrasenna');




function obtenerIdProfesor() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 

function ProfesorMostrarInit () {
    let idProfesor = obtenerIdProfesor();
    ftnMostrarProfesor(idProfesor);
    ftnDeshabilitarCampos();

    let botonVerTitulo = document.querySelector('#btnVerGradoAcademico');
    botonVerTitulo.addEventListener('click', ftnAsignarTitulo);

    let botonVerCursosI = document.querySelector('#btnVerCursosImpartidos');
    botonVerCursosI.addEventListener('click', ftnAsignarCursosI);
  
}

function ftnAsignarTitulo(){
	let id = obtenerIdProfesor();
    // ojo con el path
    window.location.replace('./profesor_asignar_titulos.html?id' + id );
};

function ftnAsignarCursosI(){
	let id = obtenerIdProfesor();
    // ojo con el path
    window.location.replace('./profesor_asignar_cursosI.html?id' + id );
};


function ftnMostrarProyecto (idProfesor){

    let profesorSeleccionado = null;


    proyectos.forEach(element => {
        if (element._id == idProfesor) {
            profesorSeleccionado = element;
        }
    });

    inputNombreProfesor.value = profesorSeleccionado.Nombre;
    inputApellidoProfesor.value = profesorSeleccionado.Apellido;
    inputCedulaProfesor.value = profesorSeleccionado.Cedula;
    inputTelefonoProfesor.value = profesorSeleccionado.Telefono;
    inputCorreoProfesor.value = profesorSeleccionado.Correo;

    inputProvinciaProfesor.value = profesorSeleccionado.Provincia;
    inputCantonProfesor.value = profesorSeleccionado.Canton;
    inputDistritoProfesor.value = profesorSeleccionado.Distrito;
    inputDireccionExactaProfesor.value = profesorSeleccionado.DireccionExacta;

    inputAExperienciaProfesor.value = profesorSeleccionado.Aexperiencia;
    inputTipoProfesor.value = profesorSeleccionado.TipoProfesor;
    inputContrasennaProfesor.value = profesorSeleccionado.Contrasenna;

// Revisar esto
    let imagen = document.createElement('img');
    imagen.src = profesorSeleccionado.FotoPerfilProfesor;
    imagen.classList.add('imageSettings');

   
};

function ftnDeshabilitarCampos (){

    inputNombreProfesor.setAttribute('disabled',true);
    inputApellidoProfesor.setAttribute('disabled',true);
    inputCedulaProfesor.setAttribute('disabled',true);
    inputTelefonoProfesor.setAttribute('disabled',true);
    inputCorreoProfesor.setAttribute('disabled',true);

    inputProvinciaProfesor.setAttribute('disabled',true);
    inputCantonProfesor.setAttribute('disabled',true);
    inputDistritoProfesor.setAttribute('disabled',true);
    inputDireccionExactaProfesor.setAttribute('disabled',true);

    inputAExperienciaProfesor.setAttribute('disabled',true);
    inputTipoProfesor.setAttribute('disabled',true);
    inputContrasennaProfesor.setAttribute('disabled',true);

};


function obtenerDatosProfesor() {

    let infoProfesor = [];
    let bError = false;

    let sNombre = inputNombreProfesor.value;
    let sApellido = inputApellidoProfesor.value;
    let sCedula = inputCedulaProfesor.value;
    let sTelefono = inputTelefonoProfesor.value;
    let sCorreo = inputCorreoProfesor.value;

    let sProvincia = inputProvinciaProfesor.value;
    let sCanton = inputCantonProfesor.value;
    let sDistrito = inputDistritoProfesor.value;
    let sDireccionExacta = inputDireccionExactaProfesor.value;


    let sAexperiencia = Number(inputAExperienciaProfesor.value);

    let sTipoProfesor = inputTipoProfesor.value;
    let sDesactivado = false;


    infoProfesor.push(sNombre, sApellido, sCedula, sTelefono, sCorreo, sProvincia, sCanton, sDistrito, sDireccionExacta, sAexperiencia, sTipoProfesor, sDesactivado);

    bError = validarProfesor();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el profesor',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el profesor');
    } else {
        registrarProfesor(infoProfesor);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Profesor se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
            function(){
                //Revisar no redireciona el path
                obtenerPagina ('profesor/profesor_mostrar');
            }
        );
        limpiarFormulario();
    }

}



function validarProfesor() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Nombre Profesor
    if (inputNombreProfesor.value == '' || (regexSoloLetras.test(inputNombreProfesor.value) == false)) {
        inputNombreProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputNombreProfesor.classList.remove('error-input');
    }

    //Validación del Apellido Profesor
    if (inputApellidoProfesor.value == '' || (regexSoloLetras.test(inputApellidoProfesor.value) == false)) {
        inputApellidoProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputApellidoProfesor.classList.remove('error-input');
    }

    //Validación de la Cedula Profesor
    if (inputCedulaProfesor.value == '') {
        inputCedulaProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputCedulaProfesor.classList.remove('error-input');
    }

    //Validación de la Telefono Profesor
    if (inputTelefonoProfesor.value == '') {
        inputTelefonoProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputTelefonoProfesor.classList.remove('error-input');
    }

    //Validación de la Correo Profesor
    if (inputCorreoProfesor.value == '') {
        inputCorreoProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputCorreoProfesor.classList.remove('error-input');
    }



    //Validación de la Provincia
    if (inputProvinciaProfesor.value == '') {
        inputProvinciaProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputProvinciaProfesor.classList.remove('error-input');
    }



    //Validación de la Canton
    if (inputCantonProfesor.value == '') {
        inputCantonProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputCantonProfesor.classList.remove('error-input');
    }

    //Validación de la Distrito
    if (inputDistritoProfesor.value == '') {
        inputDistritoProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputDistritoProfesor.classList.remove('error-input');
    }

    //Validación de la Direccion Exacta
    if (inputDireccionExactaProfesor.value == '') {
        inputDireccionExactaProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputDireccionExactaProfesor.classList.remove('error-input');
    }


    //Validación del Años de Experiencia
    // Ponerle Validacion de Numeros || (regexSoloNumeros.test(inputTelefonoProfesor.value) == false)

    if (inputAExperienciaProfesor.value == '') {
        inputAExperienciaProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputAExperienciaProfesor.classList.remove('error-input');
    }


        //Validación de Tipo Profesores
        if (inputTipoProfesor.value == '') {
            inputTipoProfesor.classList.add('error-input');
            bError = true;
        } else {
            inputTipoProfesor.classList.remove('error-input');
        }

    return bError;
}



function limpiarFormulario() {

    inputNombreProfesor.value = '';
    inputApellidoProfesor.value = '';
    inputCedulaProfesor.value = '';
    inputTelefonoProfesor.value = '';
    inputCorreoProfesor.value = '';


    inputProvinciaProfesor.value = '';
    inputCantonProfesor.value = '';
    inputDistritoProfesor.value = '';
    inputDireccionExactaProfesor.value = '';

 
    inputAExperienciaProfesor.value = '';
 
}







