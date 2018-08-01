'use strict';
let inputBuscarProfesor;
let tablaProfesores;

function initProfesor() {
    inputBuscarProfesor = document.querySelector('#inputBuscarProfesor');
    tablaProfesores = document.querySelector('#tblProfesores');

    inputBuscarProfesor.addEventListener('keyup', function () { filtrarListaProfesores(); });
}
//loads------------------------------------------------------
// window.onload = function(){
//     ListarProfesores();
// };

//funciones--------------------------------------------------
function ListarProfesores(){
    let listaProfesor = obtenerListaProfesores();

    let tbody = document.querySelector('#tblProfesores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesor.length; i++){
        
        if(listaProfesor[i]['Desactivado']){
            continue;
        } else{
        
            let fila = tbody.insertRow();
            let celdaNombre = fila.insertCell();
            let celdaApellido = fila.insertCell();
            let celdaCedula = fila.insertCell();
            let celdaTelefono = fila.insertCell();
            let celdaCorreo = fila.insertCell();

            let celdaTipoProfesor =  fila.insertCell();


            celdaNombre.innerHTML = listaProfesor[i]['Nombre'];
            celdaApellido.innerHTML = listaProfesor[i]['Apellido'];
            celdaCedula.innerHTML = listaProfesor[i]['Cedula'];
            celdaTelefono.innerHTML = listaProfesor[i]['Telefono'];
            celdaCorreo.innerHTML = listaProfesor[i]['Correo'];

            celdaTipoProfesor.innerHTML = listaProfesor[i]['TipoProfesor'];
        }
    }

};



function filtrarListaProfesores(){
    let criterioBusqueda = inputBuscarProfesor.value.toUpperCase();
    let filasProfesores = tablaProfesores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasProfesores.length; i++) {    
        datosFila = filasProfesores[i];
        datos = datosFila.getElementsByTagName('td');
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
