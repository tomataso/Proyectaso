'use strict';

let inputNombreProfesor;
let inputApellidoProfesor;
let inputCedulaProfesor;
let inputTelefonoProfesor;
let inputCorreoProfesor;
let inputProvinciaProfesor;
let inputCantonProfesor;
let inputDistritoProfesor;
let inputDireccionExactaProfesor;
let inputGAcademicoProfesor;
let inputAExperienciaProfesor;
let inputCImpartidosProfesor;
let inputTipoProfesor; //Como obtener los datos de un selection #txtTipoProfesor

function ProfesorRegistrarInit () {
    let botonRegistrar = document.querySelector('#btnRegistrarProfesor');

    if (botonRegistrar != undefined) {
        botonRegistrar.addEventListener('click', obtenerDatosProfesor);
    }    
    
    inputNombreProfesor = document.querySelector('#txtNombreProfesor');
    inputApellidoProfesor = document.querySelector('#txtApellidoProfesor');
    inputCedulaProfesor = document.querySelector('#txtCedulaProfesor');
    inputTelefonoProfesor = document.querySelector('#txtTelefonoProfesor');
    inputCorreoProfesor = document.querySelector('#txtCorreoProfesor');
    
    inputProvinciaProfesor = document.querySelector('#txtProvinciaProfesor');
    inputCantonProfesor = document.querySelector('#txtCantonProfesor');
    inputDistritoProfesor = document.querySelector('#txtDistritoProfesor');
    inputDireccionExactaProfesor = document.querySelector('#txtDireccionExactaProfesor');
    
    inputGAcademicoProfesor = document.querySelector('#txtGAcademico');
    inputAExperienciaProfesor = document.querySelector('#txtAexperiencia');
    inputCImpartidosProfesor = document.querySelector('#txtCImpartidos');

    inputTipoProfesor =  document.querySelector('#txtTipoProfesor'); //Como obtener los datos de un selection #txtTipoProfesor
}

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

    let sGAcademico = inputGAcademicoProfesor.value;
    let sAexperiencia = Number(inputAExperienciaProfesor.value);
    let sCImpartidos = inputCImpartidosProfesor.value;
    let sTipoProfesor = inputTipoProfesor.value;
    let sDesactivado = false;


    infoProfesor.push(sNombre, sApellido, sCedula, sTelefono, sCorreo, sProvincia, sCanton, sDistrito, sDireccionExacta, sGAcademico, sAexperiencia, sCImpartidos, sTipoProfesor, sDesactivado);

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
                obtenerPagina ('profesor/profesor_listar.html');
            }
        );
        limpiarFormulario();
    }

}

function imprimirListaProfesores() {
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#tblProfesor tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cCorreo = fila.insertCell();
        let cGAcademico = fila.insertCell();

        cNombre.innerHTML = listaProfesores[i]['Nombre'];
        cApellido.innerHTML = listaProfesores[i]['Apellido'];
        cTelefono.innerHTML = listaProfesores[i]['Telefono'];
        cCorreo.innerHTML = listaProfesores[i]['Correo'];
        cGAcademico.innerHTML = listaProfesores[i]['GAcademico'];

    }

};


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




    //Validación del Grado Academico
    if (inputGAcademicoProfesor.value == '') {
        inputGAcademicoProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputGAcademicoProfesor.classList.remove('error-input');
    }

    //Validación del Años de Experiencia
    // Ponerle Validacion de Numeros || (regexSoloNumeros.test(inputTelefonoProfesor.value) == false)
    if (inputAExperienciaProfesor.value == '') {
        inputAExperienciaProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputAExperienciaProfesor.classList.remove('error-input');
    }

    //Validación de Cursos Impartidos
    if (inputCImpartidosProfesor.value == '') {
        inputCImpartidosProfesor.classList.add('error-input');
        bError = true;
    } else {
        inputCImpartidosProfesor.classList.remove('error-input');
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

    inputGAcademicoProfesor.value = '';
    inputAExperienciaProfesor.value = '';
    inputCImpartidosProfesor.value = '';
}








