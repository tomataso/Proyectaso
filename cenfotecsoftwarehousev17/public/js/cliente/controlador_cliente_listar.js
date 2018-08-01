'use strict';
let tablaClientes;
let inputBuscarCliente;

function initClientes(){
    inputBuscarCliente = document.querySelector('#inputBuscarCliente');
    tablaClientes = document.querySelector('#tblClientes');

    inputBuscarCliente.addEventListener('keyup' , function(){ftnFiltrarListaClientes()});
}

function ListarClientes(){
    let ListaCliente = obtenerListaClientes();
    let tbody = document.querySelector('#tblClientes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaCliente.length; i++){
        
        if(ListaCliente[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaNombreEmpresa = fila.insertCell();
            let celdaNombreContacto = fila.insertCell();
            let celdaTelefonoContacto = fila.insertCell();
            let celdaCorreoContacto = fila.insertCell();

            celdaNombreEmpresa.innerHTML = ListaCliente[i]['Nombre'];
            celdaNombreContacto.innerHTML = ListaCliente[i]['PrimerNombre'] + " " + ListaCliente[i]['PrimerApellido']  ;
            celdaTelefonoContacto.innerHTML = ListaCliente[i]['Telefono'];
            celdaCorreoContacto.innerHTML = ListaCliente[i]['Correo'];

        }
    }

};

function  ftnFiltrarListaClientes (){

    let criterioBusqueda = inputBuscarCliente.value.toUpperCase();
    let filasClientes = tablaClientes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasClientes.length; i++) {    
        datosFila = filasClientes[i];
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


