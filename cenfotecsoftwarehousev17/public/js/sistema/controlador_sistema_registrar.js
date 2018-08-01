// MODIFICADO 13/7/2018 AGREGAR VERSION

'use strict';


const botonRegistrar = document.querySelector('#btnGuardar');
botonRegistrar.addEventListener('click', obtenerDatos);

const inputPeriodo = document.querySelector('#Periodo');
const inputMaxHorasxCuatri = document.querySelector('#MaxHorasxCuatri');
const inputPorcentajeBecaxHoraT = document.querySelector('#PorcentajeBecaxHoraTrabajada');





function obtenerDatos() {

    let infoParametro = [];
    let bError = false;

    let sPeriodo  = inputPeriodo.value;
    let sMaxHorasxCuatri = Number(inputMaxHorasxCuatri.value);
    let sPorcentajeBecaxHoraT = Number(inputPorcentajeBecaxHoraT.value);



    infoParametro.push(sPeriodo, sMaxHorasxCuatri, sPorcentajeBecaxHoraT);

    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el cambio de parametros',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el cambio de parametros');
    } else {
        registrarParametro(infoParametro);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El parametro se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        limpiarFormulario();
    }

}



function validar() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Periodo
    if (inputPeriodo.value == '' || (regexSoloLetras.test(inputPeriodo.value) == false)) {
        inputPeriodo.classList.add('error-input');
        bError = true;
    } else {
        inputPeriodo.classList.remove('error-input');
    }



    //Validación del Maximo de Horas por Cuatrimestre.
    if (inputMaxHorasxCuatri.value == '') {
        inputMaxHorasxCuatri.classList.add('error-input');
        bError = true;
    } else {
        inputMaxHorasxCuatri.classList.remove('error-input');
    }

    //Validación del Porcentaje de Beca por Hora.
    if (inputPorcentajeBecaxHoraT.value == '') {
        inputPorcentajeBecaxHoraT.classList.add('error-input');
        bError = true;
    } else {
        inputPorcentajeBecaxHoraT.classList.remove('error-input');
    }
    
  
    return bError;
}



function limpiarFormulario() {

    inputPeriodo.value = '';
    inputMaxHorasxCuatri.value = '';
    inputPorcentajeBecaxHoraT.value = '';

}








